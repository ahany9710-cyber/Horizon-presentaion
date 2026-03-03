"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const projections = [
  { label: "Target Sales Volume", value: 30, suffix: " Billion EGP" },
  { label: "Projected Gross Margin", value: 650, suffix: " Million EGP" },
  { label: "Estimated Annual OPEX", value: 264, suffix: " Million EGP" },
  { label: "Projected EBITDA", value: 386, suffix: " Million EGP" },
];

export default function Slide4Projections() {
  return (
    <section className="min-h-screen h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-8 sm:py-12 md:py-16 snap-start snap-always bg-zinc-950 overflow-y-auto">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        2026 Financial Projections
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-3xl mb-8 sm:mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {projections.map((p, i) => (
          <motion.div
            key={i}
            className="p-6 sm:p-8 rounded-xl border border-zinc-800 bg-zinc-900/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <p className="text-sm text-zinc-400 mb-2">{p.label}</p>
            <p className="text-2xl sm:text-3xl font-bold text-amber-500 tracking-tight">
              <CountUp end={p.value} suffix={p.suffix} duration={2} enableScrollSpy scrollSpyOnce />
            </p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="w-full max-w-3xl p-6 sm:p-8 rounded-xl border border-zinc-700 bg-zinc-900/80 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
          Over <span className="text-amber-500 font-semibold">70%</span> expected growth in operating profits, driven by high scalability, cost efficiency, and market dominance.
        </p>
      </motion.div>
    </section>
  );
}
