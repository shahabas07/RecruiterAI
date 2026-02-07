import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  FileText, Brain, Mail, Calendar, Clock,
  Video, BarChart3, UserCheck, Send, Heart,
  Database, Zap, Users, RefreshCcw, ChevronDown,
  type LucideIcon,
} from 'lucide-react';

/* ─── Animation Variants ─── */

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const expandContent = {
  initial: { height: 0, opacity: 0 },
  animate: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
      opacity: { duration: 0.4, delay: 0.15 },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      opacity: { duration: 0.2 },
      height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 },
    },
  },
};

/* ═══════════════════════════════════════════
   Shared UI Primitives
   ═══════════════════════════════════════════ */

function FlowNode({
  icon: Icon,
  label,
  sublabel,
}: {
  icon: LucideIcon;
  label: string;
  sublabel?: string;
}) {
  return (
    <motion.div variants={fadeUp} className="z-10 flex justify-center w-full">
      <div
        className="bg-black text-white px-4 py-3 rounded-xl inline-flex items-center gap-3 border border-white/10 shadow-xl max-w-full"
        style={{ backgroundColor: '#000000' }}
      >
        <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400 shrink-0">
          <Icon className="w-4 h-4 md:w-5 md:h-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-mono font-bold text-xs md:text-sm tracking-wide text-white whitespace-normal">
            {label}
          </div>
          {sublabel && (
            <div className="font-mono text-[10px] text-slate-400 mt-0.5 whitespace-normal">
              {sublabel}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Diamond({ label }: { label: string }) {
  return (
    <motion.div variants={fadeUp} className="flex justify-center py-2 relative z-10 my-2">
      {/* Container with fixed dimensions */}
      <div
        className="relative flex items-center justify-center shrink-0"
        style={{ width: '140px', height: '140px' }}
      >
        {/* Rotated background */}
        <div
          className="absolute inset-0 border-2 border-purple-500/30 bg-black shadow-[0_0_20px_rgba(168,85,247,0.2)]"
          style={{
            backgroundColor: '#000000',
            transform: 'rotate(45deg)',
            width: '100%',
            height: '100%'
          }}
        />

        {/* Content overlay (not rotated) - centered via Flexbox on parent */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center p-2 w-full h-full">
          <span className="block text-[8px] font-mono font-bold text-purple-400 tracking-[0.2em] mb-1 uppercase">
            Decision
          </span>
          <p className="text-white font-mono font-bold text-sm leading-tight px-1">
            {label}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function VLine({ h = 24, className }: { h?: number; className?: string }) {
  return (
    <motion.div variants={fadeUp} className={`flex justify-center shrink-0 w-full ${className}`}>
      <div className="workflow-line" style={{ height: h }}></div>
    </motion.div>
  );
}

function Tag({ label, ok }: { label: string; ok: boolean | null }) {
  const style =
    ok === true
      ? { backgroundColor: '#ecfdf5', color: '#059669', borderColor: 'transparent' } // emerald
      : ok === false
        ? { backgroundColor: '#fff1f2', color: '#be123c', borderColor: 'transparent' } // rose
        : { backgroundColor: '#fffbeb', color: '#b45309', borderColor: 'transparent' }; // amber

  return (
    <motion.span
      variants={fadeUp}
      className="px-3 py-1 rounded-full text-[10px] font-bold font-mono tracking-widest uppercase mb-1 inline-block shadow-sm"
      style={style}
    >
      {label}
    </motion.span>
  );
}

/* ═══════════════════════════════════════════
   Flowchart 1 — Automated Screening
   ═══════════════════════════════════════════ */

function Flow1() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center w-full"
    >
      <FlowNode icon={FileText} label="New Application" sublabel="Submitted by candidate" />
      <VLine h={32} />
      <FlowNode icon={Brain} label="AI Resume Screening" sublabel="RANKS TOP 20%" />
      <VLine h={32} />
      <FlowNode icon={Mail} label="Auto-send Questions" sublabel="Screening via email" />
      <VLine h={40} />

      <div className="relative">
        <Diamond label="Score ≥ 75%?" />
      </div>

      <div className="w-full flex justify-center mt-0">
        <div className="grid grid-cols-2 gap-8 md:gap-16 pt-2">
          {/* YES Branch */}
          <motion.div variants={stagger} className="flex flex-col items-center">
            <Tag label="YES" ok={true} />
            <VLine h={24} />
            <div className="flex flex-col gap-3 items-center">
              <FlowNode icon={Calendar} label="Auto-schedule" sublabel="Calendar link sent" />
              <VLine h={16} />
              <FlowNode icon={Clock} label="Send Reminder" sublabel="24hrs before" />
            </div>
          </motion.div>

          {/* NO Branch */}
          <motion.div variants={stagger} className="flex flex-col items-center">
            <Tag label="NO" ok={false} />
            <VLine h={24} />
            <FlowNode icon={Heart} label="Thank You Email" sublabel="Keep in talent pool" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   Flowchart 2 — Multi-Stage Interview
   ═══════════════════════════════════════════ */

const Flow2 = () => (
  <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center w-full">
    <FlowNode icon={UserCheck} label="Candidate Accepts" sublabel="Interview invite" />
    <VLine h={32} />
    <FlowNode icon={Video} label="AI Video Interview" sublabel="10 questions / 5 min" />
    <VLine h={32} />
    <FlowNode icon={BarChart3} label="AI Scores Responses" sublabel="Custom rubric" />
    <VLine h={40} />
    <Diamond label="Score ≥ 80%?" />

    <div className="w-full flex justify-center mt-0">
      <div className="grid grid-cols-2 gap-6 md:gap-16 pt-2">
        {/* YES */}
        <motion.div variants={stagger} className="flex flex-col items-center">
          <Tag label="YES" ok={true} />
          <VLine h={24} />
          <div className="flex flex-col gap-3 items-center">
            <FlowNode icon={Calendar} label="Schedule Round 2" sublabel="Hiring manager" />
            <VLine h={16} />
            <FlowNode icon={Users} label="Manager Interview" sublabel="Final evaluation" />
          </div>
          <VLine h={24} />
          <Diamond label="Hire?" />
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="flex flex-col items-center">
              <Tag label="YES" ok={true} />
              <VLine h={16} />
              <FlowNode icon={Send} label="Send Offer" sublabel="+ Welcome kit" />
            </div>
            <div className="flex flex-col items-center">
              <Tag label="NO" ok={false} />
              <VLine h={16} />
              <FlowNode icon={Mail} label="Rejection" sublabel="+ Future note" />
            </div>
          </div>
        </motion.div>

        {/* NO */}
        <motion.div variants={stagger} className="flex flex-col items-center">
          <Tag label="NO" ok={false} />
          <VLine h={24} />
          <FlowNode icon={Send} label="Auto-reject Email" sublabel="With feedback" />
        </motion.div>
      </div>
    </div>
  </motion.div>
);

/* ═══════════════════════════════════════════
   Flowchart 3 — Talent Re-engagement
   ═══════════════════════════════════════════ */

const Flow3 = () => (
  <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center w-full">
    <FlowNode icon={FileText} label="Candidate Rejected" sublabel="Score: 60-74%" />
    <VLine h={32} />
    <FlowNode icon={Database} label="Add to Future Talent" sublabel="Long-term nurturing" />
    <VLine h={32} />
    <FlowNode icon={Clock} label="Wait 3 Months" sublabel="Automated patience" />
    <VLine h={40} />
    <Diamond label="New position?" />

    <div className="w-full flex justify-center mt-0">
      <div className="grid grid-cols-2 gap-8 md:gap-16 pt-2">
        <motion.div variants={stagger} className="flex flex-col items-center">
          <Tag label="YES" ok={true} />
          <VLine h={24} />
          <FlowNode icon={Send} label="Re-engage Email" sublabel="AI personalized" />
          <VLine h={24} />
          <Diamond label="Interested?" />
          <div className="grid grid-cols-2 gap-3 mt-2">
            <div className="flex flex-col items-center">
              <Tag label="YES" ok={true} />
              <VLine h={16} />
              <FlowNode icon={Zap} label="Fast-track" sublabel="Skip screening" />
            </div>
            <div className="flex flex-col items-center">
              <Tag label="NO" ok={null} />
              <VLine h={16} />
              <FlowNode icon={RefreshCcw} label="Keep in Pool" sublabel="Retry next Q" />
            </div>
          </div>
        </motion.div>

        <motion.div variants={stagger} className="flex flex-col items-center">
          <Tag label="NO" ok={null} />
          <VLine h={24} />
          <FlowNode icon={Calendar} label="Check Next Quarter" sublabel="Auto-sync" />
        </motion.div>
      </div>
    </div>
  </motion.div>
);

/* ═══════════════════════════════════════════
   Main Component
   ═══════════════════════════════════════════ */

const FLOWS = [
  {
    id: 0,
    title: 'Automated Screening Pipeline',
    desc: 'Process 250+ applications in minutes with AI-powered ranking',
    benefit: 'Screen 250+ apps in minutes vs. 8 hours manually',
    icon: Brain,
    Component: Flow1,
  },
  {
    id: 1,
    title: 'Multi-Stage Interview Automation',
    desc: 'Reduce time-to-hire from 42 days to 12 days',
    benefit: 'Reduce time-to-hire from 42 days to 12 days',
    icon: Video,
    Component: Flow2,
  },
  {
    id: 2,
    title: 'Talent Pool Re-engagement',
    desc: 'Never start from zero — automatically nurture qualified candidates',
    benefit: 'Build a qualified talent pipeline automatically',
    icon: RefreshCcw,
    Component: Flow3,
  },
];

export function HowItWorksFull() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section className="py-16 md:py-24 bg-background text-foreground" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >

          <h1 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            AI Recruiting Software That Works Like Your Own HR Team
          </h1>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
            Build custom hiring workflows in minutes. No coding required.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {FLOWS.map((flow, index) => {
            const isActive = activeId === flow.id;
            const FlowComponent = flow.Component;

            return (
              <motion.div
                key={flow.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden relative ${isActive ? 'shadow-xl' : 'shadow-sm hover:shadow-md'
                  }`}
                style={{
                  borderColor: isActive ? '#e2e8f0' : '#e5e7eb',
                }}
              >
                {/* Header */}
                <button
                  onClick={() => setActiveId(isActive ? null : flow.id)}
                  className="w-full p-6 flex items-center gap-4 text-left group cursor-pointer bg-white relative z-20 outline-none"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300"
                    style={{ backgroundColor: isActive ? '#eff6ff' : '#f8fafc' }}
                  >
                    <flow.icon
                      className="w-6 h-6 transition-colors duration-300"
                      style={{ color: isActive ? '#3b82f6' : '#64748b' }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                      {flow.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 hidden sm:block">
                      {flow.desc}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-slate-400"
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </button>

                {/* Content */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key={`content-${flow.id}`}
                      variants={expandContent}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="overflow-hidden relative z-10"
                    >
                      {/* Grid Pattern Background */}
                      <div className="grid-pattern absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none"></div>

                      <div className="px-4 md:px-8 pb-8 pt-4 relative z-10">
                        {/* Scrollable Container */}
                        <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-none">
                          <div className="flex justify-center min-w-[320px] md:min-w-0">
                            <FlowComponent />
                          </div>
                        </div>

                        {/* Benefit Pill */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.4 }}
                          className="mt-8 flex justify-center"
                        >
                          <div className="bg-blue-50 border border-blue-100 rounded-full px-6 py-2 flex items-center gap-3 shadow-sm">
                            <Zap className="w-4 h-4 text-blue-600 shrink-0" />
                            <span className="font-mono text-xs md:text-sm text-blue-700 font-medium">
                              {flow.benefit}
                            </span>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .grid-pattern {
            background-image: radial-gradient(#e2e8f0 1px, transparent 1px);
            background-size: 24px 24px;
        }
        .workflow-line {
            background-image: linear-gradient(to bottom, #cbd5e1 50%, transparent 50%);
            background-size: 2px 8px;
            width: 2px;
        }
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export default HowItWorksFull;