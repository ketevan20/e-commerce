import Products from '@/components/organisms/Products/Products'
import { getProducts } from '../../lib/api'

type SearchParams = Promise<{
  category?: string
  collection?: string
  page?: string
}>

const page = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { category, collection, page } = await searchParams

  const { data, pagination } = await getProducts({
    category,
    collection,
    page: page ?? 1,
    per_page: 8,
  })

  return (
    <div>
      <Products products={data} pagination={pagination}/>
    </div>
  )
}

export default page