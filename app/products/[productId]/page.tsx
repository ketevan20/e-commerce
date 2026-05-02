import Product from '@/components/organisms/Product/Product'
import React, { Suspense } from 'react'

const page = () => {
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Product />
    </Suspense>
  )
}

export default page