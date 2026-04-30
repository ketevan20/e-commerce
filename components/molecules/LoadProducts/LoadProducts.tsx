'use client'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const LoadProducts = ({ setCurrentPage }: { setCurrentPage: any }) => {
  const searchParams = useSearchParams();

  const buildPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', String(page))
    return `?${params.toString()}`
  }

  return (
    <div className='w-full flex flex-col gap-2 items-center justify-center mt-10'>
      <button onClick={() => setCurrentPage((p: number) => p + 1)} className='m-auto'>
        Load more
      </button>
      <div className='h-px w-40 bg-gray-500'></div>
    </div>
  )
}

export default LoadProducts