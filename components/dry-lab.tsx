import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Computer, BarChart3, Network, Database } from "lucide-react"

export function DryLab() {
  return (
    <section id="drylab" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dry <span className="text-emerald-400">Lab</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Computational modeling and bioinformatics analysis support our experimental design and provide insights into
            enzyme behavior and optimization strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">Computational Approaches</h3>
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-emerald-900/20">
                <CardHeader>
                  <Computer className="h-8 w-8 text-emerald-400 mb-2" />
                  <CardTitle className="text-emerald-300">Molecular Dynamics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">
                    Simulation of enzyme-substrate interactions and CLEA stability under marine conditions.
                  </p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• GROMACS simulation package</li>
                    <li>• 100 ns production runs</li>
                    <li>• Salt water environment modeling</li>
                    <li>• Temperature stability analysis</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-emerald-900/20">
                <CardHeader>
                  <Network className="h-8 w-8 text-emerald-400 mb-2" />
                  <CardTitle className="text-emerald-300">Protein Structure Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">
                    Structural characterization and optimization of target enzymes for enhanced activity.
                  </p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• PyMOL visualization</li>
                    <li>• Active site identification</li>
                    <li>• Binding affinity prediction</li>
                    <li>• Mutation effect analysis</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">Modeling Results</h3>
            <div className="bg-slate-800/30 rounded-lg p-6 border border-emerald-900/20 mb-6">
              <div className="aspect-video bg-slate-700/50 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
                  <p className="text-gray-300">Molecular Dynamics Simulation</p>
                  <p className="text-gray-400 text-sm">[Placeholder for MD trajectory visualization]</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-slate-900/50 p-4 rounded-lg border border-emerald-900/20">
                <h5 className="text-emerald-400 font-semibold mb-2">Binding Energy</h5>
                <p className="text-gray-300 text-sm">-8.5 kcal/mol average binding affinity</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg border border-emerald-900/20">
                <h5 className="text-emerald-400 font-semibold mb-2">Stability Score</h5>
                <p className="text-gray-300 text-sm">95% structural integrity maintained</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg border border-emerald-900/20">
                <h5 className="text-emerald-400 font-semibold mb-2">Activity Retention</h5>
                <p className="text-gray-300 text-sm">78% activity after CLEA formation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-slate-800/50 border-emerald-900/20">
            <CardHeader className="text-center">
              <Database className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <CardTitle className="text-emerald-400">Bioinformatics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm text-center">
                Sequence analysis and enzyme family classification using BLAST and phylogenetic tools
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-emerald-900/20">
            <CardHeader className="text-center">
              <Computer className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <CardTitle className="text-emerald-400">Docking Studies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm text-center">
                Molecular docking simulations to predict enzyme-substrate binding modes
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-emerald-900/20">
            <CardHeader className="text-center">
              <BarChart3 className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <CardTitle className="text-emerald-400">Data Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm text-center">
                Statistical analysis of experimental data using R and Python
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-emerald-900/20">
            <CardHeader className="text-center">
              <Network className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <CardTitle className="text-emerald-400">Network Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm text-center">
                Protein interaction networks and pathway analysis for system understanding
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-slate-800/30 rounded-lg p-8 border border-emerald-900/20">
          <h3 className="text-2xl font-bold text-emerald-400 mb-6 text-center">Computational Workflow</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: 1, title: "Sequence Retrieval", desc: "Database mining for target enzymes" },
              { step: 2, title: "Structure Prediction", desc: "Homology modeling and validation" },
              { step: 3, title: "MD Simulation", desc: "Dynamics and stability analysis" },
              { step: 4, title: "Docking Analysis", desc: "Substrate binding prediction" },
              { step: 5, title: "Optimization", desc: "Design improvements and validation" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <h4 className="text-emerald-400 font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
