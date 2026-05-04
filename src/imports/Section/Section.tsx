import svgPaths from "./svg-yjdiswooqd";
import imgIntenseTrainingSession from "./2207c337d8df411f1d060d053a54d6f2aba19197.png";

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[14px] tracking-[2.8px] uppercase w-full">
        <p className="leading-[20px]">Quem Somos</p>
      </div>
    </div>
  );
}

function Heading() {
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

function Container5() {
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

function Container6() {
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

function Container7() {
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
        <Container7 />
      </div>
    </div>
  );
}

function Container8() {
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

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[672px] pt-[25.1px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container6 />
      <Blockquote />
      <Container8 />
    </div>
  );
}

function Container2() {
  return (
    <div className="col-[1/span_7] content-stretch flex flex-col gap-[14.9px] items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Container3 />
      <Heading />
      <Container4 />
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

function Background() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Background">
      <IntenseTrainingSession />
      <div className="absolute inset-[0_-0.01px_0_0] opacity-20" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 429.34 536.67\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(30.359 0 0 37.948 214.67 268.33)\\'><stop stop-color=\\'rgba(232,64,10,1)\\' offset=\\'0.058926\\'/><stop stop-color=\\'rgba(232,64,10,0)\\' offset=\\'0.058926\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(10, 10, 10) 0%, rgb(10, 10, 10) 100%)" }} data-name="Gradient+Background" />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bottom-[-40.69px] content-stretch flex flex-col items-start pb-[189px] pr-[251.31px] right-[-40.01px]" data-name="Container">
      <div className="flex h-[462px] items-center justify-center relative shrink-0 w-[210px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic opacity-20 relative text-[#1e1e1e] text-[140px] whitespace-nowrap">
            <p className="leading-[210px]">DISCIPLINA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="col-[8/span_5] content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Background />
      <Container10 />
    </div>
  );
}

function Container1() {
  return (
    <div className="gap-x-[64px] gap-y-[64px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_811.67px] h-[811.67px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container9 />
    </div>
  );
}

function Container13() {
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

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container13 />
        <div className="bg-[#3a3a3a] flex-[1_0_0] h-px min-w-px" data-name="Horizontal Divider" />
        <Svg />
      </div>
    </div>
  );
}

function Heading1() {
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

function Container14() {
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

function BackgroundBorder() {
  return (
    <div className="bg-[#1e1e1e] col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[41px] relative size-full">
        <Container12 />
        <Heading1 />
        <Container14 />
      </div>
    </div>
  );
}

function Container16() {
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

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container16 />
        <div className="bg-[#3a3a3a] flex-[1_0_0] h-px min-w-px" data-name="Horizontal Divider" />
        <Svg1 />
      </div>
    </div>
  );
}

function Heading2() {
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

function Container17() {
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

function BackgroundBorder1() {
  return (
    <div className="bg-[#1e1e1e] col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[70.25px] pt-[41px] px-[41px] relative size-full">
        <Container15 />
        <Heading2 />
        <Container17 />
      </div>
    </div>
  );
}

function Container19() {
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

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container19 />
        <div className="bg-[#3a3a3a] flex-[1_0_0] h-px min-w-px" data-name="Horizontal Divider" />
        <Svg2 />
      </div>
    </div>
  );
}

function Heading3() {
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

function Container20() {
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

function BackgroundBorder2() {
  return (
    <div className="bg-[#1e1e1e] col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[70.25px] pt-[41px] px-[41px] relative size-full">
        <Container18 />
        <Heading3 />
        <Container20 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_306px] h-[306px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[128px] items-start max-w-[inherit] px-[80px] relative size-full">
        <Container1 />
        <Container11 />
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col items-start px-[80px] py-[128px] relative size-full" data-name="Section">
      <Container />
    </div>
  );
}