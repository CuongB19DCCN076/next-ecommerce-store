import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Product } from "@/types";

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: String) => void;
  removeAll: () => void;
}

const useCart = create(
    persist<CartStore>(
        (set, get) => ({
            items: [],
            addItem: (data: Product) => {
                const currentItems = get().items;
                const existingItem = currentItems.find((item) => item.id === data.id);

                if(existingItem) {
                    return toast("Sản phẩm đã được thêm vào giỏ hàng.");
                }

                set({items: [...get().items, data]});
                toast.success("Sản phẩm đã xóa khỏi giỏ hàng.");
            },
            removeItem:(id: String) => {
              set({items: [...get().items.filter((item) => item.id !== id)] })  
            },
            removeAll: () => {
                set({ items: []})
            }
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => localStorage),
        },
    ),
)

export default useCart;
