"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Slide1Title() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center px-6 sm:px-12 snap-start snap-always bg-zinc-950">
      <motion.div
        className="flex flex-col items-center gap-8 md:gap-12 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center tracking-tight text-white">
          Strategic Partnership & <br className="hidden sm:block" />
          <span className="text-amber-500">Market Domination</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 tracking-wide">
          Views Investments <span className="text-amber-500 font-semibold">X</span> Saada
        </p>
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative w-32 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24 flex items-center justify-center">
            <Image
              src="/views-logo.svg"
              alt="Views Investments"
              width={192}
              height={96}
              className="object-contain"
              unoptimized
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const fallback = e.currentTarget.nextElementSibling;
                if (fallback) (fallback as HTMLElement).style.display = "flex";
              }}
            />
            <div
              className="hidden text-xl sm:text-2xl font-bold text-zinc-600 items-center justify-center w-full h-full border border-zinc-700 rounded-lg"
              style={{ display: "none" }}
            >
              Views
            </div>
          </div>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/20 text-amber-500 text-xl font-bold shrink-0">
            X
          </div>
          <div className="relative w-32 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24 flex items-center justify-center">
            <Image
              src="/saada-logo.svg"
              alt="Saada"
              width={192}
              height={96}
              className="object-contain"
              unoptimized
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const fallback = e.currentTarget.nextElementSibling;
                if (fallback) (fallback as HTMLElement).style.display = "flex";
              }}
            />
            <div
              className="hidden text-xl sm:text-2xl font-bold text-zinc-600 items-center justify-center w-full h-full border border-zinc-700 rounded-lg"
              style={{ display: "none" }}
            >
              Saada
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
