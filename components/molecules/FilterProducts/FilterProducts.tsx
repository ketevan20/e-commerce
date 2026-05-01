'use client'
import { getCategories, getCollections } from '@/lib/api'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react'; 

const FilterProducts = () => {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const router = useRouter();

    const [categories, setCategories] = useState<any[]>([]);
    const [collections, setCollections] = useState<any[]>([]);

    useEffect(() => {
        Promise.all([getCategories(), getCollections()])
            .then(([{ data: cats }, { data: cols }]) => {
                setCategories(cats)
                setCollections(cols)
            })
    }, [])

    const setParam = (key: string, value: string | null) => {
        const params = new URLSearchParams(searchParams);
        if (value === null) {
            params.delete(key);
        } else {
            params.set(key, value);
        }
        router.push(`${pathName}?${params}`, { scroll: false });
    }

    const currentCategory = searchParams.get('category');
    const currentCollection = searchParams.get('collection');

    return (
        <div className="w-full bg-white border-b border-neutral-200 mb-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between border-b border-neutral-100">
                    <nav className="flex space-x-8 overflow-x-auto no-scrollbar">
                        <button
                            onClick={() => setParam('category', null)}
                            className={`py-5 text-sm font-semibold tracking-tight transition-all border-b-2 ${
                                !currentCategory 
                                ? 'border-black text-black' 
                                : 'border-transparent text-neutral-500 hover:text-black'
                            }`}
                        >
                            All Arrivals
                        </button>
                        {categories.map((cat) => {
                            const isActive = currentCategory === cat.category_id.toLowerCase();
                            return (
                                <button
                                    key={cat.category_id}
                                    onClick={() => setParam('category', cat.category_id.toLowerCase())}
                                    className={`py-5 text-sm font-semibold tracking-tight whitespace-nowrap transition-all border-b-2 ${
                                        isActive 
                                        ? 'border-black text-black' 
                                        : 'border-transparent text-neutral-500 hover:text-black'
                                    }`}
                                >
                                    {cat.name}
                                </button>
                            );
                        })}
                    </nav>

                    <div className="hidden md:flex items-center text-xs text-neutral-400 font-medium uppercase tracking-widest">
                        Curated Collection
                    </div>
                </div>

                <div className="py-4 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 px-3 py-2 bg-neutral-50 rounded-md border border-neutral-200">
                            <SlidersHorizontal size={14} className="text-neutral-600" />
                            <span className="text-xs font-bold uppercase tracking-wider">Filter By:</span>
                        </div>

                        <div className="relative group">
                            <select
                                value={currentCollection ?? ''}
                                onChange={(e) => setParam('collection', e.target.value || null)}
                                className="appearance-none bg-white border border-neutral-200 px-4 py-2 pr-10 text-xs font-medium rounded-md hover:border-black transition-colors cursor-pointer outline-none"
                            >
                                <option value="">All Collections</option>
                                {collections.map((col) => (
                                    <option key={col.collection_id} value={col.collection_id.toLowerCase()}>
                                        {col.name}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400" />
                        </div>
                    </div>

                    {(currentCategory || currentCollection) && (
                        <div className="flex items-center gap-2">
                            <button 
                                onClick={() => router.push(pathName)}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded text-[11px] font-bold uppercase tracking-tighter transition-colors"
                            >
                                <X size={12} />
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FilterProducts