import Products from '@/components/organisms/Products/Products'
import { getProducts } from '../../lib/api'

type SearchParams = Promise<{
  category?: string
  collection?: string
  page?: string
}>

const page = async ({ searchParams }: { searchParams: any }) => {
  return (
    <div>
      <Products searchParams={searchParams} />
    </div>
  )
}

export default page