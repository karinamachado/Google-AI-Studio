import { useState, useId, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from "recharts";
import {
  LayoutDashboard, Users, CheckSquare, MonitorPlay,
  Settings, LogOut, Menu, X, Plus, Radio,
  ChevronRight, ChevronDown, TrendingUp, AlertTriangle,
  UserPlus, Bell, Sun,
} from "lucide-react";
import forgeeLogoImg from "figma:asset/234239702fd000ad91d5040296534366f62ba051.png";
import imgMaria  from "figma:asset/c370e1db29c9956574be3ed78df1b2c14bcdb239.png";
import imgJoao   from "figma:asset/81e581e8bdbf8c9f2fa02e4c20dce774b1a1bb76.png";
import imgAna    from "figma:asset/e243fca66b972890241de9a6542eedb4acdb0d0f.png";
import imgPedro  from "figma:asset/4631e0b3856fc2d697783d063af0506770940150.png";
import imgCarla  from "figma:asset/a8d9836506bb678008af0be8a848b247e3386b00.png";

// ── Data ─────────────────────────────────────────────────────────────────────

const chartData = [
  { month: "Abr 25", members: 220 },
  { month: "Mai 25", members: 235 },
  { month: "Jun 25", members: 218 },
  { month: "Jul 25", members: 242 },
  { month: "Ago 25", members: 258 },
  { month: "Set 25", members: 271 },
  { month: "Out 25", members: 265 },
  { month: "Nov 25", members: 284 },
  { month: "Dez 25", members: 295 },
  { month: "Jan 26", members: 310 },
  { month: "Fev 26", members: 328 },
];

const recentStudents = [
  { id: 1, name: "Maria Santos",  plan: "PREMIUM", status: "Em dia",    time: "1 hora atrás",   img: imgMaria },
  { id: 2, name: "João Silva",    plan: "BASIC",   status: "Vencendo",  time: "3 horas atrás",  img: imgJoao  },
  { id: 3, name: "Ana Costa",     plan: "ELITE",   status: "Em atraso", time: "2 dias atrás",   img: imgAna   },
  { id: 4, name: "Pedro Alves",   plan: "PREMIUM", status: "Em dia",    time: "5 horas atrás",  img: imgPedro },
  { id: 5, name: "Carla Souza",   plan: "BASIC",   status: "Em dia",    time: "10 dias atrás",  img: imgCarla },
];

const tourists = [
  { id: 1, name: "Lucas Martins",  plan: "PREMIUM", days: 12 },
  { id: 2, name: "Fernanda Lima",  plan: "BASIC",   days: 14 },
  { id: 3, name: "Roberto Carlos", plan: "ELITE",   days: 18 },
];

const navItems = [
  { id: "dashboard",     label: "Dashboard",      icon: LayoutDashboard, path: "/dashboard"     },
  { id: "alunos",        label: "Alunos",          icon: Users,           path: "/alunos"        },
  { id: "checkins",      label: "Check-ins",       icon: CheckSquare,     path: "/checkins"      },
  { id: "recepcao",      label: "Modo Recepção",   icon: MonitorPlay,     path: "/recepcao"      },
  { id: "configuracoes", label: "Configurações",   icon: Settings,        path: "/configuracoes" },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function planColor(plan: string) {
  if (plan === "PREMIUM") return "text-[#E8400A] bg-[#E8400A]/10";
  if (plan === "ELITE")   return "text-[#F59E0B] bg-[#F59E0B]/10";
  return                         "text-[#6B6B6B] bg-[#2A2A2A]";
}

function statusColor(status: string) {
  if (status === "Em dia")    return "text-[#4ADE80]";
  if (status === "Vencendo")  return "text-[#FBBF24]";
  if (status === "Em atraso") return "text-[#E8400A]";
  return "text-[#6B6B6B]";
}

// ── Custom chart tooltip ───────────────────────────────────────────────────────

function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#1E1E1E] border border-[#2A2A2A] px-4 py-3">
      <p className="text-[#6B6B6B] text-[10px] tracking-[1.2px] uppercase mb-1 font-['Inter',sans-serif]">{label}</p>
      <p className="text-white font-['Bebas_Neue',sans-serif] text-2xl leading-none">
        {payload[0].value} <span className="text-[#6B6B6B] text-sm">membros</span>
      </p>
    </div>
  );
}

// ── Stat Card ─────────────────────────────────────────────────────────────────

interface StatCardProps {
  label: string;
  value: string | number;
  sub?: string;
  iconBg: string;
  iconBorder: string;
  iconColor: string;
  icon: React.ReactNode;
  delay?: number;
}

function DashStatCard({ label, value, sub, iconBg, iconBorder, iconColor, icon, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#1A1A1A] border border-[#2A2A2A] p-6 flex flex-col gap-4 hover:border-[#3A3A3A] transition-colors"
    >
      <div className="flex items-center justify-between">
        <div
          className="w-9 h-9 flex items-center justify-center rounded-[10px]"
          style={{ background: iconBg, border: `1px solid ${iconBorder}` }}
        >
          <span style={{ color: iconColor }}>{icon}</span>
        </div>
        <span className="text-[#606060] text-[10px] tracking-[1.2px] uppercase font-['Inter',sans-serif] font-medium">{label}</span>
      </div>
      <div>
        <p className="font-['Bebas_Neue',sans-serif] text-[40px] leading-none text-[#F2F2F2]">{value}</p>
        {sub && <p className="text-[#A8A8A8] text-[13px] mt-1 font-['Inter',sans-serif] leading-snug">{sub}</p>}
      </div>
    </motion.div>
  );
}

// ── Member Growth Chart ───────────────────────────────────────────────────────

function MemberChart() {
  // Generate a stable unique ID once at mount — never changes, never collides
  const gradientId = useRef(`fg-grad-${Math.random().toString(36).slice(2, 9)}`).current;

  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={chartData} margin={{ top: 10, right: 4, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#E8400A" stopOpacity={0.28} />
            <stop offset="100%" stopColor="#E8400A" stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <CartesianGrid key="grid" stroke="#1E1E1E" vertical={false} />
        <XAxis
          key="x"
          dataKey="month"
          stroke="transparent"
          tick={{ fill: "#606060", fontSize: 11, fontFamily: "Inter, sans-serif" }}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          key="y"
          stroke="transparent"
          tick={{ fill: "#606060", fontSize: 11, fontFamily: "Inter, sans-serif" }}
          tickLine={false}
          axisLine={false}
          domain={["auto", "auto"]}
        />
        <Tooltip key="tooltip" content={<ChartTooltip />} cursor={{ stroke: "#E8400A", strokeWidth: 1, strokeDasharray: "4 4" }} />
        <Area
          key="area"
          type="monotone"
          dataKey="members"
          stroke="#E8400A"
          strokeWidth={2}
          fill={`url(#${gradientId})`}
          dot={{ r: 3, fill: "#E8400A", stroke: "#E8400A", strokeWidth: 0 }}
          activeDot={{ r: 5, fill: "#FF4D0D", stroke: "#111", strokeWidth: 2 }}
          animationDuration={1800}
          animationEasing="ease-out"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

// ── Main Dashboard ────────────────────────────────────────────────────────────

export function Dashboard() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [periodOpen, setPeriodOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [period, setPeriod] = useState("Mês");
  const [filter, setFilter] = useState("Ativos");

  const today = new Date();
  const dateStr = today.toLocaleDateString("pt-BR", {
    weekday: "long", day: "2-digit", month: "short", year: "numeric",
  }).toUpperCase().replace(",", " —").replace(".", "");

  // ── Sidebar ──────────────────────────────────────────────────────────────────
  const Sidebar = ({ mobile = false }: { mobile?: boolean }) => (
    <aside
      className={`${
        mobile
          ? "fixed inset-y-0 left-0 z-50 w-[220px]"
          : "hidden lg:flex w-[220px] shrink-0"
      } flex flex-col bg-[#111111] border-r border-[#1E1E1E] h-screen`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-6 border-b border-[#1E1E1E]">
        <img src={forgeeLogoImg} alt="FORGEE" className="w-8 h-8 object-contain shrink-0" />
        <div>
          <p className="font-['Bebas_Neue',sans-serif] text-[20px] leading-none text-white tracking-wide">
            FORGEE<span className="text-[#E8400A]">.</span>
          </p>
          <p className="text-[#606060] text-[9px] tracking-[1.4px] uppercase font-['Inter',sans-serif] mt-0.5">
            ADMIN PANEL
          </p>
        </div>
        {mobile && (
          <button onClick={() => setSidebarOpen(false)} className="ml-auto text-[#606060] hover:text-white transition-colors">
            <X size={18} />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeNav === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveNav(item.id);
                if (item.path !== "#") navigate(item.path);
                if (mobile) setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-[8px] text-left transition-all ${
                isActive
                  ? "bg-[#E8400A] text-white"
                  : "text-[#A8A8A8] hover:bg-[#1E1E1E] hover:text-white"
              }`}
            >
              <Icon size={16} className="shrink-0" />
              <span className="text-sm font-['Inter',sans-serif]">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* User section */}
      <div className="border-t border-[#1E1E1E] p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-[#E8400A]/20 border border-[#E8400A]/30 flex items-center justify-center shrink-0">
            <span className="text-[#E8400A] font-['Bebas_Neue',sans-serif] text-[14px]">A</span>
          </div>
          <div className="min-w-0">
            <p className="text-white text-[13px] font-medium font-['Inter',sans-serif] truncate">Admin FORGEE</p>
            <p className="text-[#606060] text-[10px] tracking-[1px] uppercase font-['Inter',sans-serif]">Gestor</p>
          </div>
        </div>
        <button
          onClick={() => navigate("/")}
          className="w-full flex items-center gap-2 px-3 py-2 text-[#606060] hover:text-[#E8400A] hover:bg-[#1E1E1E] rounded-[8px] transition-all text-sm font-['Inter',sans-serif]"
        >
          <LogOut size={14} />
          Sair
        </button>
      </div>
    </aside>
  );

  // ── Dropdown ─────────────────────────────────────────────────────────────────
  function Dropdown({
    value, open, setOpen, options, onChange,
  }: { value: string; open: boolean; setOpen: (v: boolean) => void; options: string[]; onChange: (v: string) => void }) {
    return (
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 bg-[#1A1A1A] border border-[#303030] rounded-[10px] px-3 py-2 text-[#A8A8A8] text-sm font-['Inter',sans-serif] hover:border-[#3A3A3A] transition-colors"
        >
          {value}
          <ChevronDown size={16} />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full mt-1 left-0 bg-[#1A1A1A] border border-[#303030] rounded-[10px] py-1 z-30 min-w-full"
            >
              {options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => { onChange(opt); setOpen(false); }}
                  className={`w-full text-left px-4 py-2 text-sm font-['Inter',sans-serif] hover:bg-[#2A2A2A] transition-colors ${
                    opt === value ? "text-[#E8400A]" : "text-[#A8A8A8]"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#0D0D0D] text-white font-['Inter',sans-serif] overflow-hidden">

      {/* Desktop sidebar */}
      <Sidebar />

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.div
              initial={{ x: -240 }} animate={{ x: 0 }} exit={{ x: -240 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="lg:hidden"
            >
              <Sidebar mobile />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* ── Top bar ──────────────────────────────────────────────────────── */}
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="shrink-0 bg-[#0D0D0D] border-b border-[#1E1E1E] px-5 md:px-8 py-4 flex items-center justify-between gap-4"
        >
          {/* Left: hamburger + title */}
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-[#606060] hover:text-white transition-colors">
              <Menu size={22} />
            </button>
            <div>
              <h1 className="font-['Bebas_Neue',sans-serif] text-[28px] md:text-[34px] leading-none tracking-[0.5px] text-[#F2F2F2]">
                DASHBOARD
              </h1>
              <p className="text-[#606060] text-[11px] tracking-[0.6px] font-['Inter',sans-serif] mt-0.5">
                VISÃO GERAL — {dateStr}
              </p>
            </div>
          </div>

          {/* Right: actions */}
          <div className="flex items-center gap-2 md:gap-3">
            <button className="w-9 h-9 flex items-center justify-center border border-[#2A2A2A] text-[#606060] hover:text-white hover:border-[#3A3A3A] transition-colors rounded-[8px]">
              <Sun size={16} />
            </button>
            <button className="w-9 h-9 flex items-center justify-center border border-[#2A2A2A] text-[#606060] hover:text-white hover:border-[#3A3A3A] transition-colors rounded-[8px] relative">
              <Bell size={16} />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#E8400A]" />
            </button>
            <motion.button
              whileHover={{ backgroundColor: "#1E1E1E" }}
              onClick={() => navigate("/novo-aluno")}
              className="hidden sm:flex items-center gap-2 border border-[#2A2A2A] px-4 py-2 text-[12px] tracking-[1px] uppercase font-['Inter',sans-serif] font-medium text-[#A8A8A8] hover:text-white transition-colors rounded-[8px]"
            >
              <UserPlus size={14} />
              Novo Aluno
            </motion.button>
            <motion.button
              whileHover={{ backgroundColor: "#FF4D0D" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/recepcao")}
              className="flex items-center gap-2 bg-[#E8400A] px-4 py-2 text-[12px] tracking-[1px] uppercase font-['Inter',sans-serif] font-medium text-white transition-colors rounded-[8px]"
            >
              <Radio size={14} />
              <span className="hidden sm:inline">Ativar Recepção</span>
              <span className="sm:hidden">Recepção</span>
            </motion.button>
          </div>
        </motion.header>

        {/* ── Scrollable content ────────────────────────────────────────────── */}
        <main className="flex-1 overflow-y-auto px-5 md:px-8 py-6 space-y-6">

          {/* Filter bar */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <div className="flex items-center gap-2 text-[#606060]">
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path d="M1.5 4h13M4 8h8M6.5 12h3" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" />
              </svg>
            </div>
            <Dropdown value={period} open={periodOpen} setOpen={setPeriodOpen}
              options={["Semana", "Mês", "Trimestre", "Ano"]} onChange={setPeriod} />
            <Dropdown value={filter} open={filterOpen} setOpen={setFilterOpen}
              options={["Ativos", "Inativos", "Todos", "Em atraso"]} onChange={setFilter} />
          </motion.div>

          {/* ── Stat cards (4-col) ───────────────────────────────────────── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <DashStatCard
              label="Ativos" value="248" sub="Alunos ativos"
              iconBg="rgba(74,222,128,0.1)" iconBorder="rgba(74,222,128,0.2)" iconColor="#4ADE80"
              icon={<Users size={16} />} delay={0.15}
            />
            <DashStatCard
              label="Inativos" value="20" sub="12 pausados, 8 cancelados"
              iconBg="rgba(251,191,36,0.1)" iconBorder="rgba(251,191,36,0.2)" iconColor="#FBBF24"
              icon={<Users size={16} />} delay={0.2}
            />
            <DashStatCard
              label="Hoje" value="87" sub="Check-ins hoje"
              iconBg="rgba(232,64,10,0.1)" iconBorder="rgba(232,64,10,0.2)" iconColor="#E8400A"
              icon={<CheckSquare size={16} />} delay={0.25}
            />
            <DashStatCard
              label="Frequência" value="3.4" sub="x/sem · Média semanal"
              iconBg="rgba(129,140,248,0.1)" iconBorder="rgba(129,140,248,0.2)" iconColor="#818CF8"
              icon={<TrendingUp size={16} />} delay={0.3}
            />
          </div>

          {/* ── Alert cards (2-col) ──────────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Turistas sem check-in */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#1A1A1A] border border-[#2A2A2A] p-6 hover:border-[#E8400A]/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 flex items-center justify-center rounded-[10px] bg-[#E8400A]/10 border border-[#E8400A]/20">
                  <AlertTriangle size={16} className="text-[#E8400A]" />
                </div>
                <span className="text-[#606060] text-[10px] tracking-[1.2px] uppercase font-['Inter',sans-serif]">—</span>
              </div>
              <p className="font-['Bebas_Neue',sans-serif] text-[40px] leading-none text-[#F2F2F2]">15</p>
              <p className="text-[#A8A8A8] text-[13px] mt-1 font-['Inter',sans-serif]">Turistas 10+ dias sem check-in</p>
            </motion.div>

            {/* Novos este mês */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#1A1A1A] border border-[#2A2A2A] p-6 hover:border-[#3A3A3A] transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#606060] text-[10px] tracking-[1.2px] uppercase font-['Inter',sans-serif]">NOVOS</span>
              </div>
              <p className="font-['Bebas_Neue',sans-serif] text-[40px] leading-none text-[#F2F2F2]">23</p>
              <p className="text-[#A8A8A8] text-[13px] mt-1 font-['Inter',sans-serif]">Novos este mês</p>
            </motion.div>
          </div>

          {/* ── Chart ────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#1A1A1A] border border-[#2A2A2A] p-6"
          >
            {/* Chart header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h2 className="font-['Bebas_Neue',sans-serif] text-[32px] leading-none text-[#F2F2F2] tracking-[0.5px]">
                  +328 MEMBROS
                </h2>
                <p className="text-[#606060] text-[13px] font-['Inter',sans-serif] mt-1">
                  Crescimento nos últimos 12 meses
                </p>
              </div>
              <div className="flex items-center gap-1.5 bg-[#4ADE80]/10 border border-[#4ADE80]/20 px-3 py-1.5 rounded-[6px]">
                <TrendingUp size={13} className="text-[#4ADE80]" />
                <span className="text-[#4ADE80] text-[12px] font-semibold font-['Inter',sans-serif]">+24%</span>
              </div>
            </div>

            {/* Recharts area chart */}
            <MemberChart />

            {/* Chart footer */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#1E1E1E]">
              <button className="flex items-center gap-1.5 text-[#A8A8A8] text-[13px] font-['Inter',sans-serif] hover:text-white transition-colors">
                Últimos 12 meses <ChevronDown size={14} />
              </button>
              <button className="flex items-center gap-1 text-[#E8400A] text-[13px] font-['Inter',sans-serif] hover:text-[#FF4D0D] transition-colors">
                Ver todos os membros <ChevronRight size={14} />
              </button>
            </div>
          </motion.div>

          {/* ── Bottom 2-col ─────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4 pb-6">

            {/* Recent students */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="bg-[#1A1A1A] border border-[#2A2A2A]"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#1E1E1E]">
                <h3 className="font-['Bebas_Neue',sans-serif] text-[18px] tracking-[1px] text-[#F2F2F2]">
                  ALUNOS RECENTES
                </h3>
                <button className="flex items-center gap-1 text-[#606060] hover:text-[#E8400A] text-[12px] font-['Inter',sans-serif] transition-colors">
                  Ver todos <ChevronRight size={13} />
                </button>
              </div>

              <div className="divide-y divide-[#1E1E1E]">
                {recentStudents.map((student, i) => (
                  <motion.div
                    key={student.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.07 }}
                    className="flex items-center gap-4 px-6 py-4 hover:bg-[#1E1E1E] transition-colors group cursor-pointer"
                  >
                    {/* Avatar */}
                    <div className="relative w-9 h-9 shrink-0">
                      <img src={student.img} alt={student.name} className="w-full h-full object-cover rounded-full" />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-[#F2F2F2] text-[14px] font-medium font-['Inter',sans-serif] truncate">{student.name}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className={`text-[11px] font-medium font-['Inter',sans-serif] ${statusColor(student.status)}`}>
                          {student.status}
                        </span>
                        <span className="text-[#303030]">·</span>
                        <span className="text-[#606060] text-[11px] font-['Inter',sans-serif]">{student.time}</span>
                      </div>
                    </div>

                    {/* Plan badge + arrow */}
                    <div className="flex items-center gap-3 shrink-0">
                      <span className={`text-[10px] tracking-[0.8px] uppercase font-semibold font-['Inter',sans-serif] px-2 py-0.5 rounded-[4px] ${planColor(student.plan)}`}>
                        {student.plan}
                      </span>
                      <ChevronRight size={14} className="text-[#2A2A2A] group-hover:text-[#606060] transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tourists alert panel */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-[#1A1A1A] border border-[#2A2A2A] flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-[#1E1E1E]">
                <div className="flex items-center gap-2">
                  <AlertTriangle size={14} className="text-[#E8400A]" />
                  <h3 className="font-['Bebas_Neue',sans-serif] text-[16px] tracking-[1px] text-[#F2F2F2]">TURISTAS</h3>
                </div>
                <span className="ml-auto bg-[#E8400A]/10 border border-[#E8400A]/20 text-[#E8400A] text-[10px] font-semibold font-['Inter',sans-serif] px-2 py-0.5 rounded-[4px]">
                  15
                </span>
              </div>

              {/* Alert header row */}
              <div className="px-5 py-3 bg-[#E8400A]/5 border-b border-[#1E1E1E] flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E8400A]/20 border border-[#E8400A]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertTriangle size={13} className="text-[#E8400A]" />
                </div>
                <div>
                  <p className="text-white text-[12px] font-medium font-['Inter',sans-serif]">Sem check-in há 10+ dias</p>
                  <p className="text-[#606060] text-[11px] font-['Inter',sans-serif]">Requer atenção imediata</p>
                </div>
              </div>

              {/* Tourist list */}
              <div className="flex-1 divide-y divide-[#1E1E1E]">
                {tourists.map((t, i) => (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.08 }}
                    className="px-5 py-3.5 hover:bg-[#1E1E1E] transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-[#F2F2F2] text-[13px] font-medium font-['Inter',sans-serif]">{t.name}</p>
                      <span className={`text-[10px] tracking-[0.8px] uppercase font-semibold font-['Inter',sans-serif] px-1.5 py-0.5 rounded-[4px] ${planColor(t.plan)}`}>
                        {t.plan}
                      </span>
                    </div>
                    <p className="text-[#606060] text-[11px] font-['Inter',sans-serif] mt-0.5">
                      Último check-in: <span className="text-[#E8400A]">{t.days} dias</span>
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="px-5 py-4 border-t border-[#1E1E1E]">
                <button className="w-full flex items-center justify-center gap-1.5 text-[#E8400A] hover:text-[#FF4D0D] text-[12px] font-['Inter',sans-serif] transition-colors">
                  Ver todos os 15 turistas <ChevronRight size={13} />
                </button>
              </div>
            </motion.div>

          </div>
        </main>
      </div>
    </div>
  );
}