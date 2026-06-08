'use client'

import { useState } from 'react'
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat } from 'lucide-react'

type ProjectCardProps = {
  number: string
  title: string
  role: string
  description: string
  chips: string[]
  duration: string
  /** soft accent color for this track */
  accent: string
  /** vinyl record image */
  vinyl: string
}

export function ProjectCard({
  number,
  title,
  role,
  description,
  chips,
  duration,
  accent,
  vinyl,
}: ProjectCardProps) {
  const [playing, setPlaying] = useState(false)

  return (
    <article className="grid items-center gap-8 py-14 md:grid-cols-2 md:gap-12 md:py-20">
      {/* Left: title + player */}
      <div className="order-2 md:order-1">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {`Pista ${number} · ${role}`}
        </p>
        <h3 className="mt-3 text-balance font-serif text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl">
          {title}
        </h3>

        {/* Vinyl + description side by side */}
        <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row sm:items-center">
          {/* Spinning vinyl */}
          <div className="relative shrink-0">
            <img
              src={vinyl || '/placeholder.svg'}
              alt={`Vinilo del proyecto ${title}`}
              crossOrigin="anonymous"
              className="size-44 rounded-full object-cover shadow-lg md:size-52 animate-spin-vinyl"
            />
            {/* center spindle hole */}
            <span className="pointer-events-none absolute left-1/2 top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background shadow-inner" />
          </div>

          <p className="max-w-xs text-sm leading-relaxed text-foreground/70">
            {description}
          </p>
        </div>

        {/* Progress bar */}
        <div className="mt-8 flex w-full max-w-md items-center gap-3">
          <span className="font-mono text-[11px] text-muted-foreground">0:00</span>
          <div className="relative h-1 flex-1 rounded-full bg-foreground/10">
            <span
              className="absolute left-0 top-0 h-full rounded-full"
              style={{ width: playing ? '18%' : '8%', backgroundColor: accent }}
            />
            <span
              className="absolute top-1/2 size-3 -translate-y-1/2 rounded-full shadow"
              style={{ left: playing ? '18%' : '8%', backgroundColor: accent }}
            />
          </div>
          <span className="font-mono text-[11px] text-muted-foreground">{duration}</span>
        </div>

        {/* Player controls */}
        <div className="mt-6 flex items-center gap-6" style={{ color: accent }}>
          <button type="button" aria-label="Aleatorio" className="transition-transform hover:scale-110">
            <Shuffle className="size-5" />
          </button>
          <button type="button" aria-label="Anterior" className="transition-transform hover:scale-110">
            <SkipBack className="size-6 fill-current" />
          </button>
          <button
            type="button"
            onClick={() => setPlaying((v) => !v)}
            aria-label={playing ? `Pausar ${title}` : `Reproducir ${title}`}
            className="flex size-14 items-center justify-center rounded-full text-background shadow-md transition-transform hover:scale-105"
            style={{ backgroundColor: accent }}
          >
            {playing ? (
              <Pause className="size-6 fill-current" />
            ) : (
              <Play className="size-6 translate-x-0.5 fill-current" />
            )}
          </button>
          <button type="button" aria-label="Siguiente" className="transition-transform hover:scale-110">
            <SkipForward className="size-6 fill-current" />
          </button>
          <button type="button" aria-label="Repetir" className="transition-transform hover:scale-110">
            <Repeat className="size-5" />
          </button>
        </div>

        {/* Chips */}
        <ul className="mt-7 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <li
              key={chip}
              className="rounded-full border px-3 py-1 text-[11px] font-medium"
              style={{
                borderColor: accent,
                color: 'var(--foreground)',
                backgroundColor: `${accent}22`,
              }}
            >
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
