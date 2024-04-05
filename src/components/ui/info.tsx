"use client"
import { Product } from "@/types"
import React from "react"
import Currency from "./currency"
import Button from "./button2"
import { ShoppingCart } from "lucide-react"
import useCart from "@/hooks/use-cart"

interface InfoProps {
    data: Product
}

const Info: React.FC<InfoProps> = ({
    data
}) => {
    const cart = useCart();
    return (
        <div>
            <h1 className="text-3xl font-bold text-muted-foreground">
                {data?.name}
            </h1>
            <div className="mt-3 items-end justify-between">
                <p className="text-2xl to-gray-900">
                    <Currency value={data?.price} />
                </p>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-muted-foreground">
                        Size:
                    </h3>
                    <div className="text-muted-foreground">
                        {data?.size?.name}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-muted-foreground">
                        Color:
                    </h3>
                    <div
                        className="h-6 w-6 rounded-full border border-gray-600"
                        style={{ backgroundColor: data?.color?.value }}
                    />
                </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button onClick={() => cart.addItem(data)} className="flex items-center gap-x-3">
                    Thêm vào giỏ hàng
                    <ShoppingCart size={20} />
                </Button>
            </div>
            <div className="mt-10 block lg:hidden">
                <iframe width="320" height="200" src={"https://www.youtube.com/embed/t9EJVsJBKyo?si=mx6h2YxxBzaRypnR"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="mt-10 hidden lg:block">
                <iframe width="400" height="235" src={"https://www.youtube.com/embed/t9EJVsJBKyo?si=mx6h2YxxBzaRypnR"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default Info