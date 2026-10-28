
// src/components/PremiumCard.tsx
import React from 'react';

export const PremiumCard = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-brand-dark overflow-hidden">
      {/* Dynamic Animated Background Blob */}
      <div className="absolute top-1/4 left-1/4 h-72 w-72 animate-blob rounded-full bg-indigo-500 opacity-20 filter blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 animate-blob rounded-full bg-pink-500 opacity-20 filter blur-3xl" />

      {/* Glassmorphic Interactive Card */}
      <div className="card-glass w-full max-w-sm rounded-2xl p-6 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-indigo-500/10">
        <div className="flex items-center space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-pink-500 text-white font-bold shadow-lg">
            V4
          </div>
          <div>
            <h3 className="text-lg font-bold text-white tracking-wide">Next-Gen Interface</h3>
            <p className="text-xs text-slate-400">Vite + React + Tailwind v4</p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          Tailwind v4 utilizes a lightning-fast native compiler plugin built specifically for the Vite asset pipeline.
        </p>

        <button className="mt-6 w-full rounded-xl bg-white py-2.5 text-sm font-semibold text-brand-dark transition-all duration-300 hover:bg-indigo-500 hover:text-white hover:scale-[1.02] cursor-pointer">
          Explore Architecture
        </button>
      </div>
    </div>
  );
};
