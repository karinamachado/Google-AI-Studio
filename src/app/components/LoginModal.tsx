import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router";
import forgeeLogoImg from "figma:asset/234239702fd000ad91d5040296534366f62ba051.png";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ── Inline SVG icons (paths from Figma, re-drawn as standard SVGs) ──────────

function ShieldIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" aria-hidden="true">
      <path
        d="M16 2.667L5.333 7.333v6.667c0 6.16 4.587 11.92 10.667 13.333 6.08-1.413 10.667-7.173 10.667-13.333V7.333L16 2.667Z"
        stroke="#E8400A"
        strokeWidth="2.667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.333 16l3.334 3.333 6.666-6.666"
        stroke="#E8400A"
        strokeWidth="2.667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={`w-5 h-5 ${className}`} aria-hidden="true">
      <path
        d="M1.667 5A1.667 1.667 0 0 1 3.333 3.333h13.334A1.667 1.667 0 0 1 18.333 5v10A1.667 1.667 0 0 1 16.667 16.667H3.333A1.667 1.667 0 0 1 1.667 15V5Z"
        stroke="currentColor"
        strokeWidth="1.667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.667 5.833 10 11.667l8.333-5.834"
        stroke="currentColor"
        strokeWidth="1.667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={`w-5 h-5 ${className}`} aria-hidden="true">
      <path
        d="M13.333 9.167V6.667a3.333 3.333 0 1 0-6.666 0v2.5"
        stroke="currentColor"
        strokeWidth="1.667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 9.167H5a1.667 1.667 0 0 0-1.667 1.666v5a1.667 1.667 0 0 0 1.667 1.667h10a1.667 1.667 0 0 0 1.667-1.667v-5A1.667 1.667 0 0 0 15 9.167Z"
        stroke="currentColor"
        strokeWidth="1.667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="13.333" r="1" fill="currentColor" />
    </svg>
  );
}

// ── Component ────────────────────────────────────────────────────────────────

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const firstInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstInputRef.current?.focus(), 300);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email.trim()) { setError("Informe o e-mail administrativo."); return; }
    if (!password.trim()) { setError("Informe a senha."); return; }
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setIsLoading(false);
    onClose();
    navigate("/dashboard");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
            aria-hidden="true"
            onClick={onClose}
          />

          {/* Modal panel — full-page centered */}
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-label="Login Administrativo"
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[101] flex flex-col overflow-y-auto"
            style={{ background: "#0D0D0D" }}
          >
            {/* Bottom gradient glow */}
            <div
              className="pointer-events-none fixed bottom-0 left-0 right-0 h-32 z-0"
              style={{
                background: "linear-gradient(to top, rgba(232,64,10,0.07), transparent)",
              }}
            />

            {/* ── Top bar ── */}
            <header className="relative z-10 flex items-center justify-between px-6 md:px-10 h-16 border-b border-[#1E1E1E] shrink-0">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <img
                  src={forgeeLogoImg}
                  alt="FORGEE Logo"
                  className="w-8 h-8 object-contain"
                />
                <span className="font-['Bebas_Neue',sans-serif] text-[22px] tracking-wide text-white leading-none">
                  FORGEE<span className="text-[#E8400A]">.</span>
                </span>
              </div>

              {/* Close */}
              <button
                onClick={onClose}
                aria-label="Fechar modal de login"
                className="w-9 h-9 flex items-center justify-center border border-[#2A2A2A] text-[#6B6B6B] hover:text-white hover:border-[#E8400A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8400A]"
              >
                <X size={18} />
              </button>
            </header>

            {/* ── Main content ── */}
            <main className="relative z-10 flex flex-1 items-center justify-center px-6 py-12">
              <div className="w-full max-w-[440px] flex flex-col items-center">

                {/* Shield icon */}
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-16 h-16 rounded-3xl flex items-center justify-center mb-8"
                  style={{
                    background: "rgba(232,64,10,0.1)",
                    border: "1px solid rgba(232,64,10,0.2)",
                  }}
                >
                  <ShieldIcon />
                </motion.div>

                {/* Heading */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-center mb-10"
                >
                  <h1 className="font-['Bebas_Neue',sans-serif] text-[48px] md:text-[56px] leading-none tracking-[-1.2px] text-[#F2F2F2] mb-3">
                    PAINEL ADMIN
                  </h1>
                  <p className="text-[#A8A8A8] text-base leading-[1.5]">
                    Acesso restrito ao sistema de gestão{" "}
                    <span className="text-[#E8400A]">FORGEE Academy</span>
                  </p>
                </motion.div>

                {/* Form */}
                <motion.form
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="w-full flex flex-col gap-5"
                >
                  {/* Error banner */}
                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-[#E8400A]/10 border border-[#E8400A]/30 px-4 py-3 text-[#E8400A] text-sm font-['Inter',sans-serif]">
                          {error}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="admin-email"
                      className="text-[#A8A8A8] text-[11px] tracking-[1.2px] uppercase font-['Inter',sans-serif] font-medium"
                    >
                      E-mail Administrativo
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#606060] pointer-events-none">
                        <MailIcon />
                      </div>
                      <input
                        ref={firstInputRef}
                        id="admin-email"
                        type="email"
                        autoComplete="email"
                        placeholder="admin@forgee.com"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setError(""); }}
                        className="w-full bg-[#0D0D0D] border border-[#303030] text-[#F2F2F2] placeholder-[#606060] pl-12 pr-4 py-[14px] text-base font-['Inter',sans-serif] rounded-[10px] outline-none focus:border-[#E8400A] focus:ring-1 focus:ring-[#E8400A]/30 transition-all"
                      />
                    </div>
                  </div>

                  {/* Password field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="admin-password"
                      className="text-[#A8A8A8] text-[11px] tracking-[1.2px] uppercase font-['Inter',sans-serif] font-medium"
                    >
                      Senha
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#606060] pointer-events-none">
                        <LockIcon />
                      </div>
                      <input
                        id="admin-password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); setError(""); }}
                        className="w-full bg-[#0D0D0D] border border-[#303030] text-[#F2F2F2] placeholder-[#606060] pl-12 pr-12 py-[14px] text-base font-['Inter',sans-serif] rounded-[10px] outline-none focus:border-[#E8400A] focus:ring-1 focus:ring-[#E8400A]/30 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#606060] hover:text-[#A8A8A8] transition-colors focus:outline-none focus-visible:text-[#E8400A]"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={!isLoading ? { backgroundColor: "#FF4D0D" } : {}}
                    whileTap={!isLoading ? { scale: 0.98 } : {}}
                    className="relative w-full bg-[#E8400A] text-[#F2F2F2] py-[14px] rounded-[10px] text-sm tracking-[1.4px] uppercase font-['Inter',sans-serif] font-semibold flex items-center justify-center gap-3 transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="w-4 h-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3V4a10 10 0 100 10h-2a8 8 0 01-8-8Z" />
                        </svg>
                        Verificando...
                      </>
                    ) : (
                      <>
                        <LockIcon className="shrink-0" />
                        Acessar Painel
                      </>
                    )}
                  </motion.button>
                </motion.form>

                {/* Footer info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-10 flex flex-col items-center gap-3 text-center"
                >
                  <p className="text-[#606060] text-[11px] tracking-[1px] uppercase font-['Inter',sans-serif]">
                    Acesso exclusivo para administradores
                  </p>
                  <button
                    onClick={onClose}
                    className="text-[#606060] hover:text-[#A8A8A8] text-sm font-['Inter',sans-serif] transition-colors focus:outline-none focus-visible:underline"
                  >
                    ← Voltar para área do membro
                  </button>
                </motion.div>

              </div>
            </main>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}