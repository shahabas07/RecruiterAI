

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface PainPoint {
  name: string;
  role: string;
  quote: string;
  position: Position;
  avatar: string;
  delay: string;
  color?: string;
}

const painPointCards: PainPoint[] = [
  {
    name: 'Sarah K.',
    role: 'Founder @ TechFlow',
    quote: 'We were losing top talent to competitors before we even saw their resumes.',
    position: 'top-left',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmTZO-U6LPt7x3TZt8andmJibdApYodX9_nvoUuakcAj-unN1y6lKyc_gkFx1NbO2kICSLuidKnFVpqm9_7GGrqdoVkYsHuk3B35Y-Kok7hKJdVltdEKEX6Ca5DriIZIkY2hqA7KnfDI1h6cKxWrp1f-wgsJwZNnI6c0UXJQ2p-bB9Fp6hEQEqfwDWkuSVWLa3NeWQyp1oNoFv9m6XZmLZROs0tB1emkc7ojgl6qPoXKaovVjoLIhQg2lCdo-tD8SIkNaLqQd37A2I',
    delay: '0s',
    color: '#A5D8FF' // Accent 1
  },
  {
    name: 'Rahul M.',
    role: 'Hiring Manager',
    quote: 'Stop hiring based on gut feeling. Use data-driven shortlisting.',
    position: 'top-right',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCp8X8ZXog6gaGwRIifjPpqKNwp0BxjhjJFIAwMZvkc2M9BkSnZvoOtEI_3ByH8Sfe0ZbppQGChYeWx2dCKyxqdexCbSpcOs1Tv5lNOcCgUW6dNAsl1oOGokyOSx1mzUvNGkURnPCM-_vLHQvKxad4anqbqLOh7PzMzA-jl6HYntm_ezfKZEaygOsvfzXY1MCeFka8DczXb7j2CWsfZaI-J7B1nzpxGEPHE_iEGQOlzcAPiFn_YkdxRJ-qOWF1aZ7tlALzNx6Un0aB2',
    delay: '1s',
    color: '#D0BCFF' // Accent 2
  },
  {
    name: 'Priya S.',
    role: 'CEO @ Innovate',
    quote: 'I have zero time to read 500+ resumes. I need the best 5.',
    position: 'bottom-left',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCagbR1vXtCp5aYWmriYw-PQ3P3DOB36eBoRtJ2klSVTsdLVYy7dfRst-Zcq5T7t6XNv9JD2z8TzqZUOmfY5phRXKKTx0hLHhcCgsa_J-Mj4vdOzeoN7zLtJX3IM58NsELXxZw-nDjdmm5WkqD7DnhJdCV-CNYjvuyFPaX3h8Leu6FbqGqYWRfHgwdWN4B4yI3Fvuz7BclnCX5F8GnLe4tvV_ZzoIcveefRhRD6As4U00pA7XvNy3vxYpUytqUOF14K3zAy_I4b0Em3',
    delay: '1s',
    color: '#B197FC' // Accent 3
  },
  {
    name: 'Amit T.',
    role: 'Head of HR',
    quote: 'Candidates are accepting other offers while we\'re still scheduling.',
    position: 'bottom-right',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdBZpLI56scvxwij45QC9pWJj4HCPrYznhnl8Jnqe8SoR9hULOz3MbPiS_od__7QC4bNmobf7MIHcttzweDYK79HRtZEleX65wvYnPCqTdJNdap-snumAFT6kX4vKn-FlEOtZQYdkdueXwQbdpdIm77fe7f5Hp5DaLP5jRihkUd4A-hzS0XIxF6gXu2T0HBf408hDTwDXgAwGxfDPXTu7yRayVdtTt_8u_qGiZFP5ekVGN2d5yGzvf5Twxchq8pqvTi-8hd67x9zdi',
    delay: '0s',
    color: '#3B82F6' // Light Primary
  }
];

function PainPointCard({ name, role, quote, position, avatar, delay, color, index, cardRef }: typeof painPointCards[0] & { index: number, cardRef: React.Ref<HTMLDivElement> }) {
  const positionStyles = {
    'top-left': { top: '15%', left: '15%' },
    'top-right': { top: '20%', right: '12%' },
    'bottom-left': { bottom: '20%', left: '10%' },
    'bottom-right': { bottom: '15%', right: '15%' }
  };

  return (
    <motion.div
      ref={cardRef}
      className="absolute hidden xl:block z-20"
      style={positionStyles[position]}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2 + (index * 0.1),
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <div
        className="will-change-transform" // Optimize animation performance
        style={{
          animation: `float 6s ease-in-out infinite`,
          animationDelay: delay
        }}
      >
        <div
          className="backdrop-blur-md border-2 rounded-2xl p-4 shadow-xl w-[280px] text-left hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
          style={{
            borderColor: color,
            backgroundColor: `${color}1A` // 10% opacity
          }}
        >
          {/* Glow effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              boxShadow: `0 0 30px ${color}80, inset 0 0 20px ${color}40`,
              borderRadius: '1rem'
            }}
          />
          {/* subtle white overlay for readability */}
          <div className="absolute inset-0 bg-white/60 -z-10" />

          <div className="flex items-start gap-3 mb-2">
            <img
              src={avatar}
              alt={name}
              className="w-10 h-10 rounded-full object-cover border-2"
              style={{ borderColor: `${color}80` }}
            />

            <div>
              <h4 className="text-sm font-bold text-gray-900">{name}</h4>
              <div className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">{role}</div>
            </div>
          </div>
          <p className="text-xs text-gray-600 italic leading-relaxed">"{quote}"</p>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const whiteButtonRef = useRef<HTMLButtonElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [paths, setPaths] = useState<string[]>([]);

  useEffect(() => {
    const updatePaths = () => {
      if (!containerRef.current || !buttonRef.current || !whiteButtonRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const blueBtnRect = buttonRef.current.getBoundingClientRect();
      const whiteBtnRect = whiteButtonRef.current.getBoundingClientRect();

      const newPaths = painPointCards.map((card, index) => {
        const cardEl = cardsRef.current[index];
        if (!cardEl) return '';

        const cardRect = cardEl.getBoundingClientRect();
        const isLeft = card.position.includes('left');

        // Calculate start point relative to container
        let startX, startY;

        // Connect to inner side of card
        if (isLeft) {
          startX = (cardRect.right - containerRect.left);
        } else {
          startX = (cardRect.left - containerRect.left);
        }
        startY = (cardRect.top + cardRect.height / 2 - containerRect.top);

        // Connect to OUTER side of the respective button
        // Left cards -> Left side of Blue Button
        // Right cards -> Right side of White Button
        let endX, endY;
        if (isLeft) {
          endX = (blueBtnRect.left - containerRect.left);
          endY = (blueBtnRect.top + blueBtnRect.height / 2 - containerRect.top);
        } else {
          endX = (whiteBtnRect.right - containerRect.left);
          endY = (whiteBtnRect.top + whiteBtnRect.height / 2 - containerRect.top);
        }

        // Control points for "Stay Wide" path
        const channelX = startX + (endX - startX) * 0.15;

        const cp1X = channelX;
        const cp1Y = startY;

        const cp2X = channelX;
        const cp2Y = endY;

        return `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;
      });

      setPaths(newPaths);
    };

    updatePaths();
    window.addEventListener('resize', updatePaths);
    // Recalculate after a short delay to ensure layout is settled
    const timer = setTimeout(updatePaths, 1000);

    return () => {
      window.removeEventListener('resize', updatePaths);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative py-20 md:py-32 overflow-hidden bg-[#EFF6FF] min-h-[800px] flex items-center justify-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Animated Gradient Blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#A5D8FF]/40 rounded-full blur-[100px] animate-blob mix-blend-multiply filter opacity-70"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#D0BCFF]/40 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply filter opacity-70"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-[#B197FC]/40 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply filter opacity-70"></div>

        {/* Overlay to soften */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>
      </div>

      {/* Dynamic Connecting Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden xl:block">
        <svg className="w-full h-full" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="flowGradient" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {paths.map((d, i) => d && (
            <g key={i}>
              <defs>
                <mask id={`draw-mask-${i}`}>
                  <motion.path
                    d={d}
                    stroke="white"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 1.2,
                      delay: 0.5 + (i * 0.1),
                      ease: "easeInOut"
                    }}
                  />
                </mask>
              </defs>
              <path
                d={d}
                fill="none"
                stroke="#3B82F6"
                strokeWidth="1.5"
                className="animate-flow-line"
                strokeDasharray="10 10"
                opacity="0.5"
                mask={`url(#draw-mask-${i})`}
              />
              {/* Add a glowing dot at the end that travels with the line? Maybe too complex for now. */}
            </g>
          ))}
        </svg>
      </div>

      {/* Pain Point Cards - Scattered positioning */}
      {painPointCards.map((card, index) => (
        <PainPointCard
          key={index}
          {...card}
          index={index}
          cardRef={(el) => { cardsRef.current[index] = el; }}
        />
      ))}

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="relative w-full mx-auto">
          {/* Center Content */}
          <div className="text-center py-12">
            <h1 className="font-display text-[54px] md:text-[72px] leading-[1.1] font-bold hero-gradient-text mb-8 tracking-tight drop-shadow-sm pb-2">
              Every Hire,<br />
              Faster and Better
            </h1>

            <p className="text-[16px] md:text-[20px] text-[#737373] mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              Stop losing great candidates to slow processes. Our AI-native engine sources, screens, and shortlists the top 1% of talent in minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button
                ref={buttonRef}
                className="cursor-pointer group bg-[#3B82F6] text-white px-8 py-4 rounded-xl hover:bg-[#2563EB] transition-all flex items-center gap-2 font-semibold text-base shadow-lg shadow-[#3B82F6]/30 hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Start Hiring Smarter</span>
              </button>
              <button
                ref={whiteButtonRef}
                className="cursor-pointer group bg-white text-[#404040] px-8 py-4 rounded-xl hover:bg-[#F3F4F6] transition-all flex items-center gap-2 font-medium text-base border border-[#F3F4F6] shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>See How It Works</span>
              </button>
            </div>

            {/* Trusted Badges */}
            <div className="border-gray-200/60 pt-10 opacity-70">
              <p className="text-[11px] text-[#737373] uppercase tracking-widest mb-6 font-semibold">Trusted by Modern Teams</p>
              <div className="flex items-center justify-center gap-12 flex-wrap text-gray-400 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="text-[13px] font-bold tracking-wide flex items-center gap-2"><span className="text-xl">🚀</span> TECHLY</div>
                <div className="text-[13px] font-bold tracking-wide flex items-center gap-2"><span className="text-xl">💎</span> VORTEX</div>
                <div className="text-[13px] font-bold tracking-wide flex items-center gap-2"><span className="text-xl">⚡</span> SPHERE</div>
                <div className="text-[13px] font-bold tracking-wide flex items-center gap-2"><span className="text-xl">📊</span> STACK</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes flowLine {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -100; }
        }
        .animate-flow-line {
          animation: flowLine 30s linear infinite;
        }

        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeSlideIn {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .hero-gradient-text {
            background: linear-gradient(135deg, #3B82F6 0%, #B197FC 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}
