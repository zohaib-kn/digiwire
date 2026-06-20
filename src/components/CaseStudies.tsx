// "use client";

// import { ArrowRight } from "lucide-react";
// import { useEffect, useRef, useState } from "react";
// import TextType from "@/app/ReactBits/TextType";

// const outcomes = [
//   {
//     metric: "45",
//     metricLabel: "faster lead response",
//     company: "Apex Financial Services",
//     industry: "Finance",
//     result:
//       "Implemented DigiWire's AI CRM to replace spreadsheet-based tracking. Automated lead routing cut average first-response time from 4.2 hours to under 2.3 hours, directly improving conversion rates.",
//     stats: [
//       { label: "Response Time", before: "4.2h", after: "2.3h" },
//       { label: "Lead Conv. Rate", before: "12%", after: "19%" },
//     ],
//     accentColor: "#06b6d4",
//     accentBg: "bg-cyan-50 border-cyan-200",
//     tag: "CRM Platform",
//     icon: "🚀",
//   },
//   {
//     metric: "60",
//     metricLabel: "less manual work",
//     company: "Optima Logistics",
//     industry: "Logistics",
//     result:
//       "Deployed the Workflow Automation Suite to eliminate manual data entry across order intake, dispatch, and invoicing — freeing up 28 staff hours per week across 3 departments.",
//     stats: [
//       { label: "Hours Saved/Week", before: "0", after: "28" },
//       { label: "Error Rate", before: "8%", after: "0.4%" },
//     ],
//     accentColor: "#8b5cf6",
//     accentBg: "bg-violet-50 border-violet-200",
//     tag: "Automation Suite",
//     icon: "⚡",
//   },
//   {
//     metric: "70",
//     metricLabel: "faster reporting",
//     company: "Nova Healthcare",
//     industry: "Healthcare",
//     result:
//       "Replaced weekly Excel exports with real-time analytics dashboards. Leadership now has live KPI visibility across all 6 clinic locations, reducing reporting prep from 2 days to under 4 hours.",
//     stats: [
//       { label: "Reporting Time", before: "2 days", after: "4 hours" },
//       { label: "Clinics Live", before: "1", after: "6" },
//     ],
//     accentColor: "#10b981",
//     accentBg: "bg-emerald-50 border-emerald-200",
//     tag: "Analytics Dashboard",
//     icon: "📊",
//   },
// ];

// // CountUp Animation Component
// const CountUp = ({ 
//   target, 
//   duration = 2000, 
//   suffix = "%",
//   accentColor 
// }: { 
//   target: number; 
//   duration?: number; 
//   suffix?: string;
//   accentColor: string;
// }) => {
//   const [count, setCount] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const elementRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (elementRef.current) {
//       observer.observe(elementRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (!isVisible) return;

//     let startTime: number;
//     let animationFrame: number;

//     const animate = (timestamp: number) => {
//       if (!startTime) startTime = timestamp;
//       const progress = Math.min((timestamp - startTime) / duration, 1);
      
//       // Easing function for smooth animation
//       const easeOutQuart = 1 - Math.pow(1 - progress, 4);
//       const currentCount = Math.round(easeOutQuart * target);
      
//       setCount(currentCount);

//       if (progress < 1) {
//         animationFrame = requestAnimationFrame(animate);
//       }
//     };

//     animationFrame = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(animationFrame);
//   }, [isVisible, target, duration]);

//   return (
//     <div ref={elementRef} className="flex items-baseline">
//       <span className="text-5xl font-bold tabular-nums tracking-tight leading-none" style={{ color: accentColor }}>
//         {count}
//       </span>
//       <span className="text-3xl font-bold ml-0.5" style={{ color: accentColor }}>
//         {suffix}
//       </span>
//     </div>
//   );
// };

// export default function CaseStudies() {
//   return (
//     <section className="py-24 bg-gradient-to-b from-white to-slate-50/80">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-cyan-50 to-violet-50 border border-slate-200 rounded-full text-xs font-semibold text-slate-600 mb-4 shadow-sm">
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
//             </span>
//             Real Outcomes
//           </div>
//           <TextType
//             as="h2"
//             text={["Real results for real businesses"]}
//             className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4"
//             typingSpeed={75}
//             pauseDuration={1500}
//             showCursor
//             cursorCharacter="_"
//             deletingSpeed={50}
//             cursorBlinkDuration={0.5}
//           />
//           <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
//             Our clients don&apos;t just get software — they get measurable business
//             outcomes from day one.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid lg:grid-cols-3 gap-8">
//           {outcomes.map((o) => (
//             <div
//               key={o.company}
//               className="group relative flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-slate-200/60 hover:border-transparent transition-all duration-500 hover:-translate-y-2"
//             >
//               {/* Gradient hover effect */}
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white via-transparent to-white" />
              
//               {/* Top accent */}
//               <div className={`relative p-6 border-b ${o.accentBg} bg-opacity-50 backdrop-blur-sm`}>
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <CountUp 
//                       target={parseInt(o.metric)} 
//                       accentColor={o.accentColor}
//                       suffix="%"
//                     />
//                     <div className="text-sm font-semibold text-slate-700 mt-2">
//                       {o.metricLabel}
//                     </div>
//                   </div>
//                   <div className="text-3xl opacity-60 group-hover:scale-110 transition-transform duration-300">
//                     {o.icon}
//                   </div>
//                 </div>
//                 <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full shadow-sm">
//                   <span
//                     className="w-1.5 h-1.5 rounded-full animate-pulse"
//                     style={{ backgroundColor: o.accentColor }}
//                   />
//                   <span className="text-[10px] font-semibold text-slate-600 uppercase tracking-wider">
//                     {o.tag}
//                   </span>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="relative flex-1 p-6 bg-white/50 backdrop-blur-sm">
//                 <div className="flex items-start justify-between gap-2 mb-4">
//                   <div>
//                     <div className="text-sm font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
//                       {o.company}
//                     </div>
//                     <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
//                       <span className="inline-block w-1 h-1 rounded-full bg-slate-300"></span>
//                       {o.industry}
//                     </div>
//                   </div>
//                   <div 
//                     className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white shrink-0 shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3"
//                     style={{ backgroundColor: o.accentColor }}
//                   >
//                     {o.company[0]}
//                   </div>
//                 </div>

//                 <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
//                   {o.result}
//                 </p>

//                 {/* Before / After stats */}
//                 <div className="space-y-3 mb-5 p-4 bg-slate-50/80 rounded-xl border border-slate-100">
//                   {o.stats.map((s) => (
//                     <div key={s.label} className="flex items-center gap-3">
//                       <div className="text-[10px] font-medium text-slate-500 w-28 shrink-0 uppercase tracking-wide">
//                         {s.label}
//                       </div>
//                       <div className="flex items-center gap-2 flex-1">
//                         <span className="text-xs text-slate-400 line-through">
//                           {s.before}
//                         </span>
//                         <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
//                         <span
//                           className="text-xs font-bold transition-all duration-300 group-hover:scale-110"
//                           style={{ color: o.accentColor }}
//                         >
//                           {s.after}
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <a
//                   href="#contact"
//                   className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-all group/link relative"
//                 >
//                   <span className="relative">
//                     Read Case Study
//                     <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-slate-900 transition-all group-hover/link:w-full"></span>
//                   </span>
//                   <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-all group-hover/link:scale-110" />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-16 text-center">
//           <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
//             <span>See all success stories</span>
//             <ArrowRight className="w-4 h-4" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }