import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Beaker, Target, Leaf, Ship } from "lucide-react"

export function ProjectOverview() {
  return (
    <section id="project" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Project <span className="text-emerald-400">Overview</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Barnacure represents a paradigm shift in marine antifouling technology, leveraging synthetic biology to
            create sustainable solutions for the maritime industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">The Challenge</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Marine biofouling, particularly barnacle attachment, costs the shipping industry billions of dollars
                annually through increased fuel consumption and maintenance requirements.
              </p>
              <p>
                Current antifouling solutions rely on toxic copper-based paints that harm marine ecosystems and
                accumulate in sediments, creating long-term environmental damage.
              </p>
              <p>
                There is an urgent need for sustainable, non-toxic alternatives that can effectively prevent biofouling
                while protecting marine biodiversity.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">Our Solution</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Barnacure utilizes Cross-Linked Enzyme Aggregates (CLEAs) to create a biological antifouling system that
                specifically targets barnacle settlement mechanisms.
              </p>
              <p>
                Our engineered enzymes disrupt the protein-based adhesion process that barnacles use to attach to
                surfaces, preventing colonization without toxic chemicals.
              </p>
              <p>
                This approach offers a sustainable, biodegradable alternative that maintains effectiveness while
                preserving marine ecosystem health.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-slate-800/50 border-emerald-900/20">
            <CardHeader className="text-center">
              <Target className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <CardTitle className="text-emerald-400">Targeted Action</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm text-center">
                Specific enzyme targeting of barnacle adhesion proteins for precise antifouling action
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-emerald-900/20">
            <CardHeader className="text-center">
              <Leaf className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <CardTitle className="text-emerald-400">Eco-Friendly</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm text-center">
                Biodegradable enzyme technology that protects marine ecosystems
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-emerald-900/20">
            <CardHeader className="text-center">
              <Beaker className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <CardTitle className="text-emerald-400">CLEA Technology</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm text-center">
                Advanced cross-linking enhances enzyme stability and longevity
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-emerald-900/20">
            <CardHeader className="text-center">
              <Ship className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <CardTitle className="text-emerald-400">Marine Application</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm text-center">
                Designed for real-world maritime conditions and commercial viability
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-slate-800/30 rounded-lg p-8 border border-emerald-900/20">
          <h3 className="text-2xl font-bold text-emerald-400 mb-6 text-center">Project Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="text-emerald-400 font-semibold mb-2">Research Phase</h4>
              <p className="text-gray-300 text-sm">Literature review and enzyme selection</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="text-emerald-400 font-semibold mb-2">Development</h4>
              <p className="text-gray-300 text-sm">CLEA synthesis and optimization</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="text-emerald-400 font-semibold mb-2">Testing</h4>
              <p className="text-gray-300 text-sm">Laboratory and field trials</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h4 className="text-emerald-400 font-semibold mb-2">Validation</h4>
              <p className="text-gray-300 text-sm">Results analysis and presentation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
