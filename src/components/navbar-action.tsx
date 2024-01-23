"use client"

import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react"
import { useEffect, useState } from "react"
import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

const NavbarAction = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    useEffect(() => {
        setIsMounted(true);
    }, [])

    const router = useRouter();
    const cart = useCart();

    if (!isMounted) {
        return null;
    }

    return (
        <div className="flex items-center gap-x-4" style={{ marginLeft: "auto" }}>
            <Button onClick={() => router.push("/cart")} className="flex items-center rounded-full bg-black px-4 py-2">
                <ShoppingBag size={20} color="white" />
                <span className="ml-2 text-sm font-medium text-white">
                    {cart.items.length}
                </span>
            </Button>
            <UserButton afterSignOutUrl="/" />
        </div>
    )
}

export default NavbarAction