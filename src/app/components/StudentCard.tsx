import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MoreVertical, MessageCircle, Ban } from "lucide-react";

interface StudentCardProps {
  id: number;
  name: string;
  studentId: string;
  status: "Em dia" | "Vencendo" | "Em atraso";
  cadastro: string;
  plan: "BASIC" | "PREMIUM" | "ELITE";
  avatar: string;
  delay?: number;
  menuOpenId: number | null;
  onMenuToggle: (id: number | null) => void;
  onCardClick: () => void;
  onWhatsApp: () => void;
  onBlock: () => void;
}

function statusColor(s: string) {
  if (s === "Em dia")    return "text-[#4ADE80]";
  if (s === "Vencendo")  return "text-[#FBBF24]";
  if (s === "Em atraso") return "text-[#E8271A]";
  return "text-[#606060]";
}

export function StudentCard({
  id, name, studentId, status, cadastro, plan, avatar,
  delay = 0, menuOpenId, onMenuToggle, onCardClick, onWhatsApp, onBlock,
}: StudentCardProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const isMenuOpen = menuOpenId === id;

  // Close on outside click
  useEffect(() => {
    if (!isMenuOpen) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onMenuToggle(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isMenuOpen, onMenuToggle]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      role="listitem"
      className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-[10px] flex items-center gap-4 px-4 py-4 hover:border-[#3A3A3A] hover:bg-[#1D1D1D] transition-all cursor-pointer group"
      onClick={onCardClick}
    >
      {/* Avatar */}
      <div className="relative shrink-0 w-12 h-12 rounded-full" aria-hidden="true">
        <img src={avatar} alt={name} className="w-full h-full object-cover rounded-full" />
        <div className="absolute inset-0 rounded-full border-[1.667px] border-[rgba(232,39,26,0.2)] pointer-events-none" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[#F2F2F2] font-medium font-['Inter',sans-serif] text-[16px] leading-6">
            {name}
          </span>
          <span className="bg-[rgba(232,39,26,0.1)] text-[#E8271A] font-['JetBrains_Mono',sans-serif] text-[12px] px-1.5 py-[3px] rounded-[4px] whitespace-nowrap">
            {studentId}
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
          <span className={`font-['JetBrains_Mono',sans-serif] text-[12px] leading-none ${statusColor(status)}`}>
            {status}
          </span>
          <span className="text-[#606060] text-[12px] select-none" aria-hidden="true">•</span>
          <span className="text-[#606060] font-['Inter',sans-serif] text-[12px]">
            Cadastro: {cadastro}
          </span>
        </div>
      </div>

      {/* Plan */}
      <span className="shrink-0 font-['JetBrains_Mono',sans-serif] text-[12px] tracking-[0.6px] uppercase text-[#606060] min-w-[52px] text-right">
        {plan}
      </span>

      {/* Three-dot menu */}
      <div
        ref={menuRef}
        className="relative shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label={`Opções de ${name}`}
          aria-haspopup="true"
          aria-expanded={isMenuOpen}
          onClick={() => onMenuToggle(isMenuOpen ? null : id)}
          className="w-8 h-8 flex items-center justify-center text-[#606060] hover:text-[#F2F2F2] hover:bg-[#2A2A2A] rounded-[6px] transition-all"
        >
          <MoreVertical size={18} />
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -4 }}
              transition={{ duration: 0.12 }}
              className="absolute right-0 top-full mt-1 w-[180px] bg-[#1A1A1A] border border-[#303030] rounded-[10px] py-1 z-40 shadow-2xl"
              role="menu"
            >
              <button
                role="menuitem"
                onClick={() => { onWhatsApp(); onMenuToggle(null); }}
                className="w-full flex items-center gap-3 px-3 py-2.5 text-[13px] font-['Inter',sans-serif] text-[#A8A8A8] hover:bg-[#25D366]/10 hover:text-[#25D366] transition-colors"
              >
                <MessageCircle size={15} />
                Enviar mensagem
              </button>
              <div className="h-px bg-[#2A2A2A] mx-2 my-1" />
              <button
                role="menuitem"
                onClick={() => { onBlock(); onMenuToggle(null); }}
                className="w-full flex items-center gap-3 px-3 py-2.5 text-[13px] font-['Inter',sans-serif] text-[#A8A8A8] hover:bg-[#E8271A]/10 hover:text-[#E8271A] transition-colors"
              >
                <Ban size={15} />
                Bloquear aluno
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
