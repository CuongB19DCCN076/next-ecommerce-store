import { Product } from "@/types";
import { create } from "zustand";

interface PreviewModal {
    isOpen: boolean;
    data?: Product;
    onOpen: (data: Product) => void;
    onClose: () => void;
}

const usePreviewModal = create<PreviewModal>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: Product) => set({ data, isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export default usePreviewModal;