import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Accordion } from "../components/Accordion";
import { PricingCard } from "../components/PricingCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { CoachCardNew } from "../components/CoachCardNew";
import { StatCard } from "../components/StatCard";
import { LoginModal } from "../components/LoginModal";
import heroImage from "../../imports/image_header.png";
import quemSomosImage from "../../imports/Background.png";
import equipmentImage from "../../imports/1440WLight/9cd56faa17154e84fac2635111ea763d4247b16c.png";
import coachRodrigo from "../../imports/Section-4/978baaaf70f56ca33ac1fb607419361a243bff2a.png";
import coachAna from "../../imports/Section-4/7917b0410322b5b75914d197712fffc242d55c79.png";
import coachBruno from "../../imports/Section-4/f374078a3311f864e69180b2fc8568b20d9f2c9e.png";
import coachCamila from "../../imports/Section-4/d4a62d52a819ef7d4b7d881577dd8428fdc62a95.png";
import locationMapImage from "figma:asset/60033858265091d9ccb361ee6ea7e83b616edc92.png";

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedEquipment, setExpandedEquipment] = useState<number | null>(0);
  const [loginOpen, setLoginOpen] = useState(false);

  const stats = [
    { label: "Funcionamento", value: "05H–23H" },
    { label: "Dias por semana", value: "7 DIAS" },
    { label: "Área do espaço", value: "1.800M²" },
    { label: "Total de alunos", value: "+1.200" },
    { label: "Ano de fundação", value: "2018" },
  ];

  const pillars = [
    { number: "01", title: "Intensidade", description: "O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino." },
    { number: "02", title: "Precisão", description: "Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui." },
    { number: "03", title: "Controle", description: "Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte." },
  ];

  const metrics = [
    { label: "Alunos ativos", value: "+1.200" },
    { label: "Retenção em 6 meses", value: "94%" },
    { label: "Anos em operação", value: "8 anos" },
    { label: "Área dedicada", value: "1.8K M²" },
  ];

  const testimonials = [
    { quote: "Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas.", name: "Rafael M.", role: "Engenheiro", tenure: "Aluno há 3 anos" },
    { quote: "Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha.", name: "Juliana T.", role: "Professora", tenure: "Aluna há 2 anos" },
    { quote: "A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado.", name: "Lucas O.", role: "Empresário", tenure: "Aluno há 4 anos" },
  ];

  const programs = [
    { title: "FORGEE STRENGTH", description: "Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.", details: [{ label: "Para quem é", value: "Iniciantes a avançados em hipertrofia e força" }, { label: "Frequência", value: "3–5× por semana" }] },
    { title: "FORGEE CONDITIONING", description: "Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.", details: [{ label: "Para quem é", value: "Condicionamento, perda de gordura" }, { label: "Turmas", value: "06H · 07H · 12H · 18H · 19H30" }], featured: true },
    { title: "FORGEE MOBILITY", description: "Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.", details: [] },
    { title: "PERSONAL TRAINING", description: "Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.", details: [] },
  ];

  const coachesNew = [
    { image: coachRodrigo, name: "RODRIGO FARIAS", role: "HEAD COACH", cref: "CREF 045821-G/SP" },
    { image: coachAna, name: "ANA LUÍSA", role: "CONDITIONING", cref: "CREF 078342-G/SP" },
    { image: coachBruno, name: "BRUNO T.", role: "MOBILITY & REHAB", cref: "CREF 091205-G/SP" },
    { image: coachCamila, name: "CAMILA D.", role: "PERSONAL TRAINER", cref: "CREF 063417-G/SP" },
  ];

  const equipmentCategories = [
    { id: 0, number: "01", title: "CARDIO & CONDITIONING", items: ["Assault Bike Concept2 — 8 UNIDADES", "Remo Concept2 Model D — 6 UNIDADES", "SkiErg Concept2 — 4 UNIDADES", "Esteiras NordicTrack com inclinação negativa", "Cordas de batalha 15m e 20m"] },
    { id: 1, number: "02", title: "FORÇA LIVRE", items: ["Barras olímpicas Rogue — 12 UNIDADES", "Anilhas bumper de 0.5kg a 25kg", "Kettlebells de 8kg a 48kg", "Halteres hexagonais de 2kg a 50kg", "Rack de agachamento ajustável"] },
    { id: 2, number: "03", title: "MÁQUINAS", items: ["Leg Press 45° — 3 UNIDADES", "Smith Machine — 2 UNIDADES", "Puxador alto e baixo", "Cadeira extensora e flexora", "Máquina de glúteos"] },
  ];

  const faqItems = [
    { title: "Preciso ter experiência?", content: "Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual." },
    { title: "Posso treinar sozinho?", content: "Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima." },
    { title: "Como funciona o cancelamento?", content: "Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória." },
    { title: "Posso visitar antes de assinar?", content: "Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita." },
  ];

  const pricingPlans = [
    { name: "LIVRE", price: "R$149", features: ["Acesso ilimitado 05H–23H", "Avaliação física de entrada", "Planilha de treino inicial", "App FORGEE"] },
    { name: "PLUS", price: "R$229", featured: true, features: ["Tudo do plano Livre", "2 sessões de Personal/mês", "1 aula Conditioning/semana", "Revisão de planilha a cada 4 semanas", "Acesso ao Mobility"] },
    { name: "ELITE", price: "R$389", features: ["Tudo do plano Plus", "4 sessões de Personal/mês", "Acesso ilimitado a classes", "Bioimpedância mensal", "WhatsApp com coach dedicado"] },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white font-['Inter',sans-serif]">
      {/* Header */}
      <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/95 backdrop-blur-sm border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-5 flex items-center justify-between">
          <div className="flex flex-col">
            <motion.div whileHover={{ scale: 1.05 }} className="font-['Bebas_Neue',sans-serif] text-3xl tracking-wide cursor-pointer">FORGEE<span className="text-[#E8400A]">.</span></motion.div>
            <p className="text-[#6B6B6B] text-[9px] tracking-[0.14em] uppercase">Beyond Limits Known™ · Indaiatuba, SP</p>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {["Espaço", "Programas", "Equipe", "Planos"].map((item) => (
              <motion.a key={item} href={`#${item.toLowerCase()}`} whileHover={{ color: "#E8400A" }} className="text-sm tracking-wider uppercase transition-colors">{item}</motion.a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <motion.button whileHover={{ color: "#E8400A" }} onClick={() => setLoginOpen(true)} className="text-sm tracking-wider uppercase border border-[#2A2A2A] px-5 py-2 transition-colors">SOU MEMBRO</motion.button>
            <motion.button whileHover={{ backgroundColor: "#FF4D0D" }} whileTap={{ scale: 0.95 }} className="bg-[#E8400A] px-6 py-2 text-sm tracking-wider uppercase">AGENDAR VISITA</motion.button>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">{menuOpen ? <X size={28} /> : <Menu size={28} />}</button>
        </div>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-[#1E1E1E] border-t border-[#2A2A2A]">
            <nav className="flex flex-col px-6 py-4 gap-4">
              {["Espaço", "Programas", "Equipe", "Planos"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm tracking-wider uppercase py-2 border-b border-[#2A2A2A]" onClick={() => setMenuOpen(false)}>{item}</a>
              ))}
              <button className="bg-transparent border border-[#E8400A] text-[#E8400A] px-6 py-3 text-sm tracking-wider uppercase mt-2" onClick={() => { setLoginOpen(true); setMenuOpen(false); }}>SOU MEMBRO</button>
              <button className="bg-[#E8400A] px-6 py-3 text-sm tracking-wider uppercase">AGENDAR VISITA</button>
            </nav>
          </motion.div>
        )}
      </motion.header>

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 lg:px-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/95 to-[#111111]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
        </div>
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#E8400A]/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h1 className="font-['Bebas_Neue',sans-serif] text-7xl lg:text-9xl leading-[0.9] mb-8">SEM MÁGICA<br />SEM ATALHOS<br /><span className="text-[#E8400A]">SEM DESCULPAS</span></h1>
            <p className="text-xl lg:text-2xl text-[#E8400A] mb-6 tracking-wide">Treinos progressivos e acompanhamento real!</p>
            <p className="text-[#B0B0B0] text-base lg:text-lg leading-relaxed mb-12 max-w-3xl">Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-20">
              <motion.button whileHover={{ backgroundColor: "#FF4D0D", scale: 1.02 }} whileTap={{ scale: 0.98 }} className="bg-[#E8400A] px-10 py-5 font-medium tracking-wider uppercase">COMEÇAR AGORA</motion.button>
              <motion.button whileHover={{ borderColor: "#E8400A", color: "#E8400A" }} className="border border-[#2A2A2A] px-10 py-5 font-medium tracking-wider uppercase transition-colors">CONHECER O ESPAÇO</motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 lg:px-20 border-y border-[#2A2A2A] bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
            {stats.map((stat, index) => <StatCard key={stat.label} label={stat.label} value={stat.value} delay={index * 0.1} />)}
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="espaco" className="py-32 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 mb-32">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-[#E8400A] text-sm tracking-[0.28em] uppercase mb-6 font-['Bebas_Neue',sans-serif]">Quem somos</p>
              <h2 className="font-['Bebas_Neue',sans-serif] text-7xl lg:text-[96px] leading-[0.9] mb-12 tracking-tight">FORJADOS<br />PELA<br /><span className="text-[#E8400A]">DISCIPLINA.</span></h2>
              <div className="space-y-8 max-w-[672px]">
                <p className="text-[#B0B0B0] text-xl leading-[1.625]">A <span className="text-white font-bold">FORGEE</span> nasceu de uma certeza simples: ambiente mediano produz resultado mediano.</p>
                <p className="text-[#B0B0B0] text-xl leading-[1.625]">Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece. O que fica é o treino, a concentração e o progresso.</p>
                <div className="border-l-4 border-[#E8400A] pl-7 py-2">
                  <p className="text-white text-4xl font-['Bebas_Neue',sans-serif] tracking-[0.025em] leading-[1.11]">"In silence, the transformation begins."</p>
                </div>
                <p className="text-[#B0B0B0] text-xl leading-[1.625]">Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa e silêncio o suficiente para se ouvir.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5 relative">
              <div className="relative h-[537px] overflow-hidden">
                <img src={quemSomosImage} alt="Intense training session" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at center, rgba(232,64,10,0.4) 0%, rgba(232,64,10,0) 60%), linear-gradient(90deg, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.3) 100%)' }} />
              </div>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {pillars.map((pillar, index) => (
              <motion.div key={pillar.number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }} className="bg-[#1E1E1E] border border-[#2A2A2A] p-8 group hover:border-[#E8400A] transition-colors">
                <div className="text-[#E8400A] font-['Bebas_Neue',sans-serif] text-5xl mb-4 opacity-50">{pillar.number}</div>
                <h3 className="font-['Bebas_Neue',sans-serif] text-3xl mb-4 text-white">{pillar.title}</h3>
                <p className="text-[#B0B0B0] leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {metrics.map((metric, index) => (
              <motion.div key={metric.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                <div className="font-['Bebas_Neue',sans-serif] text-5xl text-[#E8400A] mb-2">{metric.value}</div>
                <div className="text-[#6B6B6B] text-sm uppercase tracking-wider">{metric.label}</div>
              </motion.div>
            ))}
          </div>
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
              <h2 className="font-['Bebas_Neue',sans-serif] text-8xl lg:text-[96px] text-[#D9D9D9] tracking-tight leading-[0.9] uppercase">TESTEMUNHOS</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} delay={index * 0.15} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Equipamentos */}
      <section className="py-32 px-6 lg:px-20 bg-[#0A0A0A]">
        <div className="max-w-[1280px] mx-auto px-0 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-[#E8400A] text-sm tracking-[0.28em] uppercase mb-6 font-['Bebas_Neue',sans-serif]">Estrutura</p>
              <h2 className="font-['Bebas_Neue',sans-serif] text-7xl lg:text-[96px] leading-[0.9] mb-4 tracking-tight">EQUIPAMENTO<br />QUE NÃO TE<br /><span className="text-[#E8400A]">LIMITA.</span></h2>
              <p className="text-[#6B6B6B] text-xl leading-[1.4] mb-8 max-w-[448px]">Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias.</p>
              <div className="space-y-6 pt-8">
                {equipmentCategories.map((category) => (
                  <div key={category.id} className="border-b border-[#1E1E1E] pb-px last:border-0">
                    <button onClick={() => setExpandedEquipment(expandedEquipment === category.id ? null : category.id)} className="w-full py-6 flex items-center justify-between group">
                      <span className={`font-['Bebas_Neue',sans-serif] text-2xl tracking-wide transition-colors ${expandedEquipment === category.id ? "text-[#E8400A]" : "text-white group-hover:text-[#E8400A]"}`}>{category.number} · {category.title}</span>
                      {expandedEquipment === category.id ? <ChevronDown className="text-[#E8400A]" size={24} /> : <ChevronRight className="text-[#737373]" size={24} />}
                    </button>
                    <AnimatePresence>
                      {expandedEquipment === category.id && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                          <div className="pb-6 pl-4 flex flex-col gap-2">
                            {category.items.map((item, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-[#E8400A] shrink-0" />
                                <span className="text-[#6B6B6B] text-base leading-[1.5]">{item}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative aspect-square">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 overflow-hidden">
                  <img src={equipmentImage} alt="Gym Equipment" className="absolute h-full left-[-24.96%] max-w-none top-0 w-[149.93%] object-cover" />
                </div>
                <div className="absolute bg-white inset-0 mix-blend-saturation" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programas */}
      <section id="programas" className="py-32 px-6 lg:px-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-[#6B6B6B] text-xs tracking-[0.14em] uppercase italic mb-6">O que oferecemos</p>
            <h2 className="font-['Bebas_Neue',sans-serif] text-6xl lg:text-8xl leading-none">UM PROTOCOLO<br />PARA CADA<br /><span className="text-[#E8400A]">OBJETIVO.</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div key={program.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className={`border p-8 group hover:border-[#E8400A] transition-colors ${program.featured ? "border-[#E8400A] bg-[#1E1E1E]" : "border-[#2A2A2A] bg-[#111111]"}`}>
                {program.featured && <div className="inline-block bg-[#E8400A] px-4 py-1 mb-4"><span className="text-white text-xs tracking-wider uppercase font-medium">DESTAQUE</span></div>}
                <h3 className="font-['Bebas_Neue',sans-serif] text-3xl text-white mb-4">{program.title}</h3>
                <p className="text-[#B0B0B0] leading-relaxed mb-6">{program.description}</p>
                {program.details.length > 0 && (
                  <div className="space-y-3 border-t border-[#2A2A2A] pt-6">
                    {program.details.map((detail) => (
                      <div key={detail.label} className="flex justify-between">
                        <span className="text-[#6B6B6B] text-sm uppercase tracking-wider">{detail.label}</span>
                        <span className="text-[#D9D9D9] text-sm">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section id="equipe" className="py-32 px-6 lg:px-20 bg-[#111111] relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-0 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <div className="flex items-center gap-4 mb-4"><div className="h-px w-8 bg-[#E8400A]" /><p className="text-[#E8400A] font-medium text-xs tracking-[0.12em] uppercase">QUEM TE ACOMPANHA</p></div>
            <h2 className="font-['Bebas_Neue',sans-serif] text-6xl leading-[1] tracking-tight text-white mb-6">COACHES QUE<br />TREINAM.</h2>
            <p className="text-[#B0B0B0] text-[15px] leading-[1.5] max-w-[672px]">Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {coachesNew.map((coach, index) => <CoachCardNew key={coach.name} image={coach.image} role={coach.role} name={coach.name} cref={coach.cref} delay={index * 0.1} isFirst={index === 0} />)}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-32 px-6 lg:px-20 bg-[#0A0A0A] border-t border-b border-[#1E1E1E]">
        <div className="max-w-[1280px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-4"><div className="h-px w-8 bg-[#E8400A]" /><span className="text-[#E8400A] font-['Inter',sans-serif] font-medium text-xs tracking-[1.44px] uppercase">INVESTIMENTO</span><div className="h-px w-8 bg-[#E8400A]" /></div>
            <h2 className="font-['Bebas_Neue',sans-serif] text-6xl lg:text-[80px] leading-[0.95] tracking-[-1px] text-white mb-8">SEM MATRÍCULA.<br />SEM FIDELIDADE.<br />SEM ENROLAÇÃO.</h2>
            <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto font-['Inter',sans-serif]">Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 pt-8 mb-12">
            {pricingPlans.map((plan, index) => <PricingCard key={plan.name} {...plan} delay={index * 0.15} />)}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center gap-4 pt-4">
            <p className="text-[#6B6B6B] text-[12px] tracking-[1.2px] uppercase text-center font-['Inter',sans-serif]">PAGAMENTO VIA PIX OU CARTÃO (3× SEM JUROS) · CANCELAMENTO COM 30 DIAS DE AVISO · PLANO ANUAL COM 15% DE DESCONTO</p>
            <div className="inline-flex items-center gap-4 bg-[#181818] border border-[#2A2A2A] px-[25px] py-[13px]">
              <div className="flex items-center gap-1">
                <span className="text-[#E8400A] text-[14px] font-semibold font-['Inter',sans-serif]">DIÁRIA: R$ 39</span>
                <span className="text-white text-[14px] font-['Inter',sans-serif]">{` · Acesso por 1 dia`}</span>
              </div>
              <motion.button whileHover={{ color: "#E8400A" }} className="text-white text-[12px] tracking-[1.2px] uppercase font-semibold font-['Inter',sans-serif] border-b border-[#E8400A] pb-[3px] transition-colors">AGENDAR</motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-[#6B6B6B] text-xs tracking-[0.14em] uppercase italic mb-6">Dúvidas</p>
            <h2 className="font-['Bebas_Neue',sans-serif] text-6xl lg:text-8xl leading-none">PERGUNTAS<br /><span className="text-[#E8400A]">DIRETAS.</span></h2>
          </motion.div>
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* Localização */}
      <section className="py-32 px-6 lg:px-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col">
              <p className="text-[#E8400A] font-['Bebas_Neue',sans-serif] text-sm tracking-[2.8px] uppercase mb-4">Onde Estamos</p>
              <h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(64px,8vw,96px)] leading-[0.9] tracking-[-2.4px] uppercase text-[#D9D9D9] mb-6">NO CORAÇÃO<br />DE <span className="text-[#E8400A]">INDAIATUBA.</span></h2>
              <div className="flex gap-6 items-start mt-6 mb-10">
                <div className="shrink-0 w-8 h-8 mt-1">
                  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                    <path d="M26.6667 13.3333C26.6667 19.9907 19.2813 26.924 16.8013 29.0653C16.5703 29.2391 16.2891 29.333 16 29.333C15.7109 29.333 15.4297 29.2391 15.1987 29.0653C12.7187 26.924 5.33333 19.9907 5.33333 13.3333C5.33333 10.5044 6.45714 7.79125 8.45753 5.79086C10.4579 3.79047 13.171 2.66667 16 2.66667C18.829 2.66667 21.5421 3.79047 23.5425 5.79086C25.5429 7.79125 26.6667 10.5044 26.6667 13.3333Z" stroke="#E8400A" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 17.3333C18.2091 17.3333 20 15.5425 20 13.3333C20 11.1242 18.2091 9.33333 16 9.33333C13.7909 9.33333 12 11.1242 12 13.3333C12 15.5425 13.7909 17.3333 16 17.3333Z" stroke="#E8400A" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#B0B0B0] text-xl leading-[1.625]">Rua das Esmeraldas, 742</p>
                  <p className="text-[#B0B0B0] text-xl leading-[1.625]">Jardim Morada do Sol</p>
                  <p className="text-[#B0B0B0] text-xl leading-[1.625]">Indaiatuba, SP · CEP 13.334-210</p>
                  <p className="text-[#737373] text-sm italic mt-2">200m do Carrefour · Próximo à saída SP-075</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex gap-4 items-start">
                  <div className="w-5 h-5 shrink-0 mt-[3px]">
                    <svg viewBox="0 0 20 20" fill="none" className="w-full h-full"><path d="M11.5267 13.8067C11.6988 13.8857 11.8927 13.9038 12.0764 13.8579C12.2602 13.812 12.4228 13.7049 12.5375 13.5542L12.8333 13.1667C12.9886 12.9597 13.1899 12.7917 13.4213 12.676C13.6527 12.5602 13.9079 12.5 14.1667 12.5H16.6667C17.1087 12.5 17.5326 12.6756 17.8452 12.9882C18.1577 13.3007 18.3333 13.7246 18.3333 14.1667V16.6667C18.3333 17.1087 18.1577 17.5326 17.8452 17.8452C17.5326 18.1577 17.1087 18.3333 16.6667 18.3333C12.6884 18.3333 8.87311 16.753 6.06007 13.9399C3.24702 11.1269 1.66667 7.31158 1.66667 3.33333C1.66667 2.89131 1.84226 2.46738 2.15482 2.15482C2.46738 1.84226 2.89131 1.66667 3.33333 1.66667H5.83333C6.27536 1.66667 6.69928 1.84226 7.01184 2.15482C7.32441 2.46738 7.5 2.89131 7.5 3.33333V5.83333C7.5 6.09208 7.43976 6.34726 7.32405 6.57869C7.20833 6.81012 7.04033 7.01142 6.83333 7.16667L6.44333 7.45917C6.29035 7.57598 6.18252 7.74215 6.13816 7.92946C6.0938 8.11676 6.11565 8.31365 6.2 8.48667C7.3389 10.7999 9.21202 12.6707 11.5267 13.8067Z" stroke="#E8400A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <div><p className="text-[#737373] text-[10px] tracking-[1px] uppercase font-['Inter',sans-serif]">WhatsApp</p><p className="text-white font-bold text-base font-['Inter',sans-serif]">(19) 98234-5678</p></div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-5 h-5 shrink-0 mt-[3px]">
                    <svg viewBox="0 0 20 20" fill="none" className="w-full h-full"><path d="M16.6667 3.33333H3.33333C2.41286 3.33333 1.66667 4.07953 1.66667 5V15C1.66667 15.9205 2.41286 16.6667 3.33333 16.6667H16.6667C17.5871 16.6667 18.3333 15.9205 18.3333 15V5C18.3333 4.07953 17.5871 3.33333 16.6667 3.33333Z" stroke="#E8400A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.3333 5.83333L10.8408 10.6058C10.5866 10.7535 10.2978 10.8313 10.0038 10.8313C9.70972 10.8313 9.42092 10.7535 9.16667 10.6058L1.66667 5.83333" stroke="#E8400A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <div><p className="text-[#737373] text-[10px] tracking-[1px] uppercase font-['Inter',sans-serif]">E-mail</p><p className="text-white font-bold text-base font-['Inter',sans-serif]">contato@forgee.academy</p></div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button whileHover={{ backgroundColor: "#FF4D0D" }} whileTap={{ scale: 0.98 }} className="bg-[#E8400A] px-8 py-[17px] font-['Bebas_Neue',sans-serif] text-xl text-white tracking-[1px] whitespace-nowrap">Falar no WhatsApp</motion.button>
                <motion.button whileHover={{ borderColor: "#E8400A", color: "#E8400A" }} className="flex items-center justify-center gap-2 border border-[#3A3A3A] px-8 py-[17px] font-['Bebas_Neue',sans-serif] text-xl text-white tracking-[1px] whitespace-nowrap transition-colors">Como Chegar<svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 shrink-0"><path d="M5.83333 5.83333H14.1667V14.1667" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.83333 14.1667L14.1667 5.83333" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" /></svg></motion.button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#1E1E1E] border border-[#2A2A2A] p-10 flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 shrink-0"><path d="M12 6V12L16 14" stroke="#E8400A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#E8400A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <h3 className="font-['Bebas_Neue',sans-serif] text-[30px] text-[#D9D9D9] tracking-[-0.75px] uppercase leading-[1]">Horários</h3>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-[17px] pt-[16px]"><span className="text-[#6B6B6B] text-sm tracking-[1.4px] uppercase font-['Inter',sans-serif]">Segunda a Sexta</span><span className="font-['Bebas_Neue',sans-serif] text-2xl text-white">05H00 – 23H00</span></div>
                <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-[17px] pt-[16px]"><span className="text-[#6B6B6B] text-sm tracking-[1.4px] uppercase font-['Inter',sans-serif]">Sábado</span><span className="font-['Bebas_Neue',sans-serif] text-2xl text-white">07H00 – 20H00</span></div>
                <div className="flex items-center justify-between pt-[16px] pb-[16px]"><span className="text-[#6B6B6B] text-sm tracking-[1.4px] uppercase font-['Inter',sans-serif]">Domingo e Feriados</span><span className="font-['Bebas_Neue',sans-serif] text-2xl text-white">08H00 – 14H00</span></div>
              </div>
              <div className="relative border border-[#2A2A2A] overflow-hidden" style={{ aspectRatio: "438/246" }}>
                <div className="absolute inset-0 bg-[#111]" />
                <img src={locationMapImage} alt="Localização FORGEE Academy" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-6 lg:px-20 relative overflow-hidden">
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 left-0 w-full h-full bg-[#E8400A]/5" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="font-['Bebas_Neue',sans-serif] text-6xl lg:text-9xl leading-none mb-8">A DECISÃO<br />JÁ FOI TOMADA.<br /><span className="text-[#E8400A]">AGORA É A AÇÃO.</span></h2>
            <div className="mb-12 overflow-hidden">
              <motion.p animate={{ x: [0, -1000] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="text-[#6B6B6B] text-sm tracking-[0.3em] uppercase whitespace-nowrap">A G E N D E U M A V I S I T A · G R A T U I T A · S E M C O M P R O M I S S O · T R A G A T Ê N I S · A G E N D E U M A V I S I T A · G R A T U I T A · S E M C O M P R O M I S S O · T R A G A T Ê N I S ·</motion.p>
            </div>
            <motion.button whileHover={{ backgroundColor: "#FF4D0D", scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#E8400A] px-16 py-6 font-medium tracking-wider uppercase text-xl">AGENDAR VISITA GRATUITA</motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-20 border-t border-[#2A2A2A] bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="font-['Bebas_Neue',sans-serif] text-4xl mb-2">FORGEE<span className="text-[#E8400A]">.</span></div>
              <p className="text-[#6B6B6B] text-xs tracking-[0.14em] uppercase mb-6">BEYOND LIMITS KNOWN™</p>
            </div>
            <div>
              <h4 className="text-[#6B6B6B] text-xs tracking-wider uppercase mb-4">Academia</h4>
              <nav className="space-y-2">{["Espaço", "Programas", "Equipe", "Planos"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="block text-[#B0B0B0] hover:text-[#E8400A] transition-colors">{item}</a>)}</nav>
            </div>
            <div>
              <h4 className="text-[#6B6B6B] text-xs tracking-wider uppercase mb-4">Legal & Redes</h4>
              <nav className="space-y-2">
                <a href="#" className="block text-[#B0B0B0] hover:text-[#E8400A] transition-colors">Política de Privacidade</a>
                <a href="#" className="block text-[#B0B0B0] hover:text-[#E8400A] transition-colors">Termos de Uso</a>
              </nav>
            </div>
          </div>
          <div className="border-t border-[#2A2A2A] pt-8">
            <p className="text-[#6B6B6B] text-xs text-center">FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP · DESIGN SYSTEM © 2026</p>
          </div>
        </div>
      </footer>

      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </div>
  );
}
