'use client'
import LoadProducts from '@/components/molecules/LoadProducts/LoadProducts'
import ProductsGrid from '@/components/molecules/ProductsGrid/ProductsGrid'
import React, { useState } from 'react'

const Products = ({ products, pagination }: { products: any[], pagination: any }) => {
  const [allProducts, setAllProducts] = useState(products)

  return (
    <div>
      <ProductsGrid products={allProducts} />
      {pagination.has_more && <LoadProducts setAllProducts={setAllProducts} />}
    </div>
  )
}

export default Products