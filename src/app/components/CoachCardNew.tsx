import { motion } from "motion/react";

interface CoachCardNewProps {
  image: string;
  role: string;
  name: string;
  cref: string;
  delay?: number;
  isFirst?: boolean;
}

export function CoachCardNew({ image, role, name, cref, delay = 0, isFirst = false }: CoachCardNewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative bg-[#1E1E1E] overflow-hidden group"
    >
      {/* Image Container */}
      <div className="relative h-[381.33px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={image}
            alt={name}
            className={`absolute max-w-none object-cover ${
              isFirst
                ? "h-full left-[-50.1%] top-0 w-[200.2%]"
                : "h-[112.5%] left-0 top-[-6.25%] w-full"
            }`}
          />
        </div>
        {/* Grayscale effect */}
        <div className="absolute bg-white inset-0 mix-blend-saturation" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[rgba(17,17,17,0.4)] via-50% to-transparent flex flex-col items-start justify-end p-6 pb-2">
          <div className="flex flex-col gap-1 w-full">
            <p className="text-[#E8400A] font-semibold text-[10px] tracking-[0.1em] uppercase leading-[1.5]">
              {role}
            </p>
            <h4 className="font-['Bebas_Neue',sans-serif] text-white text-xl tracking-[0.05em] uppercase leading-[1.4]">
              {name}
            </h4>
            <p className="text-[#6B6B6B] text-[10px] uppercase leading-[1.5] mt-1">
              {cref}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
