export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#top"
          className="font-serif text-lg italic tracking-tight text-foreground"
        >
          Emily Ariana
        </a>
        <ul className="flex items-center gap-6 text-sm text-muted-foreground">
          <li>
            <a
              href="#proyectos"
              className="transition-colors hover:text-foreground"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#sobre-mi"
              className="transition-colors hover:text-foreground"
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="transition-colors hover:text-foreground"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
