import { Nav } from '@/components/nav'
import { Intro } from '@/components/intro'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Intro />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Footer />
      </main>
    </div>
  )
}
