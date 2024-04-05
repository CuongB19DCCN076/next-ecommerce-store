"use client"

import useCart from "@/hooks/use-cart";
import { Heart, ShoppingBag } from "lucide-react"
import { useEffect, useState } from "react"
import Button from "@/components/ui/button2";
import { useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import Theme from "./ui/theme";
import { useTheme } from "next-themes";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from "next/link";
const NavbarAction = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const { theme } = useTheme();
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
            <Theme />
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Link href={"/favourite"}>
                            <Heart />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Yêu thích</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <Button onClick={() => router.push("/cart")} className={`flex items-center rounded-full ${theme === 'light' ? "bg-black text-white" : "bg-white text-black"} px-4 py-2`}>
                <ShoppingBag size={20} />
                <span className="ml-2 text-sm font-medium">
                    {cart.items.length}
                </span>
            </Button>
            <UserButton afterSignOutUrl="/" />
        </div>
    )
}

export default NavbarAction