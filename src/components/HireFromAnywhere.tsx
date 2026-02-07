import {
  Linkedin,
  Search,
  Info,
  Hand,
  Zap,
  Sparkles,
  GraduationCap,
  DoorOpen,
  Ghost,
  Scissors
} from 'lucide-react';

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

export function HireFromAnywhere() {
  const platforms = [
    { name: 'LinkedIn', logo: 'https://logo.clearbit.com/linkedin.com' },
    { name: 'Naukri.com', logo: 'https://logo.clearbit.com/naukri.com' },
    { name: 'Indeed', logo: 'https://logo.clearbit.com/indeed.com' },
    { name: 'AngelList', logo: 'https://logo.clearbit.com/angellist.com' },
    { name: 'Instahyre', logo: 'https://logo.clearbit.com/instahyre.com' },
    { name: 'Wellfound', logo: 'https://logo.clearbit.com/wellfound.com' },
    { name: 'IIMJobs', logo: 'https://logo.clearbit.com/iimjobs.com' },
    { name: 'Glassdoor', logo: 'https://logo.clearbit.com/glassdoor.com' },
    { name: 'Monster India', logo: 'https://logo.clearbit.com/monsterindia.com' },
    { name: 'Cutshort', logo: 'https://logo.clearbit.com/cutshort.io' }
  ];

  // Duplicate the array for seamless infinite scroll (3x for safety)
  const duplicatedPlatforms = [...platforms, ...platforms, ...platforms];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="w-full mx-auto px-[8%]">
        <div className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Post Once, Reach Everywhere
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            RecruiterAI automatically syncs your job postings across all major platforms
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          <div className="overflow-hidden py-8">
            <div className="flex gap-12 animate-scroll w-max">
              {duplicatedPlatforms.map((platform, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 h-20 bg-white rounded-xl border border-gray-200 flex items-center justify-center hover:border-[#3B82F6] hover:shadow-lg transition-all group"
                >
                  <div className="flex flex-col items-center justify-center gap-2">
                    {(() => {
                      const Icon = platformIcons[platform.name] || Search;
                      return <Icon className="w-8 h-8 text-gray-400 group-hover:text-[#3B82F6] transition-colors duration-300" />;
                    })()}
                    <span className="text-xs font-semibold text-gray-500 group-hover:text-gray-800 transition-colors duration-300">{platform.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Plus{' '}
            <span className="font-semibold text-[#3B82F6]">15+ more platforms</span>
            {' '}including Wellfound, Instahyre, IIMJobs, Cutshort, and regional job boards
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
