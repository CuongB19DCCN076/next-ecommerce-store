import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Product } from "@/types";

interface FavouriteStore {
  items: Product[];
  changeItem: (data: Product) => void;
//   removeAll: () => void;
}

const useFavourite = create(
    persist<FavouriteStore>(
        (set, get) => ({
            items: [],
            changeItem: (data: Product) => {
                const currentItems = get().items;
                const existingItem = currentItems.find((item) => item.id === data.id);

                if(existingItem) {
                    set({items: currentItems.filter((item) => {
                        return item.id !== data.id;
                    })})
                    return toast.success("Sản phẩm đã được xóa khỏi danh sách yêu thích.");
                }

                set({items: [...get().items, data]});
                toast.success("Đã thêm sản phẩm vào danh sách yêu thích.");
            },
            // removeItem:(id: String) => {
            //   set({items: [...get().items.filter((item) => item.id !== id)] })  
            //   toast.success("Sản phẩm đã được xóa khỏi danh sách yêu thích.");
            // },
            // removeAll: () => {
            //     set({ items: []})
            // }
        }),
        {
            name: 'favourite-storage',
            storage: createJSONStorage(() => localStorage),
        },
    ),
)

export default useFavourite;
