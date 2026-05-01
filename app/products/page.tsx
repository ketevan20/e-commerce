import Products from '@/components/organisms/Products/Products'
import { Suspense } from 'react'

const page = async () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Products />
    </Suspense>
  )
}

export default page