import svgPaths from "./svg-sswqxy8ckk";

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[12px] text-center tracking-[1.44px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">INVESTIMENTO</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <div className="bg-[#e8400a] h-px shrink-0 w-[32px]" data-name="Horizontal Divider" />
      <Container3 />
      <div className="bg-[#e8400a] h-px shrink-0 w-[32px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0" data-name="Margin">
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[60px] text-center text-white tracking-[-3px] uppercase whitespace-nowrap">
        <p className="leading-[60px]">SEM MATRÍCULA.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[60px] text-center text-white tracking-[-3px] uppercase whitespace-nowrap">
        <p className="leading-[60px]">SEM FIDELIDADE.</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[60px] text-center text-white tracking-[-3px] uppercase whitespace-nowrap">
        <p className="leading-[60px]">SEM ENROLAÇÃO.</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[378.91px]" data-name="Heading 2">
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Margin />
      <Heading />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[672px] relative shrink-0 w-[672px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28px]">Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] tracking-[1.6px] uppercase w-full">
        <p className="leading-[24px]">LIVRE</p>
      </div>
    </div>
  );
}

function Heading4Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Heading1 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[42px] leading-[0] relative shrink-0 w-full whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center left-0 text-[36px] text-white top-[19.5px]">
        <p className="leading-[40px]">R$149</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center left-[91.16px] text-[#6b6b6b] text-[18px] top-[28px]">
        <p className="leading-[28px]">/mês</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <Paragraph />
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, #B0B0B0)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Acesso ilimitado 05H–23H</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, #B0B0B0)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg1 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon1 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Avaliação física de entrada</p>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, #B0B0B0)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg2 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon2 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Planilha de treino inicial</p>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, #B0B0B0)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg3 />
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon3 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">App FORGEE</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[50px] relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
    </div>
  );
}

function ListMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="List:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <List />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#1e1e1e] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[33px] py-[17px] relative size-full">
          <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[1.2px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">QUERO ESSE PLANO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#111] col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[33px] relative size-full">
        <Heading4Margin />
        <Margin1 />
        <ListMargin />
        <Button />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b0b0b0] text-[16px] tracking-[1.6px] uppercase w-full">
        <p className="leading-[24px]">ELITE</p>
      </div>
    </div>
  );
}

function Heading4Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Heading2 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[42px] leading-[0] relative shrink-0 w-full whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center left-0 text-[36px] text-white top-[19.5px]">
        <p className="leading-[40px]">R$389</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center left-[95.7px] text-[#6b6b6b] text-[18px] top-[28px]">
        <p className="leading-[28px]">/mês</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <Paragraph1 />
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, #B0B0B0)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg4 />
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon4 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Tudo do plano Plus</p>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, #B0B0B0)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg5 />
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon5 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">4 sessões de Personal/mês</p>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, #B0B0B0)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg6 />
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon6 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Acesso ilimitado a classes</p>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, #B0B0B0)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg7 />
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon7 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Bioimpedância mensal</p>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, #B0B0B0)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg8 />
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon8 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">WhatsApp com coach dedicado</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[14px] relative shrink-0 w-full" data-name="List">
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
      <Item8 />
    </div>
  );
}

function ListMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="List:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <List1 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#1e1e1e] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[33px] py-[17px] relative size-full">
          <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[1.2px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">QUERO ESSE PLANO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#111] col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[33px] relative size-full">
        <Heading4Margin1 />
        <Margin2 />
        <ListMargin1 />
        <Button1 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e8400a] text-[16px] tracking-[1.6px] uppercase w-full">
        <p className="leading-[24px]">PLUS</p>
      </div>
    </div>
  );
}

function Heading4Margin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] pt-[16px] relative size-full">
        <Heading3 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[42px] leading-[0] relative shrink-0 w-full whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center left-0 text-[36px] text-white top-[19.5px]">
        <p className="leading-[40px]">R$229</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center left-[95.44px] text-[#6b6b6b] text-[18px] top-[28px]">
        <p className="leading-[28px]">/mês</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <Paragraph2 />
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg9 />
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon9 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[20px]">Tudo do plano Livre</p>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg10 />
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon10 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[20px]">2 sessões de Personal/mês</p>
      </div>
    </div>
  );
}

function Svg11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg11 />
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon11 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[20px]">1 aula Conditioning/semana</p>
      </div>
    </div>
  );
}

function Svg12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg12 />
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon12 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[20px]">Revisão de planilha a cada 4 semanas</p>
      </div>
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg13 />
    </div>
  );
}

function Item13() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon13 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[20px]">Acesso ao Mobility</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item9 />
      <Item10 />
      <Item11 />
      <Item12 />
      <Item13 />
    </div>
  );
}

function ListMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="List:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative size-full">
        <List2 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#e8400a] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[32px] py-[16px] relative size-full">
          <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[1.2px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">QUERO ESSE PLANO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#e8400a] left-[32.72%] right-[32.72%] top-px" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[4px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">MAIS ESCOLHIDO</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#1e1e1e] col-2 content-stretch flex flex-col items-start p-[33px] relative row-1 self-start shrink-0 w-[384px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8400a] border-solid inset-0 pointer-events-none" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 shadow-[0px_25px_50px_-12px_rgba(232,64,10,0.05)]" data-name="Overlay+Shadow" />
      <Heading4Margin2 />
      <Margin3 />
      <ListMargin2 />
      <Button2 />
      <Background />
    </div>
  );
}

function Container8() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_432px] pt-[32px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[14px] text-center whitespace-nowrap">
          <p>
            <span className="leading-[20px]">DIÁRIA: R$ 39</span>
            <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-white">{` · Acesso por 1 dia`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#e8400a] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[3px] relative size-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">AGENDAR</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#181818] content-stretch flex gap-[16px] items-center px-[25px] py-[13px] relative shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <Container10 />
      <Link />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Margin">
      <BackgroundBorder3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center pt-[16px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">PAGAMENTO VIA PIX OU CARTÃO (3× SEM JUROS) · CANCELAMENTO COM 30 DIAS DE AVISO · PLANO ANUAL COM 15% DE DESCONTO</p>
      </div>
      <Margin4 />
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-center max-w-[inherit] px-[32px] relative size-full">
          <Container1 />
          <Container7 />
          <Container8 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col items-start px-[80px] py-[129px] relative size-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-b border-solid border-t inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}