'use client'

import { useEffect, useRef, useState } from 'react'
import { Sticker } from '@/components/sticker'

export function About() {
  const ref = useRef<HTMLSpanElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const progress = rect.top / window.innerHeight
      setOffset(progress * 40)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="sobre-mi" className="relative overflow-hidden bg-[#ece6f3] py-20 md:py-28">
      <Sticker name="stamp-flower" className="right-[5%] top-12 w-20 md:w-24" rotate={7} />
      <Sticker name="heart-pink" className="left-[6%] bottom-12 w-12 md:w-16" rotate={-12} />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
        Sobre mí
      </p>
      <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-16">
        <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-foreground md:text-5xl">
          Diseño y código,{' '}
          <span
            ref={ref}
            className="inline-block italic text-[color:var(--color-muted)]"
            style={{ transform: `translateY(${offset}px)` }}
          >
            en el cruce.
          </span>
        </h2>
        <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:pt-2">
          Soy frontend developer con sensibilidad de UI — no solo construyo lo
          que se pide, sino que pregunto por qué se pide y cómo debería sentirse.
          Me muevo cómoda entre diseño y código porque creo que los mejores
          productos viven en ese cruce.
        </p>
      </div>
      </div>
    </section>
  )
}
