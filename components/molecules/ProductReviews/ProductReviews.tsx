import ProductDetailsSkeleton from '@/components/atoms/ProductDetailsSkeleton/ProductDetailSkeleton';
import { Star } from 'lucide-react';
import Image from 'next/image';

const ProductReviews = ({reviews, setPage}: { reviews: any; setPage: any }) => {
    return (
        <div>
            {reviews && reviews.aggregate ? (
                <div className='mt-20 border-t border-black pt-16'>
                    <h2 className='text-2xl font-bold tracking-tighter mb-12'>Customer Reviews</h2>

                    <div className='flex flex-col lg:flex-row gap-16'>
                        <div className='w-full lg:w-1/3 flex flex-col gap-6'>
                            <div className='flex items-end gap-4'>
                                <span className='text-6xl font-bold leading-none'>
                                    {reviews.aggregate.rating}
                                </span>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex text-black'>
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={18}
                                                className={i < Math.floor(reviews.aggregate.rating) ? "fill-amber-500 text-amber-500" : "text-gray-300"}
                                            />
                                        ))}
                                    </div>
                                    <span className='text-xs uppercase tracking-widest text-gray-500'>
                                        Based on {reviews.aggregate.total} reviews
                                    </span>
                                </div>
                            </div>

                            <div className='flex flex-col gap-3 mt-4'>
                                {reviews.aggregate.counts?.slice().reverse().map((item: any) => (
                                    <div key={item.rating} className='flex items-center gap-4 text-xs font-bold uppercase tracking-widest'>
                                        <span className='w-2'>{item.rating}</span>
                                        <div className='flex-1 h-1 bg-gray-100 relative'>
                                            <div
                                                className='absolute top-0 left-0 h-full bg-black'
                                                style={{ width: `${(item.count / reviews.aggregate.total) * 100}%` }}
                                            />
                                        </div>
                                        <span className='w-8 text-gray-400 text-right'>{item.count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='w-full lg:w-2/3 flex flex-col gap-12'>
                            {reviews.data?.length > 0 ? (
                                reviews.data.map((review: any, index: number) => (
                                    <div key={index} className='flex flex-col gap-6 border-b border-gray-100 pb-12 last:border-0'>
                                        <div className='flex justify-between items-start'>
                                            <div className='flex items-center gap-4'>
                                                <div className='relative w-12 h-12 shrink-0'>
                                                    {review.user.avatar_url ? (
                                                        <div className='relative w-full h-full overflow-hidden rounded-full border border-gray-200'>
                                                            <Image
                                                                src={review.user.avatar_url}
                                                                alt={review.user.name}
                                                                fill
                                                                className='object-cover'
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div className='w-full h-full rounded-full bg-black flex items-center justify-center text-white text-xs font-bold tracking-tighter'>
                                                            {review.user.name
                                                                .split(' ')
                                                                .map((n: string) => n[0])
                                                                .join('')}
                                                        </div>
                                                    )}
                                                </div>

                                                <div className='flex flex-col'>
                                                    <span className='text-sm font-black uppercase tracking-tight'>
                                                        {review.user.name}
                                                    </span>
                                                    <span className='text-[10px] text-gray-400 uppercase tracking-[0.2em] mt-0.5'>
                                                        {new Date(review.created_at).toLocaleDateString('en-US', {
                                                            month: 'short',
                                                            day: 'numeric',
                                                            year: 'numeric'
                                                        })}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='flex text-black'>
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={12}
                                                        className={i < review.rating ? "fill-amber-500 text-amber-500" : "text-gray-200"}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {review.content ? (
                                            <p className='text-sm leading-relaxed text-gray-600 italic pl-16'>
                                                "{review.content}"
                                            </p>
                                        ) : (
                                            <p className='text-xs text-gray-400 uppercase tracking-widest pl-16'>
                                                User left a rating without a comment.
                                            </p>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-400 uppercase text-xs tracking-widest font-light">
                                    No detailed reviews found.
                                </p>
                            )}

                            {reviews.pagination?.has_more && (
                                <button
                                    onClick={() => setPage((prev: number) => prev + 1)}
                                    className='self-start text-[10px] font-black uppercase tracking-[0.3em] border-b-2 border-black pb-1 hover:text-gray-400 hover:border-gray-400 transition-all'
                                >
                                    View More Reviews
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <ProductDetailsSkeleton />
            )}
        </div>
    )
}

export default ProductReviews