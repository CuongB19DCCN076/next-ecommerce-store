"use client"

import createOrder from "@/actions/create-order"
import Button from "@/components/ui/button2"
import Currency from "@/components/ui/currency"
import Loading from "@/components/ui/loading"
import useCart from "@/hooks/use-cart"
import { useLoading } from "@/hooks/use-loading"
import { cn } from "@/lib/utils"
import axios from "axios"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

interface SummaryProps {
    userId: string | null;
}

const Summary: React.FC<SummaryProps> = ({ userId }) => {
    const items = useCart((state) => state.items);
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const router = useRouter();
    const { isOpen, onClose, onOpen } = useLoading();

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price);
    }, 0)

    const onCheckout = async () => {
        if (items.length === 0) {
            toast.error("Chọn ít nhất 1 sản phẩm để mua hàng!")
            return;
        }
        if (name === "" || phone === "" || address === "") {
            toast.error("Vui lòng điền đầy đủ thông tin nhận hàng!")
            return;
        }
        try {
            onOpen();
            const url = await axios.post("https://bookcar-backend-2.onrender.com/api/v1/payment/pay", {
                totalPrice: totalPrice
            });
            if (url?.status === 200) {
                router.push(url?.data);
            }
            // const response = await createOrder({
            //     productIds: items.map((item) => item.id),
            //     name,
            //     phone,
            //     address,
            //     userId
            // });
            // toast.success("Đặt hàng thành công!")
        } catch (error) {
            console.log(error);
            toast.success("Đặt hàng không thành công!")
        } finally {
            onClose();
        }

    }

    return (
        <>
            <Loading isOpen={isOpen} />
            <div className="mb-4 rounded-lg bg-gray-50 px-4 py-6">
                <h2 className="text-lg font-medium text-gray-900">
                    Thông tin nhận hàng
                </h2>
                <div className="mt-6 space-y-4 border-t py-4">
                    <div className="flex items-center">
                        <label className="w-full max-w-32 text-base font-medium text-gray-900">
                            Tên người nhận:
                        </label>
                        <input value={name} onChange={(e) => setName(e.target.value)} className="border-2 rounded px-2 py-1 ml-2" />
                    </div>
                    <div className="flex items-center">
                        <label className="w-full max-w-32 text-base font-medium text-gray-900">
                            Số điện thoại:
                        </label>
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} className="border-2 rounded px-2 py-1 ml-2" />
                    </div>
                    <div className="flex items-center">
                        <label className="w-full max-w-32 text-base font-medium text-gray-900">
                            Địa chỉ:
                        </label>
                        <input value={address} onChange={(e) => setAddress(e.target.value)} className="border-2 rounded px-2 py-1 ml-2" />
                    </div>
                </div>
            </div>
            <div className={cn(
                "mt-4 rounded-lg bg-gray-50 px-4 py-6",
            )} >
                <h2 className="text-lg font-medium text-gray-900">
                    Tóm tắt đơn hàng
                </h2>
                <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                        <div className="text-base font-medium text-gray-900">
                            Thanh toán
                        </div>
                        <div className="text-base font-medium text-gray-900">
                            Qua VNPAY
                        </div>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-200 py-4 ">
                        <div className="text-base font-medium text-gray-900">
                            Tổng tiền đơn hàng
                        </div>
                        <Currency value={totalPrice} />
                    </div>
                </div>
                <Button onClick={() => onCheckout()} className="w-full mt-6">
                    Check out
                </Button>
            </div>
        </>
    )
}

export default Summary