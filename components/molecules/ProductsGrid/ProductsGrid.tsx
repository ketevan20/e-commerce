import ProductCard from '@/components/atoms/ProductCard/ProductCard'
import React from 'react'

const ProductsGrid = ({ products }: { products: any[] }) => {
  return (
    <div className='grid gap-6 grid-cols-4'>
      {products.map((product) => (
        <ProductCard key={product.product_id} product={product} />
      ))}
    </div>
  )
}

export default ProductsGrid