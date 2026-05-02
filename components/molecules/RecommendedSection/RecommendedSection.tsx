import { getProducts } from '@/lib/api';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const RecommendedSection = ({ collection }: { collection: any }) => {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        getProducts({ collection: collection }).then((response) => {
            console.log('Recommended products:', response);
            setProducts(response.data);
        }).catch(console.error);
    }, [collection]);

    if (!collection) return null;

    return (
        <div className='mt-32 border-t border-gray-100 pt-20 pb-10'>
            <div className='flex justify-between items-end mb-12'>
                <div className='flex flex-col gap-2'>
                    <span className='text-[10px] tracking-[0.4em] text-gray-400 font-bold'>You might also like</span>
                    <h2 className='text-3xl font-bold tracking-tighter'>Recommended from {collection.name}</h2>
                </div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12'>
                {products.slice(0, 4).map((product: any) => {
                    const inventory = product.inventory?.[0];
                    const hasDiscount = inventory?.discount_percentage > 0;

                    return (
                        <Link
                            key={product.product_id}
                            href={`/products/${product.product_id}`}
                            className='group flex flex-col gap-4'
                        >
                            <div className='relative aspect-3/4 w-full bg-gray-50 overflow-hidden'>
                                {product.images?.[0] && (
                                    <Image
                                        src={product.images[0].image_url}
                                        alt={product.name}
                                        fill
                                        className='object-cover transition-transform duration-700 group-hover:scale-110'
                                    />
                                )}

                                <div className='absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/80 backdrop-blur-sm'>
                                    <p className='text-[10px] font-black uppercase tracking-widest text-center'>Quick View</p>
                                </div>

                                {hasDiscount && (
                                    <div className='absolute top-3 left-3 bg-red-600 rounded-sm px-2 py-0.5'>
                                        <p className='text-[10px] text-white font-bold'>-{inventory.discount_percentage}%</p>
                                    </div>
                                )}
                            </div>

                            <div className='flex flex-col gap-1'>
                                <div className='flex justify-between items-start gap-2'>
                                    <h3 className='text-xs font-bold uppercase tracking-tight group-hover:underline decoration-1 underline-offset-4'>
                                        {product.name}
                                    </h3>
                                    <div className='flex flex-col items-end'>
                                        {hasDiscount ? (
                                            <div className='flex gap-2 items-center'>
                                                <span className='text-xs font-bold text-red-600'>${inventory.sale_price}</span>
                                                <span className='text-[10px] text-gray-400 line-through'>${inventory.list_price}</span>
                                            </div>
                                        ) : (
                                            <span className='text-xs font-bold'>${inventory?.list_price}</span>
                                        )}
                                    </div>
                                </div>
                                <p className='text-[10px] text-gray-500 uppercase tracking-widest'>
                                    {product.category?.name}
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default RecommendedSection