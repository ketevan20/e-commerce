'use client'
import ProductsSkeleton from '@/components/atoms/ProductsSkeleton/ProductsSkeleton'
import FilterProducts from '@/components/molecules/FilterProducts/FilterProducts'
import LoadProducts from '@/components/molecules/LoadProducts/LoadProducts'
import ProductsGrid from '@/components/molecules/ProductsGrid/ProductsGrid'
import { getProducts } from '@/lib/api'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const Products = () => {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const collection = searchParams.get('collection')

  const [isLoading, setIsLoading] = useState(true)
  const [allProducts, setAllProducts] = useState<any[]>([])
  const [pagination, setPagination] = useState<any>(null)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setIsLoading(true)
    setAllProducts([])
    setPagination(null)
    setCurrentPage(1)

    getProducts({ category, collection, page: 1, per_page: 8 })
      .then(({ data, pagination }) => {
        setAllProducts(data)
        setPagination(pagination)
      })
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false))
  }, [category, collection])

  useEffect(() => {
    if (currentPage === 1) return

    getProducts({ category, collection, page: currentPage, per_page: 8 })
      .then(({ data, pagination }) => {
        setAllProducts(prev => [...prev, ...data])
        setPagination(pagination)
      })
      .catch(err => console.error(err))
  }, [currentPage])

  if (isLoading) return <ProductsSkeleton />

  return (
    <div className="px-6 md:px-10 mb-24">
      <FilterProducts />
      <ProductsGrid products={allProducts} />
      {pagination?.has_more && (<LoadProducts setCurrentPage={setCurrentPage} />)}
    </div>
  )
}

export default Products