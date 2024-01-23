"use client"
import { Product } from "@/types"
import NoResults from "@/components/ui/no-results"
import { cn } from "@/lib/utils"
import ProductCard from "@/components/ui/product-card"
import { useLoading } from "@/hooks/use-loading"
import Loading from "./ui/loading"

interface ProductListProps {
    title: string
    items: Product[]
}

const ProductList: React.FC<ProductListProps> = ({
    title,
    items
}) => {
    const { isOpen } = useLoading();
    return (
        <>
            <Loading isOpen={isOpen} />
            <div className="space-y-4">
                <h3 className="font-bold text-3xl">
                    {title}
                    {items.length === 0 && <NoResults />}
                </h3>
                <div className={cn(
                    "grid grid-cols-1 gap-4",
                    "sm:grid-cols-2",
                    "md:grid-cols-3",
                    "lg:grid-cols-4"
                )}>
                    {items.map((item) => (
                        <div key={item.id + "1"}>
                            <ProductCard data={item} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductList