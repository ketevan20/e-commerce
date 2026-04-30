'use client'
import LoadProducts from '@/components/molecules/LoadProducts/LoadProducts'
import ProductsGrid from '@/components/molecules/ProductsGrid/ProductsGrid'
import { getProducts } from '@/lib/api'
import { useEffect, useRef, useState } from 'react'

const Products = ({ searchParams }: { searchParams: any }) => {
  const [allProducts, setAllProducts] = useState<any[]>([])
  const [pagination, setPagination] = useState<any>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const isFirstRender = useRef(true)

  useEffect(() => {
    setAllProducts([])
    setCurrentPage(1)
    isFirstRender.current = true
  }, [searchParams.category, searchParams.collection])

  useEffect(() => {
    getProducts({ ...searchParams, page: currentPage, per_page: 8 })
      .then(({ data, pagination }) => {
        setAllProducts(prev => [...prev, ...data])
        setPagination(pagination)
      })
  }, [currentPage])

  return (
    <div>
      <ProductsGrid products={allProducts} />
      {pagination?.has_more && (
        <LoadProducts setCurrentPage={setCurrentPage} />
      )}
    </div>
  )
}

export default Products