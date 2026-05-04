# Forge Fitness - Sistema de Performance & Fitness

## 🔥 Sobre o Projeto

Este é um projeto web moderno desenvolvido com **React**, **Tailwind CSS** e **Vite**, criado especificamente para a marca Forge Fitness. O sistema implementa o design system **Forge Identity**, focado em transformação, performance e uma estética de alta intensidade.

## 🎨 Design System - Forge Identity

O design system é construído sobre a tensão entre poder humano bruto e precisão tecnológica:

### Cores Principais
- **Background**: `#111111` (Dark-first approach)
- **Primary**: `#E8400A` (Combustion Orange)
- **Accent**: `#FF4D0D` (Orange Hot)
- **Text**: `#FFFFFF` (Primary), `#B0B0B0` (Secondary)

### Tipografia
- **Display**: Bebas Neue (Headlines, títulos grandes)
- **Body**: Inter (Texto corpo, interface)

### Princípios de Design
- Dark-first: fundos nunca excedem `#1E1E1E`
- Alto contraste com laranja vibrante
- Tipografia pesada e condensada para displays
- Animações fluidas com Motion (Framer Motion)
- Grid base de 8pt para espaçamento

## 🚀 Tecnologias

- **React 18.3.1** - Framework UI
- **Tailwind CSS 4.x** - Styling
- **Vite** - Build tool
- **Motion** (Framer Motion) - Animações
- **Lucide React** - Ícones
- **TypeScript/JSX** - Linguagem

## 📦 Estrutura do Projeto

```
src/
├── app/
│   ├── App.tsx                    # Componente principal
│   └── components/
│       ├── Button.tsx             # Botões reutilizáveis
│       ├── Card.tsx               # Cards do sistema
│       ├── StatCard.tsx           # Cards de estatísticas
│       ├── AnimatedBackground.tsx # Fundo animado
│       └── DashboardPreview.tsx   # Preview da dashboard
├── styles/
│   ├── theme.css                  # Tokens do design system
│   └── fonts.css                  # Importação de fontes
└── imports/
    └── 1440WLight/                # Assets importados do Figma
```

## 🎯 Componentes Criados

### Button
Botão reutilizável com variantes:
- `primary`: Fundo laranja (#E8400A)
- `ghost`: Transparente com borda

```tsx
import { Button } from "./components/Button";

<Button variant="primary">COMEÇAR AGORA</Button>
<Button variant="ghost">SAIBA MAIS</Button>
```

### Card
Sistema de cards com animações hover:

```tsx
import { Card, CardHeader, CardTitle, CardContent } from "./components/Card";

<Card>
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
  </CardHeader>
  <CardContent>
    Conteúdo aqui...
  </CardContent>
</Card>
```

### StatCard
Cards para exibir estatísticas com animações:

```tsx
import { StatCard } from "./components/StatCard";

<StatCard label="Total de alunos" value="+1.200" delay={0.2} />
```

### AnimatedBackground
Fundo animado com gradientes em movimento:

```tsx
import { AnimatedBackground } from "./components/AnimatedBackground";

<div className="relative">
  <AnimatedBackground />
  {/* Seu conteúdo aqui */}
</div>
```

## 🔮 Expansão para Dashboard

O projeto foi estruturado para fácil expansão para uma dashboard administrativa completa. Um componente de preview já foi criado:

```tsx
import { DashboardPreview } from "./components/DashboardPreview";

// Use no App.tsx ou como rota separada
<DashboardPreview />
```

### Recursos da Dashboard (Prontos para Implementação)
- ✅ Métricas em tempo real
- ✅ Feed de atividades
- ✅ Status do sistema
- ✅ Componentes animados
- 🔄 Gráficos (recomendado: Recharts)
- 🔄 Tabelas de dados
- 🔄 Formulários de gestão
- 🔄 Sistema de rotas (react-router já instalado)

## 🎨 Recursos de Animação

Todas as animações são implementadas com **Motion** (Framer Motion):

### Exemplos de uso:

```tsx
// Fade in com delay
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  Conteúdo
</motion.div>

// Hover com escala
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Clique aqui
</motion.button>

// Animação em loop
<motion.div
  animate={{
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.5, 0.3]
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  Elemento pulsante
</motion.div>
```

## 📱 Responsividade

O sistema é totalmente responsivo com breakpoints Tailwind:
- Mobile: `< 768px`
- Tablet: `768px - 1023px`
- Desktop: `≥ 1024px`

## 🛠️ Próximos Passos Recomendados

### Para Dashboard Completa:
1. **Implementar Sistema de Rotas**
   ```bash
   # react-router já está instalado
   ```
   - Criar rotas para: Dashboard, Alunos, Treinos, Planos, Configurações

2. **Adicionar Gráficos**
   ```bash
   # recharts já está instalado
   ```
   - Gráficos de evolução de alunos
   - Métricas de performance
   - Análises de ocupação

3. **Sistema de Autenticação**
   - Login/Logout
   - Proteção de rotas
   - Gerenciamento de sessão

4. **Integração com Backend**
   - API REST ou GraphQL
   - Gerenciamento de estado (Context API ou Zustand)
   - Cache de dados

5. **Formulários Avançados**
   ```bash
   # react-hook-form já está instalado
   ```
   - Cadastro de alunos
   - Criação de treinos
   - Gestão de planos

## 🎯 Pacotes Úteis Já Instalados

- ✅ `motion` - Animações
- ✅ `lucide-react` - Ícones
- ✅ `recharts` - Gráficos
- ✅ `react-router` - Rotas
- ✅ `react-hook-form` - Formulários
- ✅ `sonner` - Notificações toast
- ✅ `@radix-ui/*` - Componentes UI acessíveis

## 📖 Como Usar

O servidor de desenvolvimento já está rodando. Faça suas alterações em `src/app/App.tsx` e elas serão refletidas automaticamente.

### Dicas:
- Use os componentes criados em `src/app/components/` para manter consistência
- Siga o design system definido em `src/styles/theme.css`
- Todas as cores e espaçamentos estão como variáveis CSS
- Mantenha a tipografia: Bebas Neue para displays, Inter para body

## 🔥 Design Philosophy

> "Transformação não é um destino, é um processo contínuo."

O design system Forge Identity foi criado para transmitir:
- **Intensidade**: Cores de combustão, contrastes fortes
- **Transformação**: Animações fluidas, elementos dinâmicos
- **Precisão**: Grid rigoroso, tipografia estruturada
- **Poder**: Tipografia pesada, hierarquia clara

---

**Desenvolvido para Forge Fitness - Onde identidades são forjadas.**
