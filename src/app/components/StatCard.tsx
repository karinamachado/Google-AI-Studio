import { motion } from "motion/react";

interface StatCardProps {
  label: string;
  value: string;
  delay?: number;
}

export function StatCard({ label, value, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col group cursor-pointer"
    >
      <p className="text-[#6B6B6B] text-xs tracking-[0.12em] uppercase italic mb-2 group-hover:text-[#E8400A] transition-colors">
        {label}
      </p>
      <motion.p
        whileHover={{ scale: 1.05, color: "#E8400A" }}
        className="font-['Bebas_Neue',sans-serif] text-4xl lg:text-5xl text-white transition-colors"
      >
        {value}
      </motion.p>
    </motion.div>
  );
}
