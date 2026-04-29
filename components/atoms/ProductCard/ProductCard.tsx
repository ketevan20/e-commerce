import { Heart } from 'lucide-react'
import React from 'react'

const ProductCard = ({ product }: { product: any }) => {
    const hasDiscount =
        product.inventory[0].discount !== null || product.inventory[0].discount_percentage !== null;

    const originalPrice = product.inventory[0].list_price;
    const finalPrice = product.inventory[0].sale_price;
    const discountPercentage = product.inventory[0].discount_percentage;

    return (
        <div className='flex flex-col gap-4'>
            <div className='relative h-80 w-full bg-gray-500 overflow-hidden'>
                <img src={product.images[0].image_url} alt={product.name} className='w-full h-full object-cover' />
                {
                    hasDiscount && (
                        <div className='absolute top-2 right-2 bg-red-600 px-2 py-1 rounded-md'>
                            <p className='text-xs text-white font-bold'>-{discountPercentage}%</p>
                        </div>
                    )
                }
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex justify-between items-center'>
                    <h2 className='bold'>{product.name}</h2>
                    <button>
                        <Heart size={18} />
                    </button>
                </div>
                <p className='small'>{product.description}</p>
            </div>
            <div className='flex-1 flex items-end'>
                {hasDiscount ? (
                    <div className='flex items-center gap-2'>
                        <p className='text-lg text-red-600'>${finalPrice}</p>
                        <p className='text-lg text-gray-500 line-through'>${originalPrice}</p>
                    </div>
                ) : (
                    <p className='text-lg'>${originalPrice}</p>
                )}
            </div>
        </div>
    )
}

export default ProductCard