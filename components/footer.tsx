import { Waves, Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-emerald-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Waves className="h-8 w-8 text-emerald-400 mr-3" />
              <div>
                <h3 className="text-2xl font-bold text-emerald-400">Barnacure</h3>
                <p className="text-emerald-300 text-sm">iGEM 2024 Project</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6 max-w-md">
              Developing sustainable enzyme-based antifouling technology to protect marine surfaces while preserving
              ocean ecosystems through innovative synthetic biology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-emerald-400 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#project" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Project Overview
                </a>
              </li>
              <li>
                <a href="#wetlab" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Wet Lab
                </a>
              </li>
              <li>
                <a href="#drylab" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Dry Lab
                </a>
              </li>
              <li>
                <a href="#results" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Results
                </a>
              </li>
              <li>
                <a href="#safety" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Safety
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-emerald-400 font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  iGEM Registry
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Research Papers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Protocols
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Data Repository
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Safety Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-900/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Wellington COllege International Shanghai Barnacure iGEM Team. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">Built with sustainable technology for a cleaner ocean.</p>
        </div>
      </div>
    </footer>
  )
}
