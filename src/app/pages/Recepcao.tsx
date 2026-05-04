import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import QRCode from "react-qr-code";
import { Hash, Mail, Search, CheckCircle, XCircle, X } from "lucide-react";
import forgeeLogoImg from "figma:asset/234239702fd000ad91d5040296534366f62ba051.png";

// ── Mock alunos para validação ────────────────────────────────────────────────
const MOCK_ALUNOS = [
  { id: "12345", nome: "Maria Santos",    plano: "PREMIUM", email: "maria@email.com",   status: "Em dia"    },
  { id: "23456", nome: "João Silva",      plano: "BASIC",   email: "joao@email.com",    status: "Em atraso" },
  { id: "34567", nome: "Carlos Oliveira", plano: "PREMIUM", email: "carlos@email.com",  status: "Vencendo"  },
  { id: "45678", nome: "Ana Costa",       plano: "ELITE",   email: "ana@email.com",     status: "Em dia"    },
];

type ScreenState = "idle" | "success" | "inadimplente" | "erro";
type InputTab    = "codigo" | "email";

// ── PIN Modal ─────────────────────────────────────────────────────────────────
function PinModal({
  onConfirm,
  onCancel,
}: {
  onConfirm: () => void;
  onCancel: () => void;
}) {
  const [digits, setDigits] = useState(["", "", "", ""]);
  const [error,  setError]  = useState(false);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (i: number, val: string) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...digits];
    next[i] = val;
    setDigits(next);
    setError(false);
    if (val && i < 3) inputs.current[i + 1]?.focus();
  };

  const handleKeyDown = (i: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !digits[i] && i > 0) {
      inputs.current[i - 1]?.focus();
    }
    if (e.key === "Enter") validate();
  };

  const validate = () => {
    const pin = digits.join("");
    if (pin === "1234") {
      onConfirm();
    } else {
      setError(true);
      setDigits(["", "", "", ""]);
      setTimeout(() => inputs.current[0]?.focus(), 50);
    }
  };

  // Focus first input on mount
  useEffect(() => { inputs.current[0]?.focus(); }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pin-title"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1,    opacity: 1, y: 0  }}
        exit={   { scale: 0.92, opacity: 0, y: 20  }}
        transition={{ type: "spring", damping: 26, stiffness: 340 }}
        className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-8 w-[360px] flex flex-col items-center gap-6"
      >
        {/* Icon */}
        <div className="w-12 h-12 rounded-full bg-[#E8271A]/10 border border-[#E8271A]/20 flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="11" width="18" height="11" rx="2" stroke="#E8271A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#E8271A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Title */}
        <div className="text-center">
          <h2 id="pin-title" className="font-['Barlow_Condensed',sans-serif] font-bold text-[22px] tracking-[-0.3px] text-[#F2F2F2] uppercase">
            Acesso Restrito
          </h2>
          <p className="text-[#606060] font-['Inter',sans-serif] text-[14px] mt-1">
            Digite o PIN para sair do Modo Recepção
          </p>
        </div>

        {/* PIN Fields */}
        <div className="flex gap-3" role="group" aria-label="Campos do PIN">
          {digits.map((d, i) => (
            <input
              key={i}
              ref={(el) => { inputs.current[i] = el; }}
              type="password"
              inputMode="numeric"
              maxLength={1}
              value={d}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              aria-label={`Dígito ${i + 1} do PIN`}
              className={`w-14 h-14 text-center text-[#F2F2F2] font-['Bebas_Neue',sans-serif] text-[28px] bg-[#1A1A1A] border rounded-[10px] outline-none transition-all ${
                error
                  ? "border-[#E8271A] ring-1 ring-[#E8271A]/30"
                  : d
                  ? "border-[#E8400A]/50 ring-1 ring-[#E8400A]/20"
                  : "border-[#303030] focus:border-[#E8400A]/60 focus:ring-1 focus:ring-[#E8400A]/20"
              }`}
            />
          ))}
        </div>

        {/* Error */}
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="text-[#E8271A] font-['Inter',sans-serif] text-[13px] text-center -mt-3"
              role="alert"
            >
              Senha incorreta. Tente novamente.
            </motion.p>
          )}
        </AnimatePresence>

        {/* Buttons */}
        <div className="flex gap-3 w-full">
          <button
            onClick={onCancel}
            className="flex-1 h-11 border border-[#303030] rounded-[10px] text-[#606060] font-['JetBrains_Mono',sans-serif] text-[12px] tracking-[1px] uppercase hover:border-[#505050] hover:text-[#A8A8A8] transition-all"
          >
            Cancelar
          </button>
          <motion.button
            whileHover={{ backgroundColor: "#FF4D0D" }}
            whileTap={{ scale: 0.97 }}
            onClick={validate}
            className="flex-1 h-11 bg-[#E8271A] rounded-[10px] text-white font-['JetBrains_Mono',sans-serif] text-[12px] tracking-[1px] uppercase transition-colors"
          >
            Confirmar
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Success overlay ───────────────────────────────────────────────────────────
function SuccessOverlay({ nome, plano }: { nome: string; plano: string }) {
  const now = new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#090909]/95 gap-5"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1,   opacity: 1 }}
        transition={{ type: "spring", damping: 18, stiffness: 280, delay: 0.1 }}
      >
        <div className="w-24 h-24 rounded-full bg-[#4ADE80]/10 border-2 border-[#4ADE80]/30 flex items-center justify-center">
          <CheckCircle size={52} className="text-[#4ADE80]" strokeWidth={1.5} />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0  }}
        transition={{ delay: 0.22 }}
        className="text-center"
      >
        <p className="font-['Barlow_Condensed',sans-serif] font-bold text-[48px] leading-none text-[#4ADE80] tracking-[-1px] uppercase">
          Check-in Confirmado!
        </p>
        <p className="text-[#F2F2F2] font-['Inter',sans-serif] text-[22px] mt-2">
          Bem-vindo, <span className="font-semibold">{nome}</span>!
        </p>
        <div className="flex items-center justify-center gap-3 mt-3">
          <span className="font-['JetBrains_Mono',sans-serif] text-[12px] tracking-[1px] uppercase text-[#4ADE80] bg-[#4ADE80]/10 border border-[#4ADE80]/20 rounded-full px-3 py-1">
            {plano}
          </span>
          <span className="text-[#606060] font-['JetBrains_Mono',sans-serif] text-[12px] tracking-[0.6px]">
            {now}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Error overlay ─────────────────────────────────────────────────────────────
function ErrorOverlay({ msg }: { msg: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#090909]/95 gap-5"
    >
      <motion.div
        initial={{ scale: 0.5 }} animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <div className="w-24 h-24 rounded-full bg-[#E8271A]/10 border-2 border-[#E8271A]/30 flex items-center justify-center">
          <XCircle size={52} className="text-[#E8271A]" strokeWidth={1.5} />
        </div>
      </motion.div>
      <div className="text-center">
        <p className="font-['Barlow_Condensed',sans-serif] font-bold text-[40px] leading-none text-[#E8271A] tracking-[-1px] uppercase">
          Não Encontrado
        </p>
        <p className="text-[#A8A8A8] font-['Inter',sans-serif] text-[16px] mt-2">{msg}</p>
      </div>
    </motion.div>
  );
}

// ── Inadimplente overlay ──────────────────────────────────────────────────────
function InadimplenteOverlay({ nome, plano }: { nome: string; plano: string }) {
  const now = new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#090909]/95 gap-5"
    >
      <motion.div
        initial={{ scale: 0.5 }} animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <div className="w-24 h-24 rounded-full bg-[#FBBF24]/10 border-2 border-[#FBBF24]/30 flex items-center justify-center">
          <svg width="52" height="52" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="12" y1="9" x2="12" y2="13" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="12" y1="17" x2="12.01" y2="17" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </motion.div>
      <div className="text-center">
        <p className="font-['Barlow_Condensed',sans-serif] font-bold text-[40px] leading-none text-[#FBBF24] tracking-[-1px] uppercase">
          Pagamento em Atraso
        </p>
        <p className="text-[#F2F2F2] font-['Inter',sans-serif] text-[20px] mt-2">
          {nome} — <span className="text-[#A8A8A8]">{plano}</span>
        </p>
        <p className="text-[#A8A8A8] font-['Inter',sans-serif] text-[14px] mt-1">
          Check-in registrado com aviso de inadimplência · {now}
        </p>
      </div>
    </motion.div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export function Recepcao() {
  const navigate  = useNavigate();
  const [showPin, setShowPin]     = useState(false);
  const [screen,  setScreen]      = useState<ScreenState>("idle");
  const [tab,     setTab]         = useState<InputTab>("codigo");
  const [input,   setInput]       = useState("");
  const [found,   setFound]       = useState<typeof MOCK_ALUNOS[0] | null>(null);
  const [errMsg,  setErrMsg]      = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // ESC → PIN modal
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !showPin) setShowPin(true);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [showPin]);

  // Auto-reset overlay after 4s
  useEffect(() => {
    if (screen === "idle") return;
    const t = setTimeout(() => {
      setScreen("idle");
      setFound(null);
      setInput("");
      setTab("codigo");
    }, 4000);
    return () => clearTimeout(t);
  }, [screen]);

  // Validate input
  const handleSubmit = useCallback(() => {
    const q = input.trim().toLowerCase();
    if (!q) return;
    const aluno = MOCK_ALUNOS.find((a) =>
      tab === "codigo"
        ? a.id === q
        : a.email.toLowerCase() === q
    );
    if (!aluno) {
      setErrMsg(
        tab === "codigo"
          ? `Código "${input}" não encontrado na base de alunos.`
          : `E-mail "${input}" não encontrado na base de alunos.`
      );
      setScreen("erro");
      return;
    }
    setFound(aluno);
    if (aluno.status === "Em atraso") {
      setScreen("inadimplente");
    } else {
      setScreen("success");
    }
  }, [input, tab]);

  // Demo simulation — uses first "em dia" aluno
  const handleDemo = useCallback(() => {
    const aluno = MOCK_ALUNOS[0];
    setFound(aluno);
    setScreen("success");
  }, []);

  const closePinOk = () => {
    setShowPin(false);
    navigate("/dashboard");
  };

  return (
    <div className="fixed inset-0 bg-[#090909] flex flex-col overflow-hidden font-['Inter',sans-serif]">

      {/* ── Header ────────────────────────────────────────────────────────── */}
      <header className="shrink-0 bg-[rgba(13,13,13,0.5)] border-b border-black/60 h-[52px] flex items-center justify-between px-4 z-20">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img
            src={forgeeLogoImg}
            alt="FORGEE logo"
            className="w-6 h-6 object-contain"
          />
          <p className="font-['Barlow_Condensed',sans-serif] font-bold text-[20px] leading-7 tracking-[-0.5px] text-[#F2F2F2] uppercase">
            MODO RECEPÇÃO ATIVO
          </p>
          {/* Live dot */}
          <span className="flex items-center gap-1.5 ml-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8271A] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8271A]" />
            </span>
            <span className="font-['JetBrains_Mono',sans-serif] text-[11px] tracking-[0.8px] text-[#E8271A] uppercase">
              Ativo
            </span>
          </span>
        </div>

        {/* Close button */}
        <button
          onClick={() => setShowPin(true)}
          aria-label="Fechar modo recepção"
          className="w-8 h-8 flex items-center justify-center text-[#F2F2F2] opacity-50 hover:opacity-100 transition-opacity rounded"
        >
          <X size={22} strokeWidth={1.8} />
        </button>
      </header>

      {/* ── Main Content ──────────────────────────────────────────────────── */}
      <main className="flex-1 flex items-center justify-center overflow-hidden relative">
        {/* State overlays */}
        <AnimatePresence>
          {screen === "success"      && found && <SuccessOverlay      key="s" nome={found.nome} plano={found.plano} />}
          {screen === "inadimplente" && found && <InadimplenteOverlay key="i" nome={found.nome} plano={found.plano} />}
          {screen === "erro"                  && <ErrorOverlay        key="e" msg={errMsg} />}
        </AnimatePresence>

        {/* Idle content */}
        <div className="flex flex-col items-center gap-5 w-full max-w-[600px] px-6">

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <h1 className="font-['Barlow_Condensed',sans-serif] font-bold text-[56px] md:text-[64px] leading-none tracking-[-1.5px] text-[#F2F2F2] uppercase">
              APROXIME O QR CODE
            </h1>
            <p className="text-[#A8A8A8] font-['Inter',sans-serif] text-[18px] md:text-[20px] mt-2">
              ou digite seu código de membro / email
            </p>
          </motion.div>

          {/* QR Code Scanner Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1    }}
            transition={{ delay: 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[300px] h-[300px] border-[3px] border-[#303030] rounded-[12px] flex items-center justify-center bg-[#0D0D0D] overflow-hidden"
            aria-label="Área do scanner QR Code"
          >
            {/* Corner scan decorations */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#E8271A]/60 rounded-tl-sm pointer-events-none" aria-hidden="true" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#E8271A]/60 rounded-tr-sm pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#E8271A]/60 rounded-bl-sm pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#E8271A]/60 rounded-br-sm pointer-events-none" aria-hidden="true" />

            {/* Scanning line animation */}
            <motion.div
              className="absolute left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#E8271A]/70 to-transparent pointer-events-none"
              animate={{ y: [-120, 120] }}
              transition={{ duration: 2.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              aria-hidden="true"
            />

            {/* QR Code — fixed value FORGEE-ACADEMY */}
            <div className="p-4 bg-[#0D0D0D]">
              <QRCode
                value="FORGEE-ACADEMY"
                size={220}
                bgColor="#0D0D0D"
                fgColor="#303030"
                style={{ display: "block" }}
                aria-label="QR Code FORGEE Academy"
              />
            </div>
          </motion.div>

          {/* Input tabs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
            role="tablist"
            aria-label="Método de entrada"
          >
            {(["codigo", "email"] as InputTab[]).map((t) => {
              const active = tab === t;
              return (
                <button
                  key={t}
                  role="tab"
                  aria-selected={active}
                  onClick={() => { setTab(t); setInput(""); inputRef.current?.focus(); }}
                  className={`flex items-center gap-2 h-8 px-4 rounded-[10px] font-['JetBrains_Mono',sans-serif] text-[12px] tracking-[0.6px] uppercase transition-all ${
                    active
                      ? "bg-[#E8271A] text-white"
                      : "bg-[#1A1A1A] text-[#606060] hover:text-[#A8A8A8]"
                  }`}
                >
                  {t === "codigo" ? <Hash size={13} /> : <Mail size={13} />}
                  {t === "codigo" ? "Código" : "Email"}
                </button>
              );
            })}
          </motion.div>

          {/* Input field */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{ delay: 0.25 }}
            className="w-full space-y-2"
          >
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#606060] pointer-events-none" aria-hidden="true">
                <Search size={20} />
              </div>
              <input
                ref={inputRef}
                type={tab === "email" ? "email" : "text"}
                inputMode={tab === "email" ? "email" : "text"}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder={tab === "codigo" ? "Digite o código..." : "Digite o email..."}
                aria-label={tab === "codigo" ? "Código de membro" : "E-mail do aluno"}
                className="w-full bg-[#0D0D0D] border border-[#303030] rounded-[14px] pl-12 pr-4 h-[52px] text-[#F2F2F2] font-['Inter',sans-serif] text-[16px] placeholder-[#606060] outline-none focus:border-[#E8400A]/60 focus:ring-1 focus:ring-[#E8400A]/20 transition-all"
              />
            </div>
            <p className="text-center font-['JetBrains_Mono',sans-serif] text-[12px] tracking-[0.6px] text-[#606060] opacity-70">
              {tab === "codigo" ? "Ex: 12345" : "Ex: joao@email.com"}
            </p>
          </motion.div>

          {/* Demo button */}
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{ delay: 0.3 }}
            whileHover={{ backgroundColor: "#222222" }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDemo}
            className="w-full h-[46px] bg-[#1A1A1A] border border-[#303030] rounded-[14px] font-['JetBrains_Mono',sans-serif] text-[14px] tracking-[1.4px] uppercase text-[#606060] hover:text-[#A8A8A8] transition-all"
          >
            Simular QR Code (DEMO)
          </motion.button>
        </div>
      </main>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="shrink-0 bg-[rgba(13,13,13,0.5)] border-t border-[#303030] h-[41px] flex items-center justify-between px-[70px] z-20">
        <p className="font-['JetBrains_Mono',sans-serif] text-[12px] tracking-[0.6px] uppercase text-[#606060] opacity-70 whitespace-nowrap">
          Scanner QR Code Ativo&nbsp;•&nbsp;Validação Automática&nbsp;•&nbsp;Entrada Manual Disponível
        </p>
        <button
          onClick={() => setShowPin(true)}
          className="font-['JetBrains_Mono',sans-serif] text-[12px] tracking-[0.6px] uppercase text-[#606060] opacity-70 hover:opacity-100 transition-opacity whitespace-nowrap"
          aria-label="Pressione ESC para voltar — abre PIN"
        >
          Pressione ESC Para Voltar
        </button>
      </footer>

      {/* ── PIN Modal ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {showPin && (
          <PinModal
            onConfirm={closePinOk}
            onCancel={() => setShowPin(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
