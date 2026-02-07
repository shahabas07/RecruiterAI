import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How does AI screening work?',
    answer: 'Our AI uses natural language processing to analyze resumes, cover letters, and applications. It extracts key information like skills, experience, education, and career progression. Then it matches these against your job requirements using a proprietary scoring algorithm. You can customize weights for different criteria, and the AI learns from your hiring decisions over time to improve accuracy.'
  },
  {
    question: 'Does RecruiterAI integrate with our existing ATS?',
    answer: 'Yes! RecruiterAI integrates seamlessly with popular ATS platforms including Greenhouse, Lever, Workday, BambooHR, and 20+ others. We also offer a robust API for custom integrations. Most integrations can be set up in under 15 minutes without any technical expertise required.'
  },
  {
    question: "What's the pricing structure?",
    answer: 'We offer three pricing tiers: Starter ($299/month) for small teams hiring 1-5 people per month, Growth ($799/month) for mid-sized companies, and Enterprise (custom pricing) for large organizations. All plans include a 14-day free trial with no credit card required. Contact our sales team for volume discounts.'
  },
  {
    question: 'How long does setup take?',
    answer: 'Most companies are fully up and running within 24 hours. The basic setup (creating an account, importing job descriptions, connecting your calendar) takes about 15 minutes. Our onboarding team will guide you through advanced features like custom screening questions, interview workflows, and team collaboration tools.'
  },
  {
    question: 'Is candidate data secure?',
    answer: 'Absolutely. We are SOC 2 Type II certified with end-to-end encryption for all data in transit and at rest. We are fully GDPR and CCPA compliant. Your candidate data is never shared with third parties, never used to train AI models outside your account, and you maintain complete control with the ability to export or delete data at any time.'
  }
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className={`transition-colors ${isOpen ? 'bg-[#EFF6FF]' : 'bg-white'}`}>
      <button
        onClick={onClick}
        className="cursor-pointer w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#EFF6FF]/50 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-8 text-lg">{question}</span>
        <div className="flex-shrink-0 w-8 h-8 bg-[#EFF6FF] rounded-lg flex items-center justify-center">
          {isOpen ? (
            <Minus className="w-5 h-5 text-[#3B82F6]" />
          ) : (
            <Plus className="w-5 h-5 text-[#3B82F6]" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 pt-2">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}

      {/* Divider line */}
      <div className="border-b border-[#F3F4F6]"></div>
    </div>
  );
}

export function FAQNew() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about RecruiterAI
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-gradient-to-br from-[#EFF6FF] to-[#E0F2FE] rounded-2xl border border-[#3B82F6]/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-6 text-lg">Our team is here to help you get started</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="cursor-pointer bg-[#3B82F6] text-white px-8 py-3 rounded-xl hover:bg-[#2563EB] transition-colors font-semibold shadow-lg text-base">
              Contact Support
            </button>
            <button className="cursor-pointer bg-white text-gray-900 px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors border-2 border-gray-200 font-semibold text-base">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}