"use client"

import useCart from "@/hooks/use-cart"
import CartItem from "./cart-item";
import { cn } from "@/lib/utils";
import Summary from "./summary";

interface CartListProps {
    userId: string | null;
}

const CartList: React.FC<CartListProps> = ({ userId }) => {
    const cart = useCart();

    return (
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
                {cart.items.length === 0 && (
                    <p className="text-neutral-500">
                        Không có mặt hàng nào trong giỏ hàng
                    </p>
                )}
                <ul>
                    {cart.items.map((item) => (
                        <CartItem
                            key={item.id + "1"}
                            data={item}
                        />
                    ))}
                </ul>
            </div>
            <div className={cn(
                "mt-12 rounded-lg px-4",
                "sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
            )} >
                <Summary userId={userId} />
            </div>
        </div>
    )
}

export default CartList