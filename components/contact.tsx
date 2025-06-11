import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in <span className="text-emerald-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Interested in our research? Have questions about Barnacure? We'd love to hear from you and discuss potential
            collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-emerald-900/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-8 w-8 text-emerald-400" />
                    <div>
                      <h4 className="text-emerald-300 font-semibold">Email</h4>
                      <p className="text-gray-300">Thomas.Edwards@wellingtoncollege.cn</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-emerald-900/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-8 w-8 text-emerald-400" />
                    <div>
                      <h4 className="text-emerald-300 font-semibold">Phone</h4>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-emerald-900/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-8 w-8 text-emerald-400" />
                    <div>
                      <h4 className="text-emerald-300 font-semibold">Address</h4>
                      <p className="text-gray-300">
                        Science Department
                        <br />
                        Wellington College International Shanghai
                        <br />
                        China, 耀龙路1500号 (No.1500 Yao Long Rd.)
                        <br />
                        City, State 12345
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-emerald-300 mb-4">Follow Our Research</h4>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-950"
                >
                  iGEM Registry
                </Button>
                <Button
                  variant="outline"
                  className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-950"
                >
                  Research Blog
                </Button>
                <Button
                  variant="outline"
                  className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-950"
                >
                  Social Media
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">Send us a Message</h3>
            <Card className="bg-slate-800/50 border-emerald-900/20">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-emerald-300 mb-2">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        className="bg-slate-700/50 border-emerald-900/20 text-white placeholder-gray-400"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-emerald-300 mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        className="bg-slate-700/50 border-emerald-900/20 text-white placeholder-gray-400"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-emerald-300 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-slate-700/50 border-emerald-900/20 text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-emerald-300 mb-2">
                      Organization (Optional)
                    </label>
                    <Input
                      id="organization"
                      className="bg-slate-700/50 border-emerald-900/20 text-white placeholder-gray-400"
                      placeholder="Your university or company"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-emerald-300 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      className="bg-slate-700/50 border-emerald-900/20 text-white placeholder-gray-400"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-emerald-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      className="bg-slate-700/50 border-emerald-900/20 text-white placeholder-gray-400"
                      placeholder="Tell us about your interest in our research or any questions you have..."
                    />
                  </div>

                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-emerald-400 mb-6">Collaboration Opportunities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-emerald-900/20">
              <CardHeader>
                <CardTitle className="text-emerald-300">Research Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  Collaborate with our team on marine biotechnology research and antifouling technology development.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-emerald-900/20">
              <CardHeader>
                <CardTitle className="text-emerald-300">Industry Connections</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  Connect with maritime industry professionals interested in sustainable antifouling solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-emerald-900/20">
              <CardHeader>
                <CardTitle className="text-emerald-300">Educational Outreach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  Partner with us for educational programs and science communication initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
