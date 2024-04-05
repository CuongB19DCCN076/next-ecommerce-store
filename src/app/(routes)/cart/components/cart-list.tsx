"use client"

import useCart from "@/hooks/use-cart"
import CartItem from "./cart-item";
import { cn } from "@/lib/utils";
import Summary from "./summary";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import toast from "react-hot-toast";
import emailjs from '@emailjs/browser';

interface CartListProps {
    userId: string | null;
}

const CartList: React.FC<CartListProps> = ({ userId }) => {
    const { user } = useUser();
    const cart = useCart();
    const searchParams = useSearchParams();
    const removeAll = useCart((state) => state.removeAll);

    useEffect(() => {
        if (searchParams.get("vnp_TransactionStatus") && user?.emailAddresses[0].emailAddress) {
            try {
                const fullName = `${user?.firstName} ${user?.lastName}`;
                emailjs.send('service_ys3yzj4', 'template_8laq8c4', {
                    to_name: fullName,
                    from_name: "NHCShop",
                    message: `Bạn đã đặt hàng thành công tại NHCSHOP, sản phẩm của bạn sẽ được giao trong vòng 3-5 ngày tới. Cảm ơn bạn đã tin tưởng shop.`,
                    to_email: user?.emailAddresses[0].emailAddress,
                }, 'ojLajjZ5-Vmd0dT9S')
                    .then(async (result) => {
                        toast.success("Bạn đã đặt hàng thành công!")
                        removeAll();
                    })
                    .catch((error) => {

                    });
            } catch (e) {
                console.log(e)
            }
        }
    }, [removeAll, searchParams, user?.emailAddresses, user?.firstName, user?.lastName])
    return (
        <div className="lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7 mt-12 " >
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
                "mt-4 rounded-lg px-4",
                "sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
            )} >
                <Summary userId={userId} />
            </div>
        </div>
    )
}

export default CartList