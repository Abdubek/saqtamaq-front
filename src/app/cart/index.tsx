import {
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  useIonToast,
} from "@ionic/react";
import { useCartStore } from "../../stores/cart.ts";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../shared/api";

export function CartPage() {
  const [present] = useIonToast();
  const { items, clearCart } = useCartStore();

  const { mutate } = useMutation({
    mutationFn: api.transactions.createTransaction,
    onSuccess: () => {
      clearCart();
      present({
        message: "Ваш заказ сделан",
        duration: 3000,
        position: "top",
      });
    },
  });

  const handleOrder = () => {
    mutate({
      business_id: 1,
      items,
    });
  };

  return (
    <>
      <IonHeader mode="ios">
        <IonToolbar>
          <IonTitle>Корзина</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="flex flex-col justify-between h-full">
          <div>
            {items.map((item, index) => (
              <div key={index} className="py-4 flex justify-between">
                <span>
                  {index + 1}. {item.product.name}
                </span>
                <div>
                  <span className="font-bold">
                    {Number(item.product.price) * item.selected_quantity} тг.
                  </span>
                  &nbsp;
                  <span className="text-xs">
                    ({item.selected_quantity} шт.)
                  </span>
                </div>
              </div>
            ))}
          </div>

          <IonButton mode="ios" className="w-full" onClick={handleOrder}>
            Заказать
          </IonButton>
        </div>
      </IonContent>
    </>
  );
}
