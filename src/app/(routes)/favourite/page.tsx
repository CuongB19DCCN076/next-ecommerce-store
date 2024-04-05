import getProducts from '@/actions/get-products'
import ProductList from '@/components/product-list'
import Container from '@/components/ui/container'
import React from 'react'
import MainFavourite from './components/main'

const FavouritePage = async () => {
    return (
        <Container>
            <div className='min-h-screen p-8 w-full'>
                {/* <div className='w-full text-start text-3xl font-semibold text-muted-foreground'>
                    Sản Phẩm Yêu Thích
                </div> */}
                <MainFavourite />
            </div>
        </Container>
    )
}

export default FavouritePage