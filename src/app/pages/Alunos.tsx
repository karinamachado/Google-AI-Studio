import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import {
  LayoutDashboard, Users, CheckSquare, MonitorPlay,
  Settings, LogOut, Menu, X,
  UserPlus, Sun, Search, ChevronDown, Grid3x3,
  ArrowLeft, Mail, Phone, CreditCard, Calendar,
  Clock, Hash, Pencil, AlertTriangle,
} from "lucide-react";
import { StudentCard } from "../components/StudentCard";
import forgeeLogoImg from "figma:asset/234239702fd000ad91d5040296534366f62ba051.png";
import imgJoao    from "figma:asset/81e581e8bdbf8c9f2fa02e4c20dce774b1a1bb76.png";
import imgCarlos  from "figma:asset/4631e0b3856fc2d697783d063af0506770940150.png";
import imgMaria   from "figma:asset/c370e1db29c9956574be3ed78df1b2c14bcdb239.png";
import imgAna     from "figma:asset/e243fca66b972890241de9a6542eedb4acdb0d0f.png";
import imgBeatriz from "figma:asset/a8d9836506bb678008af0be8a848b247e3386b00.png";

// ── Types ─────────────────────────────────────────────────────────────────────

type PlanType    = "BASIC" | "PREMIUM" | "ELITE";
type StatusType  = "Em dia" | "Vencendo" | "Em atraso";
type EnrollStatus = "ATIVO" | "BLOQUEADO" | "INATIVO";
type PayStatus   = "Pago" | "Atrasado" | "Pendente";

interface Payment {
  date: string;
  status: PayStatus;
  method: string;
  value: string;
}

interface Student {
  id: number;
  name: string;
  studentId: string;
  status: StatusType;
  enrollStatus: EnrollStatus;
  cadastro: string;
  plan: PlanType;
  avatar: string;
  email: string;
  phone: string;
  startDate: string;
  lastCheckin: string;
  totalCheckins: number;
  payments: Payment[];
}

// ── Data ──────────────────────────────────────────────────────────────────────

const STUDENTS: Student[] = [
  {
    id: 1, name: "João Silva", studentId: "#5678",
    status: "Em atraso", enrollStatus: "ATIVO",
    cadastro: "09/03/2024", plan: "BASIC", avatar: imgJoao,
    email: "joao@email.com", phone: "(11) 98765-1234",
    startDate: "09/03/2024", lastCheckin: "2026-02-20", totalCheckins: 54,
    payments: [
      { date: "09/02/2026", status: "Atrasado", method: "Boleto", value: "R$ 89,90" },
      { date: "09/01/2026", status: "Pago",     method: "PIX",    value: "R$ 89,90" },
      { date: "09/12/2025", status: "Pago",     method: "PIX",    value: "R$ 89,90" },
    ],
  },
  {
    id: 2, name: "Carlos Oliveira", studentId: "#3456",
    status: "Vencendo", enrollStatus: "ATIVO",
    cadastro: "31/01/2024", plan: "PREMIUM", avatar: imgCarlos,
    email: "carlos@email.com", phone: "(11) 91234-5678",
    startDate: "31/01/2024", lastCheckin: "2026-02-18", totalCheckins: 89,
    payments: [
      { date: "31/01/2026", status: "Pendente", method: "Cartão", value: "R$ 149,90" },
      { date: "31/12/2025", status: "Pago",     method: "Cartão", value: "R$ 149,90" },
    ],
  },
  {
    id: 3, name: "Maria Santos", studentId: "#1234",
    status: "Em dia", enrollStatus: "ATIVO",
    cadastro: "14/01/2024", plan: "PREMIUM", avatar: imgMaria,
    email: "maria@email.com", phone: "(11) 97654-3210",
    startDate: "14/01/2024", lastCheckin: "2026-02-22", totalCheckins: 112,
    payments: [
      { date: "14/02/2026", status: "Pago",     method: "PIX",    value: "R$ 149,90" },
      { date: "14/01/2026", status: "Pago",     method: "PIX",    value: "R$ 149,90" },
    ],
  },
  {
    id: 4, name: "Ana Costa", studentId: "#9012",
    status: "Em dia", enrollStatus: "ATIVO",
    cadastro: "19/11/2023", plan: "ELITE", avatar: imgAna,
    email: "ana@email.com", phone: "(11) 95432-1098",
    startDate: "19/11/2023", lastCheckin: "2026-02-21", totalCheckins: 178,
    payments: [
      { date: "19/02/2026", status: "Pago",     method: "Débito", value: "R$ 249,90" },
      { date: "19/01/2026", status: "Pago",     method: "Débito", value: "R$ 249,90" },
    ],
  },
  {
    id: 5, name: "Beatriz Lima", studentId: "#7890",
    status: "Em atraso", enrollStatus: "BLOQUEADO",
    cadastro: "04/08/2023", plan: "BASIC", avatar: imgBeatriz,
    email: "beatriz@email.com", phone: "(11) 94321-0987",
    startDate: "04/08/2023", lastCheckin: "2026-01-15", totalCheckins: 43,
    payments: [
      { date: "04/02/2026", status: "Atrasado", method: "Boleto", value: "R$ 89,90" },
      { date: "04/01/2026", status: "Atrasado", method: "Boleto", value: "R$ 89,90" },
    ],
  },
];

const NAV_ITEMS = [
  { id: "dashboard",     label: "Dashboard",      icon: LayoutDashboard, path: "/dashboard"     },
  { id: "alunos",        label: "Alunos",          icon: Users,           path: "/alunos"        },
  { id: "checkins",      label: "Check-ins",       icon: CheckSquare,     path: "/checkins"      },
  { id: "recepcao",      label: "Modo Recepção",   icon: MonitorPlay,     path: "/recepcao"      },
  { id: "configuracoes", label: "Configurações",   icon: Settings,        path: "/configuracoes" },
];

const PLAN_OPTIONS   = ["Planos", "BASIC", "PREMIUM", "ELITE"];
const MONTH_OPTIONS  = ["Mês", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                         "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const SORT_OPTIONS   = ["Recentes", "Antigos", "Alfabético"];

// ── Helpers ───────────────────────────────────────────────────────────────────

function statusColor(s: StatusType) {
  if (s === "Em dia")    return "text-[#4ADE80]";
  if (s === "Vencendo")  return "text-[#FBBF24]";
  if (s === "Em atraso") return "text-[#E8271A]";
  return "text-[#606060]";
}

function payBadge(s: PayStatus) {
  if (s === "Pago")     return "bg-[rgba(34,197,94,0.15)] text-[#22C55E]";
  if (s === "Atrasado") return "bg-[rgba(232,39,26,0.15)] text-[#E8271A]";
  return                       "bg-[rgba(251,191,36,0.15)] text-[#FBBF24]";
}

function enrollBadge(s: EnrollStatus) {
  if (s === "ATIVO")    return "bg-[rgba(34,197,94,0.12)] text-[#22C55E]";
  if (s === "BLOQUEADO") return "bg-[rgba(232,39,26,0.12)] text-[#E8271A]";
  return                        "bg-[rgba(160,160,160,0.12)] text-[#A8A8A8]";
}

// ── Filter Dropdown ───────────────────────────────────────────────────────────

function FilterDropdown({
  value, open, setOpen, options, onChange,
}: {
  value: string; open: boolean;
  setOpen: (v: boolean) => void;
  options: string[]; onChange: (v: string) => void;
}) {
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1 bg-[#1A1A1A] border border-[#303030] rounded-[10px] px-3 py-2.5 text-[#A8A8A8] text-[14px] font-['Inter',sans-serif] hover:border-[#505050] hover:text-[#F2F2F2] transition-all min-w-[100px] whitespace-nowrap"
      >
        <span className="flex-1 text-left">{value}</span>
        <ChevronDown size={18} className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -4, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.97 }}
            transition={{ duration: 0.13 }}
            className="absolute top-full mt-1 left-0 bg-[#1A1A1A] border border-[#303030] rounded-[10px] py-1 z-30 min-w-full shadow-xl"
          >
            {options.map((opt) => (
              <li key={opt}>
                <button
                  role="option"
                  aria-selected={opt === value}
                  onClick={() => { onChange(opt); setOpen(false); }}
                  className={`w-full text-left px-4 py-2 text-[14px] font-['Inter',sans-serif] hover:bg-[#2A2A2A] transition-colors ${
                    opt === value ? "text-[#E8400A]" : "text-[#A8A8A8]"
                  }`}
                >
                  {opt}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Info Card (profile grid) ─────────────────────────────────────────────────

function InfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-[#1A1A1A] border border-[#303030] rounded-[10px] px-4 py-4 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="text-[#606060] shrink-0" aria-hidden="true">{icon}</span>
        <span className="text-[#606060] text-[12px] tracking-[0.6px] uppercase font-['Inter',sans-serif]">
          {label}
        </span>
      </div>
      <p className="text-[#F2F2F2] text-[14px] font-['Inter',sans-serif] leading-5">
        {value}
      </p>
    </div>
  );
}

// ── Block Confirmation Modal ─────────────────────────────────────────────────

function BlockModal({
  student, onConfirm, onCancel,
}: {
  student: Student; onConfirm: () => void; onCancel: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onCancel}
      role="dialog"
      aria-modal="true"
      aria-labelledby="block-modal-title"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 16 }}
        transition={{ type: "spring", damping: 26, stiffness: 320 }}
        className="bg-[#1A1A1A] border border-[#303030] rounded-[14px] p-6 w-full max-w-[400px] space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Icon */}
        <div className="w-11 h-11 rounded-[10px] bg-[rgba(232,39,26,0.1)] border border-[rgba(232,39,26,0.2)] flex items-center justify-center">
          <AlertTriangle size={20} className="text-[#E8271A]" />
        </div>

        <div>
          <h3
            id="block-modal-title"
            className="font-['Bebas_Neue',sans-serif] text-[22px] tracking-[0.5px] text-[#F2F2F2]"
          >
            BLOQUEAR ALUNO
          </h3>
          <p className="text-[#A8A8A8] text-[14px] font-['Inter',sans-serif] mt-2 leading-relaxed">
            Tem certeza que deseja bloquear{" "}
            <span className="text-[#F2F2F2] font-medium">{student.name}</span>?
            O aluno perderá acesso à academia.
          </p>
        </div>

        <div className="flex gap-3 pt-1">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2.5 border border-[#303030] rounded-[8px] text-[13px] font-['Inter',sans-serif] font-medium text-[#A8A8A8] hover:text-white hover:border-[#505050] transition-all"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2.5 bg-[#E8271A] rounded-[8px] text-[13px] font-['Inter',sans-serif] font-medium text-white hover:bg-[#FF4D0D] transition-colors"
          >
            Confirmar bloqueio
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── WhatsApp icon (inline SVG) ────────────────────────────────────────────────

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export function Alunos() {
  const navigate = useNavigate();

  // Sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Views: "list" | "profile"
  const [view,            setView]            = useState<"list" | "profile">("list");
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  // List filters
  const [searchQuery,   setSearchQuery]   = useState("");
  const [planOpen,      setPlanOpen]      = useState(false);
  const [monthOpen,     setMonthOpen]     = useState(false);
  const [sortOpen,      setSortOpen]      = useState(false);
  const [selectedPlan,  setSelectedPlan]  = useState("Planos");
  const [selectedMonth, setSelectedMonth] = useState("Mês");
  const [selectedSort,  setSelectedSort]  = useState("Recentes");

  // Three-dot menu
  const [menuOpenId,    setMenuOpenId]    = useState<number | null>(null);

  // Block modal
  const [blockTarget,   setBlockTarget]   = useState<Student | null>(null);
  const [students,      setStudents]      = useState<Student[]>(STUDENTS);

  // Filtered list
  const filtered = students.filter((s) => {
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || s.name.toLowerCase().includes(q) ||
      s.email.toLowerCase().includes(q) || s.phone.includes(q);
    const matchPlan = selectedPlan === "Planos" || s.plan === selectedPlan;
    return matchSearch && matchPlan;
  }).sort((a, b) => {
    if (selectedSort === "Alfabético") return a.name.localeCompare(b.name);
    if (selectedSort === "Antigos")    return a.id - b.id;
    return b.id - a.id; // Recentes
  });

  function openProfile(student: Student) {
    setView("profile");
    setSelectedStudent(student);
    setMenuOpenId(null);
  }

  function goBack() {
    setView("list");
    setSelectedStudent(null);
  }

  function handleWhatsApp(student: Student) {
    const num = student.phone.replace(/\D/g, "");
    window.open(`https://wa.me/55${num}`, "_blank");
  }

  function handleBlock(student: Student) {
    setBlockTarget(student);
    setMenuOpenId(null);
  }

  function confirmBlock() {
    if (!blockTarget) return;
    setStudents((prev) =>
      prev.map((s) => s.id === blockTarget.id ? { ...s, enrollStatus: "BLOQUEADO" } : s)
    );
    setBlockTarget(null);
    if (selectedStudent?.id === blockTarget.id) {
      setSelectedStudent((prev) => prev ? { ...prev, enrollStatus: "BLOQUEADO" } : prev);
    }
  }

  // Close all dropdowns
  const closeDropdowns = () => {
    setPlanOpen(false); setMonthOpen(false); setSortOpen(false);
  };

  // ── Sidebar ─────────────────────────────────────────────────────────────────
  const Sidebar = ({ mobile = false }: { mobile?: boolean }) => (
    <aside
      className={`${
        mobile
          ? "fixed inset-y-0 left-0 z-50 w-[220px]"
          : "hidden lg:flex w-[220px] shrink-0"
      } flex flex-col bg-[#111111] border-r border-[#1E1E1E] h-screen`}
      aria-label="Navegação principal"
    >
      <div className="flex items-center gap-3 px-5 py-6 border-b border-[#1E1E1E]">
        <img src={forgeeLogoImg} alt="FORGEE logo" className="w-8 h-8 object-contain shrink-0" />
        <div>
          <p className="font-['Bebas_Neue',sans-serif] text-[20px] leading-none text-white tracking-wide">
            FORGEE<span className="text-[#E8400A]">.</span>
          </p>
          <p className="text-[#606060] text-[9px] tracking-[1.4px] uppercase font-['Inter',sans-serif] mt-0.5">
            ADMIN PANEL
          </p>
        </div>
        {mobile && (
          <button onClick={() => setSidebarOpen(false)} aria-label="Fechar menu"
            className="ml-auto text-[#606060] hover:text-white transition-colors">
            <X size={18} />
          </button>
        )}
      </div>

      <nav className="flex-1 px-3 py-4 flex flex-col gap-1" aria-label="Menu">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = item.id === "alunos";
          return (
            <button key={item.id}
              onClick={() => { if (item.path !== "#") navigate(item.path); if (mobile) setSidebarOpen(false); }}
              aria-current={isActive ? "page" : undefined}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-[8px] text-left transition-all ${
                isActive ? "bg-[#E8400A] text-white" : "text-[#A8A8A8] hover:bg-[#1E1E1E] hover:text-white"
              }`}
            >
              <Icon size={16} className="shrink-0" />
              <span className="text-sm font-['Inter',sans-serif]">{item.label}</span>
            </button>
          );
        })}
        <div className="mt-auto pt-4 border-t border-[#1E1E1E]">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-[8px] text-left text-[#A8A8A8] hover:bg-[#1E1E1E] hover:text-white transition-all">
            <Settings size={16} className="shrink-0" />
            <span className="text-sm font-['Inter',sans-serif]">Configurações</span>
          </button>
        </div>
      </nav>

      <div className="border-t border-[#1E1E1E] p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-[#E8400A]/20 border border-[#E8400A]/30 flex items-center justify-center shrink-0" aria-hidden="true">
            <span className="text-[#E8400A] font-['Bebas_Neue',sans-serif] text-[14px]">A</span>
          </div>
          <div className="min-w-0">
            <p className="text-white text-[13px] font-medium font-['Inter',sans-serif] truncate">Admin FORGEE</p>
            <p className="text-[#606060] text-[10px] tracking-[1px] uppercase font-['Inter',sans-serif]">Gestor</p>
          </div>
        </div>
        <button onClick={() => navigate("/")}
          className="w-full flex items-center gap-2 px-3 py-2 text-[#606060] hover:text-[#E8400A] hover:bg-[#1E1E1E] rounded-[8px] transition-all text-sm font-['Inter',sans-serif]">
          <LogOut size={14} /> Sair
        </button>
      </div>
    </aside>
  );

  return (
    <div className="flex h-screen bg-[#0D0D0D] text-white font-['Inter',sans-serif] overflow-hidden"
      onClick={() => { closeDropdowns(); setMenuOpenId(null); }}>

      <Sidebar />

      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setSidebarOpen(false)} aria-hidden="true" />
            <motion.div initial={{ x: -240 }} animate={{ x: 0 }} exit={{ x: -240 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }} className="lg:hidden">
              <Sidebar mobile />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Main ──────────────────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* ── Top bar ─────────────────────────────────────────────────────────── */}
        <motion.header
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
          className="shrink-0 bg-[#0D0D0D] border-b border-[#1E1E1E] px-5 md:px-8 py-4 flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <button onClick={(e) => { e.stopPropagation(); setSidebarOpen(true); }}
              aria-label="Abrir menu" className="lg:hidden text-[#606060] hover:text-white transition-colors">
              <Menu size={22} />
            </button>
            <div>
              <h1 className="font-['Bebas_Neue',sans-serif] text-[28px] md:text-[34px] leading-none tracking-[0.5px] text-[#F2F2F2]">
                ALUNOS
              </h1>
              <p className="text-[#606060] text-[11px] tracking-[0.6px] uppercase font-['Inter',sans-serif] mt-0.5">
                GESTÃO COMPLETA DA BASE DE MEMBROS
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <button aria-label="Alternar tema"
              className="w-9 h-9 flex items-center justify-center border border-[#303030] text-[#606060] hover:text-white hover:border-[#505050] transition-colors rounded-[8px]">
              <Sun size={16} />
            </button>
            <motion.button whileHover={{ backgroundColor: "#1E1E1E" }} whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/novo-aluno")}
              className="hidden sm:flex items-center gap-2 border border-[#303030] rounded-[8px] px-4 py-2 text-[12px] tracking-[0.6px] uppercase font-['Inter',sans-serif] font-medium text-[#F2F2F2] transition-colors">
              <UserPlus size={14} /> Novo Aluno
            </motion.button>
            <motion.button whileHover={{ backgroundColor: "#FF4D0D" }} whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/recepcao")}
              className="flex items-center gap-2 bg-[#E8271A] rounded-[8px] px-3 md:px-4 py-2 text-[12px] tracking-[0.6px] uppercase font-['Inter',sans-serif] font-medium text-white transition-colors whitespace-nowrap">
              <Grid3x3 size={14} />
              <span className="hidden sm:inline">Ativar Recepção</span>
              <span className="sm:hidden">Recepção</span>
            </motion.button>
          </div>
        </motion.header>

        {/* ── Scrollable Content ───────────────────────────────────────────────── */}
        <main className="flex-1 overflow-y-auto px-5 md:px-8 py-6" aria-label="Conteúdo">

          <AnimatePresence mode="wait">

            {/* ═══════════════════ LIST VIEW ═══════════════════════════════════ */}
            {view === "list" && (
              <motion.div
                key="list"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
                className="max-w-[1440px]"
              >
                <div className="bg-[#161616] border border-[#242424] rounded-[12px] p-5 md:p-6 space-y-4"
                  onClick={(e) => e.stopPropagation()}>

                  {/* Search */}
                  <div className="relative">
                    <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#606060] pointer-events-none" aria-hidden="true" />
                    <input type="search" role="searchbox" aria-label="Buscar aluno"
                      placeholder="Buscar aluno por nome, email ou telefone..."
                      value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-[#1A1A1A] border border-[#303030] rounded-[10px] pl-11 pr-4 py-3 text-[14px] font-['Inter',sans-serif] text-[#F2F2F2] placeholder-[#606060] outline-none focus:border-[#E8400A] focus:ring-1 focus:ring-[#E8400A]/20 transition-all" />
                  </div>

                  {/* Filters */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <FilterDropdown value={selectedPlan} open={planOpen}
                      setOpen={(v) => { setPlanOpen(v); if (v) { setMonthOpen(false); setSortOpen(false); } }}
                      options={PLAN_OPTIONS} onChange={setSelectedPlan} />
                    <FilterDropdown value={selectedMonth} open={monthOpen}
                      setOpen={(v) => { setMonthOpen(v); if (v) { setPlanOpen(false); setSortOpen(false); } }}
                      options={MONTH_OPTIONS} onChange={setSelectedMonth} />
                    <FilterDropdown value={selectedSort} open={sortOpen}
                      setOpen={(v) => { setSortOpen(v); if (v) { setPlanOpen(false); setMonthOpen(false); } }}
                      options={SORT_OPTIONS} onChange={setSelectedSort} />
                  </div>

                  {/* Student list */}
                  <div role="list" className="space-y-3 pt-1">
                    {filtered.length > 0 ? filtered.map((student, i) => (
                      <StudentCard
                        key={student.id}
                        {...student}
                        delay={0.05 + i * 0.05}
                        menuOpenId={menuOpenId}
                        onMenuToggle={setMenuOpenId}
                        onCardClick={() => openProfile(student)}
                        onWhatsApp={() => handleWhatsApp(student)}
                        onBlock={() => handleBlock(student)}
                      />
                    )) : (
                      <div className="py-12 text-center">
                        <p className="text-[#606060] font-['Inter',sans-serif] text-[14px]">
                          Nenhum aluno encontrado.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ═══════════════════ PROFILE VIEW ════════════════════════════════ */}
            {view === "profile" && selectedStudent && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.25 }}
                className="max-w-[1440px] space-y-5"
              >
                {/* Back link */}
                <button
                  onClick={goBack}
                  className="flex items-center gap-2 text-[#A8A8A8] hover:text-white transition-colors text-[16px] font-medium font-['Inter',sans-serif]"
                  aria-label="Voltar para a lista de alunos"
                >
                  <ArrowLeft size={18} />
                  Voltar para lista
                </button>

                {/* ── Header card ────────────────────────────────────────────── */}
                <div className="bg-[#161616] border border-[#242424] rounded-[12px] p-6">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    {/* Avatar + name + badges */}
                    <div className="flex items-center gap-4">
                      <div className="relative shrink-0 w-16 h-16 rounded-full">
                        <img src={selectedStudent.avatar} alt={selectedStudent.name}
                          className="w-full h-full object-cover rounded-full" />
                        <div className="absolute inset-0 rounded-full border-[1.667px] border-[rgba(232,39,26,0.2)] pointer-events-none" />
                      </div>
                      <div>
                        <h2 className="font-['Bebas_Neue',sans-serif] text-[28px] leading-none tracking-[-0.5px] text-[#F2F2F2]">
                          {selectedStudent.name}
                        </h2>
                        <div className="flex items-center gap-2 mt-2 flex-wrap">
                          <span className={`text-[12px] font-medium font-['Inter',sans-serif] px-2.5 py-1 rounded-full ${enrollBadge(selectedStudent.enrollStatus)}`}>
                            {selectedStudent.enrollStatus}
                          </span>
                          <span className={`text-[12px] font-medium font-['Inter',sans-serif] px-2.5 py-1 rounded-full ${
                            selectedStudent.status === "Em dia"
                              ? "bg-[rgba(34,197,94,0.12)] text-[#22C55E]"
                              : selectedStudent.status === "Em atraso"
                              ? "bg-[rgba(232,39,26,0.12)] text-[#E8271A]"
                              : "bg-[rgba(251,191,36,0.12)] text-[#FBBF24]"
                          }`}>
                            {selectedStudent.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleWhatsApp(selectedStudent)}
                        aria-label={`Enviar mensagem WhatsApp para ${selectedStudent.name}`}
                        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1DB954] text-white font-medium text-[14px] font-['Inter',sans-serif] px-4 py-2 rounded-[10px] transition-colors"
                      >
                        <WhatsAppIcon size={16} />
                        WhatsApp
                      </button>
                      <button
                        onClick={() => navigate("/novo-aluno")}
                        aria-label={`Editar dados de ${selectedStudent.name}`}
                        className="w-9 h-9 flex items-center justify-center text-[#606060] hover:text-[#F2F2F2] border border-[#303030] hover:border-[#505050] rounded-[8px] transition-all"
                      >
                        <Pencil size={16} />
                      </button>
                    </div>
                  </div>

                  {/* ── Info grid ─────────────────────────────────────────────── */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
                    <InfoCard icon={<Mail size={14} />}    label="Email"           value={selectedStudent.email} />
                    <InfoCard icon={<Phone size={14} />}   label="Telefone"        value={selectedStudent.phone} />
                    <InfoCard icon={<CreditCard size={14} />} label="Plano"        value={selectedStudent.plan} />
                    <InfoCard icon={<Calendar size={14} />} label="Data de início" value={selectedStudent.startDate} />
                    <InfoCard icon={<Clock size={14} />}   label="Último Check-in" value={selectedStudent.lastCheckin} />
                    <InfoCard icon={<Hash size={14} />}    label="Total de Check-ins" value={String(selectedStudent.totalCheckins)} />
                  </div>
                </div>

                {/* ── Payment history ─────────────────────────────────────────── */}
                <div className="bg-[#161616] border border-[#242424] rounded-[12px] p-6 space-y-4">
                  <h3 className="font-['Bebas_Neue',sans-serif] text-[22px] leading-none tracking-[0.5px] text-[#F2F2F2]">
                    HISTÓRICO DE PAGAMENTOS
                  </h3>

                  <div className="space-y-3">
                    {selectedStudent.payments.map((pay, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.07 }}
                        className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-[10px] px-4 py-3.5 flex items-center justify-between gap-4 hover:border-[#3A3A3A] transition-colors"
                      >
                        <div className="flex flex-col gap-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[#F2F2F2] font-medium font-['Inter',sans-serif] text-[14px]">
                              {pay.date}
                            </span>
                            <span className={`text-[11px] font-medium font-['Inter',sans-serif] px-2 py-0.5 rounded-[4px] ${payBadge(pay.status)}`}>
                              {pay.status}
                            </span>
                          </div>
                          <span className="text-[#606060] text-[12px] font-['Inter',sans-serif]">
                            {pay.method}
                          </span>
                        </div>
                        <span className="shrink-0 text-[#F2F2F2] font-['Inter',sans-serif] text-[14px] font-medium tabular-nums">
                          {pay.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* ── Block Confirmation Modal ─────────────────────────────────────────── */}
      <AnimatePresence>
        {blockTarget && (
          <BlockModal
            student={blockTarget}
            onConfirm={confirmBlock}
            onCancel={() => setBlockTarget(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}