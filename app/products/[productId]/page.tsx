import ProductDetailsSkeleton from '@/components/atoms/ProductDetailsSkeleton/ProductDetailSkeleton'
import Product from '@/components/organisms/Product/Product'
import React, { Suspense } from 'react'

const page = () => {
  
  return (
    <Suspense fallback={<ProductDetailsSkeleton />}>
      <Product />
    </Suspense>
  )
}

export default page