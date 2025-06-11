import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Award, CheckCircle, BarChart3 } from "lucide-react"

export function Results() {
  return (
    <section id="results" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-emerald-400">Results</span> & Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive testing demonstrates the effectiveness of the Barnacure system in preventing barnacle
            attachment while maintaining environmental safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="bg-slate-800/50 border-emerald-900/20 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-emerald-400 mb-2">85%</div>
              <p className="text-gray-300">Barnacle Settlement Reduction</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-emerald-900/20 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-emerald-400 mb-2">72h</div>
              <p className="text-gray-300">Enzyme Stability Duration</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-emerald-900/20 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-emerald-400 mb-2">0%</div>
              <p className="text-gray-300">Cytotoxicity to Marine Life</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-emerald-900/20 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-emerald-400 mb-2">95%</div>
              <p className="text-gray-300">Biodegradation Rate</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">Experimental Results</h3>
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-emerald-900/20">
                <CardHeader>
                  <CardTitle className="text-emerald-300 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Antifouling Efficacy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <div className="aspect-video bg-slate-600/50 rounded flex items-center justify-center mb-4">
                        <div className="text-center">
                          <BarChart3 className="h-12 w-12 text-emerald-400 mx-auto mb-2" />
                          <p className="text-gray-300 text-sm">Settlement Inhibition Graph</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">
                      CLEA-treated surfaces showed 85% reduction in barnacle settlement compared to untreated controls
                      over 30-day exposure period.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-emerald-900/20">
                <CardHeader>
                  <CardTitle className="text-emerald-300 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Enzyme Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <div className="aspect-video bg-slate-600/50 rounded flex items-center justify-center mb-4">
                        <div className="text-center">
                          <BarChart3 className="h-12 w-12 text-emerald-400 mx-auto mb-2" />
                          <p className="text-gray-300 text-sm">Activity Retention Over Time</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">
                      CLEAs maintained 78% of initial enzyme activity after cross-linking and showed stable performance
                      for 72 hours in seawater conditions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">Environmental Impact</h3>
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-emerald-900/20">
                <CardHeader>
                  <CardTitle className="text-emerald-300">Toxicity Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-emerald-400 mb-1">0%</div>
                        <p className="text-gray-300 text-sm">Mortality in test organisms</p>
                      </div>
                      <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-emerald-400 mb-1">100%</div>
                        <p className="text-gray-300 text-sm">Biodegradation within 7 days</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Comprehensive toxicity testing on marine organisms including algae, crustaceans, and fish showed
                      no adverse effects at operational concentrations.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-emerald-900/20">
                <CardHeader>
                  <CardTitle className="text-emerald-300">Sustainability Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Carbon Footprint Reduction</span>
                      <span className="text-emerald-400 font-semibold">60%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Renewable Resource Usage</span>
                      <span className="text-emerald-400 font-semibold">90%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Waste Reduction</span>
                      <span className="text-emerald-400 font-semibold">75%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Energy Efficiency</span>
                      <span className="text-emerald-400 font-semibold">80%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/30 rounded-lg p-8 border border-emerald-900/20 mb-12">
          <h3 className="text-2xl font-bold text-emerald-400 mb-6 text-center">Key Findings</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Award className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <h4 className="text-emerald-300 font-semibold mb-2">Proof of Concept</h4>
              <p className="text-gray-300 text-sm">
                Successfully demonstrated enzyme-based antifouling mechanism with significant reduction in barnacle
                settlement rates.
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <h4 className="text-emerald-300 font-semibold mb-2">Environmental Safety</h4>
              <p className="text-gray-300 text-sm">
                Confirmed biodegradability and non-toxicity to marine organisms, supporting sustainable marine
                technology development.
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <h4 className="text-emerald-300 font-semibold mb-2">Commercial Viability</h4>
              <p className="text-gray-300 text-sm">
                Demonstrated stability and effectiveness parameters suitable for real-world maritime applications and
                scaling.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-emerald-400 mb-6">Research Publications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-emerald-900/20">
              <CardContent className="p-6">
                <h4 className="text-emerald-300 font-semibold mb-2">
                  "Enzyme-Based Antifouling Technology Using CLEAs"
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Submitted to Journal of Marine Biotechnology - Under Review
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-950"
                >
                  View Abstract
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-emerald-900/20">
              <CardContent className="p-6">
                <h4 className="text-emerald-300 font-semibold mb-2">"Sustainable Marine Surface Protection"</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Presented at International Synthetic Biology Conference 2024
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-950"
                >
                  View Presentation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
