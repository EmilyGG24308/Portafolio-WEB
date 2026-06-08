import { ProjectCard } from '@/components/project-card'
import { Sticker } from '@/components/sticker'

export function Projects() {
  return (
    <section id="proyectos" className="relative overflow-hidden bg-[#e3efe6] py-20 md:py-28">
      <Sticker name="flower-green" className="right-[6%] top-16 w-16 md:w-24" rotate={-8} />
      <Sticker name="butterfly-blue" className="left-[4%] bottom-16 w-20 md:w-28" rotate={10} />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Proyectos seleccionados
        </p>
        <h2 className="mt-6 max-w-2xl text-balance font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
          Trabajo que se ve tan bien como <em className="italic">funciona</em>.
        </h2>
        <p className="mt-4 text-sm text-muted-foreground">
          Dale play a cada pista para ver el vinilo girar.
        </p>

        {/* Tracklist players */}
        <div className="mt-10 divide-y divide-foreground/10 border-t border-foreground/10">
          <ProjectCard
            number="01"
            title="Havit"
            role="Frontend · UI"
            duration="3:47"
            description="App de fitness y creación de hábitos. Construí sistemas de componentes reutilizables y experiencias fluidas en React Native para iOS y Android."
            chips={['React Native', 'iOS & Android', 'Componentes']}
            accent="#e08aa0"
            vinyl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Knightclub%20-%201xLP%20Apricot%20_%20Ros%C3%A9%20Split-HPPSYpwmTO4CegGlQjEXPrR1s4oo0R.jpg"
          />
          <ProjectCard
            number="02"
            title="WhereNow"
            role="UI · Android"
            duration="4:12"
            description="Ayuda a jóvenes adultos a descubrir eventos sociales y planear con su círculo de confianza. Diseñé pantallas, iconografía y recursos UI."
            chips={['Android', 'UI Resources', 'Pantallas']}
            accent="#9d7fc2"
            vinyl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E2%8B%86_%20%F0%90%99%9A%20%20%F0%9D%98%93%F0%9D%98%B0%F0%9D%98%B7%F0%9D%98%A6%20%F0%9D%98%93%F0%9D%98%A6%F0%9D%98%B5%F0%9D%98%B5%F0%9D%98%A6%F0%9D%98%B3%F0%9D%98%B4%E2%80%99%F0%9D%98%B4%20%F0%9D%98%B7%F0%9D%98%BA%F0%9D%98%AF%F0%9D%98%AA%F0%9D%98%AD%E2%80%A6-pdib7hxmDV7tSHfBKISHNTmCQhIJQR.jpg"
          />
          <ProjectCard
            number="03"
            title="Arquitectura Backend"
            role="Backend · Datos"
            duration="5:09"
            description="Diseño y construcción de estructuras de datos para sistemas empresariales — entidades, relaciones y esquemas pensados para escalar sin romperse."
            chips={['NestJS', 'PostgreSQL', 'Prisma ORM']}
            accent="#c98a3a"
            vinyl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/441563938484512672-o2Q3uqA7ZuJk2onqw3TMf05dpBz3Fn.jpg"
          />
        </div>
      </div>
    </section>
  )
}
