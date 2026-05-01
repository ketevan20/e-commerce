'use client'
import React from 'react';
import { useSearchParams } from 'next/navigation';

const LoadProducts = ({ setCurrentPage }: { setCurrentPage: any }) => {
  const searchParams = useSearchParams();

  return (
    <div className='w-full flex flex-col items-center justify-center mt-12 mb-32'>
      <button 
        onClick={() => setCurrentPage((p: number) => p + 1)}
        className='group relative py-4 px-8'
      >
        <span className='text-[11px] uppercase tracking-[0.5em] font-light text-neutral-600 group-hover:text-black transition-colors duration-500'>
          Load More
        </span>
        
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-px bg-neutral-200 group-hover:w-full group-hover:bg-black transition-all duration-700' />
      </button>
    </div>
  )
}

export default LoadProducts