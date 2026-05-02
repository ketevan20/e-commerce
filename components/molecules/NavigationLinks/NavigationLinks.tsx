import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const NavigationLinks = () => {
    const router = useRouter();

    return (
        <nav className='flex items-center gap-3 mt-5 bg-white text-[13px] tracking-tight'>
            <button
                className='flex items-center text-slate-400 hover:text-black transition-all duration-200 group'
                aria-label="Back"
                onClick={() => {
                    router.back()
                }}
            >
                <ArrowLeft size={18} className='group-hover:-translate-x-1 transition-transform' />
            </button>

            <div className='h-4 w-px bg-slate-200 mx-1' />


            <div className='flex items-center gap-2'>
                <button onClick={() => {
                    router.back()
                }} className='text-slate-500 hover:underline decoration-slate-300 underline-offset-4'>
                    Products
                </button>

                <span className='text-slate-300'>/</span>

                <span className='font-medium text-slate-900'>
                    Product Details
                </span>
            </div>
        </nav>
    )
}

export default NavigationLinks