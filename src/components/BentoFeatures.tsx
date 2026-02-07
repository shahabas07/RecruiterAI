

export function BentoFeatures() {

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
        {/* Bar Chart Section */}
        {/* Bar Chart Section */}
        {/* Bar Chart Section */}
        <div className="flex justify-between gap-4 mb-24 h-[450px] items-end">
          <div className="flex-1 min-w-[120px] flex flex-col items-center justify-end h-full group">
            <div className="mb-4 text-center">
              <span className="block text-3xl font-bold text-slate-900">10x</span>
              <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Faster Screening</span>
            </div>
            <div className="w-full transition-all duration-700 ease-out group-hover:h-[200px] shadow-lg shadow-blue-500/20"
              style={{ height: '180px', backgroundColor: '#3B82F6', borderTopLeftRadius: '24px', borderTopRightRadius: '24px' }}></div>
          </div>
          <div className="flex-1 min-w-[120px] flex flex-col items-center justify-end h-full group">
            <div className="mb-4 text-center">
              <span className="block text-3xl font-bold text-slate-900">70%</span>
              <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Time-to-Hire</span>
            </div>
            <div className="w-full transition-all duration-700 ease-out group-hover:h-[240px] shadow-lg shadow-indigo-400/20"
              style={{ height: '220px', backgroundColor: '#818CF8', borderTopLeftRadius: '24px', borderTopRightRadius: '24px' }}></div>
          </div>
          <div className="flex-1 min-w-[120px] flex flex-col items-center justify-end h-full group">
            <div className="mb-4 text-center">
              <span className="block text-3xl font-bold text-slate-900">25x</span>
              <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Interview Cap</span>
            </div>
            <div className="w-full transition-all duration-700 ease-out group-hover:h-[300px] shadow-lg shadow-sky-300/20"
              style={{ height: '280px', backgroundColor: '#7DD3FC', borderTopLeftRadius: '24px', borderTopRightRadius: '24px' }}></div>
          </div>
          <div className="flex-1 min-w-[120px] flex flex-col items-center justify-end h-full group">
            <div className="mb-4 text-center">
              <span className="block text-3xl font-bold text-slate-900">95%</span>
              <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Completion</span>
            </div>
            <div className="w-full transition-all duration-700 ease-out group-hover:h-[330px] shadow-lg"
              style={{ height: '310px', backgroundColor: '#CBD5E1', borderTopLeftRadius: '24px', borderTopRightRadius: '24px' }}></div>
          </div>
          <div className="flex-1 min-w-[120px] flex flex-col items-center justify-end h-full group">
            <div className="mb-4 text-center">
              <span className="block text-3xl font-bold text-slate-900">89%</span>
              <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Qualified Apps</span>
            </div>
            <div className="w-full transition-all duration-700 ease-out group-hover:h-[270px] shadow-lg shadow-teal-400/20"
              style={{ height: '250px', backgroundColor: '#2DD4BF', borderTopLeftRadius: '24px', borderTopRightRadius: '24px' }}></div>
          </div>
          <div className="flex-1 min-w-[120px] flex flex-col items-center justify-end h-full group">
            <div className="mb-4 text-center">
              <span className="block text-3xl font-bold text-slate-900">80%</span>
              <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Cost Savings</span>
            </div>
            <div className="w-full transition-all duration-700 ease-out group-hover:h-[230px] shadow-lg"
              style={{ height: '210px', backgroundColor: '#1E293B', borderTopLeftRadius: '24px', borderTopRightRadius: '24px' }}></div>
          </div>
          <div className="flex-1 min-w-[120px] flex flex-col items-center justify-end h-full group">
            <div className="mb-4 text-center">
              <span className="block text-3xl font-bold text-slate-900">50%</span>
              <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Fewer Bad Hires</span>
            </div>
            <div className="w-full transition-all duration-700 ease-out group-hover:h-[260px] shadow-lg shadow-purple-500/20"
              style={{ height: '240px', backgroundColor: '#A855F7', borderTopLeftRadius: '24px', borderTopRightRadius: '24px' }}></div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/60 backdrop-blur-md border border-blue-100 p-6 rounded-2xl hover:border-blue-400 transition-colors">
            <h4 className="font-bold text-slate-900 mb-2">Fast resume processing</h4>
            <p className="text-sm text-slate-600 leading-relaxed">AI parses and ranks 250+ applications per day vs 25 manually.</p>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-indigo-100 p-6 rounded-2xl hover:border-indigo-400 transition-colors">
            <h4 className="font-bold text-slate-900 mb-2">Quick time-to-hire</h4>
            <p className="text-sm text-slate-600 leading-relaxed">Average hiring timeline drops from 42 days to just 12 days.</p>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-sky-100 p-6 rounded-2xl hover:border-sky-400 transition-colors">
            <h4 className="font-bold text-slate-900 mb-2">Massive capacity increase</h4>
            <p className="text-sm text-slate-600 leading-relaxed">AI conducts 200+ automated screening interviews daily.</p>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-slate-200 p-6 rounded-2xl hover:border-slate-400 transition-colors">
            <h4 className="font-bold text-slate-900 mb-2">Less drop-off</h4>
            <p className="text-sm text-slate-600 leading-relaxed">Smart application forms reduce candidate drop-off dramatically.</p>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-teal-100 p-6 rounded-2xl hover:border-teal-400 transition-colors">
            <h4 className="font-bold text-slate-900 mb-2">Better applicants</h4>
            <p className="text-sm text-slate-600 leading-relaxed">Optimizer attracts higher-quality candidate pipelines instantly.</p>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-slate-900/10 p-6 rounded-2xl hover:border-slate-900 transition-colors">
            <h4 className="font-bold text-slate-900 mb-2">Lower expenses</h4>
            <p className="text-sm text-slate-600 leading-relaxed">80% lower costs vs traditional recruiting agencies and software.</p>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-purple-100 p-6 rounded-2xl hover:border-purple-400 transition-colors">
            <h4 className="font-bold text-slate-900 mb-2">Fewer mistakes</h4>
            <p className="text-sm text-slate-600 leading-relaxed">Skills matching improves hiring accuracy dramatically.</p>
          </div>
          <div className="bg-[#3B82F6] p-6 rounded-2xl flex flex-col justify-center items-center text-center text-white shadow-xl shadow-blue-500/30">
            <h4 className="font-bold mb-2">Ready to scale?</h4>
            <button className="bg-white text-[#3B82F6] px-6 py-2 rounded-full font-semibold text-sm hover:bg-slate-100 transition-colors">
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
