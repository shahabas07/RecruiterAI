import { Star } from 'lucide-react';

type Size = 'half' | 'third' | 'two-thirds';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  companyLogo: string;
  rating: number;
  size: Size;
}

const testimonials: Testimonial[] = [
  // Row 1: Two cards (Half width each)
  {
    quote: "We went from 6 weeks to hire a developer to just 10 days. RecruiterAI handled everything from screening to scheduling.",
    name: "Rahul Mehta",
    role: "Founder",
    company: "TechStart Solutions",
    companyLogo: "🚀",
    rating: 5,
    size: 'half'
  },
  {
    quote: "The AI screening is incredibly accurate. We used to spend 20 hours per week reviewing resumes. Now it takes 2 hours.",
    name: "Jennifer Walsh",
    role: "VP of People",
    company: "GrowthLabs Inc",
    companyLogo: "📈",
    rating: 5,
    size: 'half'
  },
  // Row 2: Three cards (Third width each)
  {
    quote: "As a non-technical founder, hiring engineers was my biggest nightmare. RecruiterAI's AI interviews assess technical skills better than I ever could.",
    name: "Arjun Patel",
    role: "CEO",
    company: "InnovateLabs",
    companyLogo: "💡",
    rating: 5,
    size: 'third'
  },
  {
    quote: "The interview scheduling automation alone saves us 15 hours a week. Candidates love the seamless experience.",
    name: "Maria Rodriguez",
    role: "HR Director",
    company: "ScaleUp Tech",
    companyLogo: "⚡",
    rating: 5,
    size: 'third'
  },
  {
    quote: "RecruiterAI's analytics helped us identify bottlenecks. We've cut our time-to-hire by 60%.",
    name: "David Kim",
    role: "Chief People Officer",
    company: "DataFlow Systems",
    companyLogo: "📊",
    rating: 5,
    size: 'third'
  },
  // Row 3: Two cards (Third + Two-Thirds)
  {
    quote: "The AI-powered candidate matching is phenomenal. We're seeing much better quality matches and our new hires are staying longer.",
    name: "Sophie Chen",
    role: "Talent Lead",
    company: "CloudWorks Inc",
    companyLogo: "☁️",
    rating: 5,
    size: 'third'
  },
  {
    quote: "We scaled our team from 10 to 50 in just 3 months without adding any HR headcount. The automated workflows are a game changer.",
    name: "Michael Chang",
    role: "CTO",
    company: "FutureScale",
    companyLogo: "🌟",
    rating: 5,
    size: 'two-thirds'
  }
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const sizeClasses = {
    'half': 'md:col-span-3',
    'third': 'md:col-span-2',
    'two-thirds': 'md:col-span-4'
  };

  return (
    <div className={`bg-white rounded-2xl p-6 border border-[#F3F4F6] hover:border-[#A5D8FF]/40 hover:shadow-lg transition-all ${sizeClasses[testimonial.size]} relative group`}>
      {/* Company Logo Badge - Top Right */}
      <div className="absolute top-4 right-4 w-10 h-10 bg-[#F9FAFB] rounded-lg flex items-center justify-center text-xl border border-[#F3F4F6] group-hover:scale-110 transition-transform">
        {testimonial.companyLogo}
      </div>

      {/* Rating Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-[#3B82F6] text-[#3B82F6]" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[14px] text-gray-700 leading-[1.6] mb-6">
        "{testimonial.quote}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-[#F3F4F6]">
        <div className="w-10 h-10 bg-gradient-to-br from-[#A5D8FF] to-[#B197FC] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {testimonial.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-gray-900 text-[13px] truncate">{testimonial.name}</div>
          <div className="text-[12px] text-gray-600 truncate">{testimonial.role}</div>
          <div className="text-[11px] text-gray-500 truncate">{testimonial.company}</div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsNew() {
  return (
    <section id="testimonials" className="py-20 bg-[#F3F4F6]">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">

          <h2 className="font-display text-[48px] leading-tight font-bold text-gray-900 mb-4">
            Loved By Hiring Teams
          </h2>
          <p className="text-[15px] text-gray-600 max-w-2xl mx-auto">
            See how companies are transforming their recruitment process
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Trust Section */}

      </div>
    </section>
  );
}
