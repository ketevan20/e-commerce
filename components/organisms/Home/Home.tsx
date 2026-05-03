import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src="/image1.jpg"
          alt="hero"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
      </div>

      <div className="relative h-full w-full z-10 flex flex-col justify-between p-8 md:p-12">
        
        <div className="flex justify-between items-start">
          <h1 className="text-white text-[13px] font-light lowercase tracking-widest italic">
            archive studio
          </h1>
          <nav className="flex gap-12 text-white/70 text-[10px] uppercase tracking-[0.3em]">
            <Link href="/about" className="hover:text-white transition-colors">info</Link>
          </nav>
        </div>

        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-2">
             <span className="text-white/40 text-[9px] uppercase tracking-[0.5em]">collection</span>
             <Link href="/products" className="text-white text-3xl font-light tracking-tighter hover:italic transition-all">
                shop index
             </Link>
          </div>

          <div className="hidden md:block">
            <p className="text-white/50 text-[10px] text-right leading-relaxed lowercase tracking-tight max-w-45">
              structural silhouettes <br /> designed for permanence.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;