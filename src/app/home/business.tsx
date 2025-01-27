import type { Business, BusinessItem } from "../../shared/api/business";
import { IonButton, IonIcon, IonText } from "@ionic/react";
import { add, remove, restaurantOutline } from "ionicons/icons";
import { useCartStore } from "../../stores/cart.ts";

type Props = {
  data: Business;
};

export function Business({ data }: Props) {
  return (
    <>
      <h3 className="text-md font-bold capitalize">{data?.name}</h3>
      <div className="text-sm capitalize text-gray-500">{data?.location}</div>
      <div className="overflow-x-auto flex py-4 gap-4">
        {data?.items.map((item, index: number) => (
          <ProductItem key={index} data={item} />
        ))}
      </div>
    </>
  );
}

function ProductItem({ data }: { data: BusinessItem }) {
  const { items, addToCart, changeQuantity } = useCartStore();

  const inCartItem = items.find((item) => item.food_item_id === data.id);

  const handleAdd = () => {
    addToCart({
      food_item_id: data.id,
      selected_quantity: 1,
      product: data,
    });
  };

  return (
    <div>
      <div className="w-[175px] h-[175px] flex items-center justify-center relative shadow-inner rounded">
        <IonIcon icon={restaurantOutline} size="large" color="secondary" />
      </div>
      <div className="p-2 border-t border-gray-100 flex flex-col gap-2">
        <div className="flex items-start justify-between h-[48px]">
          <h6 className="text-xs mt-0 line-clamp-2">{data.name}</h6>
          <div className="font-bold whitespace-nowrap">{data.price} ₸</div>
        </div>
        {inCartItem ? (
          <div className="flex justify-between">
            <IonButton
              mode="ios"
              size="small"
              fill="outline"
              slot="end"
              aria-label="Remove"
              onClick={() => {
                changeQuantity(data.id, inCartItem.selected_quantity - 1);
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
                changeQuantity(data.id, inCartItem.selected_quantity + 1);
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
        ) : (
          <IonButton mode="ios" size="small" onClick={handleAdd}>
            Добавить
          </IonButton>
        )}
      </div>
    </div>
  );
}
