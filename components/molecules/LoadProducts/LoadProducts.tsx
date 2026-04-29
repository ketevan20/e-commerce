import React from 'react'

const LoadProducts = ({setAllProducts}: {setAllProducts: any}) => {
  function loadMoreProducts() {
    setAllProducts((prev: any) => [...prev, ...prev]) // Simulate loading more products by duplicating the existing ones
  }

  return (
    <div className='w-full flex flex-col gap-2 items-center justify-center mt-10'>
        <button onClick={loadMoreProducts} className='cursor-pointer'>Load More</button>
        <div className='h-px w-40 bg-gray-500'></div>
    </div>
  )
}

export default LoadProducts