import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FlaskConical, Microscope, TestTube, FileText } from "lucide-react"

export function WetLab() {
  return (
    <section id="wetlab" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Wet <span className="text-emerald-400">Lab</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our experimental approach combines enzyme engineering, CLEA synthesis, and comprehensive testing protocols
            to validate the Barnacure system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-slate-800/50 border-emerald-900/20">
            <CardHeader>
              <FlaskConical className="h-12 w-12 text-emerald-400 mb-4" />
              <CardTitle className="text-emerald-400">Enzyme Production</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Recombinant protein expression in E. coli</li>
                <li>• Purification using affinity chromatography</li>
                <li>• Activity assays and characterization</li>
                <li>• Optimization of expression conditions</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-emerald-900/20">
            <CardHeader>
              <TestTube className="h-12 w-12 text-emerald-400 mb-4" />
              <CardTitle className="text-emerald-400">CLEA Synthesis</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Cross-linking agent optimization</li>
                <li>• Aggregation condition testing</li>
                <li>• Stability and activity retention</li>
                <li>• Morphological characterization</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-emerald-900/20">
            <CardHeader>
              <Microscope className="h-12 w-12 text-emerald-400 mb-4" />
              <CardTitle className="text-emerald-400">Bioassays</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Barnacle settlement inhibition tests</li>
                <li>• Protein adhesion disruption assays</li>
                <li>• Cytotoxicity evaluations</li>
                <li>• Environmental impact studies</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">Experimental Protocols</h3>
            <div className="space-y-6">
              <Card className="bg-slate-900/50 border-emerald-900/20">
                <CardHeader>
                  <CardTitle className="text-emerald-300 text-lg">Protein Expression Protocol</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-300 text-sm space-y-2">
                    <p>
                      <strong>Duration:</strong> 48-72 hours
                    </p>
                    <p>
                      <strong>Host:</strong> E. coli BL21(DE3)
                    </p>
                    <p>
                      <strong>Induction:</strong> IPTG (0.5 mM)
                    </p>
                    <p>
                      <strong>Temperature:</strong> 18°C overnight
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-950"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    View Full Protocol
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-emerald-900/20">
                <CardHeader>
                  <CardTitle className="text-emerald-300 text-lg">CLEA Formation Protocol</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-300 text-sm space-y-2">
                    <p>
                      <strong>Cross-linker:</strong> Glutaraldehyde (2.5%)
                    </p>
                    <p>
                      <strong>Buffer:</strong> Phosphate buffer pH 7.4
                    </p>
                    <p>
                      <strong>Incubation:</strong> 4°C, 2 hours
                    </p>
                    <p>
                      <strong>Washing:</strong> 3x with PBS
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-950"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    View Full Protocol
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">Laboratory Setup</h3>
            <div className="bg-slate-800/30 rounded-lg p-6 border border-emerald-900/20 mb-6">
              <div className="aspect-video bg-slate-700/50 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <Microscope className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
                  <p className="text-gray-300">Laboratory Equipment Photo</p>
                  <p className="text-gray-400 text-sm">[Placeholder for lab setup image]</p>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-semibold text-emerald-300 mb-4">Key Equipment</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/50 p-4 rounded-lg border border-emerald-900/20">
                <h5 className="text-emerald-400 font-semibold mb-2">Bioreactor System</h5>
                <p className="text-gray-300 text-sm">For controlled protein expression</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg border border-emerald-900/20">
                <h5 className="text-emerald-400 font-semibold mb-2">HPLC System</h5>
                <p className="text-gray-300 text-sm">Protein purification and analysis</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg border border-emerald-900/20">
                <h5 className="text-emerald-400 font-semibold mb-2">Spectrophotometer</h5>
                <p className="text-gray-300 text-sm">Enzyme activity measurements</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg border border-emerald-900/20">
                <h5 className="text-emerald-400 font-semibold mb-2">Flow Chambers</h5>
                <p className="text-gray-300 text-sm">Barnacle settlement assays</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
