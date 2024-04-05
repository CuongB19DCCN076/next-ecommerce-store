"use client"
import ProductList from '@/components/product-list'
import useFavourite from '@/hooks/use-favourite'
import React from 'react'

const MainFavourite = () => {
    const { items } = useFavourite();
    return (
        <div>
            <ProductList title={"Sản Phẩm Yêu Thích"} items={items} />
        </div>
    )
}

export default MainFavourite