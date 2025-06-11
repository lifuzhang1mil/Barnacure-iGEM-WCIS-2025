"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Microscope, Waves } from "lucide-react"

export function Hero() {
  const scrollToProject = () => {
    document.getElementById("project")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-slate-950"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4 text-emerald-400">
            <Microscope className="h-12 w-12" />
            <Waves className="h-12 w-12" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          <span className="text-emerald-400">Barna</span>cure
        </h1>

        <p className="text-xl md:text-2xl text-emerald-300 mb-4 font-light">Enzyme-Based Antifouling Technology</p>

        <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Revolutionary synthetic biology solution using Cross-Linked Enzyme Aggregates (CLEAs) to prevent barnacle
          attachment on marine surfaces through sustainable biotechnology.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={scrollToProject}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg"
          >
            Explore Our Research
          </Button>
          <Button
            variant="outline"
            className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-950 px-8 py-3 text-lg"
            onClick={() => document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })}
          >
            Meet the Team
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
          <div className="bg-slate-900/50 p-6 rounded-lg border border-emerald-900/20">
            <h3 className="text-emerald-400 font-semibold mb-2">Sustainable Solution</h3>
            <p className="text-gray-300 text-sm">Eco-friendly enzyme technology replacing toxic antifouling paints</p>
          </div>
          <div className="bg-slate-900/50 p-6 rounded-lg border border-emerald-900/20">
            <h3 className="text-emerald-400 font-semibold mb-2">Marine Innovation</h3>
            <p className="text-gray-300 text-sm">Protecting marine ecosystems while preventing biofouling</p>
          </div>
          <div className="bg-slate-900/50 p-6 rounded-lg border border-emerald-900/20">
            <h3 className="text-emerald-400 font-semibold mb-2">Synthetic Biology</h3>
            <p className="text-gray-300 text-sm">Advanced CLEA technology for targeted barnacle prevention</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-emerald-400" />
      </div>
    </section>
  )
}
