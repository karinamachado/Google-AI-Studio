function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[96px] text-center tracking-[-2.4px] uppercase whitespace-nowrap">
        <p className="leading-[86.4px]">TESTEMUNHOS</p>
      </div>
    </div>
  );
}

function Container2() {
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

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[16px] uppercase w-full">
        <p className="leading-[24px]">Rafael M.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[14px] w-full">
        <p className="leading-[20px]">Engenheiro · Aluno há 3 anos</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#181818] col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start justify-between p-[32px] relative size-full">
        <Margin />
        <Container3 />
      </div>
    </div>
  );
}

function Container6() {
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

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[16px] uppercase w-full">
        <p className="leading-[24px]">Juliana T.</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[14px] w-full">
        <p className="leading-[20px]">Professora · Aluna há 2 anos</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#181818] col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start justify-between p-[32px] relative size-full">
        <Margin1 />
        <Container7 />
      </div>
    </div>
  );
}

function Container10() {
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

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[16px] uppercase w-full">
        <p className="leading-[24px]">Lucas O.</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[14px] w-full">
        <p className="leading-[20px]">Empresário · Aluno há 4 anos</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#181818] col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start justify-between p-[32px] relative size-full">
        <Margin2 />
        <Container11 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_302.50px] h-[302.5px] relative shrink-0 w-full" data-name="Container">
      <Background />
      <Background1 />
      <Background2 />
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[80px] relative size-full">
        <Heading />
        <Container1 />
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#111] content-stretch flex flex-col items-start pb-[128px] pt-[127px] px-[80px] relative size-full" data-name="Section">
      <Container />
    </div>
  );
}