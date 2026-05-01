'use client'
import React from 'react'
import Link from 'next/link'
import { ShoppingBag, Search, User, Heart } from 'lucide-react'

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-500">
      <div className="w-full bg-white/80 backdrop-blur-xl border-b border-neutral-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex justify-between items-center">

          <nav className="hidden lg:flex items-center gap-10">
            <Link href="/products" className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400 hover:text-black transition-all duration-300">Products</Link>
            {/* <Link href="/atelier" className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400 hover:text-black transition-all duration-300">Atelier</Link> */}
          </nav>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2 group flex items-center gap-2">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-serif font-light leading-none transition-all duration-700 group-hover:tracking-[0.1em]">
                S<span className="text-[10px] font-sans font-bold tracking-[0.5em] uppercase align-middle ml-1">tudio</span>
              </span>
              <span className="text-[7px] font-black uppercase tracking-[0.6em] text-neutral-300 mt-0.5 group-hover:text-black transition-colors duration-500">
                Atelier No. 26
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-6 md:gap-8">
            <button className="text-neutral-400 hover:text-black transition-colors">
              <Search size={19} strokeWidth={1.5} />
            </button>
            <Link href="/account" className="hidden sm:block text-neutral-400 hover:text-black transition-colors">
              <User size={19} strokeWidth={1.5} />
            </Link>
            <Link href="/cart" className="relative flex items-center group">
              <ShoppingBag size={21} strokeWidth={1.5} className="text-black transition-transform group-hover:scale-110" />
              <span className="absolute -top-1.5 -right-2 text-[8px] font-black w-4 h-4 bg-black text-white rounded-full flex items-center justify-center">
                2
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header