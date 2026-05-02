import React from 'react';

const ProductsSkeleton = () => {
  return (
    <div className="px-6 md:px-10">
      <div className="flex justify-between items-center py-8 border-b border-gray-100 mb-8">
        <div className="h-6 w-32 bg-gray-200 animate-pulse rounded" />
        <div className="flex gap-4">
          <div className="h-10 w-24 bg-gray-100 animate-pulse rounded-full" />
          <div className="h-10 w-24 bg-gray-100 animate-pulse rounded-full" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex flex-col gap-3">
            <div className="relative aspect-4/5 w-full bg-gray-200 animate-pulse rounded-sm" />
            
            <div className="space-y-2">
              <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded" />
              <div className="h-3 w-1/2 bg-gray-100 animate-pulse rounded" />
              <div className="h-4 w-1/4 bg-gray-200 animate-pulse rounded mt-2" />
            </div>
            
            <div className="flex gap-1.5 mt-1">
              <div className="w-3 h-3 rounded-full bg-gray-200 animate-pulse" />
              <div className="w-3 h-3 rounded-full bg-gray-200 animate-pulse" />
              <div className="w-3 h-3 rounded-full bg-gray-200 animate-pulse" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center py-16">
        <div className="h-12 w-40 bg-gray-100 animate-pulse rounded-sm" />
      </div>
    </div>
  );
};

export default ProductsSkeleton;