import { useState, useEffect } from 'react';
import {
  Globe2,
  Linkedin,
  Search,
  Info,
  Zap,
  GraduationCap,
  DoorOpen,
  Ghost,
  Scissors,
  Sparkles,
  Hand
} from 'lucide-react';

const platforms = [
  {
    name: 'LinkedIn',
    logo: 'https://logo.clearbit.com/linkedin.com',
    angle: 0
  },
  {
    name: 'Naukri.com',
    logo: 'https://logo.clearbit.com/naukri.com',
    angle: 36
  },
  {
    name: 'Indeed',
    logo: 'https://logo.clearbit.com/indeed.com',
    angle: 72
  },
  {
    name: 'AngelList',
    logo: 'https://logo.clearbit.com/angellist.com',
    angle: 108
  },
  {
    name: 'Instahyre',
    logo: 'https://logo.clearbit.com/instahyre.com',
    angle: 144
  },
  {
    name: 'Wellfound',
    logo: 'https://logo.clearbit.com/wellfound.com',
    angle: 180
  },
  {
    name: 'IIMJobs',
    logo: 'https://logo.clearbit.com/iimjobs.com',
    angle: 216
  },
  {
    name: 'Glassdoor',
    logo: 'https://logo.clearbit.com/glassdoor.com',
    angle: 252
  },
  {
    name: 'Monster India',
    logo: 'https://logo.clearbit.com/monsterindia.com',
    angle: 288
  },
  {
    name: 'Cutshort',
    logo: 'https://logo.clearbit.com/cutshort.io',
    angle: 324
  }
];

const platformIcons: Record<string, any> = {
  'LinkedIn': Linkedin,
  'Naukri.com': Search,
  'Indeed': Info,
  'AngelList': Hand,
  'Instahyre': Zap,
  'Wellfound': Sparkles,
  'IIMJobs': GraduationCap,
  'Glassdoor': DoorOpen,
  'Monster India': Ghost,
  'Cutshort': Scissors
};

export function GlobalHiring() {
  const [radius, setRadius] = useState(230);

  useEffect(() => {
    const updateRadius = () => {
      setRadius(window.innerWidth < 768 ? 140 : 230);
    };

    // Set initial value
    updateRadius();

    // Update on resize
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  return (
    <section className="py-24 bg-[#000000] relative overflow-hidden">


      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-radial-gradient opacity-30"></div>

      <div className="w-full mx-auto px-[8%] relative z-10">
        {/* Header */}
        <div className="text-center mb-20">

          <h2 className="text-[48px] leading-tight font-bold text-[#FFFFFF] mb-6 tracking-tight">
            Source from Every Platform
          </h2>
          <p className="text-[15px] text-gray-400 max-w-2xl mx-auto">
            Connect with top talent across all major hiring platforms. One unified workflow.
          </p>
        </div>

        {/* Central Hub Visualization */}
        <div className="relative h-[500px] md:h-[700px] mb-16 flex items-center justify-center">

          {/* Central Globe */}
          <div className="relative z-20">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6] to-[#B197FC] rounded-full blur-3xl opacity-40 animate-pulse-slow"></div>

            {/* Globe Container */}
            <div className="relative w-20 h-20 md:w-32 md:h-32 bg-[#404040] rounded-full border-2 md:border-4 border-[#B197FC] shadow-2xl flex items-center justify-center overflow-hidden">
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/30 to-[#B197FC]/30"></div>

              {/* Globe Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                {/* Latitude lines */}
                <ellipse cx="50" cy="30" rx="40" ry="8" fill="none" stroke="#B197FC" strokeWidth="0.5" opacity="0.4" />
                <ellipse cx="50" cy="50" rx="45" ry="12" fill="none" stroke="#B197FC" strokeWidth="0.5" opacity="0.4" />
                <ellipse cx="50" cy="70" rx="40" ry="8" fill="none" stroke="#B197FC" strokeWidth="0.5" opacity="0.4" />

                {/* Longitude lines */}
                <ellipse cx="50" cy="50" rx="12" ry="45" fill="none" stroke="#B197FC" strokeWidth="0.5" opacity="0.4" />
                <ellipse cx="50" cy="50" rx="25" ry="45" fill="none" stroke="#B197FC" strokeWidth="0.5" opacity="0.4" />
                <ellipse cx="50" cy="50" rx="38" ry="45" fill="none" stroke="#B197FC" strokeWidth="0.5" opacity="0.4" />
              </svg>

              {/* Icon */}
              <Globe2 className="w-8 h-8 md:w-12 md:h-12 text-[#B197FC] relative z-10" />
            </div>

            {/* Pulsing Rings */}
            <div className="absolute inset-0 border-2 border-[#3B82F6] rounded-full animate-ping-slow opacity-40"></div>
          </div>

          {/* Combined SVG Layer for Lines and Rings */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#B197FC" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#B197FC" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* Orbital Rings - Centered in SVG */}
            <g transform="translate(50%, 50%)" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
              <circle cx="50%" cy="50%" r="250" fill="none" stroke="#B197FC" strokeWidth="1" strokeOpacity="0.3" className="animate-spin-slow origin-center" />
              <circle cx="50%" cy="50%" r="320" fill="none" stroke="#B197FC" strokeWidth="1" strokeOpacity="0.15" className="animate-spin-slower origin-center" />
            </g>

            {/* Connecting Lines */}
            {platforms.map((platform, index) => {
              const x = Math.cos((platform.angle - 90) * Math.PI / 180) * radius;
              const y = Math.sin((platform.angle - 90) * Math.PI / 180) * radius;
              return (
                <line
                  key={index}
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${x}px)`}
                  y2={`calc(50% + ${y}px)`}
                  stroke="#B197FC"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                  opacity="0.6"
                  className="animate-dashFlow"
                />
              );
            })}
          </svg>

          {/* Platform Icons */}
          {platforms.map((platform, index) => {
            const x = Math.cos((platform.angle - 90) * Math.PI / 180) * radius;
            const y = Math.sin((platform.angle - 90) * Math.PI / 180) * radius;

            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                }}
              >
                <div className="relative animate-float" style={{ animationDelay: `${platform.angle * 0.005}s` }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B197FC]/20 to-[#3B82F6]/20 rounded-xl md:rounded-2xl blur-xl"></div>
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-2xl p-2 md:p-4 shadow-2xl hover:bg-white/20 transition-all hover:scale-110 group cursor-pointer">
                    <div className="w-6 h-6 md:w-10 md:h-10 mb-1 md:mb-2 flex items-center justify-center">
                      {(() => {
                        const Icon = platformIcons[platform.name] || Search;
                        return <Icon className="w-5 h-5 md:w-8 md:h-8 text-white opacity-90 group-hover:opacity-100 transition-opacity" />;
                      })()}
                    </div>
                    <div className="text-white text-[8px] md:text-[10px] font-semibold whitespace-nowrap text-center opacity-80 group-hover:opacity-100 transition-opacity">{platform.name}</div>
                  </div>
                </div>
              </div>
            );
          })}


          {/* Floating Data Nodes Removed */}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="text-center">
            <div className="text-2xl md:text-[42px] leading-none font-bold text-white mb-2 bg-gradient-to-r from-[#A5D8FF] to-[#3B82F6] bg-clip-text text-transparent">25+</div>
            <div className="text-xs md:text-[13px] text-gray-400 font-medium">Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-[42px] leading-none font-bold text-white mb-2 bg-gradient-to-r from-[#D0BCFF] to-[#B197FC] bg-clip-text text-transparent">1M+</div>
            <div className="text-xs md:text-[13px] text-gray-400 font-medium">Candidates</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-[42px] leading-none font-bold text-white mb-2 bg-gradient-to-r from-[#B197FC] to-[#8B5CF6] bg-clip-text text-transparent">10K+</div>
            <div className="text-xs md:text-[13px] text-gray-400 font-medium">Companies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-[42px] leading-none font-bold text-white mb-2 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent">Real-time</div>
            <div className="text-xs md:text-[13px] text-gray-400 font-medium">Sync</div>
          </div>
        </div>
      </div>

      <style>{`
        .bg-radial-gradient {
          background: radial-gradient(circle at 50% 50%, rgba(177, 151, 252, 0.15) 0%, transparent 70%);
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
            transform-origin: 50% 50%;
          }
          to {
            transform: rotate(360deg);
            transform-origin: 50% 50%;
          }
        }
        
        @keyframes spin-slower {
          from {
            transform: rotate(0deg);
            transform-origin: 50% 50%;
          }
          to {
            transform: rotate(-360deg);
            transform-origin: 50% 50%;
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }
        
        .animate-spin-slower {
          animation: spin-slower 60s linear infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        @keyframes dashFlow {
          to {
            stroke-dashoffset: -8;
          }
        }
        
        .animate-dashFlow {
          animation: dashFlow 1s linear infinite;
        }
      `}</style>
    </section>
  );
}
