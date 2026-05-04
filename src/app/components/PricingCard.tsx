import { motion } from "motion/react";

const CHECK_PATH =
  "M14.6667 8C14.6667 11.682 11.682 14.6667 8 14.6667C4.318 14.6667 1.33333 11.682 1.33333 8C1.33333 8 4.318 1.33333 8 1.33333C8 1.33333 14.6667 4.318 14.6667 8V8M10.6867 5.98C10.8816 6.17521 10.8816 6.49146 10.6867 6.68667L7.35333 10.02C7.15812 10.215 6.84188 10.215 6.64667 10.02L5.31333 8.68667C5.17956 8.56202 5.1245 8.3743 5.16974 8.19714C5.21499 8.01999 5.35332 7.88165 5.53047 7.83641C5.70763 7.79117 5.89535 7.84623 6.02 7.98L7 8.96L8.49 7.47L9.98 5.98C10.1752 5.78503 10.4915 5.78503 10.6867 5.98V5.98";

interface PricingCardProps {
  name: string;
  price: string;
  featured?: boolean;
  features: string[];
  ctaText?: string;
  delay?: number;
}

export function PricingCard({
  name,
  price,
  featured = false,
  features,
  ctaText = "QUERO ESSE PLANO",
  delay = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative flex flex-col border ${
        featured
          ? "border-[#E8400A] bg-[#1E1E1E] shadow-[0px_25px_50px_-12px_rgba(232,64,10,0.08)]"
          : "border-[#2A2A2A] bg-[#111111]"
      } p-[33px]`}
    >
      {/* "MAIS ESCOLHIDO" badge */}
      {featured && (
        <div className="absolute left-1/2 -translate-x-1/2 -top-[13px] bg-[#E8400A] px-4 py-[4px] whitespace-nowrap">
          <span className="text-white text-[10px] tracking-[1px] uppercase font-semibold font-['Inter',sans-serif]">
            MAIS ESCOLHIDO
          </span>
        </div>
      )}

      {/* Plan name */}
      <div className="mb-2 pb-[8px]">
        <span
          className={`font-['Bebas_Neue',sans-serif] text-base tracking-[1.6px] uppercase ${
            featured ? "text-[#E8400A]" : "text-[#B0B0B0]"
          }`}
        >
          {name}
        </span>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-1 mb-8">
        <span className="font-['Bebas_Neue',sans-serif] text-[36px] leading-[1] text-white">
          {price}
        </span>
        <span className="text-[#6B6B6B] text-lg">/mês</span>
      </div>

      {/* Feature list */}
      <div className="flex flex-col gap-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="shrink-0 w-4 h-4 mt-[2px]">
              <svg viewBox="0 0 16 16" fill="none" className="w-full h-full">
                <path
                  clipRule="evenodd"
                  d={CHECK_PATH}
                  fill={featured ? "#FFFFFF" : "#B0B0B0"}
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <span
              className={`text-sm font-['Inter',sans-serif] ${
                featured ? "text-white" : "text-[#B0B0B0]"
              }`}
            >
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{
          backgroundColor: featured ? "#FF4D0D" : "#232323",
        }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-4 font-['Bebas_Neue',sans-serif] text-[12px] tracking-[1.2px] uppercase text-white transition-colors ${
          featured ? "bg-[#E8400A]" : "bg-[#1E1E1E] border border-[#2A2A2A]"
        }`}
      >
        {ctaText}
      </motion.button>
    </motion.div>
  );
}
