import { create } from "zustand";

interface CartStore {
  items: any[];
  addToCart: (item: any) => void;
  removeFromCart: (item: any) => void;
}

export const useCartStore = create<CartStore>()((set, get) => ({
  items: [],
  addToCart: (item: any) => set({ items: [...get().items, item] }),
  removeFromCart: (item: any) =>
    set({ items: get().items.filter((i) => i.id !== item.id) }),
}));
