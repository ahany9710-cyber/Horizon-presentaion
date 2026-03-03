"use client";

import { motion } from "framer-motion";
import { Handshake, TrendingUp } from "lucide-react";

export default function Slide6DealStructure() {
  return (
    <section className="min-h-screen h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-8 sm:py-12 md:py-16 snap-start snap-always bg-zinc-950 overflow-y-auto">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Proposed Deal Structure
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full max-w-5xl mb-10 sm:mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col p-6 sm:p-8 rounded-xl border border-zinc-800 bg-zinc-900/50"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Handshake className="w-8 h-8 text-amber-500 shrink-0" />
            <h3 className="text-lg sm:text-xl font-semibold text-amber-500">The Core Partnership</h3>
          </div>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Acquisition of a 50% equity stake in Views Investments based on the current valuation, sharing the core 2026 projected profits (386M EGP).
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col p-6 sm:p-8 rounded-xl border border-zinc-800 bg-zinc-900/50"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-amber-500 shrink-0" />
            <h3 className="text-lg sm:text-xl font-semibold text-amber-500">Growth Capital Injection</h3>
          </div>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            A dedicated primary capital fund injection to exclusively finance and launch the 4 strategic growth pillars outlined in the expansion plan.
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        className="w-full max-w-4xl p-6 sm:p-10 rounded-xl border-2 border-amber-500/60 bg-amber-500/10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-relaxed">
          The Ultimate Vision: Evolving from a market-leading brokerage into the absolute, dominant real estate ecosystem in the region.
        </p>
      </motion.div>
    </section>
  );
}
