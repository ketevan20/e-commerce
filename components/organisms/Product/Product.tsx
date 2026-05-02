'use client'
import NavigationLinks from '@/components/molecules/NavigationLinks/NavigationLinks';
import ProductDetails from '@/components/molecules/ProductDetails/ProductDetails';
import ProductReviews from '@/components/molecules/ProductReviews/ProductReviews';
import RecommendedSection from '@/components/molecules/RecommendedSection/RecommendedSection';
import { getProduct, getProductReviews } from '@/lib/api';
import { useParams } from 'next/navigation'
import React, { use, useEffect, useState } from 'react'

const Product = () => {
  const [product, setProduct] = useState<any>(null);
  const [reviews, setReviews] = useState<any>(null);
  const [reviewsPage, setReviewsPage] = useState(1);
  const params = useParams();
  const productId = params.productId as string;

  if (!productId) {
    throw new Error('Product ID is required');
  }

  useEffect(() => {
    getProduct(productId)
      .then(setProduct)
      .catch(console.error)
  }, [productId])

  useEffect(() => {
    getProductReviews(productId, { per_page: 2, page: reviewsPage })
      .then((newData) => {
        setReviews((prev: any) => ({
          ...newData,
          data: prev?.data && reviewsPage > 1 ? [...prev.data, ...newData.data] : newData.data,
        }));
      })
      .catch(console.error);
  }, [productId, reviewsPage])

  return (
    <div className='px-6 md:px-10 mb-24'>
      <NavigationLinks />
      <ProductDetails product={product} />
      <ProductReviews reviews={reviews} setPage={setReviewsPage} />
      <RecommendedSection collection={product?.collection?.collection_id}/>
    </div>
  )
}

export default Product