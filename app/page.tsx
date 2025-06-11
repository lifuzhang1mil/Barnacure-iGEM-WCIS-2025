import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { ProjectOverview } from "@/components/project-overview"
import { WetLab } from "@/components/wet-lab"
import { DryLab } from "@/components/dry-lab"
import { Results } from "@/components/results"
import { Safety } from "@/components/safety"
import { Team } from "@/components/team"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main>
        <Hero />
        <ProjectOverview />
        <WetLab />
        <DryLab />
        <Results />
        <Safety />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
