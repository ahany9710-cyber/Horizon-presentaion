"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const metrics = [
  { label: "Gross Commissions Generated", value: 850, suffix: " Million EGP" },
  { label: "Gross Profit Margin (Net of 35% Sales Commissions)", value: 552.5, suffix: " Million EGP" },
  { label: "Operational Expenses (OPEX)", value: 330, suffix: " Million EGP" },
  { label: "EBITDA (Operating Profit)", value: 222.5, suffix: " Million EGP" },
];

export default function Slide3Financials() {
  return (
    <section className="min-h-screen h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-8 sm:py-12 md:py-16 snap-start snap-always bg-zinc-950 overflow-y-auto">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Financial Performance (15 Months)
      </motion.h2>
      <motion.div
        className="w-full max-w-2xl space-y-4 sm:space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
      >
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-4 sm:p-6 rounded-lg border border-zinc-800 bg-zinc-900/50"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="text-sm sm:text-base text-zinc-300">{m.label}</span>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-500 tracking-tight">
              <CountUp end={m.value} suffix={m.suffix} duration={2} decimals={m.value % 1 ? 1 : 0} enableScrollSpy scrollSpyOnce />
            </span>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="mt-8 sm:mt-12 w-full max-w-2xl p-6 sm:p-8 rounded-xl border-2 border-amber-500/50 bg-amber-500/5 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-base sm:text-lg md:text-xl font-semibold text-amber-500">
          Current Pre-Money Valuation: Estimated 850M to 1 Billion EGP
        </p>
      </motion.div>
    </section>
  );
}
