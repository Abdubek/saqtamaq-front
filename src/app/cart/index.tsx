import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonText,
  IonTitle,
  IonToolbar,
  useIonToast,
} from "@ionic/react";
import { TransactionItem, useCartStore } from "../../stores/cart.ts";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../shared/api";
import { add, remove } from "ionicons/icons";
import { groupBy } from "../../shared/libs/groupBy.ts";

export function CartPage() {
  const [present] = useIonToast();
  const { items, clearCart } = useCartStore();

  const { mutateAsync } = useMutation({
    mutationFn: api.transactions.createTransaction,
    onSuccess: () => {
      present({
        message: "Ваш заказ сделан",
        duration: 3000,
        position: "top",
      });
      clearCart();
    },
  });

  const handleOrder = () => {
    const groupedItems = groupBy(items, (item) => item.business_id);
    Object.entries(groupedItems).forEach(([id, items]) => {
      mutateAsync({
        business_id: Number(id),
        items,
      });
    });
  };

  const total = items.reduce((totalPrice, item) => {
    return totalPrice + Number(item.product.price) * item.selected_quantity;
  }, 0);

  return (
    <>
      <IonHeader mode="ios">
        <IonToolbar>
          <IonTitle>Корзина</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {items.length ? (
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex justify-between">
                <div className="font-bold">Общий: </div>
                <div>{total} тг</div>
              </div>
              {items.map((item, index) => (
                <CartItem key={index} data={item} />
              ))}
            </div>

            <IonButton mode="ios" className="w-full" onClick={handleOrder}>
              Заказать
            </IonButton>
          </div>
        ) : (
          <div className="h-full flex flex-col text-center items-center justify-center">
            <IonText>
              <h2>Ваша корзина пуста</h2>
            </IonText>
            <IonText>
              <span className="text-gray-500 text-sm mt-3 block">
                Похоже, вы еще ничего не добавили в корзину. Начните с главной
                страницы, чтобы найти то, что вам понравится.
              </span>
            </IonText>
          </div>
        )}
      </IonContent>
    </>
  );
}

function CartItem({ data }: { data: TransactionItem }) {
  const { items, changeQuantity } = useCartStore();

  const inCartItem = items.find(
    (item) => item.food_item_id === data.food_item_id,
  );

  return (
    <div className="py-4 flex justify-between">
      <div>
        <div>{data.product.name}</div>
        <span className="font-bold">
          {Number(data.product.price) * data.selected_quantity} тг.
        </span>
      </div>
      {inCartItem && (
        <div className="flex gap-2 items-center">
          <IonButton
            mode="ios"
            size="small"
            fill="outline"
            slot="end"
            aria-label="Remove"
            onClick={() => {
              changeQuantity(
                data.food_item_id,
                inCartItem.selected_quantity - 1,
              );
            }}
          >
            <IonIcon
              mode="ios"
              slot="icon-only"
              icon={remove}
              aria-hidden="true"
            />
          </IonButton>
          <IonText>{inCartItem.selected_quantity} шт.</IonText>
          <IonButton
            mode="ios"
            size="small"
            fill="outline"
            slot="end"
            aria-label="Add"
            onClick={() => {
              changeQuantity(
                data.food_item_id,
                inCartItem.selected_quantity + 1,
              );
            }}
          >
            <IonIcon
              mode="ios"
              slot="icon-only"
              icon={add}
              aria-hidden="true"
            />
          </IonButton>
        </div>
      )}
    </div>
  );
}
