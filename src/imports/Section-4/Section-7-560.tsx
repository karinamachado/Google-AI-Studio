import imgRodrigoFarias from "./978baaaf70f56ca33ac1fb607419361a243bff2a.png";
import imgAnaLuisa from "./7917b0410322b5b75914d197712fffc242d55c79.png";
import imgBrunoT from "./f374078a3311f864e69180b2fc8568b20d9f2c9e.png";
import imgCamilaD from "./d4a62d52a819ef7d4b7d881577dd8428fdc62a95.png";

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">QUEM TE ACOMPANHA</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#e8400a] h-px shrink-0 w-[32px]" data-name="Horizontal Divider" />
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[60px] text-white tracking-[-3px] uppercase w-full">
        <p className="leading-[60px]">COACHES QUE</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[60px] text-white tracking-[-3px] uppercase w-full">
        <p className="leading-[60px]">TREINAM.</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Heading />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[672px] relative shrink-0 w-[672px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[15px] whitespace-nowrap">
        <p className="leading-[22.5px]">Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando.</p>
      </div>
    </div>
  );
}

function RodrigoFarias() {
  return (
    <div className="h-[381.33px] relative shrink-0 w-full" data-name="Rodrigo Farias">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-50.1%] max-w-none top-0 w-[200.2%]" src={imgRodrigoFarias} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <RodrigoFarias />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">HEAD COACH</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[1px] uppercase w-full">
        <p className="leading-[28px]">RODRIGO FARIAS</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[10px] uppercase w-full">
        <p className="leading-[15px]">CREF 045821-G/SP</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Heading1 />
      <Container10 />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[#111] inset-0 items-start justify-end pb-[8px] pt-[303.33px] px-[24px] to-[rgba(17,17,17,0)] via-1/2 via-[rgba(17,17,17,0.4)]" data-name="Background">
      <Container8 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#1e1e1e] col-1 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative row-1 self-start shrink-0" data-name="Background">
      <Container7 />
      <Background1 />
    </div>
  );
}

function AnaLuisa() {
  return (
    <div className="h-[381.33px] relative shrink-0 w-full" data-name="Ana Luísa">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[112.5%] left-0 max-w-none top-[-6.25%] w-full" src={imgAnaLuisa} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <AnaLuisa />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">CONDITIONING</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[1px] uppercase w-full">
        <p className="leading-[28px]">ANA LUÍSA</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[10px] uppercase w-full">
        <p className="leading-[15px]">CREF 078342-G/SP</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Heading2 />
      <Container14 />
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[#111] inset-0 items-start justify-end pb-[8px] pt-[303.33px] px-[24px] to-[rgba(17,17,17,0)] via-1/2 via-[rgba(17,17,17,0.4)]" data-name="Background">
      <Container12 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#1e1e1e] col-2 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative row-1 self-start shrink-0" data-name="Background">
      <Container11 />
      <Background3 />
    </div>
  );
}

function BrunoT() {
  return (
    <div className="h-[381.33px] relative shrink-0 w-full" data-name="Bruno T.">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[112.5%] left-0 max-w-none top-[-6.25%] w-full" src={imgBrunoT} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <BrunoT />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">{`MOBILITY & REHAB`}</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[1px] uppercase w-full">
        <p className="leading-[28px]">BRUNO T.</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[10px] uppercase w-full">
        <p className="leading-[15px]">CREF 091205-G/SP</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Heading3 />
      <Container18 />
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[#111] inset-0 items-start justify-end pb-[8px] pt-[303.33px] px-[24px] to-[rgba(17,17,17,0)] via-1/2 via-[rgba(17,17,17,0.4)]" data-name="Background">
      <Container16 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#1e1e1e] col-3 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative row-1 self-start shrink-0" data-name="Background">
      <Container15 />
      <Background5 />
    </div>
  );
}

function CamilaD() {
  return (
    <div className="h-[381.33px] relative shrink-0 w-full" data-name="Camila D.">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[112.5%] left-0 max-w-none top-[-6.25%] w-full" src={imgCamilaD} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <CamilaD />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">PERSONAL TRAINER</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[1px] uppercase w-full">
        <p className="leading-[28px]">CAMILA D.</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[10px] uppercase w-full">
        <p className="leading-[15px]">CREF 063417-G/SP</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Heading4 />
      <Container22 />
    </div>
  );
}

function Background7() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[#111] inset-0 items-start justify-end pb-[8px] pt-[303.33px] px-[24px] to-[rgba(17,17,17,0)] via-1/2 via-[rgba(17,17,17,0.4)]" data-name="Background">
      <Container20 />
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#1e1e1e] col-4 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative row-1 self-start shrink-0" data-name="Background">
      <Container19 />
      <Background7 />
    </div>
  );
}

function Container6() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_381.33px] pt-[17px] relative shrink-0 w-full" data-name="Container">
      <Background />
      <Background2 />
      <Background4 />
      <Background6 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[31px] items-start max-w-[1280px] px-[32px] relative shrink-0 w-[1280px]" data-name="Section">
      <Container />
      <Container5 />
      <Container6 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="content-stretch flex flex-col items-start px-[80px] py-[128px] relative size-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 891.33\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(193.46 0 0 119.75 -64080 -39664)\\'><stop stop-color=\\'rgba(42,42,42,1)\\' offset=\\'0.009304\\'/><stop stop-color=\\'rgba(42,42,42,0)\\' offset=\\'0.009304\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(17, 17, 17) 0%, rgb(17, 17, 17) 100%)" }} data-name="Section">
      <Section1 />
    </div>
  );
}