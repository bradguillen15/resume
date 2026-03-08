import { Nav } from "@/components/layout/Nav"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Experience } from "@/components/sections/Experience"
import { Skills } from "@/components/sections/Skills"
import { Projects } from "@/components/sections/Projects"
import { Reviews } from "@/components/sections/Reviews"
import { Contact } from "@/components/sections/Contact"

export default function App() {
  return (
    <>
      <Nav />
      <div className="pt-16 max-w-[1100px] mx-auto">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Reviews />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
