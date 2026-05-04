import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import {
  LayoutDashboard, Users, CheckSquare, MonitorPlay,
  Settings, LogOut, Menu, X, UserPlus, Sun, Grid3x3,
  Building2, ShieldCheck, Phone, Mail, MapPin, Eye, EyeOff,
  DollarSign, Clock, CalendarDays, Save, Plus, Trash2,
  Palette, ChevronDown,
} from "lucide-react";
import forgeeLogoImg from "figma:asset/234239702fd000ad91d5040296534366f62ba051.png";

// ── Types ─────────────────────────────────────────────────────────────────────

type TabId = "geral" | "perfil" | "planos" | "sistema";

interface Plan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  benefits: string[];
  highlighted: boolean;
  color: string;
}

// ── Initial State ─────────────────────────────────────────────────────────────

const INIT_GERAL = {
  nome: "FORGEE Academy",
  cnpj: "12.345.678/0001-90",
  telefone: "(11) 3456-7890",
  email: "contato@forgee.com.br",
  endereco: "Rua das Academias, 123 - Centro",
  cidade: "Indaiatuba",
  estado: "SP",
  cep: "13330-000",
};

const INIT_PERFIL = {
  nome: "Admin FORGEE",
  email: "admin@forgee.com.br",
  telefone: "(11) 98765-4321",
};

const INIT_PLANS: Plan[] = [
  {
    id: "basic", name: "BASIC", subtitle: "Plano básico", price: "89.90",
    benefits: ["Acesso à área de musculação", "Horário livre", "Armário individual"],
    highlighted: false, color: "#A8A8A8",
  },
  {
    id: "premium", name: "PREMIUM", subtitle: "Plano mais popular", price: "199.90",
    benefits: ["Tudo do plano BASIC", "Aulas coletivas ilimitadas", "Avaliação física mensal", "Treino personalizado"],
    highlighted: true, color: "#E8271A",
  },
  {
    id: "elite", name: "ELITE", subtitle: "Plano completo", price: "299.90",
    benefits: ["Tudo do plano PREMIUM", "Personal trainer 2x por semana", "Acompanhamento nutricional", "Acesso a unidades parceiras", "Bebidas proteicas gratuitas"],
    highlighted: false, color: "#FBBF24",
  },
];

const INIT_SISTEMA = {
  abertura: "06:00",
  fechamento: "22:00",
  diasRisco: "10",
  diasVencimento: "5",
};

// ── Nav config ────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { id: "dashboard",     label: "Dashboard",        icon: LayoutDashboard, path: "/dashboard"     },
  { id: "alunos",        label: "Alunos",            icon: Users,           path: "/alunos"        },
  { id: "checkins",      label: "Check-ins",         icon: CheckSquare,     path: "/checkins"      },
  { id: "recepcao",      label: "Modo Recepção",     icon: MonitorPlay,     path: "/recepcao"      },
  { id: "configuracoes", label: "Configurações",     icon: Settings,        path: "/configuracoes" },
];

const TAB_LIST: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: "geral",   label: "Geral",        icon: <Building2 size={15} /> },
  { id: "perfil",  label: "Perfil Admin", icon: <Users size={15} />     },
  { id: "planos",  label: "Planos",       icon: <DollarSign size={15} />},
  { id: "sistema", label: "Sistema",      icon: <Settings size={15} />  },
];

// ── Reusable UI ───────────────────────────────────────────────────────────────

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-[#F2F2F2] font-['Inter',sans-serif] font-medium text-[14px] leading-5">
      {children}
    </label>
  );
}

function ConfigInput({
  icon,
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
  rightSlot,
  disabled,
}: {
  icon?: React.ReactNode;
  type?: string;
  value: string;
  onChange?: (v: string) => void;
  placeholder?: string;
  className?: string;
  rightSlot?: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <div className={`relative flex items-center bg-[#0D0D0D] border border-[#303030] rounded-[10px] h-[46px] transition-colors focus-within:border-[#E8400A]/60 focus-within:ring-1 focus-within:ring-[#E8400A]/20 ${className}`}>
      {icon && (
        <div className="shrink-0 pl-4 pr-3 text-[#606060]" aria-hidden="true">{icon}</div>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        placeholder={placeholder}
        disabled={disabled}
        className={`flex-1 bg-transparent text-[#F2F2F2] font-['Inter',sans-serif] text-[14px] outline-none placeholder-[#606060] disabled:text-[#606060] ${icon ? "" : "pl-4"} ${rightSlot ? "pr-2" : "pr-4"}`}
      />
      {rightSlot && <div className="shrink-0 pr-3">{rightSlot}</div>}
    </div>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-6">
      <h2 className="font-['Barlow_Condensed',sans-serif] font-bold text-[20px] leading-none tracking-[-0.4px] text-[#F2F2F2] uppercase">
        {title}
      </h2>
      <p className="text-[#A8A8A8] font-['Inter',sans-serif] text-[14px] mt-1.5">{subtitle}</p>
    </div>
  );
}

function Divider() {
  return <div className="border-t border-[#252525] my-6" aria-hidden="true" />;
}

function PanelActions({
  onCancel,
  onSave,
  saving,
}: {
  onCancel: () => void;
  onSave: () => void;
  saving?: boolean;
}) {
  return (
    <div className="flex items-center justify-end gap-3 pt-5 border-t border-[#252525]">
      <button
        onClick={onCancel}
        className="h-10 px-6 border border-[#303030] rounded-[10px] text-[#F2F2F2] font-['Inter',sans-serif] text-[14px] font-medium hover:border-[#505050] hover:bg-[#1A1A1A] transition-all"
      >
        Cancelar
      </button>
      <motion.button
        whileHover={{ backgroundColor: "#FF4D0D" }}
        whileTap={{ scale: 0.97 }}
        onClick={onSave}
        disabled={saving}
        className="flex items-center gap-2 h-10 px-6 bg-[#E8271A] rounded-[10px] text-white font-['Inter',sans-serif] text-[14px] font-medium transition-colors disabled:opacity-60"
      >
        <Save size={15} />
        Salvar Alterações
      </motion.button>
    </div>
  );
}

// ── Unsaved changes modal ─────────────────────────────────────────────────────

function UnsavedModal({
  onContinue,
  onStay,
}: {
  onContinue: () => void;
  onStay: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onStay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="unsaved-title"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 16 }}
        transition={{ type: "spring", damping: 26, stiffness: 340 }}
        className="bg-[#1A1A1A] border border-[#303030] rounded-[14px] p-6 w-full max-w-[380px] space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h3 id="unsaved-title" className="font-['Barlow_Condensed',sans-serif] font-bold text-[20px] leading-none text-[#F2F2F2] uppercase">
            Alterações não salvas
          </h3>
          <p className="text-[#A8A8A8] font-['Inter',sans-serif] text-[14px] mt-2 leading-relaxed">
            Você tem alterações não salvas. Deseja continuar e descartá-las?
          </p>
        </div>
        <div className="flex gap-3 pt-1">
          <button onClick={onStay}
            className="flex-1 h-10 border border-[#303030] rounded-[10px] text-[#A8A8A8] font-['Inter',sans-serif] text-[14px] font-medium hover:border-[#505050] hover:text-[#F2F2F2] transition-all">
            Ficar nesta aba
          </button>
          <button onClick={onContinue}
            className="flex-1 h-10 bg-[#E8271A] rounded-[10px] text-white font-['Inter',sans-serif] text-[14px] font-medium hover:bg-[#FF4D0D] transition-colors">
            Continuar
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Criar Plano Modal ─────────────────────────────────────────────────────────

function CriarPlanoModal({
  onClose,
  onCreate,
}: {
  onClose: () => void;
  onCreate: (plan: Plan) => void;
}) {
  const [nome,        setNome]        = useState("");
  const [preco,       setPreco]       = useState("");
  const [descricao,   setDescricao]   = useState("");
  const [destaque,    setDestaque]    = useState(false);

  const handleCreate = () => {
    if (!nome.trim()) { toast.error("Nome do plano é obrigatório."); return; }
    const p = parseFloat(preco);
    if (!preco || isNaN(p) || p <= 0) { toast.error("Informe um preço válido maior que zero."); return; }
    const newPlan: Plan = {
      id: `plan-${Date.now()}`,
      name: nome.toUpperCase(),
      subtitle: descricao || "Novo plano",
      price: p.toFixed(2),
      benefits: [],
      highlighted: destaque,
      color: "#A8A8A8",
    };
    onCreate(newPlan);
    onClose();
    toast.success(`Plano "${newPlan.name}" criado com sucesso!`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="criar-plano-title"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 16 }}
        transition={{ type: "spring", damping: 26, stiffness: 340 }}
        className="bg-[#1A1A1A] border border-[#303030] rounded-[14px] p-7 w-full max-w-[600px] space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h3 id="criar-plano-title" className="font-['Barlow_Condensed',sans-serif] font-bold text-[20px] tracking-[-0.3px] text-[#F2F2F2] uppercase">
            Criar Novo Plano
          </h3>
          <button onClick={onClose} aria-label="Fechar" className="text-[#606060] hover:text-[#F2F2F2] transition-colors">
            <X size={18} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <FieldLabel>Nome do Plano</FieldLabel>
            <ConfigInput value={nome} onChange={setNome} placeholder="Ex: PREMIUM" />
          </div>
          <div className="flex flex-col gap-2">
            <FieldLabel>Preço Mensal</FieldLabel>
            <ConfigInput
              icon={<DollarSign size={16} />}
              type="number"
              value={preco}
              onChange={setPreco}
              placeholder="0.00"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <FieldLabel>Descrição</FieldLabel>
          <ConfigInput value={descricao} onChange={setDescricao} placeholder="Breve descrição do plano" />
        </div>

        <label className="flex items-center gap-3 cursor-pointer group w-fit">
          <div
            onClick={() => setDestaque(!destaque)}
            className={`w-4 h-4 rounded-[4px] border flex items-center justify-center transition-all ${
              destaque
                ? "bg-[#E8271A] border-[#E8271A]"
                : "bg-[#0D0D0D] border-[#303030] group-hover:border-[#505050]"
            }`}
          >
            {destaque && (
              <svg width="9" height="7" viewBox="0 0 9 7" fill="none" aria-hidden="true">
                <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
          <span className="text-[#F2F2F2] font-['Inter',sans-serif] text-[14px]">
            Marcar como plano em destaque
          </span>
        </label>

        <div className="flex items-center justify-end gap-3 pt-2 border-t border-[#252525]">
          <button
            onClick={onClose}
            className="h-10 px-5 border border-[#303030] rounded-[10px] text-[#F2F2F2] font-['Inter',sans-serif] text-[14px] font-medium hover:border-[#505050] hover:bg-[#222] transition-all"
          >
            Cancelar
          </button>
          <motion.button
            whileHover={{ backgroundColor: "#FF4D0D" }} whileTap={{ scale: 0.97 }}
            onClick={handleCreate}
            className="flex items-center gap-2 h-10 px-5 bg-[#E8271A] rounded-[10px] text-white font-['Inter',sans-serif] text-[14px] font-medium transition-colors"
          >
            <Plus size={15} /> Criar Plano
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── TAB 1: Geral ──────────────────────────────────────────────────────────────

function TabGeral() {
  const [form,  setForm]  = useState({ ...INIT_GERAL });
  const [dirty, setDirty] = useState(false);

  const update = (key: keyof typeof INIT_GERAL, val: string) => {
    setForm((f) => ({ ...f, [key]: val }));
    setDirty(true);
  };

  const handleSave = () => {
    toast.success("Configurações salvas com sucesso.");
    setDirty(false);
  };

  const handleCancel = () => {
    setForm({ ...INIT_GERAL });
    setDirty(false);
  };

  return (
    <motion.div
      key="geral"
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-6"
    >
      <SectionTitle
        title="INFORMAÇÕES DA ACADEMIA"
        subtitle="Configure os dados básicos da sua academia"
      />

      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <FieldLabel>Nome da Academia</FieldLabel>
          <ConfigInput icon={<Building2 size={16} />} value={form.nome}
            onChange={(v) => update("nome", v)} placeholder="Nome da academia" />
        </div>
        <div className="flex flex-col gap-2">
          <FieldLabel>CNPJ</FieldLabel>
          <ConfigInput icon={<ShieldCheck size={16} />} value={form.cnpj}
            onChange={(v) => update("cnpj", v)} placeholder="00.000.000/0000-00" />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <FieldLabel>Telefone</FieldLabel>
          <ConfigInput icon={<Phone size={16} />} value={form.telefone}
            onChange={(v) => update("telefone", v)} placeholder="(11) 0000-0000" />
        </div>
        <div className="flex flex-col gap-2">
          <FieldLabel>Email</FieldLabel>
          <ConfigInput icon={<Mail size={16} />} type="email" value={form.email}
            onChange={(v) => update("email", v)} placeholder="contato@academia.com.br" />
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex flex-col gap-2">
        <FieldLabel>Endereço</FieldLabel>
        <ConfigInput icon={<MapPin size={16} />} value={form.endereco}
          onChange={(v) => update("endereco", v)} placeholder="Rua, número - Bairro" />
      </div>

      {/* Row 4 */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-2">
          <FieldLabel>Cidade</FieldLabel>
          <ConfigInput value={form.cidade}
            onChange={(v) => update("cidade", v)} placeholder="Cidade" />
        </div>
        <div className="flex flex-col gap-2">
          <FieldLabel>Estado</FieldLabel>
          <ConfigInput value={form.estado}
            onChange={(v) => update("estado", v)} placeholder="UF" />
        </div>
        <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
          <FieldLabel>CEP</FieldLabel>
          <ConfigInput value={form.cep}
            onChange={(v) => update("cep", v)} placeholder="00000-000" />
        </div>
      </div>

      <PanelActions onCancel={handleCancel} onSave={handleSave} />
    </motion.div>
  );
}

// ── TAB 2: Perfil Admin ───────────────────────────────────────────────────────

function TabPerfil() {
  const [perfil,    setPerfil]    = useState({ ...INIT_PERFIL });
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha,  setNovaSenha]  = useState("");
  const [showAtual,  setShowAtual]  = useState(false);
  const [showNova,   setShowNova]   = useState(false);
  const [dirty,      setDirty]      = useState(false);

  const updatePerfil = (k: keyof typeof INIT_PERFIL, v: string) => {
    setPerfil((p) => ({ ...p, [k]: v }));
    setDirty(true);
  };

  const handleSave = () => {
    if (novaSenha && !senhaAtual) {
      toast.error("Informe a senha atual para definir uma nova senha.");
      return;
    }
    if (novaSenha && novaSenha.length < 6) {
      toast.error("A nova senha deve ter no mínimo 6 caracteres.");
      return;
    }
    toast.success("Configurações salvas com sucesso.");
    setSenhaAtual("");
    setNovaSenha("");
    setDirty(false);
  };

  const handleCancel = () => {
    setPerfil({ ...INIT_PERFIL });
    setSenhaAtual("");
    setNovaSenha("");
    setDirty(false);
  };

  return (
    <motion.div
      key="perfil"
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-6"
    >
      <SectionTitle
        title="PERFIL DO ADMINISTRADOR"
        subtitle="Gerencie suas informações pessoais e credenciais"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <FieldLabel>Nome Completo</FieldLabel>
          <ConfigInput icon={<Users size={16} />} value={perfil.nome}
            onChange={(v) => updatePerfil("nome", v)} placeholder="Seu nome completo" />
        </div>
        <div className="flex flex-col gap-2">
          <FieldLabel>Email</FieldLabel>
          <ConfigInput icon={<Mail size={16} />} type="email" value={perfil.email}
            onChange={(v) => updatePerfil("email", v)} placeholder="admin@academia.com.br" />
        </div>
      </div>

      <div className="flex flex-col gap-2 max-w-[50%]">
        <FieldLabel>Telefone</FieldLabel>
        <ConfigInput icon={<Phone size={16} />} value={perfil.telefone}
          onChange={(v) => updatePerfil("telefone", v)} placeholder="(11) 00000-0000" />
      </div>

      <Divider />

      <SectionTitle
        title="ALTERAR SENHA"
        subtitle=""
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <FieldLabel>Senha Atual</FieldLabel>
          <ConfigInput
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="#606060" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#606060" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            type={showAtual ? "text" : "password"}
            value={senhaAtual}
            onChange={(v) => { setSenhaAtual(v); setDirty(true); }}
            placeholder="Digite sua senha atual"
            rightSlot={
              <button type="button" onClick={() => setShowAtual(!showAtual)}
                aria-label={showAtual ? "Ocultar senha" : "Mostrar senha"}
                className="text-[#606060] hover:text-[#A8A8A8] transition-colors">
                {showAtual ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <FieldLabel>Nova Senha</FieldLabel>
          <ConfigInput
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="#606060" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#606060" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            type={showNova ? "text" : "password"}
            value={novaSenha}
            onChange={(v) => { setNovaSenha(v); setDirty(true); }}
            placeholder="Digite a nova senha"
            rightSlot={
              <button type="button" onClick={() => setShowNova(!showNova)}
                aria-label={showNova ? "Ocultar senha" : "Mostrar senha"}
                className="text-[#606060] hover:text-[#A8A8A8] transition-colors">
                {showNova ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            }
          />
        </div>
      </div>

      <PanelActions onCancel={handleCancel} onSave={handleSave} />
    </motion.div>
  );
}

// ── TAB 3: Planos ─────────────────────────────────────────────────────────────

function PlanCard({
  plan,
  onPriceChange,
  onAddBenefit,
  onEditBenefit,
  onRemoveBenefit,
}: {
  plan: Plan;
  onPriceChange: (id: string, price: string) => void;
  onAddBenefit: (id: string) => void;
  onEditBenefit: (id: string, i: number, val: string) => void;
  onRemoveBenefit: (id: string, i: number) => void;
}) {
  return (
    <div className={`bg-[#0D0D0D] border rounded-[12px] p-5 space-y-4 transition-colors ${
      plan.highlighted ? "border-[#E8271A]/40" : "border-[#252525]"
    }`}>
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-['Barlow_Condensed',sans-serif] font-bold text-[22px] leading-none tracking-[-0.4px] uppercase"
            style={{ color: plan.color }}>
            {plan.name}
          </p>
          <p className="text-[#606060] font-['Inter',sans-serif] text-[13px] mt-1">{plan.subtitle}</p>
        </div>
        {/* Price input */}
        <div className="flex items-center gap-2 shrink-0">
          <DollarSign size={15} className="text-[#606060]" />
          <input
            type="number"
            value={plan.price}
            onChange={(e) => onPriceChange(plan.id, e.target.value)}
            className="w-[96px] bg-[#1A1A1A] border border-[#303030] rounded-[8px] px-3 h-9 text-[#F2F2F2] font-['Inter',sans-serif] text-[14px] text-right outline-none focus:border-[#E8400A]/60 focus:ring-1 focus:ring-[#E8400A]/20 transition-all tabular-nums"
          />
        </div>
      </div>

      {/* Benefits list */}
      <ul className="space-y-2" aria-label={`Benefícios do plano ${plan.name}`}>
        {plan.benefits.map((b, i) => (
          <li key={i} className="flex items-center gap-2 group">
            <span className="text-[#606060] text-[16px] shrink-0 leading-none" aria-hidden="true">•</span>
            <input
              type="text"
              value={b}
              onChange={(e) => onEditBenefit(plan.id, i, e.target.value)}
              className="flex-1 bg-transparent text-[#A8A8A8] font-['Inter',sans-serif] text-[14px] outline-none border-b border-transparent hover:border-[#303030] focus:border-[#E8400A]/50 transition-colors py-0.5"
              aria-label={`Benefício ${i + 1} do plano ${plan.name}`}
            />
            <button
              onClick={() => onRemoveBenefit(plan.id, i)}
              aria-label="Remover benefício"
              className="opacity-0 group-hover:opacity-100 text-[#606060] hover:text-[#E8271A] transition-all shrink-0"
            >
              <Trash2 size={13} />
            </button>
          </li>
        ))}
      </ul>

      {/* Add benefit */}
      <button
        onClick={() => onAddBenefit(plan.id)}
        className="flex items-center gap-2 text-[#606060] hover:text-[#E8271A] font-['Inter',sans-serif] text-[13px] transition-colors mt-1"
      >
        <Plus size={13} />
        Adicionar benefício
      </button>
    </div>
  );
}

function TabPlanos() {
  const [plans,      setPlans]      = useState<Plan[]>(INIT_PLANS.map((p) => ({ ...p, benefits: [...p.benefits] })));
  const [showModal,  setShowModal]  = useState(false);
  const [dirty,      setDirty]      = useState(false);

  const handlePriceChange = (id: string, price: string) => {
    setPlans((ps) => ps.map((p) => p.id === id ? { ...p, price } : p));
    setDirty(true);
  };

  const handleAddBenefit = (id: string) => {
    setPlans((ps) => ps.map((p) => p.id === id ? { ...p, benefits: [...p.benefits, "Novo benefício"] } : p));
    setDirty(true);
  };

  const handleEditBenefit = (id: string, i: number, val: string) => {
    setPlans((ps) => ps.map((p) => {
      if (p.id !== id) return p;
      const benefits = [...p.benefits];
      benefits[i] = val;
      return { ...p, benefits };
    }));
    setDirty(true);
  };

  const handleRemoveBenefit = (id: string, i: number) => {
    setPlans((ps) => ps.map((p) => {
      if (p.id !== id) return p;
      const benefits = p.benefits.filter((_, idx) => idx !== i);
      return { ...p, benefits };
    }));
    setDirty(true);
  };

  const handleCreate = (plan: Plan) => {
    setPlans((ps) => [...ps, plan]);
    setDirty(true);
  };

  const handleSave = () => {
    toast.success("Planos e preços salvos com sucesso.");
    setDirty(false);
  };

  const handleCancel = () => {
    setPlans(INIT_PLANS.map((p) => ({ ...p, benefits: [...p.benefits] })));
    setDirty(false);
  };

  return (
    <motion.div
      key="planos"
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-5"
    >
      <SectionTitle
        title="PLANOS E PREÇOS"
        subtitle="Configure os planos disponíveis para os alunos. As alterações refletem em todo o sistema."
      />

      <div className="space-y-4">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            onPriceChange={handlePriceChange}
            onAddBenefit={handleAddBenefit}
            onEditBenefit={handleEditBenefit}
            onRemoveBenefit={handleRemoveBenefit}
          />
        ))}
      </div>

      {/* Create new plan button */}
      <motion.button
        whileHover={{ borderColor: "#E8271A", color: "#E8271A" }} whileTap={{ scale: 0.98 }}
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 h-10 px-5 border border-[#303030] rounded-[10px] text-[#A8A8A8] font-['Inter',sans-serif] text-[14px] font-medium transition-all"
      >
        <Plus size={15} /> Criar Novo Plano
      </motion.button>

      <PanelActions onCancel={handleCancel} onSave={handleSave} />

      <AnimatePresence>
        {showModal && (
          <CriarPlanoModal onClose={() => setShowModal(false)} onCreate={handleCreate} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── TAB 4: Sistema ────────────────────────────────────────────────────────────

function TabSistema() {
  const [form,  setForm]  = useState({ ...INIT_SISTEMA });
  const [dirty, setDirty] = useState(false);

  const update = (k: keyof typeof INIT_SISTEMA, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setDirty(true);
  };

  const handleSave = () => {
    if (form.abertura && form.fechamento && form.abertura >= form.fechamento) {
      toast.error("Horário de fechamento deve ser posterior ao de abertura.");
      return;
    }
    toast.success("Configurações salvas com sucesso.");
    setDirty(false);
  };

  const handleCancel = () => {
    setForm({ ...INIT_SISTEMA });
    setDirty(false);
  };

  return (
    <motion.div
      key="sistema"
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-8"
    >
      <SectionTitle
        title="CONFIGURAÇÕES DO SISTEMA"
        subtitle="Configure parâmetros operacionais do sistema"
      />

      {/* Horário de funcionamento */}
      <section aria-labelledby="horario-title">
        <h3 id="horario-title" className="font-['Inter',sans-serif] font-medium text-[16px] text-[#F2F2F2] mb-4">
          Horário de Funcionamento
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <FieldLabel>Abertura</FieldLabel>
            <ConfigInput
              icon={<Clock size={16} />}
              type="time"
              value={form.abertura}
              onChange={(v) => update("abertura", v)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <FieldLabel>Fechamento</FieldLabel>
            <ConfigInput
              icon={<Clock size={16} />}
              type="time"
              value={form.fechamento}
              onChange={(v) => update("fechamento", v)}
            />
          </div>
        </div>
      </section>

      <Divider />

      {/* Alertas automáticos */}
      <section aria-labelledby="alertas-title">
        <h3 id="alertas-title" className="font-['Inter',sans-serif] font-medium text-[16px] text-[#F2F2F2] mb-4">
          Alertas Automáticos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <FieldLabel>Dias sem check-in para risco</FieldLabel>
            <ConfigInput
              icon={<CalendarDays size={16} />}
              type="number"
              value={form.diasRisco}
              onChange={(v) => update("diasRisco", v)}
              placeholder="10"
            />
            <p className="text-[#606060] font-['Inter',sans-serif] text-[12px] mt-1">
              Dias sem frequência para considerar aluno em risco
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <FieldLabel>Dias antes do vencimento para alertar</FieldLabel>
            <ConfigInput
              icon={<CalendarDays size={16} />}
              type="number"
              value={form.diasVencimento}
              onChange={(v) => update("diasVencimento", v)}
              placeholder="5"
            />
            <p className="text-[#606060] font-['Inter',sans-serif] text-[12px] mt-1">
              Antecedência para notificar vencimento
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* Informações do sistema */}
      <section aria-labelledby="sysinfo-title">
        <h3 id="sysinfo-title" className="font-['Inter',sans-serif] font-medium text-[16px] text-[#F2F2F2] mb-4">
          Informações do Sistema
        </h3>
        <div className="bg-[#0D0D0D] border border-[#252525] rounded-[12px] overflow-hidden">
          {[
            { label: "Versão:",             value: "1.0.0",                    valueClass: "text-[#F2F2F2]" },
            { label: "Última atualização:", value: "23 de fevereiro, 2026",    valueClass: "text-[#F2F2F2]" },
            { label: "Banco de dados:",     value: "Conectado",                valueClass: "text-[#4ADE80]" },
          ].map((row, i) => (
            <div
              key={i}
              className={`flex items-center justify-between px-5 py-3.5 font-['Inter',sans-serif] ${
                i < 2 ? "border-b border-[#1E1E1E]" : ""
              }`}
            >
              <span className="text-[#A8A8A8] text-[14px]">{row.label}</span>
              <span className={`text-[14px] tabular-nums ${row.valueClass}`}>{row.value}</span>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Design System */}
      <section aria-labelledby="ds-title">
        <h3 id="ds-title" className="font-['Inter',sans-serif] font-medium text-[16px] text-[#F2F2F2] mb-4">
          Design System
        </h3>
        <div className="bg-[#0D0D0D] border border-[#252525] rounded-[12px] p-5 space-y-4">
          <p className="text-[#A8A8A8] font-['Inter',sans-serif] text-[14px] leading-relaxed">
            Acesse a documentação completa do Design System com tokens, componentes e guias de estilo.
          </p>
          <motion.button
            whileHover={{ backgroundColor: "#FF4D0D" }} whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 h-10 px-5 bg-[#E8271A] rounded-[10px] text-white font-['Inter',sans-serif] text-[14px] font-medium transition-colors"
            onClick={() => toast.info("Design System em construção.")}
          >
            <Palette size={15} />
            Abrir Design System
          </motion.button>
        </div>
      </section>

      <PanelActions onCancel={handleCancel} onSave={handleSave} />
    </motion.div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export function Configuracoes() {
  const navigate     = useNavigate();
  const [activeTab,   setActiveTab]   = useState<TabId>("geral");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pendingTab,  setPendingTab]  = useState<TabId | null>(null);
  const [showUnsaved, setShowUnsaved] = useState(false);

  // Simple unsaved tracker per tab (we'll just prompt on every tab switch as a UX safeguard)
  const [tabDirty, setTabDirty] = useState<Record<TabId, boolean>>({
    geral: false, perfil: false, planos: false, sistema: false,
  });

  const handleTabClick = (tabId: TabId) => {
    if (tabId === activeTab) return;
    // Check if current tab has unsaved changes
    if (tabDirty[activeTab]) {
      setPendingTab(tabId);
      setShowUnsaved(true);
    } else {
      setActiveTab(tabId);
    }
  };

  const confirmTabSwitch = () => {
    if (pendingTab) {
      setTabDirty((d) => ({ ...d, [activeTab]: false }));
      setActiveTab(pendingTab);
      setPendingTab(null);
    }
    setShowUnsaved(false);
  };

  const cancelTabSwitch = () => {
    setPendingTab(null);
    setShowUnsaved(false);
  };

  // ── Sidebar ─────────────────────────────────────────────────────────────────

  const SidebarContent = ({ mobile = false }: { mobile?: boolean }) => (
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
          const isActive = item.id === "configuracoes";
          return (
            <button
              key={item.id}
              onClick={() => {
                if (item.path !== "#") navigate(item.path);
                if (mobile) setSidebarOpen(false);
              }}
              aria-current={isActive ? "page" : undefined}
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
        <button
          onClick={() => navigate("/")}
          className="w-full flex items-center gap-2 px-3 py-2 text-[#606060] hover:text-[#E8400A] hover:bg-[#1E1E1E] rounded-[8px] transition-all text-sm font-['Inter',sans-serif]"
        >
          <LogOut size={14} /> Sair
        </button>
      </div>
    </aside>
  );

  return (
    <div
      className="flex h-screen bg-[#0D0D0D] text-white font-['Inter',sans-serif] overflow-hidden"
      onClick={() => {}}
    >
      <SidebarContent />

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setSidebarOpen(false)} aria-hidden="true"
            />
            <motion.div
              initial={{ x: -240 }} animate={{ x: 0 }} exit={{ x: -240 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="lg:hidden"
            >
              <SidebarContent mobile />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Main ─────────────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* ── Top bar ──────────────────────────────────────────────────── */}
        <motion.header
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="shrink-0 bg-[#0D0D0D] border-b border-[#1E1E1E] px-5 md:px-8 py-4 flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              aria-label="Abrir menu"
              className="lg:hidden text-[#606060] hover:text-white transition-colors"
            >
              <Menu size={22} />
            </button>
            <div>
              <h1 className="font-['Bebas_Neue',sans-serif] text-[28px] md:text-[34px] leading-none tracking-[0.5px] text-[#F2F2F2]">
                CONFIGURAÇÕES
              </h1>
              <p className="text-[#606060] text-[11px] tracking-[0.6px] uppercase font-['Inter',sans-serif] mt-0.5">
                CONFIGURAÇÕES DO SISTEMA
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              aria-label="Alternar tema"
              className="w-9 h-9 flex items-center justify-center border border-[#303030] text-[#606060] hover:text-white hover:border-[#505050] transition-colors rounded-[8px]"
            >
              <Sun size={16} />
            </button>
            <motion.button
              whileHover={{ backgroundColor: "#1E1E1E" }} whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/novo-aluno")}
              className="hidden sm:flex items-center gap-2 border border-[#303030] rounded-[8px] px-4 py-2 text-[12px] tracking-[0.6px] uppercase font-['Inter',sans-serif] font-medium text-[#F2F2F2] transition-colors"
            >
              <UserPlus size={14} /> Novo Aluno
            </motion.button>
            <motion.button
              whileHover={{ backgroundColor: "#FF4D0D" }} whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/recepcao")}
              className="flex items-center gap-2 bg-[#E8271A] rounded-[8px] px-3 md:px-4 py-2 text-[12px] tracking-[0.6px] uppercase font-['Inter',sans-serif] font-medium text-white transition-colors whitespace-nowrap"
            >
              <Grid3x3 size={14} />
              <span className="hidden sm:inline">Ativar Recepção</span>
              <span className="sm:hidden">Recepção</span>
            </motion.button>
          </div>
        </motion.header>

        {/* ── Scrollable content ────────────────────────────────────────── */}
        <main className="flex-1 overflow-y-auto px-5 md:px-8 py-6">
          <div className="max-w-[900px] space-y-6">

            {/* Page heading */}
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <h2 className="font-['Bebas_Neue',sans-serif] text-[40px] md:text-[48px] leading-none tracking-[-0.5px] text-[#F2F2F2]">
                CONFIGURAÇÕES
              </h2>
              <p className="text-[#A8A8A8] font-['Inter',sans-serif] text-[16px] mt-1">
                Gerencie as configurações da academia
              </p>
            </motion.div>

            {/* ── Tabs ────────────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.35 }}
              className="flex items-center gap-1 flex-wrap"
              role="tablist"
              aria-label="Configurações"
            >
              {TAB_LIST.map((tab) => {
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`tab-panel-${tab.id}`}
                    onClick={() => handleTabClick(tab.id)}
                    className={`flex items-center gap-2 h-9 px-4 rounded-[10px] font-['Inter',sans-serif] text-[14px] font-medium transition-all whitespace-nowrap ${
                      isActive
                        ? "bg-[#E8271A] text-white"
                        : "text-[#A8A8A8] hover:text-[#F2F2F2] hover:bg-[#1A1A1A]"
                    }`}
                  >
                    <span aria-hidden="true">{tab.icon}</span>
                    {tab.label}
                  </button>
                );
              })}
            </motion.div>

            {/* ── Tab panel ───────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14, duration: 0.35 }}
              className="bg-[#161616] border border-[#242424] rounded-[14px] p-6 md:p-8"
              role="tabpanel"
              id={`tab-panel-${activeTab}`}
              aria-label={TAB_LIST.find((t) => t.id === activeTab)?.label}
            >
              <AnimatePresence mode="wait">
                {activeTab === "geral"   && <TabGeral   key="geral"   />}
                {activeTab === "perfil"  && <TabPerfil  key="perfil"  />}
                {activeTab === "planos"  && <TabPlanos  key="planos"  />}
                {activeTab === "sistema" && <TabSistema key="sistema" />}
              </AnimatePresence>
            </motion.div>
          </div>
        </main>
      </div>

      {/* ── Unsaved changes modal ─────────────────────────────────────── */}
      <AnimatePresence>
        {showUnsaved && (
          <UnsavedModal onContinue={confirmTabSwitch} onStay={cancelTabSwitch} />
        )}
      </AnimatePresence>
    </div>
  );
}
