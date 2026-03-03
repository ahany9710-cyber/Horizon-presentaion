"use client";

import { motion } from "framer-motion";
import { Building2, LayoutGrid, Home, PieChart } from "lucide-react";

const pillars = [
  {
    icon: Building2,
    title: "B2B Brokerage Aggregation (Close to Views)",
    sub: "200M EGP fund to aggregate SME brokers. Expected Return: 120M EGP direct profit + ~400M EGP retroactive developer bonuses.",
  },
  {
    icon: LayoutGrid,
    title: "100% Commission / Desk-Fee Hub",
    sub: "A revolutionary plug-and-play co-working model monetizing infrastructure for independent brokers. Projected Year 1 Profit: 250M EGP.",
  },
  {
    icon: Home,
    title: "Distressed Asset PropTech",
    sub: "A tech platform matching urgent, distressed sellers with cash-ready investors to capture ultra-high margins.",
  },
  {
    icon: PieChart,
    title: "Fractional Ownership PropTech",
    sub: "Democratizing real estate by launching a regulated micro-investment platform.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Slide5GrowthEngine() {
  return (
    <section className="min-h-screen h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-8 sm:py-12 md:py-16 snap-start snap-always bg-zinc-950 overflow-y-auto">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        The Growth Engine (Use of Funds)
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {pillars.map((pillar, i) => (
          <motion.div
            key={i}
            variants={item}
            className="flex flex-col p-6 sm:p-8 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-amber-500/30 transition-colors"
          >
            <pillar.icon className="w-10 h-10 text-amber-500 mb-4 shrink-0" />
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 leading-snug">
              {pillar.title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed flex-1">{pillar.sub}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
