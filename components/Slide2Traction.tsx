"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { TrendingUp, Users, Database, Banknote } from "lucide-react";

const cards = [
  {
    icon: TrendingUp,
    value: 25,
    suffix: " Billion EGP",
    label: "Record Sales Volume",
    sub: "Achieved in a record 15-month timeframe: Sep 2024 - Dec 2025",
  },
  {
    icon: Users,
    value: 800,
    suffix: "+",
    label: "Sales Force Engine",
    sub: "Ready, trained, and highly active Property Consultants",
  },
  {
    icon: Database,
    value: 100,
    suffix: "M+ EGP",
    label: "Proprietary Asset / The Moat",
    sub: "Historical acquisition cost for our exclusive, highly-qualified Real Estate Buyer Database",
  },
  {
    icon: Banknote,
    value: 140,
    suffix: "M EGP",
    label: "Operational Independence",
    sub: "Cash on Hand. 100% Debt-Free entity ensuring robust financial stability",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Slide2Traction() {
  return (
    <section className="min-h-screen h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-8 sm:py-12 md:py-16 snap-start snap-always bg-zinc-950 overflow-y-auto">
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 md:mb-12 tracking-tight text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Traction & Core Assets
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            variants={item}
            className="flex flex-col p-6 sm:p-8 rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:border-amber-500/30 transition-colors"
          >
            <card.icon className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500 mb-4" />
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-500 tracking-tight mb-1">
              <CountUp end={card.value} suffix={card.suffix} duration={2} enableScrollSpy scrollSpyOnce />
            </p>
            <p className="text-base sm:text-lg font-semibold text-white mb-2">{card.label}</p>
            <p className="text-sm text-zinc-400 leading-relaxed">{card.sub}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
