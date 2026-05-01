'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowUp} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="w-full bg-[#0a0a0a] text-white mt-24 relative">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
        <button 
          onClick={scrollToTop}
          className="group w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 active:scale-90"
        >
          <ArrowUp size={20} className="text-black transition-transform group-hover:-translate-y-1" strokeWidth={1.5} />
        </button>
        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-neutral-500 select-none">
          Jump to top
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-10 pt-32 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 border-b border-neutral-900 pb-16">
          
          <div className="md:col-span-5 space-y-6">
            <h2 className="text-2xl font-extralight tracking-[0.5em] uppercase">Studio</h2>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-sm font-light italic">
              Crafting stillness in a world of noise. Premium essentials for the modern lifestyle.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-8 space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-700">Explore</h4>
            <ul className="space-y-3 text-[13px] font-light text-neutral-400">
              <li><Link href="#" className="hover:text-white transition-colors">Journal</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Shipping</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-700">Follow</h4>
            {/* <div className="flex gap-6">
              <Instagram size={18} className="text-neutral-500 hover:text-white transition-colors cursor-pointer" />
              <Twitter size={18} className="text-neutral-500 hover:text-white transition-colors cursor-pointer" />
            </div> */}
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-medium tracking-[0.3em] text-neutral-700 uppercase">
            © 2026 Studio Atelier No. 26
          </p>
          <div className="flex items-center gap-8 opacity-10 pointer-events-none uppercase text-[8px] font-bold tracking-widest text-white">
            <span>Visa</span>
            <span>Amex</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer