'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  MessageSquare,
  Send,
  Calendar,
  CheckCircle2,
  Target,
  Zap,
  Cpu,
  Users,
  Check
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ── Contact Information Constants (Easy to replace later) ───────────────

const CONTACT_INFO = {
  email: "hello@digiwire.io",
  phone: "+1 (555) 019-2834",
  whatsappUrl: "https://wa.me/15550192834", // Number with country code, no + or spaces
  location: "New York City, NY",
  hours: "Monday - Friday, 9:00 AM - 6:00 PM EST",
  responseTime: "Within 12 hours"
};

const serviceOptions = [
  "SEO Optimization",
  "Social Media Marketing",
  "Web Development",
  "App Development",
  "Branding",
  "Graphic Design",
  "CRM Solutions",
  "Automation",
  "Lead Generation"
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+"
];

const benefits = [
  {
    title: "Strategic Thinking",
    description: "We don't just execute instructions. We analyze your market and build solutions around your actual revenue goals.",
    Icon: Target,
  },
  {
    title: "Fast Delivery",
    description: "Our modern technology stack and pre-built operational frameworks ensure quick, seamless project turnarounds.",
    Icon: Zap,
  },
  {
    title: "Scalable Solutions",
    description: "Every dashboard, pipeline, and API we craft is designed to scale with your transaction volumes without performance drops.",
    Icon: Cpu,
  },
  {
    title: "Long-Term Partnership",
    description: "We align with you as an extension of your growth team, offering continuous performance tuning, upgrades, and support.",
    Icon: Users,
  }
];

const inputBase =
  "bg-white border border-[#E2E8F0] rounded-xl pl-11 pr-4 py-3 text-[15px] focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/15 transition-all duration-200 text-[#0F172A] w-full";

export default function ContactPage() {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    description: '',
    inquiryType: 'inquiry' // 'inquiry' | 'demo'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // References to scroll targets
  const formRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Sync service selection
  const handleServiceSelect = (serviceName: string) => {
    setFormData(prev => ({ ...prev, service: serviceName }));
  };

  // Form submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Integrate EmailJS, Resend, or your custom endpoint API here.
    // Example:
    // fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    //   .then(...)

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      service: '',
      budget: '',
      description: '',
      inquiryType: 'inquiry'
    });
    setIsSuccess(false);
  };

  // Scroll and actions
  const scrollToForm = (type: 'inquiry' | 'demo') => {
    setFormData(prev => ({ ...prev, inquiryType: type }));
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      nameInputRef.current?.focus();
    }, 600);
  };

  return (
    <main className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden">
      {/* Soft background glows */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-cyan-400/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-[140px] pointer-events-none" />

      <Navbar />

      {/* ── 1. Hero Section ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-28 md:pt-32 pb-12">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-50 border border-cyan-100 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-600 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            Contact DigiWire
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.1] mb-6">
            Let&rsquo;s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Meaningful</span>.
          </h1>

          {/* Supporting text */}
          <p className="text-lg sm:text-xl text-[#475569] leading-relaxed max-w-2xl font-normal">
            Whether you&rsquo;re looking for digital marketing, software development, automation, branding, or growth solutions, we&rsquo;d love to hear about your project.
          </p>
        </div>
      </section>

      {/* ── 2. Contact Layout (Two Column) ── */}
      <section ref={formRef} className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-10 pb-20 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* LEFT COLUMN: Contact Information Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white border border-[#E2E8F0] rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Contact Info</h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0 border border-cyan-100/80">
                    <Mail className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Us</div>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-base font-semibold text-[#0F172A] hover:text-cyan-600 transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0 border border-cyan-100/80">
                    <Phone className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Call Us</div>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-base font-semibold text-[#0F172A] hover:text-cyan-600 transition-colors">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-[#E2E8F0]">
                    <Clock className="w-5 h-5 text-slate-500" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Response Time</div>
                    <p className="text-base font-semibold text-[#0F172A]">{CONTACT_INFO.responseTime}</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-[#E2E8F0]">
                    <Calendar className="w-5 h-5 text-slate-500" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Business Hours</div>
                    <p className="text-base font-semibold text-[#0F172A] leading-tight">{CONTACT_INFO.hours}</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-[#E2E8F0]">
                    <MapPin className="w-5 h-5 text-slate-500" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Headquarters</div>
                    <p className="text-base font-semibold text-[#0F172A]">{CONTACT_INFO.location}</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="my-8 border-t border-[#E2E8F0]" />

              {/* WhatsApp CTA */}
              <div>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 transition-all duration-300 shadow-md hover:shadow-emerald-500/20 hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E2E8F0] rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden min-h-[500px]">

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Inquiry / Demo Selector Tabs */}
                    <div className="flex bg-slate-100 p-1.5 rounded-xl mb-8 relative">
                      <motion.div
                        className="absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] bg-white rounded-lg shadow-sm"
                        animate={{ x: formData.inquiryType === 'inquiry' ? 0 : 'calc(100% + 6px)' }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      />
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, inquiryType: 'inquiry' }))}
                        className={`relative z-10 flex-1 text-center py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200 ${formData.inquiryType === 'inquiry' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
                      >
                        General Inquiry
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, inquiryType: 'demo' }))}
                        className={`relative z-10 flex-1 text-center py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200 ${formData.inquiryType === 'demo' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
                      >
                        Schedule a Demo
                      </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Grid for Name & Company */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="fullName" className="text-xs font-bold uppercase tracking-wider text-[#475569]">
                            Full Name *
                          </label>
                          <div className="relative">
                            <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                            <input
                              ref={nameInputRef}
                              id="fullName"
                              type="text"
                              required
                              placeholder="Zohaib Khan"
                              value={formData.fullName}
                              onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                              className={inputBase}
                            />
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="companyName" className="text-xs font-bold uppercase tracking-wider text-[#475569]">
                            Company Name
                          </label>
                          <div className="relative">
                            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1m-5 4h1m4 0h1m-5 4h1m4 0h1" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <input
                              id="companyName"
                              type="text"
                              placeholder="Acme Corp"
                              value={formData.companyName}
                              onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                              className={inputBase}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Grid for Email & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[#475569]">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                            <input
                              id="email"
                              type="email"
                              required
                              placeholder="zohaib@company.com"
                              value={formData.email}
                              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                              className={inputBase}
                            />
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-[#475569]">
                            Phone Number
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                            <input
                              id="phone"
                              type="tel"
                              placeholder="+1 (555) 000-0000"
                              value={formData.phone}
                              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                              className={inputBase}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Service Dropdown */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="service" className="text-xs font-bold uppercase tracking-wider text-[#475569]">
                          Service Interested In *
                        </label>
                        <select
                          id="service"
                          required
                          value={formData.service}
                          onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                          className="bg-white border border-[#E2E8F0] rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/15 transition-all duration-200 text-[#0F172A] appearance-none cursor-pointer"
                        >
                          <option value="" disabled>Select a service...</option>
                          {serviceOptions.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      {/* Budget Selector */}
                      <div className="flex flex-col gap-2.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-[#475569]">
                          Estimated Budget *
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {budgetRanges.map(b => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, budget: b }))}
                              className={`py-3 px-1.5 border rounded-xl text-xs font-semibold text-center transition-all duration-200 ${formData.budget === b ? 'border-cyan-500 bg-cyan-500 text-white shadow-sm' : 'border-[#E2E8F0] hover:border-slate-300 text-slate-700 bg-white'}`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Project Description */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="description" className="text-xs font-bold uppercase tracking-wider text-[#475569]">
                          Project Description *
                        </label>
                        <textarea
                          id="description"
                          required
                          rows={4}
                          placeholder="Tell us about your system goals, timeline, and current operational workflow..."
                          value={formData.description}
                          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                          className="bg-white border border-[#E2E8F0] rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/15 transition-all duration-200 text-[#0F172A] resize-none"
                        />
                      </div>

                      {/* Submit Trigger */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#0F172A] hover:bg-cyan-600 text-white font-bold py-4 transition-all duration-300 disabled:opacity-50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/15"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>{formData.inquiryType === 'demo' ? 'Schedule a Demo' : 'Send Inquiry'}</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 text-emerald-500"
                    >
                      <motion.svg
                        viewBox="0 0 24 24"
                        className="w-9 h-9"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <motion.path
                          d="M5 13l4 4L19 7"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.45, delay: 0.35, ease: 'easeOut' }}
                        />
                      </motion.svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-3">Thank you, {formData.fullName}!</h3>
                    <p className="text-base text-[#475569] max-w-md mb-8 leading-relaxed">
                      Your inquiry regarding <strong>{formData.service}</strong> has been received. Our team will review the details and respond {CONTACT_INFO.responseTime}.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-3 rounded-xl border border-slate-200 hover:border-slate-400 font-semibold text-slate-700 transition-all text-sm"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </section>

      {/* ── 3. Services Quick Select ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-10 pb-20 border-t border-[#E2E8F0]">
        <div className="max-w-3xl mb-8">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-3">Quick Select Service</h2>
          <p className="text-[15px] text-[#475569]">
            Click any service chip below to automatically select it in the contact form above.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {serviceOptions.map(service => {
            const isSelected = formData.service === service;
            return (
              <button
                key={service}
                type="button"
                onClick={() => handleServiceSelect(service)}
                className={`py-3 px-5 rounded-full text-sm font-semibold border transition-all duration-200 flex items-center gap-2 ${isSelected ? 'bg-cyan-500 border-cyan-500 text-slate-950 shadow-sm' : 'bg-white border-[#E2E8F0] hover:border-slate-400 text-slate-700'}`}
              >
                <span>{service}</span>
                {isSelected && <Check className="w-4 h-4 shrink-0" />}
              </button>
            );
          })}
        </div>
      </section>

      {/* ── 4. Why Work With DigiWire ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 border-t border-[#E2E8F0]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] mb-4">
            Why Partner With DigiWire?
          </h2>
          <p className="text-base sm:text-lg text-[#475569]">
            We deploy robust architecture, human-centric design, and deep operational insights to build high-performance business workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map(b => {
            const Icon = b.Icon;
            return (
              <div
                key={b.title}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col items-start gap-4 hover:shadow-md hover:border-cyan-200 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">{b.title}</h3>
                  <p className="text-[14px] leading-relaxed text-[#475569]">{b.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 5. Final CTA ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 border-t border-[#E2E8F0] mb-12">
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-6">
            Ready to Start?
          </h2>
          <p className="text-base sm:text-lg text-[#475569] mb-10 max-w-xl leading-relaxed">
            Choose whether to schedule a demo to see our platform capabilities or submit a general inquiry detailing your project goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToForm('demo')}
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-8 py-4 transition-all duration-300 shadow-md hover:shadow-cyan-500/20 hover:-translate-y-0.5"
            >
              Book a Demo
            </button>
            <button
              onClick={() => scrollToForm('inquiry')}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 hover:border-slate-500 text-slate-700 hover:bg-slate-50 font-semibold px-8 py-4 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}