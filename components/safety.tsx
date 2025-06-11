import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, AlertTriangle, CheckCircle, FileText } from "lucide-react"

export function Safety() {
  return (
    <section id="safety" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-emerald-400">Safety</span> & Ethics
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Safety is paramount in our research. We follow strict protocols and ethical guidelines to ensure responsible
            development of biotechnology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="bg-slate-800/50 border-emerald-900/20">
            <CardHeader className="text-center">
              <Shield className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <CardTitle className="text-emerald-400">Biosafety Level 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm text-center">
                All experiments conducted under BSL-1 conditions with appropriate containment measures
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-emerald-900/20">
            <CardHeader className="text-center">
              <CheckCircle className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <CardTitle className="text-emerald-400">Risk Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm text-center">
                Comprehensive risk evaluation for all biological materials and procedures
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-emerald-900/20">
            <CardHeader className="text-center">
              <AlertTriangle className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <CardTitle className="text-emerald-400">Environmental Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm text-center">
                Thorough assessment of potential environmental effects and mitigation strategies
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-emerald-900/20">
            <CardHeader className="text-center">
              <FileText className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <CardTitle className="text-emerald-400">Documentation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm text-center">
                Complete documentation of all safety protocols and emergency procedures
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">Laboratory Safety Protocols</h3>
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-emerald-900/20">
                <CardHeader>
                  <CardTitle className="text-emerald-300">Personal Protective Equipment</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Safety goggles and face shields for all procedures</li>
                    <li>• Nitrile gloves changed between different materials</li>
                    <li>• Lab coats and closed-toe shoes mandatory</li>
                    <li>• Respiratory protection when handling chemicals</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-emerald-900/20">
                <CardHeader>
                  <CardTitle className="text-emerald-300">Biological Containment</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Biosafety cabinet for all microbial work</li>
                    <li>• Autoclave sterilization of all waste materials</li>
                    <li>• Restricted access to authorized personnel only</li>
                    <li>• Regular decontamination of work surfaces</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-emerald-900/20">
                <CardHeader>
                  <CardTitle className="text-emerald-300">Chemical Safety</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Proper storage and labeling of all chemicals</li>
                    <li>• Fume hood use for volatile compounds</li>
                    <li>• Safety data sheets readily available</li>
                    <li>• Spill kits and emergency procedures posted</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">Risk Assessment Matrix</h3>
            <div className="bg-slate-800/30 rounded-lg p-6 border border-emerald-900/20 mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-emerald-900/20">
                      <th className="text-emerald-400 text-left py-2">Risk Factor</th>
                      <th className="text-emerald-400 text-center py-2">Probability</th>
                      <th className="text-emerald-400 text-center py-2">Severity</th>
                      <th className="text-emerald-400 text-center py-2">Risk Level</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-700/50">
                      <td className="py-2">Bacterial contamination</td>
                      <td className="text-center py-2">Low</td>
                      <td className="text-center py-2">Medium</td>
                      <td className="text-center py-2 text-yellow-400">Low</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-2">Chemical exposure</td>
                      <td className="text-center py-2">Low</td>
                      <td className="text-center py-2">High</td>
                      <td className="text-center py-2 text-yellow-400">Medium</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-2">Equipment malfunction</td>
                      <td className="text-center py-2">Medium</td>
                      <td className="text-center py-2">Low</td>
                      <td className="text-center py-2 text-green-400">Low</td>
                    </tr>
                    <tr>
                      <td className="py-2">Environmental release</td>
                      <td className="text-center py-2">Very Low</td>
                      <td className="text-center py-2">High</td>
                      <td className="text-center py-2 text-green-400">Low</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h4 className="text-xl font-semibold text-emerald-300 mb-4">Emergency Procedures</h4>
            <div className="space-y-4">
              <div className="bg-slate-900/50 p-4 rounded-lg border border-emerald-900/20">
                <h5 className="text-emerald-400 font-semibold mb-2">Spill Response</h5>
                <p className="text-gray-300 text-sm">
                  Immediate containment, personnel evacuation if necessary, and proper cleanup using appropriate
                  neutralizing agents.
                </p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg border border-emerald-900/20">
                <h5 className="text-emerald-400 font-semibold mb-2">Exposure Incident</h5>
                <p className="text-gray-300 text-sm">
                  First aid administration, medical evaluation, and incident reporting to safety committee.
                </p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg border border-emerald-900/20">
                <h5 className="text-emerald-400 font-semibold mb-2">Equipment Failure</h5>
                <p className="text-gray-300 text-sm">
                  Immediate shutdown, area isolation, and technical assessment before resuming operations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/30 rounded-lg p-8 border border-emerald-900/20">
          <h3 className="text-2xl font-bold text-emerald-400 mb-6 text-center">Ethical Considerations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <h4 className="text-emerald-300 font-semibold mb-2">Environmental Responsibility</h4>
              <p className="text-gray-300 text-sm">
                Our research prioritizes environmental protection and sustainable development, ensuring minimal
                ecological impact.
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <h4 className="text-emerald-300 font-semibold mb-2">Transparency</h4>
              <p className="text-gray-300 text-sm">
                Open communication about research methods, results, and potential risks with stakeholders and the
                scientific community.
              </p>
            </div>
            <div className="text-center">
              <FileText className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <h4 className="text-emerald-300 font-semibold mb-2">Regulatory Compliance</h4>
              <p className="text-gray-300 text-sm">
                Adherence to all relevant regulations and guidelines for biotechnology research and marine applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
