
import { useEffect, useRef, useState } from 'react';

export function BentoFeatures() {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  const bars = [
    { value: '10x', label: 'Faster Screening', height: 180, color: '#3B82F6', shadow: 'shadow-blue-500/20' },
    { value: '70%', label: 'Time-to-Hire', height: 220, color: '#818CF8', shadow: 'shadow-indigo-400/20' },
    { value: '25x', label: 'Interview Cap', height: 280, color: '#7DD3FC', shadow: 'shadow-sky-300/20' },
    { value: '95%', label: 'Completion', height: 310, color: '#CBD5E1', shadow: '' },
    { value: '89%', label: 'Qualified Apps', height: 250, color: '#2DD4BF', shadow: 'shadow-teal-400/20' },
    { value: '80%', label: 'Cost Savings', height: 210, color: '#1E293B', shadow: '' },
    { value: '50%', label: 'Fewer Bad Hires', height: 240, color: '#A855F7', shadow: 'shadow-purple-500/20' }
  ];

  return (
    <section className="relative min-h-screen py-24 px-6 overflow-hidden bg-[#EFF6FF] text-slate-900 transition-colors duration-300">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            The RecruiterAI Advantage
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Measurable business impact delivered through data-driven AI recruitment.
            Elevate your hiring efficiency to enterprise standards.
          </p>
        </div>

        {/* Bar Chart Section */}
        <div ref={chartRef} className="flex justify-between gap-4 mb-24 h-[450px] items-end">
          {bars.map((bar, index) => (
            <div key={index} className="flex-1 min-w-[120px] flex flex-col items-center justify-end h-full group">
              <div className="mb-4 text-center">
                <span className="block text-3xl font-bold text-slate-900">{bar.value}</span>
                <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">{bar.label}</span>
              </div>
              <div
                className={`w-full transition-all duration-1000 ease-out ${bar.shadow}`}
                style={{
                  height: isVisible ? `${bar.height}px` : '0px',
                  backgroundColor: bar.color,
                  borderTopLeftRadius: '24px',
                  borderTopRightRadius: '24px'
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/60 backdrop-blur-md border border-blue-100 p-6 rounded-2xl hover:border-blue-400 transition-colors">
            <h4 className="font-bold text-slate-900 mb-2 text-base">Fast resume processing</h4>
            <p className="text-sm text-slate-600 leading-relaxed">AI parses and ranks 250+ applications per day vs 25 manually.</p>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-indigo-100 p-6 rounded-2xl hover:border-indigo-400 transition-colors">
            <h4 className="font-bold text-slate-900 mb-2 text-base">Quick time-to-hire</h4>
            <p className="text-sm text-slate-600 leading-relaxed">Average hiring timeline drops from 42 days to just 12 days.</p>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-sky-100 p-6 rounded-2xl hover:border-sky-400 transition-colors">
            <h4 className="font-bold text-slate-900 mb-2 text-base">Massive capacity increase</h4>
            <p className="text-sm text-slate-600 leading-relaxed">AI conducts 200+ automated screening interviews daily.</p>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-slate-200 p-6 rounded-2xl hover:border-slate-400 transition-colors">
            <h4 className="font-bold text-slate-900 mb-2 text-base">Less drop-off</h4>
            <p className="text-sm text-slate-600 leading-relaxed">Smart application forms reduce candidate drop-off dramatically.</p>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-teal-100 p-6 rounded-2xl hover:border-teal-400 transition-colors">
            <h4 className="font-bold text-slate-900 mb-2 text-base">Better applicants</h4>
            <p className="text-sm text-slate-600 leading-relaxed">Optimizer attracts higher-quality candidate pipelines instantly.</p>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-slate-900/10 p-6 rounded-2xl hover:border-slate-900 transition-colors">
            <h4 className="font-bold text-slate-900 mb-2 text-base">Lower expenses</h4>
            <p className="text-sm text-slate-600 leading-relaxed">80% lower costs vs traditional recruiting agencies and software.</p>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-purple-100 p-6 rounded-2xl hover:border-purple-400 transition-colors">
            <h4 className="font-bold text-slate-900 mb-2 text-base">Fewer mistakes</h4>
            <p className="text-sm text-slate-600 leading-relaxed">Skills matching improves hiring accuracy dramatically.</p>
          </div>
          <div className="bg-[#3B82F6] p-6 rounded-2xl flex flex-col justify-center items-center text-center text-white shadow-xl shadow-blue-500/30">
            <h4 className="font-bold mb-2 text-base">Ready to scale?</h4>
            <button className="cursor-pointer bg-white text-[#3B82F6] px-6 py-2 rounded-full font-semibold text-sm hover:bg-slate-100 transition-colors">
              Book a Demo
            </button>
          </div>
        </div>
      </div>


      <style>{`
        .grid-pattern {
            background-image: radial-gradient(#cbd5e1 1px, transparent 1px);
            background-size: 40px 40px;
        }
        .dark .grid-pattern {
            background-image: radial-gradient(#334155 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
}
