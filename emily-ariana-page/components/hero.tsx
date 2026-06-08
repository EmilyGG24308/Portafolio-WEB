const TOOLS = [
  'PostgreSQL',
  'VSCode',
  'Python',
  'GitHub',
  'Docker',
  'TablePlus',
  'WSL',
  'Android Projects',
  'GitBash',
  'JavaScript',
  'VanillaJS',
]

import { Sticker } from '@/components/sticker'

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#faf3ee]">
      <Sticker name="butterfly-pink" className="right-[6%] top-10 w-20 md:w-28" rotate={12} />
      <Sticker name="tulips" className="left-[3%] bottom-8 w-16 md:w-20" rotate={-8} opacity={90} />
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Portafolio · 2026
        </p>
        <h1 className="mt-6 max-w-4xl text-balance font-serif text-5xl leading-[1.05] tracking-tight text-foreground md:text-7xl">
          Construyo interfaces con{' '}
          <em className="text-[color:var(--color-rose)] not-italic">
            <span className="italic">intención</span>
          </em>{' '}
          y un ojo de diseño.
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Frontend developer con sensibilidad de UI. Me muevo cómoda entre
          diseño y código, donde viven los mejores productos.
        </p>
      </div>

      {/* Full readable tool loop */}
      <div
        className="overflow-hidden border-y border-border bg-[#f3ece4] py-5"
        aria-label="Herramientas y tecnologías"
      >
        <div className="flex w-max animate-marquee">
          {[...TOOLS, ...TOOLS].map((tool, i) => (
            <span
              key={i}
              className="mx-5 flex shrink-0 items-center gap-5 text-sm uppercase tracking-[0.18em] text-foreground/70"
              aria-hidden={i >= TOOLS.length}
            >
              {tool}
              <span className="text-[color:var(--color-rose)]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
