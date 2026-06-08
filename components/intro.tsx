import { Sticker } from '@/components/sticker'

export function Intro() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#cdd9f0] via-[#d3d2f0] to-[#d9cdf0] px-6 text-center"
    >
      {/* Scattered stickers */}
      <Sticker name="butterfly-blue" className="left-[6%] top-[12%] w-24 md:w-32" rotate={-12} />
      <Sticker name="fairy" className="bottom-[8%] left-[4%] w-28 md:w-40" rotate={8} />
      <Sticker name="stamp-swan" className="right-[7%] top-[14%] w-24 md:w-32" rotate={9} />
      <Sticker name="rose-pink" className="bottom-[14%] right-[8%] w-20 md:w-28" rotate={-8} />
      <Sticker name="heart-pink" className="left-[14%] top-[42%] w-12 md:w-16" rotate={14} />
      <Sticker name="heart-pink" className="right-[16%] bottom-[34%] w-10 md:w-14" rotate={-10} />
      <Sticker name="flower-green" className="right-[22%] top-[8%] w-16 md:w-20" rotate={6} />
      <Sticker name="blossom" className="bottom-[6%] right-[26%] w-20 md:w-24" rotate={-6} />
      <Sticker name="butterfly-pink" className="left-[24%] bottom-[16%] w-16 md:w-20" rotate={16} />
      <Sticker name="sun-green" className="left-[42%] top-[6%] w-16 md:w-20" rotate={-4} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <p className="text-xs uppercase tracking-[0.35em] text-[#3a4a6b]">
          Frontend Developer · Portafolio 2026
        </p>
        <h1 className="mt-6 font-serif text-6xl leading-[0.95] tracking-tight text-[#1f2c47] md:text-8xl">
          Emily <em className="italic">Ariana</em>
        </h1>
        <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-[#3a4a6b]">
          Interfaces hechas con intención, en el cruce entre diseño y código.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#proyectos"
            className="flex min-h-12 items-center justify-center rounded-full bg-[#1f2c47] px-8 text-sm font-medium tracking-wide text-[#eef2fb] transition-transform hover:scale-[1.03]"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="flex min-h-12 items-center justify-center rounded-full border border-[#1f2c47]/30 bg-white/40 px-8 text-sm font-medium tracking-wide text-[#1f2c47] backdrop-blur-sm transition-colors hover:bg-white/70"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  )
}
