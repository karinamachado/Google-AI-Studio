import { motion } from "motion/react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  tenure: string;
  delay?: number;
}

export function TestimonialCard({
  quote,
  name,
  role,
  tenure,
  delay = 0
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      className="bg-[#181818] p-8 flex flex-col justify-between h-[302.5px] group"
    >
      {/* Quote */}
      <div className="pb-8">
        <p className="text-[#D9D9D9] text-xl leading-[1.625] italic">
          {quote}
        </p>
      </div>

      {/* Author Info */}
      <div>
        <p className="text-[#E8400A] font-bold text-base uppercase leading-[1.5] mb-0">
          {name}
        </p>
        <p className="text-[#6B6B6B] text-sm leading-[1.43]">
          {role} · {tenure}
        </p>
      </div>
    </motion.div>
  );
}
