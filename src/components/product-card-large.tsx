"use client";

import { SaladIcon } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { useCartStore } from "@/src/store/cart";

type Props = {
  data: any;
};

export const ProductCardLarge = ({ data }: Props) => {
  const { items, addToCart, removeFromCart } = useCartStore();

  return (
    <>
      <div className="p-4">
        <div className="flex justify-center relative mb-4 h-[200px] items-center">
          <SaladIcon width={150} height={150} strokeWidth={1} stroke="gray" />
        </div>
        <div className="flex items-center justify-between pt-1">
          <h3 className="font-bold text-md">{data.name}</h3>
          <div className="font-bold">{data.price} ₸</div>
        </div>
        <p className="text-sm text-gray-500">{data.description}</p>
      </div>
      <div className="fixed bottom-0 p-4 w-full">
        {!items.some((i) => i.id === data.id) ? (
          <Button size="lg" className="w-full" onClick={() => addToCart(data)}>
            В корзину
          </Button>
        ) : (
          <Button
            size="lg"
            className="w-full"
            onClick={() => removeFromCart(data)}
          >
            Убрать с корзины
          </Button>
        )}
      </div>
    </>
  );
};
