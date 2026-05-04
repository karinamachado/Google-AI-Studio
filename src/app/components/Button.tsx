import { motion } from "motion/react";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "px-8 py-4 font-medium tracking-wider uppercase transition-all";

  const variantStyles = {
    primary: "bg-[#E8400A] text-white hover:bg-[#FF4D0D]",
    ghost: "border border-[#2A2A2A] text-white hover:border-[#E8400A] hover:text-[#E8400A]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
