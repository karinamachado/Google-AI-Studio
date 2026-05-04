import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import {
  LayoutDashboard, Users, CheckSquare, MonitorPlay,
  Settings, LogOut, Menu, X,
  UserPlus, Sun, Search, Download, Grid3x3,
  Activity, CalendarDays, CalendarRange, Clock,
} from "lucide-react";
import { CheckInCard, type CheckInStatus } from "../components/CheckInCard";
import forgeeLogoImg from "figma:asset/234239702fd000ad91d5040296534366f62ba051.png";
import imgJoao    from "figma:asset/81e581e8bdbf8c9f2fa02e4c20dce774b1a1bb76.png";
import imgCarlos  from "figma:asset/4631e0b3856fc2d697783d063af0506770940150.png";
import imgMaria   from "figma:asset/c370e1db29c9956574be3ed78df1b2c14bcdb239.png";
import imgAna     from "figma:asset/e243fca66b972890241de9a6542eedb4acdb0d0f.png";

// ── Data ──────────────────────────────────────────────────────────────────────
// checkInDate stored as YYYY-MM-DD for filtering; displayed as DD/MM/YYYY

interface CheckInEntry {
  id: number;
  name: string;
  status: CheckInStatus;
  plan: "BASIC" | "PREMIUM" | "ELITE";
  avatar: string;
  rawDate: string;   // "2026-02-22"
  checkInDate: string; // "22/02/2026"
  checkInTime: string; // "18:45"
}

const ALL_CHECK_INS: CheckInEntry[] = [
  // ── Hoje (22/02/2026) — 15 entradas ──────────────────────────────────────
  { id:  1, name: "Maria Santos",    status: "Em dia",    plan: "PREMIUM", avatar: imgMaria,  rawDate: "2026-02-22", checkInDate: "22/02/2026", checkInTime: "18:45" },
  { id:  2, name: "João Silva",      status: "Em atraso", plan: "BASIC",   avatar: imgJoao,   rawDate: "2026-02-22", checkInDate: "22/02/2026", checkInTime: "18:30" },
  { id:  3, name: "Carlos Oliveira", status: "Vencendo",  plan: "PREMIUM", avatar: imgCarlos, rawDate: "2026-02-22", checkInDate: "22/02/2026", checkInTime: "18:15" },
  { id:  4, name: "Maria Santos",    status: "Em dia",    plan: "PREMIUM", avatar: imgMaria,  rawDate: "2026-02-22", checkInDate: "22/02/2026", checkInTime: "17:00" },
  { id:  5, name: "Ana Costa",       status: "Em dia",    plan: "ELITE",   avatar: imgAna,    rawDate: "2026-02-22", checkInDate: "22/02/2026", checkInTime: "17:30" },
  { id:  6, name: "Maria Santos",    status: "Em dia",    plan: "PREMIUM", avatar: imgMaria,  rawDate: "2026-02-22", checkInDate: "22/02/2026", checkInTime: "16:45" },
  { id:  7, name: "João Silva",      status: "Em atraso", plan: "BASIC",   avatar: imgJoao,   rawDate: "2026-02-22", checkInDate: "22/02/2026", checkInTime: "16:20" },
  { id:  8, name: "Carlos Oliveira", status: "Vencendo",  plan: "PREMIUM", avatar: imgCarlos, rawDate: "2026-02-22", checkInDate: "22/02/2026", checkInTime: "14:30" },
  { id:  9, name: "Maria Santos",    status: "Em dia",    plan: "PREMIUM", avatar: imgMaria,  rawDate: "2026-02-22", checkInDate: "22/02/2026", checkInTime: "13:45" },
  { id: 10, name: "Ana Costa",       status: "Em dia",    plan: "ELITE",   avatar: imgAna,    rawDate: "2026-02-22", checkInDate: "22/02/2026", checkInTime: "13:00" },
  { id: 11, name: "João Silva",      status: "Em atraso", plan: "BASIC",   avatar: imgJoao,   rawDate: "2026-02-22", checkInDate: "22/02/2026", checkInTime: "09:30" },
  { id: 12, name: "Carlos Oliveira", status: "Vencendo",  plan: "PREMIUM", avatar: imgCarlos, rawDate: "2026-02-22", checkInDate: "22/02/2026", checkInTime: "08:45" },
  { id: 13, name: "Maria Santos",    status: "Em dia",    plan: "PREMIUM", avatar: imgMaria,  rawDate: "2026-02-22", checkInDate: "22/02/2026", checkInTime: "08:30" },
  { id: 14, name: "Maria Santos",    status: "Em dia",    plan: "PREMIUM", avatar: imgMaria,  rawDate: "2026-02-22", checkInDate: "22/02/2026", checkInTime: "07:00" },
  { id: 15, name: "João Silva",      status: "Em atraso", plan: "BASIC",   avatar: imgJoao,   rawDate: "2026-02-22", checkInDate: "22/02/2026", checkInTime: "06:45" },
  // ── Esta semana (16-21/02/2026) — 5 entradas extras ──────────────────────
  { id: 16, name: "Ana Costa",       status: "Em dia",    plan: "ELITE",   avatar: imgAna,    rawDate: "2026-02-21", checkInDate: "21/02/2026", checkInTime: "19:00" },
  { id: 17, name: "Carlos Oliveira", status: "Vencendo",  plan: "PREMIUM", avatar: imgCarlos, rawDate: "2026-02-21", checkInDate: "21/02/2026", checkInTime: "09:15" },
  { id: 18, name: "João Silva",      status: "Em atraso", plan: "BASIC",   avatar: imgJoao,   rawDate: "2026-02-20", checkInDate: "20/02/2026", checkInTime: "18:00" },
  { id: 19, name: "Maria Santos",    status: "Em dia",    plan: "PREMIUM", avatar: imgMaria,  rawDate: "2026-02-19", checkInDate: "19/02/2026", checkInTime: "07:30" },
  { id: 20, name: "Ana Costa",       status: "Em dia",    plan: "ELITE",   avatar: imgAna,    rawDate: "2026-02-18", checkInDate: "18/02/2026", checkInTime: "10:00" },
  // ── Este mês (01-15/02/2026) — 5 entradas extras ─────────────────────────
  { id: 21, name: "Carlos Oliveira", status: "Vencendo",  plan: "PREMIUM", avatar: imgCarlos, rawDate: "2026-02-15", checkInDate: "15/02/2026", checkInTime: "17:45" },
  { id: 22, name: "João Silva",      status: "Em atraso", plan: "BASIC",   avatar: imgJoao,   rawDate: "2026-02-12", checkInDate: "12/02/2026", checkInTime: "08:00" },
  { id: 23, name: "Maria Santos",    status: "Em dia",    plan: "PREMIUM", avatar: imgMaria,  rawDate: "2026-02-10", checkInDate: "10/02/2026", checkInTime: "06:50" },
  { id: 24, name: "Ana Costa",       status: "Em dia",    plan: "ELITE",   avatar: imgAna,    rawDate: "2026-02-07", checkInDate: "07/02/2026", checkInTime: "18:30" },
  { id: 25, name: "Carlos Oliveira", status: "Vencendo",  plan: "PREMIUM", avatar: imgCarlos, rawDate: "2026-02-03", checkInDate: "03/02/2026", checkInTime: "09:00" },
];

// Reference "today" — 2026-02-22 to match data
const TODAY     = "2026-02-22";
const WEEK_START = "2026-02-16"; // Mon of that week

const NAV_ITEMS = [
  { id: "dashboard",     label: "Dashboard",      icon: LayoutDashboard, path: "/dashboard"     },
  { id: "alunos",        label: "Alunos",          icon: Users,           path: "/alunos"        },
  { id: "checkins",      label: "Check-ins",       icon: CheckSquare,     path: "/checkins"      },
  { id: "recepcao",      label: "Modo Recepção",   icon: MonitorPlay,     path: "/recepcao"      },
  { id: "configuracoes", label: "Configurações",   icon: Settings,        path: "/configuracoes" },
];

// ── Stat Card ─────────────────────────────────────────────────────────────────

function StatCard({
  label, value, sub, iconBg, iconBorder, iconColor, icon, delay,
}: {
  label: string; value: string; sub: string;
  iconBg: string; iconBorder: string; iconColor: string;
  icon: React.ReactNode; delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#0D0D0D] border border-[#303030] rounded-[14px] px-6 pt-6 pb-5 flex flex-col min-w-0"
    >
      {/* Icon + label */}
      <div className="flex items-center justify-between mb-5">
        <div
          className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center shrink-0"
          style={{ background: iconBg, border: `0.833px solid ${iconBorder}` }}
          aria-hidden="true"
        >
          <span style={{ color: iconColor }}>{icon}</span>
        </div>
        <span className="text-[#606060] text-[12px] tracking-[0.6px] uppercase font-['JetBrains_Mono',sans-serif]">
          {label}
        </span>
      </div>
      {/* Value */}
      <p className="font-['Bebas_Neue',sans-serif] text-[36px] leading-none text-[#F2F2F2] mb-1">
        {value}
      </p>
      {/* Sub */}
      <p className="text-[#A8A8A8] font-['Inter',sans-serif] text-[14px] leading-5">{sub}</p>
    </motion.div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

type TimeTab = "Hoje" | "Semana" | "Mês";

export function CheckIns() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab,   setActiveTab]   = useState<TimeTab>("Hoje");

  // ── Filtering ─────────────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    const inRange = ALL_CHECK_INS.filter((c) => {
      if (activeTab === "Hoje")   return c.rawDate === TODAY;
      if (activeTab === "Semana") return c.rawDate >= WEEK_START && c.rawDate <= TODAY;
      // Mês: same month
      return c.rawDate.startsWith("2026-02");
    });
    const q = searchQuery.trim().toLowerCase();
    if (!q) return inRange;
    return inRange.filter((c) => c.name.toLowerCase().includes(q));
  }, [activeTab, searchQuery]);

  // ── Stats derived from filtered data (per-tab counts) ─────────────────────
  const todayCount  = ALL_CHECK_INS.filter(c => c.rawDate === TODAY).length;
  const weekCount   = ALL_CHECK_INS.filter(c => c.rawDate >= WEEK_START && c.rawDate <= TODAY).length;
  const monthCount  = ALL_CHECK_INS.filter(c => c.rawDate.startsWith("2026-02")).length;

  // ── Sidebar ────────────────────────────────────────────────────────────────
  const Sidebar = ({ mobile = false }: { mobile?: boolean }) => (
    <aside
      className={`${
        mobile ? "fixed inset-y-0 left-0 z-50 w-[220px]" : "hidden lg:flex w-[220px] shrink-0"
      } flex flex-col bg-[#111111] border-r border-[#1E1E1E] h-screen`}
      aria-label="Navegação principal"
    >
      {/* Logo */}
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

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 flex flex-col gap-1" aria-label="Menu de navegação">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = item.id === "checkins";
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
      </nav>

      {/* User */}
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
    <div className="flex h-screen bg-[#0D0D0D] text-white font-['Inter',sans-serif] overflow-hidden">
      <Sidebar />

      {/* Mobile overlay */}
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

      {/* ── Main ────────────────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* ── Top bar ─────────────────────────────────────────────────────── */}
        <motion.header
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
          className="shrink-0 bg-[#0D0D0D] border-b border-[#1E1E1E] px-5 md:px-8 py-4 flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} aria-label="Abrir menu"
              className="lg:hidden text-[#606060] hover:text-white transition-colors">
              <Menu size={22} />
            </button>
            <div>
              <h1 className="font-['Bebas_Neue',sans-serif] text-[28px] md:text-[34px] leading-none tracking-[0.5px] text-[#F2F2F2]">
                CHECK-INS
              </h1>
              <p className="text-[#606060] text-[11px] tracking-[0.6px] uppercase font-['Inter',sans-serif] mt-0.5">
                HISTÓRICO E CONTROLE DE FREQUÊNCIA
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
              className="flex items-center gap-2 bg-[#E8271A] rounded-[8px] px-3 md:px-4 py-2 text-[12px] tracking-[0.6px] uppercase font-['Inter',sans-serif] font-medium text-white transition-colors whitespace-nowrap"
              onClick={() => navigate("/recepcao")}
            >
              <Grid3x3 size={14} />
              <span className="hidden sm:inline">Ativar Recepção</span>
              <span className="sm:hidden">Recepção</span>
            </motion.button>
          </div>
        </motion.header>

        {/* ── Scrollable content ───────────────────────────────────────────── */}
        <main className="flex-1 overflow-y-auto px-5 md:px-8 py-6 space-y-6" aria-label="Conteúdo de check-ins">
          <div className="max-w-[1440px] space-y-6">

            {/* ── Stat cards ───────────────────────────────────────────────── */}
            <section aria-label="Resumo de check-ins">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard label="HOJE"   value={String(todayCount)} sub="Check-ins hoje"
                  iconBg="rgba(232,39,26,0.1)" iconBorder="rgba(232,39,26,0.2)" iconColor="#E8271A"
                  icon={<Activity size={18} />} delay={0.05} />
                <StatCard label="SEMANA" value={String(weekCount)} sub="Esta semana"
                  iconBg="rgba(74,222,128,0.1)" iconBorder="rgba(74,222,128,0.2)" iconColor="#4ADE80"
                  icon={<CalendarDays size={18} />} delay={0.10} />
                <StatCard label="MÊS"    value={String(monthCount)} sub="Este mês"
                  iconBg="rgba(139,92,246,0.1)" iconBorder="rgba(139,92,246,0.2)" iconColor="#8B5CF6"
                  icon={<CalendarRange size={18} />} delay={0.15} />
                <StatCard label="PICO"   value="18:00-19:00" sub="Horário de pico"
                  iconBg="rgba(251,191,36,0.1)" iconBorder="rgba(251,191,36,0.2)" iconColor="#FBBF24"
                  icon={<Clock size={18} />} delay={0.20} />
              </div>
            </section>

            {/* ── Histórico panel ─────────────────────────────────────────── */}
            <motion.section
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              aria-label="Histórico de check-ins"
              className="bg-[#111111] border border-[#1E1E1E] rounded-[12px] p-5 md:p-6 space-y-5"
            >
              {/* ── Header row ───────────────────────────────────────────── */}
              <div className="flex flex-wrap items-center justify-between gap-3 min-h-[36px]">

                {/* Title */}
                <h2 className="font-['Barlow_Condensed',sans-serif] font-bold text-[20px] leading-7 tracking-[-0.5px] text-[#F2F2F2] not-italic">
                  HISTÓRICO DE CHECK-INS
                </h2>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-wrap">
                  {/* Baixar Relatório */}
                  <motion.button
                    whileHover={{ backgroundColor: "#FF4D0D" }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 bg-[#E8271A] rounded-[10px] h-[36px] px-4 text-[14px] font-medium font-['Inter',sans-serif] text-white transition-colors whitespace-nowrap"
                    aria-label="Baixar relatório de check-ins"
                  >
                    <Download size={15} />
                    <span className="hidden sm:inline">Baixar Relatório</span>
                    <span className="sm:hidden">Baixar</span>
                  </motion.button>

                  {/* Time tabs — standalone buttons per Figma */}
                  <div
                    role="tablist"
                    aria-label="Período de filtro"
                    className="flex items-center gap-2"
                  >
                    {(["Hoje", "Semana", "Mês"] as TimeTab[]).map((tab) => {
                      const isActive = activeTab === tab;
                      return (
                        <button
                          key={tab}
                          role="tab"
                          aria-selected={isActive}
                          onClick={() => setActiveTab(tab)}
                          className={`h-[36px] px-4 rounded-[10px] text-[14px] font-medium font-['Inter',sans-serif] transition-colors whitespace-nowrap ${
                            isActive
                              ? "bg-[#E8271A] text-white"
                              : "bg-[#1A1A1A] text-[#606060] hover:text-[#A8A8A8] hover:bg-[#222222]"
                          }`}
                        >
                          {tab}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* ── Search ──────────────────────────────────────────────────── */}
              <div className="relative">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#606060] pointer-events-none" aria-hidden="true" />
                <input
                  type="search"
                  aria-label="Buscar aluno"
                  placeholder="Buscar por nome do aluno..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#1A1A1A] border border-[#303030] rounded-[10px] pl-12 pr-4 py-3 text-[14px] font-['Inter',sans-serif] text-[#F2F2F2] placeholder-[#606060] outline-none focus:border-[#E8400A] focus:ring-1 focus:ring-[#E8400A]/20 transition-all"
                />
              </div>

              {/* ── Check-in list ────────────────────────────────────────────── */}
              <div role="list" className="space-y-[8px]">
                <AnimatePresence>
                  {filtered.length > 0 ? (
                    filtered.map((item, i) => (
                      <CheckInCard
                        key={item.id}
                        {...item}
                        delay={i * 0.025}
                      />
                    ))
                  ) : (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="py-14 text-center"
                    >
                      <p className="text-[#606060] font-['Inter',sans-serif] text-[14px]">
                        Nenhum check-in encontrado
                        {searchQuery ? ` para "${searchQuery}"` : ""}.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ── Footer count ─────────────────────────────────────────────── */}
              {filtered.length > 0 && (
                <p className="text-[#606060] text-[13px] font-['Inter',sans-serif] text-right pt-1">
                  {filtered.length} {filtered.length === 1 ? "registro" : "registros"}
                </p>
              )}
            </motion.section>
          </div>
        </main>
      </div>
    </div>
  );
}