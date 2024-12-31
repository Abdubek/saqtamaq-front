"use client";

import { RocketIcon, SaladIcon } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { useCartStore } from "@/src/store/cart";

type Props = {
  data: any;
};

export const ProductCard = ({ data }: Props) => {
  const { items, addToCart, removeFromCart } = useCartStore();
  return (
    <Link href={`/home/${data.id}`} className="rounded-md shadow">
      <div className="w-[200px] h-[200px] flex items-center justify-center relative shadow-inner rounded">
        <SaladIcon width={100} height={100} strokeWidth={1} stroke="gray" />
      </div>
      <div className="p-2 border-t flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-md">{data.name}</h3>
          <div className="font-bold">{data.price} ₸</div>
        </div>
        <p className="text-sm text-gray-500 line-clamp-1">{data.description}</p>
        {!items.some((i) => i.id === data.id) ? (
          <Button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(data);
            }}
          >
            В корзину
          </Button>
        ) : (
          <Button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              removeFromCart(data);
            }}
          >
            Убрать с корзины
          </Button>
        )}
        <div className="flex items-center gap-2 text-sm text-primary">
          <RocketIcon width={16} height={16} />
          <span>Доставим за 60 минут</span>
        </div>
      </div>
    </Link>
  );
};
