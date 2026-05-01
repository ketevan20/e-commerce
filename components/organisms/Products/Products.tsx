'use client'
import FilterProducts from '@/components/molecules/FilterProducts/FilterProducts'
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
    console.log(searchParams);
    setAllProducts([])
    setPagination(null)
    setCurrentPage(1)

    getProducts({ ...searchParams.value, page: 1, per_page: 8 })
      .then(({ data, pagination }) => {
        setAllProducts(data)
        setPagination(pagination)
      })
  }, [searchParams]) 

  useEffect(() => {
    console.log(searchParams);
    if (currentPage === 1) return 

    getProducts({ ...searchParams.value, page: currentPage, per_page: 8 })
      .then(({ data, pagination }) => {
        setAllProducts(prev => [...prev, ...data])
        setPagination(pagination)
      })
  }, [currentPage])

  return (
    <div>
      <FilterProducts />
      <ProductsGrid products={allProducts} />
      {pagination?.has_more && (<LoadProducts setCurrentPage={setCurrentPage} />)}
    </div>
  )
}

export default Products