import { Linkedin, Twitter, Facebook, Instagram, Mail } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Integrations', 'API Documentation', 'Changelog', 'Roadmap'],
  Company: ['About Us', 'Careers', 'Blog', 'Press Kit', 'Contact', 'Partners'],
  Resources: ['Help Center', 'Documentation', 'Community', 'Webinars', 'Case Studies', 'Templates'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Security', 'GDPR Compliance', 'Cookie Policy', 'Data Processing']
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="w-full max-w-9xl mx-auto px-8 md:px-16 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#3B82F6] to-[#B197FC] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-bold text-white">RecruiterAI</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs leading-relaxed">
              AI-powered recruiting platform helping companies hire faster and better. Transform your hiring process with intelligent automation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#3B82F6] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#3B82F6] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#3B82F6] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#3B82F6] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-[#3B82F6] transition-colors text-sm hover:translate-x-1 inline-block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-b border-gray-800 mb-8">
          <div className="max-w-md">
            <h3 className="text-white font-bold mb-2 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Subscribe to our newsletter
            </h3>
            <p className="text-sm text-gray-400 mb-4">Get the latest hiring insights and product updates delivered to your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6]"
              />
              <button className="cursor-pointer bg-[#3B82F6] text-white px-6 py-2 rounded-lg hover:bg-[#2563EB] transition-colors font-semibold text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-400">
            © 2026 RecruiterAI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#3B82F6] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#3B82F6] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#3B82F6] transition-colors">Cookies</a>
            <a href="#" className="hover:text-[#3B82F6] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
