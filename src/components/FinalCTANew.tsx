import { ArrowRight, Check } from 'lucide-react';

export function FinalCTANew() {
  return (
    <section className="py-16 md:py-20 bg-[#3B82F6] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="w-full mx-auto px-[8%] text-center relative z-10">


        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Ready to Hire Better, Faster?
        </h2>

        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join 500+ companies hiring smarter with AI.
          <br />
          Transform your recruitment process today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="cursor-pointer group text-white px-8 py-4 rounded-xl bg-black hover:bg-black/50 transition-all flex items-center gap-2 text-base font-bold border-[3px] border-white backdrop-blur-sm">
            Start Free Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="cursor-pointer text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-colors border-2 border-white/60 text-base font-bold backdrop-blur-sm">
            Schedule Demo
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 mb-8">
          <div className="flex items-center gap-2 text-blue-100">
            <Check className="w-5 h-5 text-white" />
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center gap-2 text-blue-100">
            <Check className="w-5 h-5 text-white" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2 text-blue-100">
            <Check className="w-5 h-5 text-white" />
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2 text-blue-100">
            <Check className="w-5 h-5 text-white" />
            <span>Setup in minutes</span>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">500K+</div>
              <div className="text-blue-100 text-sm">
                Successful Hires
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-blue-100 text-sm">
                Happy Companies
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-blue-100 text-sm">
                Satisfaction Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">
                12 Days
              </div>
              <div className="text-blue-100 text-sm">
                Avg. Time-to-Hire
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
