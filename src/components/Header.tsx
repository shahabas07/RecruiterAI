import { Menu } from 'lucide-react';

export function Header() {
  return (
    <header
      className="
        sticky top-0 z-50
        bg-white/80 backdrop-blur-md
        border-b border-[#F3F4F6]
      "
    >
      <div className="w-full px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="
                w-9 h-9 rounded-lg
                bg-gradient-to-br
                from-[#A5D8FF] via-[#D0BCFF] to-[#B197FC]
                flex items-center justify-center
                shadow-sm
              "
            >
              <span className="text-white font-bold text-lg">R</span>
            </div>

            <span className="text-xl font-bold text-gray-900">
              Recruiter
              <span className="text-[#B197FC]">AI</span>
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['Platform', 'Impact', 'Customers', 'Resources'].map((item) => (
              <a
                key={item}
                href="#"
                className="
                  text-[#737373]
                  hover:text-[#3B82F6]
                  transition-colors
                  font-medium
                "
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              className="
                cursor-pointer
                hidden md:block
                text-[#737373]
                hover:text-[#3B82F6]
                transition-colors
                font-medium
                text-sm
              "
            >
              Sign In
            </button>

            <button
              className="
                cursor-pointer
                hidden md:block
                px-3 py-2 mb-1 rounded-lg
                bg-[#B197FC] text-white
                hover:opacity-90
                transition-all
                font-medium
                text-xs
                shadow-md shadow-[#3B82F6]/20
              "
            >
              Request Demo
            </button>

            <button className="cursor-pointer md:hidden text-[#737373]">
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
