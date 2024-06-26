"use client"
import { formatter } from "@/lib/utils";
import { useEffect, useState } from "react"

interface CurrencyProps {
    value?: string | number
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    useEffect(() => {
        setIsMounted(true);
    }, [])
    if (!isMounted) {
        return null;
    }
    return (
        <div className="font-semibold text-red-500 mt-2">
            {formatter.format(Number(value))}
        </div>
    )
}

export default Currency