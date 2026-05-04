import { motion } from "motion/react";

interface CoachCardProps {
  initials: string;
  name: string;
  role: string;
  cref: string;
  delay?: number;
}

export function CoachCard({ initials, name, role, cref, delay = 0 }: CoachCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      className="bg-[#1E1E1E] border border-[#2A2A2A] p-8 group cursor-pointer"
    >
      <div className="mb-6">
        <div className="w-20 h-20 bg-[#E8400A]/10 border-2 border-[#E8400A] flex items-center justify-center group-hover:bg-[#E8400A] transition-colors">
          <span className="font-['Bebas_Neue',sans-serif] text-3xl text-[#E8400A] group-hover:text-white transition-colors">
            {initials}
          </span>
        </div>
      </div>

      <div>
        <h3 className="font-['Bebas_Neue',sans-serif] text-2xl text-white mb-1 group-hover:text-[#E8400A] transition-colors">
          {name}
        </h3>
        <p className="text-[#B0B0B0] text-sm mb-2">{role}</p>
        <p className="text-[#6B6B6B] text-xs tracking-wider uppercase">
          {cref}
        </p>
      </div>
    </motion.div>
  );
}
