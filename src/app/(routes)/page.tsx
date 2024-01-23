import getBillboards from '@/actions/get-billboard'
import getProducts from '@/actions/get-products'
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list'
import Container from '@/components/ui/container'
import { cn } from '@/lib/utils'
import React from 'react'

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true })
    const billboards = await getBillboards('7bce9543-1b9d-4349-ae5d-b6ddef439359');
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboards} />
                <div className={cn(
                    'flex flex-col gap-y-8 px-4 ',
                    'sm:px-6',
                    'lg:px-8'
                )}>
                    <ProductList title={"Sản phẩm nổi bật"} items={products} />
                </div>
            </div>
        </Container>
    )
}

export default HomePage