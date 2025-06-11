import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Users } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Team Leader & Wet Lab Coordinator",
    bio: "Senior with expertise in molecular biology and enzyme engineering. Passionate about marine conservation.",
    image: "/placeholder.svg?height=200&width=200",
    skills: ["Protein Engineering", "Molecular Cloning", "Project Management"],
  },
  {
    name: "Marcus Rodriguez",
    role: "Dry Lab Lead & Computational Biologist",
    bio: "Computer science and biology double major specializing in bioinformatics and molecular modeling.",
    image: "/placeholder.svg?height=200&width=200",
    skills: ["Molecular Dynamics", "Python Programming", "Data Analysis"],
  },
  {
    name: "Emily Watson",
    role: "Safety Officer & Environmental Analyst",
    bio: "Environmental science major focused on sustainable biotechnology and marine ecosystem protection.",
    image: "/placeholder.svg?height=200&width=200",
    skills: ["Risk Assessment", "Environmental Impact", "Regulatory Compliance"],
  },
  {
    name: "David Kim",
    role: "Research Coordinator & Lab Manager",
    bio: "Biochemistry major with experience in enzyme purification and characterization techniques.",
    image: "/placeholder.svg?height=200&width=200",
    skills: ["Enzyme Purification", "Analytical Chemistry", "Lab Management"],
  },
  {
    name: "Aisha Patel",
    role: "Outreach Coordinator & Science Communicator",
    bio: "Biology and communications double major passionate about making science accessible to everyone.",
    image: "/placeholder.svg?height=200&width=200",
    skills: ["Science Communication", "Public Outreach", "Social Media"],
  },
  {
    name: "James Thompson",
    role: "Design & Documentation Specialist",
    bio: "Bioengineering major with skills in technical writing and visual design for scientific presentations.",
    image: "/placeholder.svg?height=200&width=200",
    skills: ["Technical Writing", "Graphic Design", "Documentation"],
  },
  {
    name: "Sofia Martinez",
    role: "Wet Lab Researcher",
    bio: "Microbiology major specializing in bacterial culture and enzyme expression systems.",
    image: "/placeholder.svg?height=200&width=200",
    skills: ["Bacterial Culture", "Enzyme Expression", "Microscopy"],
  },
  {
    name: "Alex Johnson",
    role: "Data Analysis Specialist",
    bio: "Statistics and biology double major focused on experimental design and data interpretation.",
    image: "/placeholder.svg?height=200&width=200",
    skills: ["Statistical Analysis", "R Programming", "Experimental Design"],
  },
  {
    name: "Maya Singh",
    role: "Molecular Biology Researcher",
    bio: "Genetics major with experience in DNA manipulation and protein characterization.",
    image: "/placeholder.svg?height=200&width=200",
    skills: ["DNA Cloning", "PCR", "Protein Purification"],
  },
  {
    name: "Ryan O'Connor",
    role: "Bioengineering Specialist",
    bio: "Chemical engineering major applying engineering principles to biological systems.",
    image: "/placeholder.svg?height=200&width=200",
    skills: ["Process Design", "Bioreactor Operation", "Scale-up"],
  },
  {
    name: "Zoe Liu",
    role: "Environmental Impact Analyst",
    bio: "Environmental science major studying the ecological effects of antifouling technologies.",
    image: "/placeholder.svg?height=200&width=200",
    skills: ["Ecological Assessment", "Life Cycle Analysis", "Sustainability"],
  },
  {
    name: "Nathan Brown",
    role: "Quality Control Specialist",
    bio: "Chemistry major ensuring experimental reproducibility and data quality.",
    image: "/placeholder.svg?height=200&width=200",
    skills: ["Quality Assurance", "Method Validation", "Analytical Chemistry"],
  },
  {
    name: "Isabella Garcia",
    role: "Public Relations & Media Coordinator",
    bio: "Communications major managing team outreach and media presence.",
    image: "/placeholder.svg?height=200&width=200",
    skills: ["Media Relations", "Content Creation", "Event Planning"],
  },
]

const advisors = [
  {
    name: "Dr. Maria Gonzalez",
    role: "Faculty Advisor",
    department: "Department of Marine Biology",
    expertise: "Marine biotechnology and antifouling research",
  },
]

export function Team() {
  return (
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-emerald-400">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated students and advisors behind the Barnacure project, bringing together diverse expertise
            in biology, engineering, and environmental science.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-emerald-400 mb-8 text-center">Student Team Members</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-emerald-900/20 hover:bg-slate-800/70 transition-colors"
              >
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-slate-700/50 rounded-full flex items-center justify-center">
                    <Users className="h-16 w-16 text-emerald-400" />
                  </div>
                  <CardTitle className="text-emerald-400">{member.name}</CardTitle>
                  <p className="text-emerald-300 text-sm">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4 text-center">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-emerald-900/20 text-emerald-400 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-2">
                    <Button variant="ghost" size="sm" className="text-emerald-400 hover:text-emerald-300">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-emerald-400 hover:text-emerald-300">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-emerald-400 hover:text-emerald-300">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-emerald-400 mb-8 text-center">Faculty Advisor</h3>
          <div className="grid grid-cols-1 gap-8 max-w-md mx-auto">
            {advisors.map((advisor, index) => (
              <Card key={index} className="bg-slate-800/50 border-emerald-900/20">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-slate-700/50 rounded-full flex items-center justify-center">
                    <Users className="h-10 w-10 text-emerald-400" />
                  </div>
                  <h4 className="text-emerald-400 font-semibold text-lg mb-1">{advisor.name}</h4>
                  <p className="text-emerald-300 text-sm mb-2">{advisor.role}</p>
                  <p className="text-gray-400 text-xs mb-3">{advisor.department}</p>
                  <p className="text-gray-300 text-sm">{advisor.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-slate-800/30 rounded-lg p-8 border border-emerald-900/20">
          <h3 className="text-2xl font-bold text-emerald-400 mb-6 text-center">Team Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">13</div>
              <p className="text-gray-300">Student Members</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">1</div>
              <p className="text-gray-300">Faculty Advisor</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">8</div>
              <p className="text-gray-300">Months of Research</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">1st</div>
              <p className="text-gray-300">Year in iGEM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
