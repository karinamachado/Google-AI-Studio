import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import {
  LayoutDashboard, Users, CheckSquare, MonitorPlay,
  Settings, LogOut, Menu, X,
  ArrowLeft, Save, Printer, User, Heart, Activity,
  Target, BarChart2, CreditCard, FileText, ChevronDown, Check,
  Camera, Upload, Trash2,
} from "lucide-react";
import forgeeLogoImg from "figma:asset/234239702fd000ad91d5040296534366f62ba051.png";

// ── Nav items (shared) ────────────────────────────────────────────────────────

const navItems = [
  { id: "dashboard", label: "Dashboard",    icon: LayoutDashboard, path: "/dashboard" },
  { id: "alunos",    label: "Alunos",        icon: Users,           path: "/alunos"    },
  { id: "checkins",  label: "Check-ins",     icon: CheckSquare,     path: "/checkins"  },
  { id: "recepcao",  label: "Modo Recepção", icon: MonitorPlay,     path: "#"          },
];

// ── Design-System Primitives ──────────────────────────────────────────────────

function SectionHeader({
  number, title, icon,
}: {
  number: string; title: string; icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 pb-3 border-b-2 border-[#E8400A] w-full">
      <span className="text-[#E8400A] shrink-0">{icon}</span>
      <h2 className="font-['Bebas_Neue',sans-serif] text-[20px] leading-none tracking-[0.5px] text-[#F2F2F2] uppercase">
        {number}. {title}
      </h2>
    </div>
  );
}

function FieldLabel({
  children, required,
}: {
  children: React.ReactNode; required?: boolean;
}) {
  return (
    <p className="text-[#A8A8A8] text-[11px] tracking-[0.7px] uppercase font-medium font-['Inter',sans-serif] mb-2">
      {children}
      {required && <span className="text-[#E8400A] ml-0.5">*</span>}
    </p>
  );
}

function FInput({
  placeholder, value, onChange, type = "text",
}: {
  placeholder?: string; value: string;
  onChange: (v: string) => void; type?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full h-11 bg-[#1A1A1A] border border-[#303030] rounded-[10px] px-4 text-[#F2F2F2] text-[14px] font-['Inter',sans-serif] placeholder-[#606060] focus:outline-none focus:border-[#E8400A] transition-colors"
    />
  );
}

function FSelect({
  value, onChange, options, placeholder,
}: {
  value: string; onChange: (v: string) => void;
  options: { label: string; value: string }[]; placeholder?: string;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-11 bg-[#1A1A1A] border border-[#303030] rounded-[10px] px-4 pr-10 text-[14px] font-['Inter',sans-serif] appearance-none focus:outline-none focus:border-[#E8400A] transition-colors"
        style={{ color: value ? "#F2F2F2" : "#606060" }}
      >
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map((o) => (
          <option key={o.value} value={o.value} style={{ background: "#1A1A1A", color: "#F2F2F2" }}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A8A8A8] pointer-events-none" />
    </div>
  );
}

function YesNo({
  value, onChange, options = ["SIM", "NÃO"],
}: {
  value: string; onChange: (v: string) => void; options?: string[];
}) {
  return (
    <div className="flex gap-2 flex-wrap">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt === value ? "" : opt)}
          className={`px-4 py-1.5 rounded-[6px] text-[12px] tracking-[0.8px] uppercase font-semibold font-['Inter',sans-serif] border transition-all ${
            value === opt
              ? "bg-[#E8400A] border-[#E8400A] text-white"
              : "bg-[#1A1A1A] border-[#303030] text-[#A8A8A8] hover:border-[#606060]"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function HealthCard({
  label, field, value, onChange, options,
}: {
  label: string; field: string; value: string;
  onChange: (field: string, v: string) => void; options?: string[];
}) {
  return (
    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-[10px] px-4 py-4 flex flex-col gap-3">
      <p className="text-[#A8A8A8] text-[11px] tracking-[0.7px] uppercase font-medium font-['Inter',sans-serif]">
        {label}
      </p>
      <YesNo value={value} onChange={(v) => onChange(field, v)} options={options} />
    </div>
  );
}

function FCheckbox({
  label, checked, onChange,
}: {
  label: string; checked: boolean; onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="flex items-center gap-3 group"
    >
      <div className={`w-5 h-5 rounded-[4px] border flex items-center justify-center shrink-0 transition-all ${
        checked
          ? "bg-[#E8400A] border-[#E8400A]"
          : "bg-[#1A1A1A] border-[#303030] group-hover:border-[#606060]"
      }`}>
        {checked && <Check size={11} className="text-white" strokeWidth={3} />}
      </div>
      <span className="text-[#A8A8A8] text-[13px] font-['Inter',sans-serif] group-hover:text-[#F2F2F2] transition-colors text-left">
        {label}
      </span>
    </button>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export function NovoAluno() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ── Photo upload
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoHover,   setPhotoHover]   = useState(false);
  const photoInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setPhotoPreview(ev.target?.result as string);
    reader.readAsDataURL(file);
    e.target.value = ""; // allow same file re-selection
  };

  const handlePhotoClick = () => photoInputRef.current?.click();

  const handlePhotoRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoPreview(null);
  };

  // ── Section 1: Dados Pessoais
  const [nome, setNome]               = useState("");
  const [dataNasc, setDataNasc]       = useState("");
  const [cpf, setCpf]                 = useState("");
  const [rg, setRg]                   = useState("");
  const [sexo, setSexo]               = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");
  const [profissao, setProfissao]     = useState("");
  const [telefone, setTelefone]       = useState("");
  const [email, setEmail]             = useState("");
  const [endereco, setEndereco]       = useState("");
  const [contatoEmerg, setContatoEmerg] = useState("");
  const [telEmerg, setTelEmerg]       = useState("");

  // ── Section 2: Saúde
  const [saude, setSaude] = useState<Record<string, string>>({
    doencaDiag: "", cardíaco: "", pressao: "", medicamento: "",
    lesaoHistorico: "", cirurgia: "", fumante: "", gravidez: "",
    doencaFamiliar: "", diabetes: "",
  });
  const setSaudeField = (k: string, v: string) => setSaude((p) => ({ ...p, [k]: v }));

  // ── Section 3: PAR-Q
  const [parq, setParq] = useState<Record<string, string>>({
    q1: "", q2: "", q3: "", q4: "", q5: "", q6: "",
  });
  const setParqField = (k: string, v: string) => setParq((p) => ({ ...p, [k]: v }));

  // ── Section 4: Objetivos
  const [objetivos, setObjetivos] = useState({
    emagrecimento: false, hipertrofia: false,
    condicionamento: false, reabilitacao: false,
    qualidadeVida: false, forcaExplosao: false, flexibilidade: false,
  });
  const [esporteAntes, setEsporteAntes] = useState("");
  const [qualEsporte, setQualEsporte]   = useState("");
  const [nivelAtividade, setNivelAtividade] = useState("");
  const [diasTreino, setDiasTreino]     = useState("");

  // ── Section 5: Corporal (opcional)
  const [peso, setPeso]             = useState("");
  const [altura, setAltura]         = useState("");
  const [percentGordura, setPercentGordura] = useState("");
  const [medicoResp, setMedicoResp] = useState("");

  // ── Section 6: Plano
  const [plano, setPlano]           = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataVenc, setDataVenc]     = useState("");
  const [formaPagto, setFormaPagto] = useState("");

  // ── Section 7: Termo
  const [aceitaTermo, setAceitaTermo] = useState(false);
  const [assinatura, setAssinatura]   = useState("");
  const [dataAssinatura, setDataAssinatura] = useState("");

  const handleSave = () => navigate("/alunos");

  const imc = peso && altura
    ? (parseFloat(peso) / Math.pow(parseFloat(altura) / 100, 2)).toFixed(1)
    : "";

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
          <button
            onClick={() => setSidebarOpen(false)}
            className="ml-auto text-[#606060] hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 flex flex-col gap-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.id === "alunos"; // novo-aluno lives under alunos
          return (
            <button
              key={item.id}
              onClick={() => {
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

        <div className="mt-auto pt-4 border-t border-[#1E1E1E]">
          <button
            onClick={() => {}}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-[8px] text-left transition-all text-[#A8A8A8] hover:bg-[#1E1E1E] hover:text-white"
          >
            <Settings size={16} className="shrink-0" />
            <span className="text-sm font-['Inter',sans-serif]">Configurações</span>
          </button>
        </div>
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

  return (
    <div className="flex h-screen bg-[#0D0D0D] text-white font-['Inter',sans-serif] overflow-hidden">

      {/* ── Desktop sidebar ───────────────────────────────────────────────────── */}
      <Sidebar />

      {/* ── Mobile sidebar overlay ───────────────────────────────────────────── */}
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

      {/* ── Main content ──────────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* ── Top bar ─────────────────────────────────────────────────────────── */}
        <div className="shrink-0 bg-[#090909] border-b border-[#1E1E1E]">
          <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 h-[68px] flex items-center justify-between gap-4">
            {/* Left */}
            <div className="flex items-center gap-4">
              {/* Mobile hamburger */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-[#606060] hover:text-white transition-colors"
              >
                <Menu size={22} />
              </button>

              <button
                onClick={() => navigate("/alunos")}
                className="flex items-center gap-2 text-[#606060] hover:text-white transition-colors"
              >
                <ArrowLeft size={18} />
                <span className="hidden sm:inline text-[13px] tracking-[0.7px] uppercase font-medium font-['Inter',sans-serif]">
                  Voltar
                </span>
              </button>

              <div className="w-px h-6 bg-[#303030]" />

              <h1 className="font-['Bebas_Neue',sans-serif] text-[20px] md:text-[24px] leading-none tracking-[0.5px] text-[#F2F2F2] uppercase whitespace-nowrap">
                Cadastrar Novo Aluno
              </h1>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 border border-[#303030] bg-[#0D0D0D] rounded-[10px] px-3 md:px-4 py-2 text-[#F2F2F2] text-[11px] tracking-[0.6px] uppercase font-medium font-['Inter',sans-serif] hover:border-[#606060] transition-colors">
                <Printer size={14} />
                <span className="hidden sm:inline">Imprimir</span>
              </button>
              <motion.button
                whileHover={{ backgroundColor: "#FF4D0D" }}
                whileTap={{ scale: 0.97 }}
                onClick={handleSave}
                className="flex items-center gap-2 bg-[#E8400A] rounded-[10px] px-3 md:px-5 py-2 text-white text-[11px] tracking-[0.6px] uppercase font-medium font-['Inter',sans-serif] transition-colors whitespace-nowrap"
              >
                <Save size={14} />
                <span className="hidden sm:inline">Salvar Cadastro</span>
                <span className="sm:hidden">Salvar</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* ── Scrollable form body ─────────────────────────────────────────────── */}
        <div className="flex-1 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-[1440px] mx-auto px-5 md:px-8 xl:px-12 py-8 space-y-10"
          >

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 1 — DADOS PESSOAIS
            ═══════════════════════════════════════════════════════════════ */}
            <section className="space-y-6">
              <SectionHeader number="1" title="Dados Pessoais" icon={<User size={18} />} />

              {/* ── Photo Upload ───────────────────────────────────────────── */}
              <div>
                <FieldLabel>Foto do Aluno</FieldLabel>

                {/* Hidden file input */}
                <input
                  ref={photoInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                  aria-label="Selecionar foto do aluno"
                />

                <div className="flex items-start gap-5 flex-wrap">
                  {/* Avatar circle — clickable */}
                  <motion.button
                    type="button"
                    onClick={handlePhotoClick}
                    onHoverStart={() => setPhotoHover(true)}
                    onHoverEnd={() => setPhotoHover(false)}
                    whileTap={{ scale: 0.97 }}
                    aria-label={photoPreview ? "Alterar foto do aluno" : "Adicionar foto do aluno"}
                    className="relative w-[120px] h-[120px] rounded-full shrink-0 cursor-pointer overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8400A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D]"
                    style={{
                      border: photoPreview
                        ? "2.5px solid rgba(232,64,10,0.45)"
                        : "2px dashed #303030",
                    }}
                  >
                    {/* Preview or placeholder */}
                    {photoPreview ? (
                      <img
                        src={photoPreview}
                        alt="Pré-visualização da foto do aluno"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#1A1A1A] flex flex-col items-center justify-center gap-1.5">
                        <Camera size={26} className="text-[#505050]" />
                        <span className="text-[#505050] font-['Inter',sans-serif] text-[10px] tracking-[0.5px] uppercase text-center px-2">
                          Adicionar foto
                        </span>
                      </div>
                    )}

                    {/* Hover overlay */}
                    <AnimatePresence>
                      {photoPreview && photoHover && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          className="absolute inset-0 bg-black/65 flex flex-col items-center justify-center gap-1.5"
                          aria-hidden="true"
                        >
                          <Camera size={22} className="text-white" />
                          <span className="text-white font-['Inter',sans-serif] text-[10px] tracking-[0.5px] uppercase text-center">
                            Alterar foto
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>

                  {/* Info + actions */}
                  <div className="flex flex-col gap-3 justify-center py-1">
                    <div className="space-y-1">
                      <p className="text-[#F2F2F2] font-['Inter',sans-serif] text-[14px] font-medium">
                        {photoPreview ? "Foto carregada" : "Nenhuma foto selecionada"}
                      </p>
                      <p className="text-[#606060] font-['Inter',sans-serif] text-[12px] leading-relaxed">
                        PNG, JPG ou WEBP · Máx. 5 MB<br />
                        Clique na foto para alterar
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <motion.button
                        type="button"
                        whileHover={{ borderColor: "#E8400A", color: "#F2F2F2" }}
                        whileTap={{ scale: 0.97 }}
                        onClick={handlePhotoClick}
                        className="flex items-center gap-1.5 border border-[#303030] rounded-[8px] px-3 py-1.5 text-[#A8A8A8] text-[12px] tracking-[0.5px] uppercase font-medium font-['Inter',sans-serif] transition-all"
                      >
                        <Upload size={13} />
                        {photoPreview ? "Alterar" : "Carregar"}
                      </motion.button>

                      {photoPreview && (
                        <motion.button
                          type="button"
                          initial={{ opacity: 0, scale: 0.85 }}
                          animate={{ opacity: 1, scale: 1 }}
                          whileHover={{ borderColor: "#E8271A", color: "#E8271A" }}
                          whileTap={{ scale: 0.97 }}
                          onClick={handlePhotoRemove}
                          aria-label="Remover foto"
                          className="flex items-center gap-1.5 border border-[#303030] rounded-[8px] px-3 py-1.5 text-[#606060] text-[12px] tracking-[0.5px] uppercase font-medium font-['Inter',sans-serif] transition-all"
                        >
                          <Trash2 size={13} />
                          Remover
                        </motion.button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Nome completo */}
              <div>
                <FieldLabel required>Nome completo</FieldLabel>
                <FInput value={nome} onChange={setNome} placeholder="Nome completo do aluno" />
              </div>

              {/* Data nasc + CPF */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <FieldLabel required>Data de nascimento</FieldLabel>
                  <FInput type="date" value={dataNasc} onChange={setDataNasc} />
                </div>
                <div>
                  <FieldLabel required>CPF</FieldLabel>
                  <FInput value={cpf} onChange={setCpf} placeholder="000.000.000-00" />
                </div>
              </div>

              {/* RG + Sexo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <FieldLabel>RG</FieldLabel>
                  <FInput value={rg} onChange={setRg} placeholder="00.000.000-0" />
                </div>
                <div>
                  <FieldLabel required>Sexo</FieldLabel>
                  <FSelect
                    value={sexo} onChange={setSexo}
                    placeholder="Selecione"
                    options={[
                      { label: "Masculino", value: "M" },
                      { label: "Feminino",  value: "F" },
                      { label: "Outro",     value: "O" },
                      { label: "Prefiro não informar", value: "N" },
                    ]}
                  />
                </div>
              </div>

              {/* Estado Civil + Profissão */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <FieldLabel>Estado civil</FieldLabel>
                  <FSelect
                    value={estadoCivil} onChange={setEstadoCivil}
                    placeholder="Selecione"
                    options={[
                      { label: "Solteiro(a)",  value: "solteiro"  },
                      { label: "Casado(a)",    value: "casado"    },
                      { label: "Divorciado(a)",value: "divorciado" },
                      { label: "Viúvo(a)",     value: "viuvo"     },
                      { label: "União estável",value: "uniao"     },
                    ]}
                  />
                </div>
                <div>
                  <FieldLabel>Profissão</FieldLabel>
                  <FInput value={profissao} onChange={setProfissao} placeholder="Ex: Engenheiro, Professor..." />
                </div>
              </div>

              {/* Telefone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <FieldLabel required>Telefone (WhatsApp)</FieldLabel>
                  <FInput value={telefone} onChange={setTelefone} placeholder="(00) 00000-0000" type="tel" />
                </div>
                <div>
                  <FieldLabel required>E-mail</FieldLabel>
                  <FInput value={email} onChange={setEmail} placeholder="exemplo@email.com" type="email" />
                </div>
              </div>

              {/* Endereço */}
              <div>
                <FieldLabel required>Endereço completo</FieldLabel>
                <FInput value={endereco} onChange={setEndereco} placeholder="Rua, Número, Bairro, Cidade — Estado, CEP" />
              </div>

              {/* Contato emergência */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <FieldLabel required>Contato de emergência</FieldLabel>
                  <FInput value={contatoEmerg} onChange={setContatoEmerg} placeholder="Nome completo" />
                </div>
                <div>
                  <FieldLabel required>Telefone do contato de emergência</FieldLabel>
                  <FInput value={telEmerg} onChange={setTelEmerg} placeholder="(00) 00000-0000" type="tel" />
                </div>
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 2 — DADOS DE SAÚDE (ANAMNESE BÁSICA)
            ═══════════════════════════════════════════════════════════════ */}
            <section className="space-y-4">
              <SectionHeader number="2" title="Dados de Saúde (Anamnese Básica)" icon={<Heart size={18} />} />

              <p className="text-[#606060] text-[12px] font-['Inter',sans-serif] italic">
                Responda com honestidade. As informações são confidenciais e usadas apenas para sua segurança.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                <HealthCard label="Possui alguma doença diagnosticada?" field="doencaDiag" value={saude.doencaDiag} onChange={setSaudeField} />
                <HealthCard label="Problemas cardíacos?" field="cardíaco" value={saude.cardíaco} onChange={setSaudeField} />
                <HealthCard label="Pressão alta ou baixa?" field="pressao" value={saude.pressao} onChange={setSaudeField} options={["NÃO", "ALTA", "BAIXA"]} />
                <HealthCard label="Toma algum medicamento?" field="medicamento" value={saude.medicamento} onChange={setSaudeField} />
                <HealthCard label="Histórico de lesão?" field="lesaoHistorico" value={saude.lesaoHistorico} onChange={setSaudeField} />
                <HealthCard label="Cirurgias recentes (último ano)?" field="cirurgia" value={saude.cirurgia} onChange={setSaudeField} />
                <HealthCard label="Fuma ou fumou nos últimos 6 meses?" field="fumante" value={saude.fumante} onChange={setSaudeField} />
                <HealthCard label="Está grávida ou suspeita de gravidez?" field="gravidez" value={saude.gravidez} onChange={setSaudeField} />
                <HealthCard label="Histórico familiar de doença cardíaca?" field="doencaFamiliar" value={saude.doencaFamiliar} onChange={setSaudeField} />
                <HealthCard label="Diabetes ou resistência insulínica?" field="diabetes" value={saude.diabetes} onChange={setSaudeField} />
              </div>

              {/* Observações de saúde */}
              <div>
                <FieldLabel>Observações / detalhe alguma resposta acima</FieldLabel>
                <textarea
                  rows={3}
                  placeholder="Descreva detalhes relevantes sobre sua saúde..."
                  className="w-full bg-[#1A1A1A] border border-[#303030] rounded-[10px] px-4 py-3 text-[#F2F2F2] text-[14px] font-['Inter',sans-serif] placeholder-[#606060] focus:outline-none focus:border-[#E8400A] transition-colors resize-none"
                />
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 3 — PAR-Q
            ═══════════════════════════════════════════════════════════════ */}
            <section className="space-y-4">
              <SectionHeader number="3" title="Questionário de Prontidão para Atividade Física" icon={<Activity size={18} />} />

              <p className="text-[#606060] text-[12px] font-['Inter',sans-serif] italic">
                Responda SIM ou NÃO com honestidade. Se responder SIM a qualquer pergunta, consulte um médico antes de iniciar.
              </p>

              <div className="space-y-3">
                {[
                  { k: "q1", label: "1. Algum médico já disse que você possui algum problema cardíaco e recomendou atividade física supervisionada?" },
                  { k: "q2", label: "2. Você sente dores no peito quando pratica atividade física?" },
                  { k: "q3", label: "3. No último mês, você teve dores no peito sem estar praticando atividade física?" },
                  { k: "q4", label: "4. Você perde o equilíbrio por causa de tontura ou já perdeu a consciência?" },
                  { k: "q5", label: "5. Possui algum problema ósseo ou articular que poderia piorar com atividade física?" },
                  { k: "q6", label: "6. Você toma alguma medicação prescrita para pressão ou condição cardíaca?" },
                ].map(({ k, label }) => (
                  <div key={k} className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-[10px] px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <p className="text-[#A8A8A8] text-[12px] font-['Inter',sans-serif] leading-relaxed flex-1">{label}</p>
                    <YesNo value={parq[k]} onChange={(v) => setParqField(k, v)} />
                  </div>
                ))}
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 4 — OBJETIVOS DO ALUNO
            ═══════════════════════════════════════════════════════════════ */}
            <section className="space-y-5">
              <SectionHeader number="4" title="Objetivos do Aluno" icon={<Target size={18} />} />

              <div>
                <FieldLabel>Quais são seus objetivos? (selecione todos que se aplicam)</FieldLabel>
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 mt-3">
                  {(
                    [
                      { k: "emagrecimento",  label: "Emagrecimento"          },
                      { k: "hipertrofia",    label: "Hipertrofia"             },
                      { k: "condicionamento",label: "Condicionamento físico"  },
                      { k: "reabilitacao",   label: "Reabilitação"            },
                      { k: "qualidadeVida",  label: "Qualidade de vida"       },
                      { k: "forcaExplosao",  label: "Ganho de força"          },
                      { k: "flexibilidade",  label: "Flexibilidade"           },
                    ] as const
                  ).map(({ k, label }) => (
                    <FCheckbox
                      key={k}
                      label={label}
                      checked={objetivos[k]}
                      onChange={(v) => setObjetivos((p) => ({ ...p, [k]: v }))}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                <div>
                  <FieldLabel>Já praticou esporte antes?</FieldLabel>
                  <YesNo value={esporteAntes} onChange={setEsporteAntes} />
                </div>
                {esporteAntes === "SIM" && (
                  <div>
                    <FieldLabel>Qual esporte?</FieldLabel>
                    <FInput value={qualEsporte} onChange={setQualEsporte} placeholder="Ex: Futebol, Natação..." />
                  </div>
                )}
                <div>
                  <FieldLabel>Nível de atividade física atual</FieldLabel>
                  <FSelect
                    value={nivelAtividade} onChange={setNivelAtividade}
                    placeholder="Selecione"
                    options={[
                      { label: "Sedentário",          value: "sedentario" },
                      { label: "Levemente ativo",     value: "leve"       },
                      { label: "Moderadamente ativo", value: "moderado"   },
                      { label: "Muito ativo",         value: "ativo"      },
                      { label: "Extremamente ativo",  value: "extremo"    },
                    ]}
                  />
                </div>
                <div>
                  <FieldLabel>Dias por semana para treinar?</FieldLabel>
                  <FSelect
                    value={diasTreino} onChange={setDiasTreino}
                    placeholder="Selecione"
                    options={[
                      { label: "2 dias", value: "2" },
                      { label: "3 dias", value: "3" },
                      { label: "4 dias", value: "4" },
                      { label: "5 dias", value: "5" },
                      { label: "6 dias", value: "6" },
                      { label: "7 dias", value: "7" },
                    ]}
                  />
                </div>
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 5 — AVALIAÇÃO CORPORAL (OPCIONAL)
            ═══════════════════════════════════════════════════════════════ */}
            <section className="space-y-5">
              <SectionHeader number="5" title="Informação Corporal / Avaliação Médica" icon={<BarChart2 size={18} />} />
              <p className="text-[#606060] text-[11px] tracking-[0.5px] uppercase font-['Inter',sans-serif]">
                Opcional — preencher se disponível
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <FieldLabel>Peso (kg)</FieldLabel>
                  <FInput value={peso} onChange={setPeso} placeholder="Ex: 72.5" type="number" />
                </div>
                <div>
                  <FieldLabel>Altura (cm)</FieldLabel>
                  <FInput value={altura} onChange={setAltura} placeholder="Ex: 175" type="number" />
                </div>
                <div>
                  <FieldLabel>IMC</FieldLabel>
                  <div className="h-11 bg-[#1A1A1A] border border-[#2A2A2A] rounded-[10px] px-4 flex items-center">
                    <span className={`text-[14px] font-['Inter',sans-serif] ${imc ? "text-[#F2F2F2]" : "text-[#606060]"}`}>
                      {imc || "—"}
                    </span>
                  </div>
                </div>
                <div>
                  <FieldLabel>% Gordura</FieldLabel>
                  <FInput value={percentGordura} onChange={setPercentGordura} placeholder="Ex: 18.2" type="number" />
                </div>
              </div>

              <div>
                <FieldLabel>Médico responsável / CRM</FieldLabel>
                <FInput value={medicoResp} onChange={setMedicoResp} placeholder="Nome do médico e CRM (opcional)" />
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 6 — PLANO CONTRATADO
            ═══════════════════════════════════════════════════════════════ */}
            <section className="space-y-5">
              <SectionHeader number="6" title="Plano Contratado" icon={<CreditCard size={18} />} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <FieldLabel required>Tipo do plano</FieldLabel>
                  <FSelect
                    value={plano} onChange={setPlano}
                    placeholder="Selecione o plano"
                    options={[
                      { label: "LIVRE — R$ 149/mês",    value: "livre"  },
                      { label: "PLUS — R$ 229/mês",     value: "plus"   },
                      { label: "ELITE — R$ 389/mês",    value: "elite"  },
                      { label: "DIÁRIA — R$ 39/dia",    value: "diaria" },
                      { label: "Outro / Personalizado", value: "outro"  },
                    ]}
                  />
                </div>
                <div>
                  <FieldLabel required>Forma de pagamento</FieldLabel>
                  <FSelect
                    value={formaPagto} onChange={setFormaPagto}
                    placeholder="Selecione"
                    options={[
                      { label: "PIX",               value: "pix"    },
                      { label: "Cartão de crédito", value: "cc"     },
                      { label: "Cartão de débito",  value: "cd"     },
                      { label: "Dinheiro",          value: "cash"   },
                      { label: "Débito automático", value: "debito" },
                    ]}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <FieldLabel required>Data de início</FieldLabel>
                  <FInput type="date" value={dataInicio} onChange={setDataInicio} />
                </div>
                <div>
                  <FieldLabel required>Data de vencimento</FieldLabel>
                  <FInput type="date" value={dataVenc} onChange={setDataVenc} />
                </div>
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 7 — TERMO DE RESPONSABILIDADE
            ═══════════════════════════════════════════════════════════════ */}
            <section className="space-y-5 pb-12">
              <SectionHeader number="7" title="Termo de Responsabilidade" icon={<FileText size={18} />} />

              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-[10px] p-5 space-y-3">
                <p className="text-[#A8A8A8] text-[12px] font-['Inter',sans-serif] leading-relaxed">
                  Declaro que as informações prestadas neste formulário são verdadeiras e que estou ciente das condições físicas necessárias para a prática de atividades na FORGEE Academy. Autorizo a academia a utilizar meus dados pessoais para fins de gestão do meu cadastro e comunicação interna, conforme a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018).
                </p>
                <p className="text-[#A8A8A8] text-[12px] font-['Inter',sans-serif] leading-relaxed">
                  Estou ciente de que a FORGEE Academy não se responsabiliza por acidentes decorrentes de omissão de informações médicas relevantes, uso inadequado dos equipamentos, ou prática de atividades contra orientação dos profissionais da academia.
                </p>
                <p className="text-[#A8A8A8] text-[12px] font-['Inter',sans-serif] leading-relaxed">
                  Concordo com as regras internas da academia, incluindo política de cancelamento (aviso com 30 dias de antecedência) e normas de convivência no espaço.
                </p>
              </div>

              {/* Aceite + Assinatura */}
              <div className="flex items-start gap-3">
                <button
                  type="button"
                  onClick={() => setAceitaTermo(!aceitaTermo)}
                  className={`w-5 h-5 rounded-[4px] border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                    aceitaTermo
                      ? "bg-[#E8400A] border-[#E8400A]"
                      : "bg-[#1A1A1A] border-[#303030] hover:border-[#606060]"
                  }`}
                >
                  {aceitaTermo && <Check size={11} className="text-white" strokeWidth={3} />}
                </button>
                <p className="text-[#A8A8A8] text-[13px] font-['Inter',sans-serif] leading-relaxed">
                  Li e aceito os termos acima. Estou ciente das minhas responsabilidades como aluno da FORGEE Academy.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <FieldLabel required>Assinatura do aluno (nome completo)</FieldLabel>
                  <FInput value={assinatura} onChange={setAssinatura} placeholder="Digite seu nome completo como assinatura" />
                </div>
                <div>
                  <FieldLabel required>Data</FieldLabel>
                  <FInput type="date" value={dataAssinatura} onChange={setDataAssinatura} />
                </div>
              </div>

              {/* Bottom action row */}
              <div className="flex items-center justify-between pt-6 border-t border-[#1E1E1E]">
                <button
                  onClick={() => navigate("/alunos")}
                  className="flex items-center gap-2 text-[#606060] hover:text-white transition-colors text-sm font-['Inter',sans-serif]"
                >
                  <ArrowLeft size={16} />
                  Cancelar e Voltar
                </button>

                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 border border-[#303030] bg-[#0D0D0D] rounded-[10px] px-4 py-2.5 text-[#F2F2F2] text-[11px] tracking-[0.6px] uppercase font-medium font-['Inter',sans-serif] hover:border-[#606060] transition-colors">
                    <Printer size={14} />
                    Imprimir
                  </button>
                  <motion.button
                    whileHover={{ backgroundColor: "#FF4D0D" }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleSave}
                    className="flex items-center gap-2 bg-[#E8400A] rounded-[10px] px-6 py-2.5 text-white text-[11px] tracking-[0.6px] uppercase font-medium font-['Inter',sans-serif] transition-colors"
                  >
                    <Save size={14} />
                    Salvar Cadastro
                  </motion.button>
                </div>
              </div>
            </section>

          </motion.div>
        </div>
      </div>
    </div>
  );
}