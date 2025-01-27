import { create } from "zustand";
import { BusinessItem } from "../shared/api/business.ts";

interface TransactionItem {
  food_item_id: number;
  selected_quantity: number;
  product: BusinessItem;
}

interface CartStore {
  items: Array<TransactionItem>;
  addToCart: (item: TransactionItem) => void;
  removeFromCart: (item: TransactionItem) => void;
  changeQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()((set, get) => ({
  items: [],
  addToCart: (item) => set({ items: [...get().items, item] }),
  removeFromCart: (item) =>
    set({
      items: get().items.filter((i) => i.food_item_id !== item.food_item_id),
    }),
  changeQuantity: (itemId, quantity) => {
    if (quantity === 0) {
      set({
        items: get().items.filter((i) => i.food_item_id !== itemId),
      });
    } else {
      set({
        items: get().items.map((item) => ({
          ...item,
          selected_quantity:
            item.food_item_id === itemId ? quantity : item.selected_quantity,
        })),
      });
    }
  },
  clearCart: () => {
    set({
      items: [],
    });
  },
}));
