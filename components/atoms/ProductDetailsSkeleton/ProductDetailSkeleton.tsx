import React from 'react';

const ProductDetailsSkeleton = () => {
    return (
        <div className='max-w-7xl py-12 flex flex-col md:flex-row gap-12 bg-white'>
            
            <div className='w-full md:w-[60%] flex flex-col gap-4'>
                <div className="relative aspect-4/5 w-full bg-gray-200 animate-pulse rounded-sm" />

                <div className='grid grid-cols-4 lg:grid-cols-6 gap-2'>
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="aspect-square bg-gray-200 animate-pulse rounded-sm" />
                    ))}
                </div>
            </div>

            <div className='w-full md:w-[40%] flex flex-col gap-8'>
                
                <div className='flex flex-col gap-2'>
                    <div className='h-9 w-3/4 bg-gray-200 animate-pulse rounded' />
                    <div className='flex items-center gap-1 mt-1'>
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-3.5 h-3.5 bg-gray-200 animate-pulse rounded-full" />
                        ))}
                        <div className="h-3 w-16 bg-gray-100 animate-pulse ml-2" />
                    </div>
                </div>

                <div className='flex items-center gap-3'>
                    <div className='h-9 w-24 bg-gray-200 animate-pulse rounded' />
                </div>

                <div className='space-y-2'>
                    <div className='h-4 w-full bg-gray-100 animate-pulse rounded' />
                    <div className='h-4 w-full bg-gray-100 animate-pulse rounded' />
                    <div className='h-4 w-2/3 bg-gray-100 animate-pulse rounded' />
                </div>

                <div>
                    <div className='h-3 w-24 bg-gray-200 animate-pulse mb-4' />
                    <div className='flex gap-3'>
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
                        ))}
                    </div>
                </div>

                <div>
                    <div className='h-3 w-24 bg-gray-200 animate-pulse mb-4' />
                    <div className='grid grid-cols-5 gap-2'>
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className='py-6 bg-gray-100 animate-pulse rounded-sm' />
                        ))}
                    </div>
                </div>

                <div className='w-full bg-gray-200 animate-pulse py-7 rounded-sm' />

                <div className='border-t border-gray-200 mt-4'>
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className='border-b border-gray-100 py-5 flex justify-between items-center'>
                            <div className='h-3 w-32 bg-gray-100 animate-pulse' />
                            <div className='h-4 w-4 bg-gray-100 animate-pulse' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsSkeleton;