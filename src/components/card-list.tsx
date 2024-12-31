"use client";

import { useCartStore } from "@/src/store/cart";
import { Button } from "@/src/components/ui/button";

export const CardList = () => {
  const { items } = useCartStore();
  return (
    <div>
      <h2 className="p-4 font-bold text-2xl">Корзина</h2>
      {items?.map((item, index) => (
        <div key={index} className="p-4 flex justify-between">
          <span>{item.name}</span>
          <span className="font-bold">{item.price} ₸</span>
        </div>
      ))}
      <div className="fixed bottom-20 p-4 w-full">
        <Button size="lg" className="w-full">
          {items.length ? "Заказать" : "Добавьте в корзину"}
        </Button>
      </div>
    </div>
  );
};
