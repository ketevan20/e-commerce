import ProductsSkeleton from '@/components/atoms/ProductsSkeleton/ProductsSkeleton'
import Products from '@/components/organisms/Products/Products'
import { Suspense } from 'react'

const page = async () => {
  return (
    <Products />
  )
}

export default page