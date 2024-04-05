"use client"
import { Product } from "@/types"
import Image from "next/image"
import IconButton from "./icon-button"
import { Expand, Heart, ShoppingCart } from "lucide-react"
import Currency from "./currency"
import { useRouter } from "next/navigation"
import { useLoading } from "@/hooks/use-loading"
import { MouseEventHandler } from "react"
import usePreviewModal from "@/hooks/use-preview-modal"
import useCart from "@/hooks/use-cart"
import toast from "react-hot-toast"
import useFavourite from "@/hooks/use-favourite"

interface ProductCardProps {
    data: Product
}

const ProductCard: React.FC<ProductCardProps> = ({
    data
}) => {
    const { onClose, onOpen } = useLoading();
    const { changeItem, items } = useFavourite();
    const previewModal = usePreviewModal();
    const router = useRouter();
    const cart = useCart();
    const check = items.find((item) => item.id === data.id);
    const handleClick = async () => {
        onOpen();
        router.push(`/product/${data?.id}`)
        onClose();
    }

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        previewModal.onOpen(data);
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        cart.addItem(data);
    }

    const onAddToFavourite: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        changeItem(data);
    }
    return (
        <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 product ">
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                {/* Image */}
                <Image
                    fill
                    src={data?.images?.[0]?.url}
                    alt="Image"
                    className="aspect-square object-cover rounded-md"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full right-2 py-2">
                    <div className="flex justify-end">
                        <IconButton
                            onClick={onAddToFavourite}
                            icon={<Heart size={20} className={`${check ? "text-red-700" : "text-black"}`} strokeWidth={`${check ? "5px" : "3px"}`} />}
                        />
                    </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={onPreview}
                            icon={<Expand size={20} className="text-gray-600" />}
                        />
                        <IconButton
                            onClick={onAddToCart}
                            icon={<ShoppingCart size={20} className="text-gray-600" />}
                        />
                    </div>
                </div>
            </div>
            {/* description */}
            <div>
                <p className="font-semibold text-lg whitespace-nowrap overflow-hidden text-ellipsis text-black">
                    {data.name}
                </p>
                <p className="text-sm text-gray-500">
                    {data?.category?.name}
                </p>
            </div>
            {/* price */}
            <div className="flex items-center justify-between">
                <Currency value={data?.price} />
            </div>
        </div>
    )
}

export default ProductCard