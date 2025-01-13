"use client";

import { SaladIcon } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { useCartStore } from "@/src/store/cart";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/src/lib/api";

type Props = {
  businessId: number;
  productId: number;
};

export const ProductCardLarge = ({ productId, businessId }: Props) => {
  const { items, addToCart, removeFromCart } = useCartStore();

  const { data } = useQuery({
    queryKey: ["business", businessId],
    queryFn: () => api.getBusinessDetails(businessId),
  });

  const item = data?.data.items.find((item: any) => item.id === productId);

  if (!data || !item) return null;

  return (
    <>
      <div className="p-4">
        <div className="flex justify-center relative mb-4 h-[200px] items-center">
          <SaladIcon width={150} height={150} strokeWidth={1} stroke="gray" />
        </div>
        <div className="flex items-center justify-between pt-1">
          <h3 className="font-bold text-md">{item.name}</h3>
          <div className="font-bold">{item.price} ₸</div>
        </div>
        <p className="text-sm text-gray-500">{item.description}</p>
      </div>
      <div className="fixed bottom-0 p-4 w-full">
        {!items.some((i) => i.id === item.id) ? (
          <Button size="lg" className="w-full" onClick={() => addToCart(item)}>
            В корзину
          </Button>
        ) : (
          <Button
            size="lg"
            className="w-full"
            onClick={() => removeFromCart(item)}
          >
            Убрать с корзины
          </Button>
        )}
      </div>
    </>
  );
};
