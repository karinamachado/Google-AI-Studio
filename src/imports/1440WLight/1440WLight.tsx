import svgPaths from "./svg-i2dst7rx66";
import imgGymAthlete from "./d735ec1ecf333057e3fb113114f1f9e4bac8203d.png";
import imgIntenseTrainingSession from "./2207c337d8df411f1d060d053a54d6f2aba19197.png";
import imgGymEquipmentDetail from "./9cd56faa17154e84fac2635111ea763d4247b16c.png";

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Funcionamento</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Margin />
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white whitespace-nowrap">
        <p className="leading-[40px]">05H–23H</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Dias por semana</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Margin1 />
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white whitespace-nowrap">
        <p className="leading-[40px]">7 DIAS</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Área do espaço</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Margin2 />
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white whitespace-nowrap">
        <p className="leading-[40px]">1.800M²</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Total de alunos</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Margin3 />
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white whitespace-nowrap">
        <p className="leading-[40px]">+1.200</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Ano de fundação</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="col-5 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Margin4 />
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white whitespace-nowrap">
        <p className="leading-[40px]">DESDE 2018</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(5,minmax(0,1fr))] grid-rows-[_60px] relative size-full">
        <Container1 />
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute bg-[#181818] left-0 right-0 top-[900px]" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[160px] py-[33px] relative rounded-[inherit] size-full">
        <Container />
      </div>
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-b border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[96px] text-center tracking-[-2.4px] uppercase whitespace-nowrap">
        <p className="leading-[86.4px]">TESTEMUNHOS</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#d9d9d9] text-[20px] w-full">
        <p className="leading-[32.5px] mb-0">{`"Treinei em academias em`}</p>
        <p className="leading-[32.5px] mb-0">São Paulo por anos. A</p>
        <p className="leading-[32.5px] mb-0">FORGEE é a única que me fez</p>
        <p className="leading-[32.5px] mb-0">não sentir falta de nenhuma</p>
        <p className="leading-[32.5px]">{`delas."`}</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[16px] uppercase w-full">
        <p className="leading-[24px]">Rafael M.</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[14px] w-full">
        <p className="leading-[20px]">Engenheiro · Aluno há 3 anos</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#181818] col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start justify-between p-[32px] relative size-full">
        <Margin5 />
        <Container9 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#d9d9d9] text-[20px] w-full">
        <p className="leading-[32.5px] mb-0">{`"Entrei querendo perder peso.`}</p>
        <p className="leading-[32.5px] mb-0">Fiquei pela comunidade e</p>
        <p className="leading-[32.5px] mb-0">pela sensação de que alguém</p>
        <p className="leading-[32.5px]">{`realmente acompanha."`}</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[16px] uppercase w-full">
        <p className="leading-[24px]">Juliana T.</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[14px] w-full">
        <p className="leading-[20px]">Professora · Aluna há 2 anos</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#181818] col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start justify-between p-[32px] relative size-full">
        <Margin6 />
        <Container13 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#d9d9d9] text-[20px] w-full">
        <p className="leading-[32.5px] mb-0">{`"A estrutura impressiona. Mas`}</p>
        <p className="leading-[32.5px] mb-0">o que me mantém são os</p>
        <p className="leading-[32.5px] mb-0">profissionais. Nunca fui tão</p>
        <p className="leading-[32.5px]">{`bem orientado."`}</p>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[16px] uppercase w-full">
        <p className="leading-[24px]">Lucas O.</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[14px] w-full">
        <p className="leading-[20px]">Empresário · Aluno há 4 anos</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#181818] col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start justify-between p-[32px] relative size-full">
        <Margin7 />
        <Container17 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_302.50px] h-[302.5px] relative shrink-0 w-full" data-name="Container">
      <Background />
      <Background1 />
      <Background2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[80px] relative size-full">
        <Heading1 />
        <Container7 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-[#111] content-stretch flex flex-col items-start left-0 pb-[128px] pt-[127px] px-[80px] right-0 top-[2527.67px]" data-name="Section">
      <Container6 />
    </div>
  );
}

function GymAthlete() {
  return (
    <div className="flex-[1_0_0] min-h-px opacity-40 relative w-full" data-name="Gym athlete">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[106.67%] left-0 max-w-none top-[-3.33%] w-full" src={imgGymAthlete} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center" data-name="Container">
      <GymAthlete />
      <div className="absolute bg-gradient-to-t from-[#0a0a0a] inset-0 to-[rgba(10,10,10,0)] via-1/2 via-[rgba(10,10,10,0.2)]" data-name="Gradient" />
      <div className="absolute bg-gradient-to-r from-[#0a0a0a] inset-0 to-[rgba(10,10,10,0)] via-1/2 via-[rgba(10,10,10,0.1)]" data-name="Gradient" />
      <div className="absolute bg-[rgba(232,64,10,0.1)] blur-[60px] h-[900px] right-0 rounded-[33554400px] top-0 w-[479.98px]" data-name="Overlay+Blur" />
      <div className="absolute bg-[rgba(178,42,0,0.1)] blur-[50px] bottom-[-80px] h-[450px] left-[-80px] rounded-[33554400px] w-[720px]" data-name="Overlay+Blur" />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[0px] tracking-[-3.5px] uppercase whitespace-nowrap">
        <p className="mb-0 text-[140px]">
          <span className="leading-[119px] text-[#d9d9d9]">{`SEM `}</span>
          <span className="leading-[119px] text-[#e8400a]">MÁGICA</span>
        </p>
        <p className="mb-0 text-[140px]">
          <span className="leading-[119px] text-[#d9d9d9]">{`SEM `}</span>
          <span className="leading-[119px] text-[#e8400a]">ATALHOS</span>
        </p>
        <p className="text-[140px]">
          <span className="leading-[119px] text-[#d9d9d9]">{`SEM `}</span>
          <span className="leading-[119px] text-[#e8400a]">DESCULPAS</span>
        </p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[172.75px] max-w-[384px] relative shrink-0 w-[384px]" data-name="Heading 2">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Barlow_Condensed:Bold',sans-serif] h-[173px] justify-center leading-[0] left-0 not-italic text-[#d9d9d9] text-[48px] top-[85.78px] tracking-[-1.2px] uppercase w-[308.918px]">
        <p className="leading-[43.2px] mb-0">Treinos</p>
        <p className="leading-[43.2px] mb-0">progressivos e</p>
        <p className="leading-[43.2px] mb-0">acompanhamento</p>
        <p className="leading-[43.2px]">real!</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[448px] pr-[17.39px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[20px] whitespace-nowrap">
        <p className="leading-[32.5px] mb-0">Um espaço desenhado para quem treina com</p>
        <p className="leading-[32.5px] mb-0">intenção. Sem distrações. Sem promessas</p>
        <p className="leading-[32.5px]">vazias. Só você, o equipamento e o trabalho.</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container24 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e8400a] content-stretch flex items-center justify-center pb-[21.5px] pt-[20.5px] px-[48px] relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[32px]">Começar Agora</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[49px] py-[21px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#3a3a3a] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[32px]">Conhecer o Espaço</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[896px] relative shrink-0 w-[855.39px]" data-name="Container">
      <Heading />
      <Container23 />
      <Container25 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] pt-[80px] px-[80px] relative shrink-0" data-name="Container">
      <Container22 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute content-stretch flex h-[900px] items-center justify-center left-0 overflow-clip right-0 top-0" data-name="Section">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[14px] tracking-[2.8px] uppercase w-full">
        <p className="leading-[20px]">Quem Somos</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[0px] tracking-[-2.4px] uppercase w-full">
        <p className="leading-[86.4px] mb-0 text-[96px]">FORJADOS</p>
        <p className="leading-[86.4px] mb-0 text-[96px]">PELA</p>
        <p className="leading-[86.4px] text-[#e8400a] text-[96px]">DISCIPLINA.</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[0px] w-full">
        <p className="mb-0 text-[20px]">
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] text-[#b0b0b0]">{`A `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[32.5px] text-white">FORGEE</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] text-[#b0b0b0]">{` nasceu de uma certeza simples: ambiente mediano`}</span>
        </p>
        <p className="leading-[32.5px] text-[20px]">produz resultado mediano.</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start py-[16px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[20px] w-full">
        <p className="leading-[32.5px] mb-0">Cada metro quadrado foi pensado para que o espaço não interfira</p>
        <p className="leading-[32.5px] mb-0">— ele desaparece. O que fica é o treino, a concentração e o</p>
        <p className="leading-[32.5px]">progresso.</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white tracking-[0.9px] w-full">
          <p className="leading-[40px]">{`"In silence, the transformation begins."`}</p>
        </div>
      </div>
    </div>
  );
}

function Blockquote() {
  return (
    <div className="relative shrink-0 w-full" data-name="Blockquote">
      <div aria-hidden="true" className="absolute border-[#e8400a] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pl-[28px] py-[8px] relative size-full">
        <Container33 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[20px] w-full">
        <p className="leading-[32.5px] mb-0">Aqui não tem música forçada, espelho em excesso ou coach em</p>
        <p className="leading-[32.5px] mb-0">cima. Tem equipamento que não decepciona no seu melhor dia,</p>
        <p className="leading-[32.5px] mb-0">profissionais que aparecem quando você precisa e silêncio o</p>
        <p className="leading-[32.5px]">suficiente para se ouvir.</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[672px] pt-[25.1px] relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container32 />
      <Blockquote />
      <Container34 />
    </div>
  );
}

function Container28() {
  return (
    <div className="col-[1/span_7] content-stretch flex flex-col gap-[14.9px] items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Container29 />
      <Heading3 />
      <Container30 />
    </div>
  );
}

function IntenseTrainingSession() {
  return (
    <div className="h-[536.67px] relative shrink-0 w-full" data-name="Intense training session">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-43.56%] max-w-none top-0 w-[187.12%]" src={imgIntenseTrainingSession} />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Background">
      <IntenseTrainingSession />
      <div className="absolute inset-[0_-0.01px_0_0] opacity-20" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 429.34 536.67\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(30.359 0 0 37.948 214.67 268.33)\\'><stop stop-color=\\'rgba(232,64,10,1)\\' offset=\\'0.058926\\'/><stop stop-color=\\'rgba(232,64,10,0)\\' offset=\\'0.058926\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(10, 10, 10) 0%, rgb(10, 10, 10) 100%)" }} data-name="Gradient+Background" />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute bottom-[-40.69px] content-stretch flex flex-col items-start pb-[189px] pr-[251.31px] right-[-40.01px]" data-name="Container">
      <div className="flex h-[462px] items-center justify-center relative shrink-0 w-[210px]" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic opacity-20 relative text-[#1e1e1e] text-[140px] whitespace-nowrap">
            <p className="leading-[210px]">DISCIPLINA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="col-[8/span_5] content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Background3 />
      <Container36 />
    </div>
  );
}

function Container27() {
  return (
    <div className="gap-x-[64px] gap-y-[64px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_811.67px] h-[811.67px] relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container35 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3a3a] text-[36px] whitespace-nowrap">
        <p className="leading-[40px]">01</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p28b1aae0} id="Vector" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container39 />
        <div className="bg-[#3a3a3a] flex-[1_0_0] h-px min-w-px" data-name="Horizontal Divider" />
        <Svg />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[30px] tracking-[-0.75px] uppercase w-full">
          <p className="leading-[27px]">Intensidade</p>
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[18px] w-full">
          <p className="leading-[29.25px] mb-0">O ambiente foi calibrado para</p>
          <p className="leading-[29.25px] mb-0">elevar. Iluminação, acústica,</p>
          <p className="leading-[29.25px] mb-0">temperatura — tudo serve ao</p>
          <p className="leading-[29.25px]">treino.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#1e1e1e] col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[41px] relative size-full">
        <Container38 />
        <Heading4 />
        <Container40 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3a3a] text-[36px] whitespace-nowrap">
        <p className="leading-[40px]">02</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3c6311f0} id="Vector_2" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3d728000} id="Vector_3" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container42 />
        <div className="bg-[#3a3a3a] flex-[1_0_0] h-px min-w-px" data-name="Horizontal Divider" />
        <Svg1 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[30px] tracking-[-0.75px] uppercase w-full">
          <p className="leading-[27px]">Precisão</p>
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[18px] w-full">
          <p className="leading-[29.25px] mb-0">Protocolo individualizado</p>
          <p className="leading-[29.25px] mb-0">desde o dia um. Nenhuma</p>
          <p className="leading-[29.25px]">planilha genérica sai daqui.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#1e1e1e] col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[70.25px] pt-[41px] px-[41px] relative size-full">
        <Container41 />
        <Heading5 />
        <Container43 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3a3a] text-[36px] whitespace-nowrap">
        <p className="leading-[40px]">03</p>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M16 7H22V13" id="Vector" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p13253c0} id="Vector_2" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container45 />
        <div className="bg-[#3a3a3a] flex-[1_0_0] h-px min-w-px" data-name="Horizontal Divider" />
        <Svg2 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[30px] tracking-[-0.75px] uppercase w-full">
          <p className="leading-[27px]">Controle</p>
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[18px] w-full">
          <p className="leading-[29.25px] mb-0">Você define o objetivo. Nós</p>
          <p className="leading-[29.25px] mb-0">fornecemos o caminho, o</p>
          <p className="leading-[29.25px]">espaço e o suporte.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#1e1e1e] col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[70.25px] pt-[41px] px-[41px] relative size-full">
        <Container44 />
        <Heading6 />
        <Container46 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_306px] h-[306px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder1 />
      <BackgroundBorder2 />
      <BackgroundBorder3 />
    </div>
  );
}

function Container26() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[128px] items-start max-w-[inherit] px-[80px] relative size-full">
        <Container27 />
        <Container37 />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col items-start left-0 overflow-clip px-[80px] py-[128px] right-0 top-[1026px]" data-name="Section">
      <Container26 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[14px] tracking-[2.8px] uppercase w-full">
        <p className="leading-[20px]">Estrutura</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[0px] tracking-[-2.4px] uppercase w-full">
        <p className="leading-[86.4px] mb-0 text-[96px]">EQUIPAMENTO</p>
        <p className="leading-[86.4px] mb-0 text-[96px]">QUE NÃO TE</p>
        <p className="leading-[86.4px] text-[#e8400a] text-[96px]">LIMITA.</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[448px] pt-[17.1px] relative shrink-0 w-[448px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[20px] whitespace-nowrap">
        <p className="leading-[28px] mb-0">Cada peça selecionada com um critério:</p>
        <p className="leading-[28px]">aguentar seu melhor dia todos os dias.</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[32px]">{`01 · CARDIO & CONDITIONING`}</p>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[24px] relative size-full">
        <Container52 />
        <Svg3 />
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#e8400a] shrink-0 size-[4px]" data-name="Background" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Assault Bike Concept2 — 8 UNIDADES</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#e8400a] shrink-0 size-[4px]" data-name="Background" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Remo Concept2 Model D — 6 UNIDADES</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#e8400a] shrink-0 size-[4px]" data-name="Background" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">SkiErg Concept2 — 4 UNIDADES</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#e8400a] shrink-0 size-[4px]" data-name="Background" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Esteiras NordicTrack com inclinação negativa</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#e8400a] shrink-0 size-[4px]" data-name="Background" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Cordas de batalha 15m e 20m</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-[24px] pl-[16px] relative size-full">
        <Item />
        <Item1 />
        <Item2 />
        <Item3 />
        <Item4 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-b border-solid inset-0 pointer-events-none" />
      <Button2 />
      <List />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white whitespace-nowrap">
        <p className="leading-[32px]">02 · FORÇA LIVRE</p>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M9 18L15 12L9 6" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[24px] relative size-full">
        <Container53 />
        <Svg4 />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-b border-solid inset-0 pointer-events-none" />
      <Button3 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white whitespace-nowrap">
        <p className="leading-[32px]">03 · MÁQUINAS</p>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M9 18L15 12L9 6" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[24px] relative size-full">
        <Container54 />
        <Svg5 />
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-b border-solid inset-0 pointer-events-none" />
      <Button4 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[33.1px] relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder />
      <HorizontalBorder1 />
      <HorizontalBorder2 />
    </div>
  );
}

function Container48() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[14.9px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container49 />
      <Heading7 />
      <Container50 />
      <Container51 />
    </div>
  );
}

function GymEquipmentDetail() {
  return (
    <div className="aspect-[528/528] col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Gym Equipment detail">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-24.96%] max-w-none top-0 w-[149.93%]" src={imgGymEquipmentDetail} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="gap-x-[64px] gap-y-[64px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_898.17px] h-[898.17px] relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <GymEquipmentDetail />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col items-start left-0 px-[160px] py-[128px] right-0 top-[3236.56px]" data-name="Section">
      <Container47 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[14px] tracking-[2.8px] uppercase w-full">
        <p className="leading-[20px]">O Que Oferecemos</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[96px] tracking-[-2.4px] uppercase w-full">
        <p className="decoration-solid leading-[86.4px] underline">PROGRAMAS.</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#2a2a2a] content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d4d4d4] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">Hipertrofia</p>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[9.2px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[30px] tracking-[-0.75px] uppercase w-full">
        <p className="leading-[27px]">FORGEE STRENGTH</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[14px] w-full">
        <p className="leading-[22.75px] mb-0">Musculação por</p>
        <p className="leading-[22.75px] mb-0">periodização. Para quem</p>
        <p className="leading-[22.75px] mb-0">quer construir massa e</p>
        <p className="leading-[22.75px] mb-0">entender o próprio corpo.</p>
        <p className="leading-[22.75px] mb-0">Disponível como treino livre</p>
        <p className="leading-[22.75px] mb-0">com planilha ou</p>
        <p className="leading-[22.75px]">acompanhado com coach.</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[14.8px] items-start pb-[32px] pt-[3px] relative size-full">
        <Background4 />
        <Heading9 />
        <Container59 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[2.59px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px] mb-0">Para quem</p>
        <p className="leading-[15px]">é</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[56.98px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px] mb-0">Iniciantes a</p>
        <p className="leading-[15px]">avançados</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container62 />
      <Container63 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">Frequência</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">3–5× por semana</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container65 />
      <Container66 />
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <Container61 />
        <Container64 />
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#1e1e1e] col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between p-[33px] relative size-full">
        <Container58 />
        <Container60 />
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#2a2a2a] content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d4d4d4] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">Prevenção</p>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[9.1px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[30px] tracking-[-0.75px] uppercase w-full">
        <p className="leading-[27px]">FORGEE MOBILITY</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[14px] w-full">
        <p className="leading-[22.75px] mb-0">Protocolo de mobilidade,</p>
        <p className="leading-[22.75px] mb-0">postura e cadeia posterior.</p>
        <p className="leading-[22.75px] mb-0">Não é yoga. É trabalho de</p>
        <p className="leading-[22.75px] mb-0">corpo para quem treina</p>
        <p className="leading-[22.75px] mb-0">pesado e não quer se</p>
        <p className="leading-[22.75px]">machucar.</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[14.9px] items-start pb-[32px] pt-[3px] relative size-full">
        <Background5 />
        <Heading10 />
        <Container68 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">Para quem é</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">Performance</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container71 />
      <Container72 />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">Foco</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">Longevidade</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container74 />
      <Container75 />
    </div>
  );
}

function Container69() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <Container70 />
        <Container73 />
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#1e1e1e] col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between p-[33px] relative size-full">
        <Container67 />
        <Container69 />
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#2a2a2a] content-stretch flex items-start px-[8px] py-[4px] relative shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d4d4d4] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">Exclusivo</p>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[9px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[30px] tracking-[-0.75px] uppercase w-full">
        <p className="leading-[27px]">PERSONAL TRAINING</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[14px] w-full">
        <p className="leading-[22.75px] mb-0">Sessões 1:1 com avaliação</p>
        <p className="leading-[22.75px] mb-0">completa, protocolo</p>
        <p className="leading-[22.75px] mb-0">personalizado e revisão a</p>
        <p className="leading-[22.75px] mb-0">cada 4 semanas. Individual</p>
        <p className="leading-[22.75px]">ou em dupla.</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15px] items-start pb-[32px] pt-[3px] relative size-full">
        <Background6 />
        <Heading11 />
        <Container77 />
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">Para quem é</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">Foco total</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container80 />
          <Container81 />
        </div>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">Sessões</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">A combinar</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container83 />
      <Container84 />
    </div>
  );
}

function Container78() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <Container79 />
        <Container82 />
      </div>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-[#1e1e1e] col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between p-[33px] relative size-full">
        <Container76 />
        <Container78 />
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-white content-stretch flex items-start px-[8.4px] py-[4.2px] relative shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[10.5px] tracking-[1.05px] uppercase whitespace-nowrap">
        <p className="leading-[15.75px]">Alta Intensidade</p>
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8.85px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[31.5px] text-white tracking-[-0.7875px] uppercase w-full">
        <p className="leading-[28.35px]">FORGEE CONDITIONING</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.585px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.7px] text-[rgba(255,255,255,0.9)] w-full">
        <p className="leading-[23.887px] mb-0">Sessões de 45 min com</p>
        <p className="leading-[23.887px] mb-0">circuito de alta intensidade —</p>
        <p className="leading-[23.887px] mb-0">remo, assault bike, força</p>
        <p className="leading-[23.887px] mb-0">funcional e potência. Início e</p>
        <p className="leading-[23.887px] mb-0">fim marcados. Sem</p>
        <p className="leading-[23.887px]">improvisar.</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col gap-[15.5px] items-start pb-[33.6px] pt-[3.15px] relative shrink-0 w-full" data-name="Container">
      <Background8 />
      <Heading12 />
      <Container86 />
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[76.81px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-0 not-italic text-[10.5px] text-[rgba(255,255,255,0.7)] top-[7.35px] tracking-[0.525px] uppercase w-[77.128px]">
        <p className="leading-[15.75px]">Para quem é</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[115.01px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] left-0 not-italic text-[10.5px] text-white top-[7.35px] tracking-[0.525px] uppercase w-[115.388px]">
        <p className="leading-[15.75px]">Perda de gordura</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container89 />
      <Container90 />
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[47.97px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-0 not-italic text-[10.5px] text-[rgba(255,255,255,0.7)] top-[7.35px] tracking-[0.525px] uppercase w-[48.317px]">
        <p className="leading-[15.75px]">Turmas</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[99.08px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] left-0 not-italic text-[10.5px] text-white top-[7.35px] tracking-[0.525px] uppercase w-[100.046px]">
        <p className="leading-[15.75px]">06H · 12H · 19H30</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container92 />
          <Container93 />
        </div>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col gap-[25.2px] items-start relative shrink-0 w-full" data-name="Container">
      <Container88 />
      <Container91 />
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#e8400a] col-2 content-stretch flex flex-col items-start justify-between p-[33.6px] relative row-1 self-start shrink-0 w-[275.1px]" data-name="Background">
      <Container85 />
      <Container87 />
    </div>
  );
}

function Container57() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_419.25px] h-[468.26px] pt-[49.01px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder4 />
      <BackgroundBorder5 />
      <BackgroundBorder6 />
      <Background7 />
    </div>
  );
}

function Container55() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[15px] items-start max-w-[inherit] px-[80px] relative size-full">
        <Container56 />
        <Heading8 />
        <Container57 />
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute bg-[#111] content-stretch flex flex-col items-start left-0 px-[80px] py-[128px] right-0 top-[4390.73px]" data-name="Section">
      <Container55 />
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[14px] text-center tracking-[2.8px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">Investimento</p>
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[0px] text-center tracking-[-2.4px] uppercase whitespace-nowrap">
        <p className="leading-[86.4px] mb-0 text-[96px]">SEM MATRÍCULA.</p>
        <p className="leading-[86.4px] mb-0 text-[96px]">SEM FIDELIDADE.</p>
        <p className="leading-[86.4px] text-[#e8400a] text-[96px]">SEM ENROLAÇÃO.</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[576px] pt-[9.1px] relative shrink-0 w-[576px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[28px] mb-0">Mude de plano quando quiser. Cancele com 30 dias. Sem</p>
        <p className="leading-[28px]">justificativa.</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col gap-[14.9px] items-center relative shrink-0 w-full" data-name="Container">
      <Container96 />
      <Heading13 />
      <Container97 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[30px] tracking-[-0.75px] uppercase w-full">
        <p className="leading-[27px]">LIVRE</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Heading14 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b6b6b] text-[20px]">
        <p className="leading-[28px]">R$</p>
      </div>
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center relative shrink-0 text-[60px] text-white">
        <p className="leading-[60px]">149</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b6b6b] text-[16px]">
        <p className="leading-[24px]">/mês</p>
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <Paragraph />
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M15 4.5L6.75 12.75L3 9" id="Vector" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0 w-full" data-name="Item">
      <Svg6 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Acesso ilimitado 05H–23H</p>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M15 4.5L6.75 12.75L3 9" id="Vector" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0 w-full" data-name="Item">
      <Svg7 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Avaliação física de entrada</p>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M15 4.5L6.75 12.75L3 9" id="Vector" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0 w-full" data-name="Item">
      <Svg8 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Planilha de treino inicial</p>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M15 4.5L6.75 12.75L3 9" id="Vector" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0 w-full" data-name="Item">
      <Svg9 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">App FORGEE</p>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M13.5 4.5L4.5 13.5" id="Vector" stroke="var(--stroke-0, #3A3A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M4.5 4.5L13.5 13.5" id="Vector_2" stroke="var(--stroke-0, #3A3A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pt-[2px] relative shrink-0 w-[18px]" data-name="SVG:margin">
      <Svg10 />
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3a3a3a] text-[14px] whitespace-nowrap">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] line-through">2 sessões de Personal/mês</p>
      </div>
    </div>
  );
}

function Svg11() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M13.5 4.5L4.5 13.5" id="Vector" stroke="var(--stroke-0, #3A3A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M4.5 4.5L13.5 13.5" id="Vector_2" stroke="var(--stroke-0, #3A3A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin1() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pt-[2px] relative shrink-0 w-[18px]" data-name="SVG:margin">
      <Svg11 />
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin1 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3a3a3a] text-[14px] whitespace-nowrap">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] line-through">Acesso ao Mobility</p>
      </div>
    </div>
  );
}

function Svg12() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M13.5 4.5L4.5 13.5" id="Vector" stroke="var(--stroke-0, #3A3A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M4.5 4.5L13.5 13.5" id="Vector_2" stroke="var(--stroke-0, #3A3A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin2() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pt-[2px] relative shrink-0 w-[18px]" data-name="SVG:margin">
      <Svg12 />
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin2 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3a3a3a] text-[14px] whitespace-nowrap">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] line-through">Acesso ilimitado a classes</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[42px] relative shrink-0 w-full" data-name="List">
      <Item5 />
      <Item6 />
      <Item7 />
      <Item8 />
      <Item9 />
      <Item10 />
      <Item11 />
    </div>
  );
}

function ListMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="List:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[48px] relative size-full">
        <List1 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#2a2a2a] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[32px] py-[16px] relative size-full">
          <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white tracking-[1px] whitespace-nowrap">
            <p className="leading-[28px]">Quero esse plano</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="bg-[#111] col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[41px] relative size-full">
        <Heading3Margin />
        <Margin8 />
        <ListMargin />
        <Button5 />
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[30px] tracking-[-0.75px] uppercase w-full">
        <p className="leading-[27px]">PLUS</p>
      </div>
    </div>
  );
}

function Heading3Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Heading 3:margin">
      <Heading15 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b6b6b] text-[20px]">
        <p className="leading-[28px]">R$</p>
      </div>
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center relative shrink-0 text-[60px] text-white">
        <p className="leading-[60px]">229</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b6b6b] text-[16px]">
        <p className="leading-[24px]">/mês</p>
      </div>
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Paragraph1 />
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M15 4.5L6.75 12.75L3 9" id="Vector" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0 w-full" data-name="Item">
      <Svg13 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Acesso ilimitado 05H–23H</p>
      </div>
    </div>
  );
}

function Svg14() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M15 4.5L6.75 12.75L3 9" id="Vector" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item13() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0 w-full" data-name="Item">
      <Svg14 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Planilha de treino inicial</p>
      </div>
    </div>
  );
}

function Svg15() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M15 4.5L6.75 12.75L3 9" id="Vector" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item14() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0 w-full" data-name="Item">
      <Svg15 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">App FORGEE</p>
      </div>
    </div>
  );
}

function Svg16() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M15 4.5L6.75 12.75L3 9" id="Vector" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item15() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0 w-full" data-name="Item">
      <Svg16 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">2 sessões de Personal/mês</p>
      </div>
    </div>
  );
}

function Svg17() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M15 4.5L6.75 12.75L3 9" id="Vector" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item16() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0 w-full" data-name="Item">
      <Svg17 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">1 aula Conditioning/semana</p>
      </div>
    </div>
  );
}

function Svg18() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M15 4.5L6.75 12.75L3 9" id="Vector" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item17() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0 w-full" data-name="Item">
      <Svg18 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Acesso ao Mobility</p>
      </div>
    </div>
  );
}

function Svg19() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M13.5 4.5L4.5 13.5" id="Vector" stroke="var(--stroke-0, #3A3A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M4.5 4.5L13.5 13.5" id="Vector_2" stroke="var(--stroke-0, #3A3A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin3() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pt-[2px] relative shrink-0 w-[18px]" data-name="SVG:margin">
      <Svg19 />
    </div>
  );
}

function Item18() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin3 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3a3a3a] text-[14px] whitespace-nowrap">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] line-through">4 sessões de Personal/mês</p>
      </div>
    </div>
  );
}

function Svg20() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M13.5 4.5L4.5 13.5" id="Vector" stroke="var(--stroke-0, #3A3A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M4.5 4.5L13.5 13.5" id="Vector_2" stroke="var(--stroke-0, #3A3A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin4() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pt-[2px] relative shrink-0 w-[18px]" data-name="SVG:margin">
      <Svg20 />
    </div>
  );
}

function Item19() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin4 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3a3a3a] text-[14px] whitespace-nowrap">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] line-through">WhatsApp com coach dedicado</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="List">
      <Item12 />
      <Item13 />
      <Item14 />
      <Item15 />
      <Item16 />
      <Item17 />
      <Item18 />
      <Item19 />
    </div>
  );
}

function ListMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[48px] relative shrink-0 w-full" data-name="List:margin">
      <List2 />
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#e8400a] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] py-[16px] relative size-full">
          <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white tracking-[1px] whitespace-nowrap">
            <p className="leading-[28px]">Quero esse plano</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="absolute bg-[#e8400a] content-stretch flex flex-col items-start px-[16px] py-[4px] right-[-0.3px] top-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">MAIS ESCOLHIDO</p>
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#1e1e1e] col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[40px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 shadow-[0px_0px_0px_2px_#e8400a]" data-name="Overlay+Shadow" />
        <Heading3Margin1 />
        <Margin9 />
        <ListMargin1 />
        <Button6 />
        <Background10 />
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[30px] tracking-[-0.75px] uppercase w-full">
        <p className="leading-[27px]">ELITE</p>
      </div>
    </div>
  );
}

function Heading3Margin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Heading16 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b6b6b] text-[20px]">
        <p className="leading-[28px]">R$</p>
      </div>
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center relative shrink-0 text-[60px] text-white">
        <p className="leading-[60px]">389</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b6b6b] text-[16px]">
        <p className="leading-[24px]">/mês</p>
      </div>
    </div>
  );
}

function Margin10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <Paragraph2 />
      </div>
    </div>
  );
}

function Svg21() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M15 4.5L6.75 12.75L3 9" id="Vector" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item20() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0 w-full" data-name="Item">
      <Svg21 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Acesso ilimitado 05H–23H</p>
      </div>
    </div>
  );
}

function Svg22() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M15 4.5L6.75 12.75L3 9" id="Vector" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item21() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0 w-full" data-name="Item">
      <Svg22 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">App FORGEE</p>
      </div>
    </div>
  );
}

function Svg23() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M15 4.5L6.75 12.75L3 9" id="Vector" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item22() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0 w-full" data-name="Item">
      <Svg23 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">4 sessões de Personal/mês</p>
      </div>
    </div>
  );
}

function Svg24() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M15 4.5L6.75 12.75L3 9" id="Vector" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item23() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0 w-full" data-name="Item">
      <Svg24 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Acesso ilimitado a classes</p>
      </div>
    </div>
  );
}

function Svg25() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M15 4.5L6.75 12.75L3 9" id="Vector" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item24() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0 w-full" data-name="Item">
      <Svg25 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Bioimpedância mensal</p>
      </div>
    </div>
  );
}

function Svg26() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M15 4.5L6.75 12.75L3 9" id="Vector" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item25() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0 w-full" data-name="Item">
      <Svg26 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">WhatsApp com coach dedicado</p>
      </div>
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[86px] relative shrink-0 w-full" data-name="List">
      <Item20 />
      <Item21 />
      <Item22 />
      <Item23 />
      <Item24 />
      <Item25 />
    </div>
  );
}

function ListMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="List:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[48px] relative size-full">
        <List3 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#2a2a2a] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[32px] py-[16px] relative size-full">
          <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white tracking-[1px] whitespace-nowrap">
            <p className="leading-[28px]">Quero esse plano</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder8() {
  return (
    <div className="bg-[#111] col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[41px] relative size-full">
        <Heading3Margin2 />
        <Margin10 />
        <ListMargin2 />
        <Button7 />
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_651px] h-[683px] pt-[32px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder7 />
      <Background9 />
      <BackgroundBorder8 />
    </div>
  );
}

function Container100() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[0px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="text-[12px]">
            <span className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#737373]">{`Opção avulsa: `}</span>
            <span className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] text-white">DIÁRIA R$ 39</span>
            <span className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#737373]">{` · `}</span>
            <span className="decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#e8400a] underline">Agendar</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder9() {
  return (
    <div className="bg-[#181818] content-stretch flex flex-col items-start p-[17px] relative shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none" />
      <Container100 />
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso · Plano anual com 15% de desconto</p>
      </div>
      <BackgroundBorder9 />
    </div>
  );
}

function Container94() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[inherit] px-[80px] relative size-full">
        <Container95 />
        <Container98 />
        <Container99 />
      </div>
    </div>
  );
}

function Section5() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col items-start left-0 px-[80px] py-[128px] right-0 top-[5252.38px]" data-name="Section">
      <Container94 />
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[14px] tracking-[2.8px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">Quem Te Acompanha</p>
      </div>
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.585px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[0px] tracking-[-2.4px] uppercase whitespace-nowrap">
        <p className="leading-[86.4px] mb-0 text-[96px]">COACHES QUE</p>
        <p className="leading-[86.4px] text-[#e8400a] text-[96px]">TREINAM.</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col gap-[15.195px] items-start relative shrink-0 w-[365px]" data-name="Container">
      <Container104 />
      <Heading17 />
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[384px] pr-[18.61px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[20px] whitespace-nowrap">
        <p className="leading-[28px] mb-0">Todos graduados em Educação Física.</p>
        <p className="leading-[28px] mb-0">Todos registrados no CREF SP. Todos</p>
        <p className="leading-[28px]">treinando.</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container103 />
      <Container105 />
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2a2a2a] text-[128px] whitespace-nowrap">
        <p className="leading-[128px]">RF</p>
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex items-center justify-center overflow-clip pb-[106.68px] pt-[106.65px] relative shrink-0 w-full" data-name="Background">
      <Container108 />
      <div className="absolute bg-gradient-to-t from-[rgba(232,64,10,0.2)] inset-0 opacity-0 to-[rgba(232,64,10,0)]" data-name="Gradient" />
    </div>
  );
}

function Heading18() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[24px] tracking-[-0.6px] uppercase w-full">
        <p className="leading-[21.6px]">RODRIGO FARIAS</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[14px] tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">Head Coach</p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[10px] uppercase w-full">
        <p className="leading-[15px]">CREF 045821-G/SP</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[4px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Background11 />
      <Heading18 />
      <Container109 />
      <Container110 />
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2a2a2a] text-[128px] whitespace-nowrap">
        <p className="leading-[128px]">AL</p>
      </div>
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex items-center justify-center overflow-clip pb-[106.68px] pt-[106.65px] relative shrink-0 w-full" data-name="Background">
      <Container112 />
      <div className="absolute bg-gradient-to-t from-[rgba(232,64,10,0.2)] inset-0 opacity-0 to-[rgba(232,64,10,0)]" data-name="Gradient" />
    </div>
  );
}

function Heading19() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[24px] tracking-[-0.6px] uppercase w-full">
        <p className="leading-[21.6px]">ANA LUÍSA</p>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[14px] tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">Conditioning</p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[10px] uppercase w-full">
        <p className="leading-[15px]">CREF 078342-G/SP</p>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[4px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Background12 />
      <Heading19 />
      <Container113 />
      <Container114 />
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2a2a2a] text-[128px] whitespace-nowrap">
        <p className="leading-[128px]">BT</p>
      </div>
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex items-center justify-center overflow-clip pb-[106.68px] pt-[106.65px] relative shrink-0 w-full" data-name="Background">
      <Container116 />
      <div className="absolute bg-gradient-to-t from-[rgba(232,64,10,0.2)] inset-0 opacity-0 to-[rgba(232,64,10,0)]" data-name="Gradient" />
    </div>
  );
}

function Heading20() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[24px] tracking-[-0.6px] uppercase w-full">
        <p className="leading-[21.6px]">BRUNO T.</p>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[14px] tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">{`Mobility & Rehab`}</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[10px] uppercase w-full">
        <p className="leading-[15px]">CREF 091205-G/SP</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[4px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Background13 />
      <Heading20 />
      <Container117 />
      <Container118 />
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2a2a2a] text-[128px] whitespace-nowrap">
        <p className="leading-[128px]">CD</p>
      </div>
    </div>
  );
}

function Background14() {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex items-center justify-center overflow-clip pb-[106.68px] pt-[106.65px] relative shrink-0 w-full" data-name="Background">
      <Container120 />
      <div className="absolute bg-gradient-to-t from-[rgba(232,64,10,0.2)] inset-0 opacity-0 to-[rgba(232,64,10,0)]" data-name="Gradient" />
    </div>
  );
}

function Heading21() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[24px] tracking-[-0.6px] uppercase w-full">
        <p className="leading-[21.6px]">CAMILA D.</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[14px] tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">Personal Trainer</p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[10px] uppercase w-full">
        <p className="leading-[15px]">CREF 063417-G/SP</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[4px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Background14 />
      <Heading21 />
      <Container121 />
      <Container122 />
    </div>
  );
}

function Container106() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_433.92px] h-[433.92px] relative shrink-0 w-full" data-name="Container">
      <Container107 />
      <Container111 />
      <Container115 />
      <Container119 />
    </div>
  );
}

function Container101() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[80px] relative size-full">
        <Container102 />
        <Container106 />
      </div>
    </div>
  );
}

function Section6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 px-[80px] py-[128px] right-0 top-[6744.55px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 962.7\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(193.46 0 0 129.34 -64080 -42840)\\'><stop stop-color=\\'rgba(42,42,42,1)\\' offset=\\'0.009304\\'/><stop stop-color=\\'rgba(42,42,42,0)\\' offset=\\'0.009304\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(17, 17, 17) 0%, rgb(17, 17, 17) 100%)" }} data-name="Section">
      <Container101 />
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[14px] tracking-[2.8px] uppercase w-full">
        <p className="leading-[20px]">Dúvidas</p>
      </div>
    </div>
  );
}

function Heading22() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.585px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[96px] tracking-[-2.4px] uppercase w-full">
        <p className="leading-[86.4px] mb-0">PERGUNTAS</p>
        <p className="leading-[86.4px]">DIRETAS.</p>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Preciso ter experiência?</p>
      </div>
    </div>
  );
}

function Svg27() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d="M15 5L5 15" id="Vector" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M5 5L15 15" id="Vector_2" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[24px] relative size-full">
        <Container126 />
        <Svg27 />
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[18px] w-full">
          <p className="leading-[29.25px] mb-0">Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é</p>
          <p className="leading-[29.25px]">individual.</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-b border-solid inset-0 pointer-events-none" />
      <Button8 />
      <Container127 />
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Posso treinar sozinho?</p>
      </div>
    </div>
  );
}

function Svg28() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[24px] relative size-full">
        <Container128 />
        <Svg28 />
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-b border-solid inset-0 pointer-events-none" />
      <Button9 />
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Como funciona o cancelamento?</p>
      </div>
    </div>
  );
}

function Svg29() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[24px] relative size-full">
        <Container129 />
        <Svg29 />
      </div>
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-b border-solid inset-0 pointer-events-none" />
      <Button10 />
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Posso visitar antes de assinar?</p>
      </div>
    </div>
  );
}

function Svg30() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[24px] relative size-full">
        <Container130 />
        <Svg30 />
      </div>
    </div>
  );
}

function HorizontalBorder6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-b border-solid inset-0 pointer-events-none" />
      <Button11 />
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[32.8px] relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder3 />
      <HorizontalBorder4 />
      <HorizontalBorder5 />
      <HorizontalBorder6 />
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex flex-col gap-[15.2px] items-start max-w-[768px] relative shrink-0 w-full" data-name="Container">
      <Container124 />
      <Heading22 />
      <Container125 />
    </div>
  );
}

function Section7() {
  return (
    <div className="absolute bg-[#111] content-stretch flex flex-col items-start left-0 pl-[160px] pr-[512px] py-[128px] right-0 top-[7707.25px]" data-name="Section">
      <Container123 />
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[14px] tracking-[2.8px] uppercase w-full">
        <p className="leading-[20px]">Onde Estamos</p>
      </div>
    </div>
  );
}

function Heading23() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.585px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[0px] tracking-[-2.4px] uppercase w-full">
        <p className="leading-[86.4px] mb-0 text-[96px]">NO CORAÇÃO</p>
        <p className="text-[96px]">
          <span className="leading-[86.4px] text-[#d9d9d9]">{`DE `}</span>
          <span className="leading-[86.4px] text-[#e8400a]">INDAIATUBA.</span>
        </p>
      </div>
    </div>
  );
}

function Svg31() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">
          <path d={svgPaths.p3ae94df2} id="Vector" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p363c980} id="Vector_2" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container137() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[20px] whitespace-nowrap">
        <p className="leading-[32.5px]">Rua das Esmeraldas, 742</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[20px] whitespace-nowrap">
        <p className="leading-[32.5px]">Jardim Morada do Sol</p>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[20px] whitespace-nowrap">
        <p className="leading-[32.5px]">Indaiatuba, SP · CEP 13.334-210</p>
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">200m do Carrefour · Próximo à saída SP-075</p>
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[305px]" data-name="Container">
      <Container137 />
      <Container138 />
      <Container139 />
      <Container140 />
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Svg31 />
      <Container136 />
    </div>
  );
}

function Svg32() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_943)" id="SVG">
          <path d={svgPaths.p28f08480} id="Vector" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_943">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container144() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">WhatsApp</p>
      </div>
    </div>
  );
}

function Container145() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">(19) 98234-5678</p>
      </div>
    </div>
  );
}

function Container143() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-full items-start relative shrink-0 w-[137px]" data-name="Container">
      <Container144 />
      <Container145 />
    </div>
  );
}

function Container142() {
  return (
    <div className="col-1 content-stretch flex gap-[16px] h-[43px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <Svg32 />
      <Container143 />
    </div>
  );
}

function Svg33() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p24d83580} id="Vector" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pd919a80} id="Vector_2" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container148() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">E-mail</p>
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">contato@forgee.academy</p>
      </div>
    </div>
  );
}

function Container147() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-full items-start relative shrink-0 w-[205px]" data-name="Container">
      <Container148 />
      <Container149 />
    </div>
  );
}

function Container146() {
  return (
    <div className="col-2 content-stretch flex gap-[16px] h-[43px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <Svg33 />
      <Container147 />
    </div>
  );
}

function Container141() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_43px] h-[43px] relative shrink-0 w-full" data-name="Container">
      <Container142 />
      <Container146 />
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#e8400a] content-stretch flex items-center justify-center px-[32px] py-[17px] relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white tracking-[1px] whitespace-nowrap">
        <p className="leading-[28px]">Falar no WhatsApp</p>
      </div>
    </div>
  );
}

function Svg34() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p3e47bd00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3610fb80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[33px] py-[17px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#3a3a3a] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white tracking-[1px] whitespace-nowrap">
        <p className="leading-[28px]">Como Chegar</p>
      </div>
      <Svg34 />
    </div>
  );
}

function Container150() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Button12 />
      <Button13 />
    </div>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start pt-[24.8px] relative shrink-0 w-full" data-name="Container">
      <Container135 />
      <Container141 />
      <Container150 />
    </div>
  );
}

function Container132() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[15.2px] items-start justify-self-stretch pb-[102.1px] relative row-1 self-start shrink-0" data-name="Container">
      <Container133 />
      <Heading23 />
      <Container134 />
    </div>
  );
}

function Svg35() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M12 6V12L16 14" id="Vector" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pace200} id="Vector_2" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Heading24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[30px] tracking-[-0.75px] uppercase whitespace-nowrap">
        <p className="leading-[27px]">Horários</p>
      </div>
    </div>
  );
}

function Container151() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Svg35 />
        <Heading24 />
      </div>
    </div>
  );
}

function Container153() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
          <p className="leading-[20px]">Segunda a Sexta</p>
        </div>
      </div>
    </div>
  );
}

function Container154() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">
          <p className="leading-[32px]">05H00 – 23H00</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder7() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[17px] pt-[16px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2a2a2a] border-b border-solid inset-0 pointer-events-none" />
      <Container153 />
      <Container154 />
    </div>
  );
}

function Container155() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
          <p className="leading-[20px]">Sábado</p>
        </div>
      </div>
    </div>
  );
}

function Container156() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">
          <p className="leading-[32px]">07H00 – 20H00</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder8() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[17px] pt-[16px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2a2a2a] border-b border-solid inset-0 pointer-events-none" />
      <Container155 />
      <Container156 />
    </div>
  );
}

function Container158() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">Domingo e Feriados</p>
      </div>
    </div>
  );
}

function Container159() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">
        <p className="leading-[32px]">08H00 – 14H00</p>
      </div>
    </div>
  );
}

function Container157() {
  return (
    <div className="content-stretch flex items-center justify-between py-[16px] relative shrink-0 w-full" data-name="Container">
      <Container158 />
      <Container159 />
    </div>
  );
}

function Container152() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <HorizontalBorder7 />
        <HorizontalBorder8 />
        <Container157 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(10,10,10,0.8)] relative shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[#e8400a] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17.5px] pt-[18.5px] px-[17px] relative size-full">
        <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[16px] tracking-[1.6px] uppercase whitespace-nowrap">
          <p className="leading-[24px]">Ambiente Selecionado</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder11() {
  return (
    <div className="bg-[#111] relative shrink-0 w-full" data-name="Background+Border">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-px py-[93.19px] relative rounded-[inherit] size-full">
        <div className="absolute inset-px opacity-20" data-name="Image" />
        <OverlayBorderOverlayBlur />
      </div>
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BackgroundBorder10() {
  return (
    <div className="bg-[#1e1e1e] col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[41px] relative size-full">
        <Container151 />
        <Container152 />
        <BackgroundBorder11 />
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="gap-x-[80px] gap-y-[80px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_661.38px] h-[661.38px] relative shrink-0 w-full" data-name="Container">
      <Container132 />
      <BackgroundBorder10 />
    </div>
  );
}

function Section8() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col items-start left-0 px-[160px] py-[128px] right-0 top-[8682.53px]" data-name="Section">
      <Container131 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[-2.4px] w-full">
        <p className="leading-[48px] text-[48px]">FORGEE</p>
      </div>
    </div>
  );
}

function Container163() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] tracking-[6px] uppercase w-full">
        <p className="leading-[16px]">Beyond Limits Known™</p>
      </div>
    </div>
  );
}

function Svg36() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_930)" id="SVG">
          <path d={svgPaths.p4b98700} id="Vector" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p19f4a800} id="Vector_2" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M14.5833 5.41667H14.5917" id="Vector_3" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_930">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[33554400px] shrink-0 size-[48px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <Svg36 />
    </div>
  );
}

function Svg37() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p24d83580} id="Vector" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pd919a80} id="Vector_2" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[33554400px] shrink-0 size-[48px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <Svg37 />
    </div>
  );
}

function Container164() {
  return (
    <div className="content-stretch flex gap-[24px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Link1 />
      <Link2 />
    </div>
  );
}

function Container162() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch pb-[34px] relative row-1 self-start shrink-0" data-name="Container">
      <Link />
      <Container163 />
      <Container164 />
    </div>
  );
}

function Heading25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[2px] uppercase w-full">
        <p className="leading-[18px]">Academia</p>
      </div>
    </div>
  );
}

function Item26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <button className="cursor-pointer flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] text-left tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">Espaço</p>
      </button>
    </div>
  );
}

function Item27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <button className="cursor-pointer flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] text-left tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">Programas</p>
      </button>
    </div>
  );
}

function Item28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <button className="cursor-pointer flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] text-left tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">Equipe</p>
      </button>
    </div>
  );
}

function Item29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <button className="cursor-pointer flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] text-left tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">Planos</p>
      </button>
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="List">
      <Item26 />
      <Item27 />
      <Item28 />
      <Item29 />
    </div>
  );
}

function Container165() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Heading25 />
      <List4 />
    </div>
  );
}

function Heading26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[2px] uppercase w-full">
        <p className="leading-[18px]">{`Legal & Redes`}</p>
      </div>
    </div>
  );
}

function Item30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[0px] tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px] text-[14px]">Política de Privacidade</p>
      </div>
    </div>
  );
}

function Item31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[0px] tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px] text-[14px]">Termos de Uso</p>
      </div>
    </div>
  );
}

function Item32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[0px] tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px] text-[14px]">Instagram</p>
      </div>
    </div>
  );
}

function Item33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[0px] tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px] text-[14px]">WhatsApp</p>
      </div>
    </div>
  );
}

function List5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="List">
      <Item30 />
      <Item31 />
      <Item32 />
      <Item33 />
    </div>
  );
}

function Container166() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Heading26 />
      <List5 />
    </div>
  );
}

function Container161() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_194px] h-[194px] relative shrink-0 w-full" data-name="Container">
      <Container162 />
      <Container165 />
      <Container166 />
    </div>
  );
}

function Container167() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3a3a3a] text-[10px] tracking-[2px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP</p>
        </div>
      </div>
    </div>
  );
}

function Container168() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3a3a3a] text-[10px] tracking-[2px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">Design System © 2026 FORGEE Academy</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder9() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[49px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#111] border-solid border-t inset-0 pointer-events-none" />
      <Container167 />
      <Container168 />
    </div>
  );
}

function Container160() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[80px] items-start max-w-[inherit] px-[80px] relative size-full">
        <Container161 />
        <HorizontalBorder9 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col items-start left-0 pb-[48px] pt-[97px] px-[80px] right-0 top-[10436.91px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#111] border-solid border-t inset-0 pointer-events-none" />
      <Container160 />
    </div>
  );
}

function Container170() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center left-[calc(50%+11.53px)] top-[calc(50%-0.2px)]" data-name="Container">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[432px] text-center tracking-[-21.6px] uppercase whitespace-nowrap">
        <p className="leading-[432px]">ACTION IS EVERYTHING</p>
      </div>
    </div>
  );
}

function Container169() {
  return (
    <div className="absolute inset-0 opacity-10 overflow-clip" data-name="Container">
      <Container170 />
    </div>
  );
}

function Heading27() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[0px] text-center tracking-[-2.5px] uppercase whitespace-nowrap">
        <p className="leading-[85px] mb-0 text-[100px]">A DECISÃO</p>
        <p className="leading-[85px] mb-0 text-[100px]">JÁ FOI TOMADA.</p>
        <p className="decoration-solid leading-[85px] text-[#e8400a] text-[100px] underline">AGORA É A AÇÃO.</p>
      </div>
    </div>
  );
}

function Container174() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] text-center tracking-[6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">A G E N D E U M A V I S I T A · G R A T U I T A · S E M C O M P R O M I S S O · T R A G A T Ê N I S</p>
      </div>
    </div>
  );
}

function Container175() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] text-center tracking-[6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">A G E N D E U M A V I S I T A · G R A T U I T A · S E M C O M P R O M I S S O · T R A G A T Ê N I S</p>
      </div>
    </div>
  );
}

function Container173() {
  return (
    <div className="h-[16px] relative shrink-0 w-[9450.31px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[40px] items-start relative size-full">
        <Container174 />
        <Container175 />
        <div className="self-stretch shrink-0 w-[909.03px]" data-name="Rectangle" />
        <div className="self-stretch shrink-0 w-[909.03px]" data-name="Rectangle" />
        <div className="self-stretch shrink-0 w-[909.03px]" data-name="Rectangle" />
        <div className="self-stretch shrink-0 w-[909.03px]" data-name="Rectangle" />
        <div className="self-stretch shrink-0 w-[909.03px]" data-name="Rectangle" />
        <div className="self-stretch shrink-0 w-[909.03px]" data-name="Rectangle" />
        <div className="self-stretch shrink-0 w-[909.03px]" data-name="Rectangle" />
        <div className="self-stretch shrink-0 w-[909.03px]" data-name="Rectangle" />
      </div>
    </div>
  );
}

function BackgroundBorder12() {
  return (
    <div className="bg-[#111] content-stretch flex flex-col items-start py-[13px] relative shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-b border-solid border-t inset-0 pointer-events-none" />
      <Container173 />
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#e8400a] content-stretch flex items-center justify-center px-[52.8px] py-[26.4px] relative shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 shadow-[0px_25px_50px_-12px_rgba(232,64,10,0.4)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[33px] text-center text-white tracking-[1.65px] whitespace-nowrap">
        <p className="leading-[39.6px]">Agendar Visita Gratuita</p>
      </div>
    </div>
  );
}

function Container172() {
  return (
    <div className="content-stretch flex flex-col gap-[35.8px] items-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder12 />
      <Button14 />
    </div>
  );
}

function Container171() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[inherit] px-[80px] relative size-full">
        <Heading27 />
        <Container172 />
      </div>
    </div>
  );
}

function Section9() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col items-start left-0 overflow-clip pb-[187.8px] pt-[192px] px-[80px] right-0 top-[9599.91px]" data-name="Section">
      <Container169 />
      <Container171 />
    </div>
  );
}

function Main() {
  return (
    <div className="h-[10919.91px] relative shrink-0 w-full" data-name="Main">
      <BackgroundBorder />
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />
      <Section9 />
    </div>
  );
}

function Image() {
  return <div className="absolute inset-[0_0_10019.91px_0] opacity-8" data-name="Image" />;
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[-1.5px] whitespace-nowrap">
        <p className="leading-[36px] text-[30px]">FORGEE</p>
      </div>
    </div>
  );
}

function Container178() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[10px] tracking-[2px] uppercase w-full">
        <p className="leading-[15px]">Beyond Limits Known™ · Indaiatuba, SP</p>
      </div>
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container178 />
    </div>
  );
}

function Container177() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[286.42999267578125px] relative shrink-0 w-[286.43px]" data-name="Container">
      <Link3 />
      <Margin11 />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <button className="cursor-pointer flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[18px] text-left tracking-[0.9px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">Espaço</p>
      </button>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <button className="cursor-pointer flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[18px] text-left tracking-[0.9px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">Programas</p>
      </button>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <button className="cursor-pointer flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[18px] text-left tracking-[0.9px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">Equipe</p>
      </button>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <button className="cursor-pointer flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[18px] text-left tracking-[0.9px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">Planos</p>
      </button>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Nav">
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[0px] tracking-[0.9px] uppercase whitespace-nowrap">
        <p className="leading-[28px] text-[18px]">Sou Membro</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#e8400a] content-stretch flex items-center justify-center px-[24px] py-[8px] relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.8px] whitespace-nowrap">
        <p className="leading-[24px]">Agendar Visita</p>
      </div>
    </div>
  );
}

function Container179() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Link8 />
      <Button15 />
    </div>
  );
}

function Container176() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[80px] relative size-full">
          <Container177 />
          <Nav />
          <Container179 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 px-[80px] py-[24px] right-0 top-0" data-name="Header">
      <Container176 />
    </div>
  );
}

export default function Component1440WLight() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(17, 17, 17) 0%, rgb(17, 17, 17) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="1440w light">
      <Main />
      <Image />
      <Header />
    </div>
  );
}