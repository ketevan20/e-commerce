import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Heart, Plus, Minus, Star } from 'lucide-react';

const ProductDetails = ({ product}: { product: any; }) => {
    const [selectedColor, setSelectedColor] = useState<string>("");
    const [openInfoIndex, setOpenInfoIndex] = useState<number | null>(0);
    const [modalImage, setModalImage] = useState<string | null>(null);

    useEffect(() => {
        if (product?.colors?.length > 0) {
            setSelectedColor(product.colors[0]);
        }
    }, [product]);

    if (!product) return null;

    const filteredImages = product?.images?.filter((img: any) => img.color === selectedColor) || [];
    const mainImage = filteredImages[0]?.image_url || product?.images?.[0]?.image_url;

    const activeInventory = product.inventory?.find((item: any) => item.color === selectedColor) || product.inventory?.[0];
    const hasDiscount = activeInventory?.discount_percentage !== null || activeInventory?.discount !== null;
    const originalPrice = activeInventory?.list_price;
    const finalPrice = activeInventory?.sale_price;
    const discountPercentage = activeInventory?.discount_percentage || activeInventory?.discount;

    return (
        <div>
            <div className='max-w-7xl py-12 flex flex-col md:flex-row gap-12 bg-white text-black'>

                <div className='w-full md:w-[60%] flex flex-col gap-4'>
                    <div
                        className="relative aspect-4/5 w-full bg-gray-100 overflow-hidden cursor-zoom-in group"
                        onClick={() => mainImage && setModalImage(mainImage)}
                    >
                        {mainImage && (
                            <Image
                                fill
                                src={mainImage}
                                alt={product.name}
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                priority
                            />
                        )}
                        {hasDiscount && (
                            <div className='absolute top-4 left-4 bg-red-600 px-3 py-1 rounded-sm'>
                                <p className='text-xs text-white font-bold'>-{discountPercentage}%</p>
                            </div>
                        )}
                    </div>

                    <div className='grid grid-cols-4 lg:grid-cols-6 gap-2'>
                        {filteredImages.map((image: any, index: number) => (
                            <div
                                key={index}
                                className={`relative aspect-square cursor-pointer border ${modalImage === image.image_url ? 'border-black' : 'border-transparent'}`}
                                onClick={() => setModalImage(image.image_url)}
                            >
                                <Image src={image.image_url} alt='thumb' fill className="object-cover hover:opacity-80 transition-opacity" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='w-full md:w-[40%] flex flex-col gap-8'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex justify-between items-start'>
                            <h1 className='text-3xl font-bold tracking-tight'>{product.name}</h1>
                            {/* <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <Heart size={24} />
                        </button> */}
                        </div>

                        <div className="flex items-center gap-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={14}
                                    className={i < Math.floor(product.rating) ? "fill-amber-500 text-amber-500" : "text-gray-300"}
                                />
                            ))}
                            <span className="text-xs text-gray-500 ml-2">({product.reviews} reviews)</span>
                        </div>
                    </div>

                    <div className='flex items-center gap-3'>
                        {hasDiscount ? (
                            <>
                                <p className='text-3xl font-bold text-red-600'>${finalPrice}</p>
                                <p className='text-xl text-gray-400 line-through'>${originalPrice}</p>
                            </>
                        ) : (
                            <p className='text-3xl font-bold'>${originalPrice}</p>
                        )}
                    </div>

                    <p className='text-gray-600 text-sm leading-relaxed'>{product.description}</p>

                    <div>
                        <p className='text-xs font-bold uppercase tracking-widest mb-4'>Color: {selectedColor}</p>
                        <div className='flex gap-3'>
                            {product.colors?.map((color: string) => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`w-8 h-8 rounded-full border-2 p-0.5 transition-all ${selectedColor === color ? 'border-black scale-110' : 'border-transparent'}`}
                                >
                                    <div className="w-full h-full rounded-full shadow-inner" style={{ backgroundColor: color }} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {product.sizes?.length > 0 && (
                        <div>
                            <p className='text-xs font-bold uppercase tracking-widest mb-4'>Select Size</p>
                            <div className='grid grid-cols-5 gap-2'>
                                {product.sizes.map((size: string) => (
                                    <button key={size} className='py-3 border border-gray-200 text-xs font-bold hover:bg-black hover:text-white transition-all uppercase'>
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <button className='w-full bg-black text-white py-5 font-bold uppercase text-xs tracking-[0.2em] hover:bg-gray-800 transition-colors'>
                        Add to Bag
                    </button>

                    <div className='border-t border-black mt-4'>
                        {product.info?.map((item: any, index: number) => (
                            <div key={index} className='border-b border-gray-100'>
                                <button
                                    className='w-full py-5 flex justify-between items-center text-[10px] font-black uppercase tracking-widest'
                                    onClick={() => setOpenInfoIndex(openInfoIndex === index ? null : index)}
                                >
                                    {item.title}
                                    {openInfoIndex === index ? <Minus size={14} /> : <Plus size={14} />}
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openInfoIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                                    <ul className='space-y-2'>
                                        {item.description?.map((desc: string, i: number) => (
                                            <li key={i} className="text-xs text-gray-500 flex gap-2">
                                                <span className="text-black">•</span> {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {modalImage && (
                    <div
                        className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md flex items-center justify-center p-8 animate-in fade-in duration-200"
                        onClick={() => setModalImage(null)}
                    >
                        <button className="absolute top-8 right-8 text-black uppercase text-xs font-bold tracking-widest">Close [×]</button>
                        <div className="relative w-full h-full max-w-5xl">
                            <Image src={modalImage} alt="Zoomed view" fill className="object-contain" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductDetails;