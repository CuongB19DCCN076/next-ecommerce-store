import getProduct from "@/actions/get-product"
import getProducts from "@/actions/get-products"
import ProductList from "@/components/product-list"
import Container from "@/components/ui/container"
import Gallery from "@/components/ui/gallery"
import Info from "@/components/ui/info"
import { cn } from "@/lib/utils"

interface ProductPageProps {
    params: {
        productId: string
    }
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
    const product = await getProduct(params.productId);
    const suggestedProducts = await getProducts({
        categoryId: product?.category?.id
    })
    return (
        <div >
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className={cn(
                        "lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8"
                    )}>
                        {/* Gallery */}
                        <div>
                            <Gallery images={product?.images} />
                        </div>
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            {/* Info */}
                            <Info data={product} />
                        </div>
                    </div>
                    <hr className="my-10" />
                    <ProductList title="Sản phẩm có liên quan" items={suggestedProducts} />
                </div>
            </Container>
        </div>
    )
}

export default ProductPage