// import { CheckCircle2, ArrowRight } from "lucide-react";
// import TextType from "@/app/ReactBits/TextType";

// const tiers = [
//   {
//     name: "Starter",
//     price: "$399",
//     period: "/month",
//     description: "For small teams getting started with AI-powered operations.",
//     features: [
//       "AI CRM for up to 5 users",
//       "500 automation runs / month",
//       "3 dashboards",
//       "Client portal (1 workspace)",
//       "Email support",
//       "Standard integrations",
//     ],
//     cta: "Get Started",
//     ctaStyle:
//       "bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50",
//     popular: false,
//   },
//   {
//     name: "Growth",
//     price: "$999",
//     period: "/month",
//     description: "For scaling teams that need the full DigiWire platform.",
//     features: [
//       "Full platform for up to 25 users",
//       "Unlimited automation runs",
//       "Unlimited dashboards",
//       "Client portals (5 workspaces)",
//       "Priority support + onboarding",
//       "All integrations + API access",
//       "Custom AI assistant",
//     ],
//     cta: "Start Free Trial",
//     ctaStyle:
//       "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20",
//     popular: true,
//   },
//   {
//     name: "Enterprise",
//     price: "Custom",
//     period: "",
//     description:
//       "For large organizations with complex workflows and compliance needs.",
//     features: [
//       "Unlimited users & workspaces",
//       "Dedicated infrastructure",
//       "Custom AI model fine-tuning",
//       "SSO / SAML integration",
//       "SLA 99.9% uptime guarantee",
//       "Dedicated success manager",
//       "Custom development retainer",
//     ],
//     cta: "Book a Call",
//     ctaStyle:
//       "bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50",
//     popular: false,
//   },
// ];

// export default function PricingSection() {
//   return (
//     <section id="pricing" className="py-24 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 mb-4 shadow-sm">
//             Pricing
//           </div>
//           <TextType
//             as="h2"
//             text="Simple, transparent pricing"
//             className="text-4xl font-semibold text-slate-900 tracking-tight"
//             typingSpeed={75}
//             pauseDuration={1500}
//             showCursor
//             cursorCharacter="_"
//             deletingSpeed={50}
//             cursorBlinkDuration={0.5}
//           />
//           <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
//             Start with what you need. Scale as you grow. All plans include
//             onboarding support and a 14-day free trial.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-3 gap-6 items-start">
//           {tiers.map((tier) => (
//             <div
//               key={tier.name}
//               className={`relative rounded-2xl border overflow-hidden transition-all duration-300 ${
//                 tier.popular
//                   ? "bg-white border-slate-900 shadow-2xl shadow-slate-900/10 md:scale-[1.02]"
//                   : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50"
//               }`}
//             >
//               {tier.popular && (
//                 <div className="bg-slate-900 text-white text-xs font-semibold text-center py-2 tracking-wide">
//                   MOST POPULAR
//                 </div>
//               )}

//               <div className="p-7">
//                 {/* Tier header */}
//                 <div className="mb-6">
//                   <div className="text-sm font-semibold text-slate-900 mb-1">
//                     {tier.name}
//                   </div>
//                   <div className="flex items-baseline gap-1 mb-2">
//                     <span className="text-4xl font-bold text-slate-900 tracking-tight">
//                       {tier.price}
//                     </span>
//                     {tier.period && (
//                       <span className="text-sm text-slate-600">{tier.period}</span>
//                     )}
//                   </div>
//                   <p className="text-sm text-slate-600">{tier.description}</p>
//                 </div>

//                 {/* CTA */}
//                 <a
//                   href="#contact"
//                   className={`flex w-full items-center justify-center gap-2 px-5 py-3 text-sm font-medium rounded-xl transition-all mb-7 ${tier.ctaStyle}`}
//                 >
//                   {tier.cta}
//                   <ArrowRight className="w-4 h-4" />
//                 </a>

//                 {/* Features */}
//                 <ul className="space-y-3">
//                   {tier.features.map((f) => (
//                     <li key={f} className="flex items-start gap-2.5">
//                       <CheckCircle2
//                         className={`w-4 h-4 mt-0.5 shrink-0 ${
//                           tier.popular ? "text-cyan-500" : "text-slate-400"
//                         }`}
//                         strokeWidth={2}
//                       />
//                       <span className="text-sm text-slate-600">{f}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footnote */}
//         <p className="text-center text-sm text-slate-500 mt-10">
//           All plans include 14-day free trial · No credit card required ·
//           Cancel anytime
//         </p>
//       </div>
//     </section>
//   );
// }
