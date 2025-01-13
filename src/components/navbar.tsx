"use client";

import {
  CircleUserIcon,
  ClipboardIcon,
  HouseIcon,
  ShoppingCartIcon,
} from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/src/store/cart";

export const Navbar = () => {
  const { items } = useCartStore();
  return (
    <div className="fixed left-0 bottom-0 w-full">
      <div className="shadow-lg mx-auto max-w-[390px] flex justify-between bg-white">
        <Link href="/home" className="p-4 flex flex-col items-center gap-1">
          <HouseIcon />
          <span className="text-xs">Главная</span>
        </Link>
        <Link href="/cart" className="p-4 flex flex-col items-center gap-1">
          <ShoppingCartIcon />
          <span className="text-xs">Корзина ({items.length || 0})</span>
        </Link>
        <Link href="/orders" className="p-4 flex flex-col items-center gap-1">
          <ClipboardIcon />
          <span className="text-xs">Заказы</span>
        </Link>
        <Link href="/profile" className="p-4 flex flex-col items-center gap-1">
          <CircleUserIcon />
          <span className="text-xs">Профиль</span>
        </Link>
      </div>
    </div>
  );
};
