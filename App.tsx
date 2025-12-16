import React, { useState, useEffect } from 'react';
import { 
  Monitor, 
  BarChart3, 
  Video, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X, 
  Code2, 
  LayoutDashboard, 
  PlayCircle,
  Mail,
  Github,
  Linkedin,
  Twitter,
  TrendingUp,
  DollarSign,
  Activity,
  CreditCard,
  PieChart,
  Croissant,
  Sliders,
  Table,
  ShoppingBag,
  Search,
  ExternalLink,
  Loader2,
  Send,
  ShieldCheck,
  Zap,
  Clock,
  Unlock,
  Palette,
  Phone
} from 'lucide-react';
import { ServiceCategory } from './types';

// Constants for component reuse
const SERVICES = [
  {
    id: 'web',
    title: 'Websites & Apps',
    category: ServiceCategory.WEB_APPS,
    description: 'Scalable, high-performance web solutions built with modern stacks.',
    icon: Monitor,
    features: ['E-commerce Platforms', 'SaaS Applications', 'Custom Landing Pages', 'Web Portfolios', 'Web Apps'],
    color: 'indigo'
  },
  {
    id: 'dash',
    title: 'Business Intelligence',
    category: ServiceCategory.BUSINESS_TOOLS,
    description: 'Data-driven dashboards and automation tools to streamline operations.',
    icon: BarChart3,
    features: ['CRM Systems', 'Analytics Dashboards', 'Automation Scripts', 'Reporting Tools'],
    color: 'emerald'
  },
  {
    id: 'vid',
    title: 'Video & Content',
    category: ServiceCategory.VIDEO_CONTENT,
    description: 'Engaging visual content that tells your brand story effectively.',
    icon: Video,
    features: ['Promotional Videos', 'Tutorials & Demos', 'Motion Graphics', 'Animated Videos'],
    color: 'rose'
  }
];

const PORTFOLIO = [
  {
    id: '1',
    title: 'Venture Capital Fund Performance Dashboard',
    category: 'Business Tools',
    image: '', 
    tag: 'Next.js + Financial Modeling',
    link: 'https://venturepulse-inr.vercel.app/'
  },
  {
    id: '2',
    title: 'Textile Webapp',
    category: 'Web & Apps',
    image: '', 
    tag: 'E-commerce + Stripe',
    link: 'https://shivpriyasilkmill.vercel.app/'
  },
  {
    id: '3',
    title: 'Bakery Launch Promo',
    category: 'Video',
    image: '', 
    tag: 'Motion Design'
    // link intentionally omitted
  },
  {
    id: '4',
    title: 'Kurti Times',
    category: 'Web & Apps',
    image: '/kurtitimes-homepage.png', 
    tag: 'Modern Web Platform',
    link: 'https://kurtitimes.vercel.app/'
  },
  {
    id: '5',
    title: 'Stock Analyst',
    category: 'Web & Apps',
    image: '/stockanalyst-homepage.png', 
    tag: 'Financial Analytics',
    link: 'https://stockanalyst-six.vercel.app/'
  }
];

const GUARANTEES = [
  {
    icon: Monitor,
    title: "Complete Product",
    desc: "A fully deployed, live application ready to use and share immediately."
  },
  {
    icon: Palette,
    title: "Pro UI/UX Design",
    desc: "Modern, user-friendly interfaces that look World-Class."
  },
  {
    icon: Zap,
    title: "All Core Features",
    desc: "Every feature you requested, implemented and working perfectly."
  },
  {
    icon: Unlock,
    title: "Full Ownership",
    desc: "100% source code ownership delivered to you for future development."
  },
  {
    icon: ShieldCheck,
    title: "Money Back Guarantee",
    desc: "If you don't like the result, full refund - no questions asked."
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    desc: "Your project delivered in 7 days or less. Speed without compromise."
  }
];

// --- Internal Components for Portfolio ---

const VentureCollage = () => (
  <div className="w-full h-full bg-slate-900 overflow-hidden relative font-sans group">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-950"></div>
    
    {/* Screen 1: Overview Table (Back Left) */}
    <div className="absolute top-4 -left-4 w-3/4 h-3/4 bg-slate-800 rounded-lg border border-slate-700 shadow-2xl transform -rotate-6 opacity-60 transition-transform group-hover:-rotate-12 group-hover:scale-105 duration-500">
      <div className="h-6 bg-slate-700 rounded-t-lg flex items-center gap-1.5 px-3 border-b border-slate-600">
        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
      </div>
      <div className="p-3">
        <div className="flex justify-between mb-2">
           <div className="w-16 h-2 bg-slate-600 rounded"></div>
           <div className="w-8 h-2 bg-emerald-500/50 rounded"></div>
        </div>
        {[1,2,3,4].map(i => (
          <div key={i} className="flex gap-2 mb-2">
             <div className="w-full h-4 bg-slate-700/50 rounded"></div>
          </div>
        ))}
      </div>
    </div>

    {/* Screen 2: Performance Chart (Back Right) */}
    <div className="absolute top-8 -right-8 w-3/4 h-3/4 bg-slate-800 rounded-lg border border-slate-700 shadow-2xl transform rotate-3 opacity-80 transition-transform group-hover:rotate-6 group-hover:scale-105 duration-500 z-10">
      <div className="h-6 bg-slate-700 rounded-t-lg flex items-center gap-1.5 px-3 border-b border-slate-600">
        <div className="w-2 h-2 rounded-full bg-slate-500"></div>
      </div>
      <div className="p-4 flex items-end justify-between h-[80%] gap-1">
         {[30, 50, 45, 70, 60, 90, 85].map((h, i) => (
           <div key={i} style={{height: `${h}%`}} className="w-full bg-indigo-500/40 rounded-t-sm"></div>
         ))}
      </div>
    </div>

    {/* Screen 3: Simulator (Front Center) */}
    <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[85%] h-[70%] bg-slate-900 rounded-t-xl border border-indigo-500/30 shadow-[0_-10px_40px_-15px_rgba(79,70,229,0.3)] transition-transform group-hover:translate-y-[-5%] duration-500 z-20">
      <div className="h-8 bg-slate-800 rounded-t-xl flex items-center justify-between px-4 border-b border-slate-700">
        <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1">
          <Sliders className="w-3 h-3" /> Fund Simulator
        </span>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <div className="flex justify-between text-[10px] text-slate-400 mb-1">
            <span>Fund Size</span>
            <span className="text-white">$50M</span>
          </div>
          <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
            <div className="w-[60%] h-full bg-indigo-500"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
           <div className="bg-slate-800 p-2 rounded border border-slate-700">
             <span className="text-[8px] text-slate-500 uppercase">Mgmt Fee</span>
             <p className="text-sm font-semibold text-white">2.0%</p>
           </div>
           <div className="bg-slate-800 p-2 rounded border border-slate-700">
             <span className="text-[8px] text-slate-500 uppercase">Carry</span>
             <p className="text-sm font-semibold text-white">20%</p>
           </div>
        </div>
        <div className="bg-emerald-900/20 border border-emerald-500/20 p-2 rounded flex justify-between items-center">
          <span className="text-[10px] text-emerald-400">Projected IRR</span>
          <span className="text-sm font-bold text-emerald-400">24.5%</span>
        </div>
      </div>
    </div>
  </div>
);

const TextileCollage = () => (
  <div className="w-full h-full bg-stone-100 overflow-hidden relative font-serif group">
    {/* Screen 1: Product Grid (Back Left) */}
    <div className="absolute top-2 -left-2 w-3/4 h-3/4 bg-white rounded shadow-lg transform -rotate-3 transition-transform group-hover:-rotate-6 duration-500 border border-stone-200">
      <div className="h-4 bg-stone-50 border-b border-stone-100"></div>
      <div className="p-2 grid grid-cols-2 gap-2">
         {[1,2,3,4].map(i => (
           <div key={i} className="aspect-square bg-stone-200/50 rounded-sm"></div>
         ))}
      </div>
    </div>

    {/* Screen 2: Hero Section (Back Right) */}
    <div className="absolute top-6 -right-6 w-3/4 h-3/4 bg-white rounded shadow-xl transform rotate-6 transition-transform group-hover:rotate-12 duration-500 border border-stone-200 z-10">
      <div className="h-4 bg-stone-50 border-b border-stone-100 flex items-center justify-end px-2 gap-1">
         <div className="w-2 h-2 rounded-full border border-stone-300"></div>
         <div className="w-2 h-2 rounded-full border border-stone-300"></div>
      </div>
      <div className="p-3 flex flex-col items-center justify-center h-full text-center">
         <div className="w-16 h-1 bg-stone-800 mb-2"></div>
         <div className="w-24 h-1 bg-stone-300 mb-4"></div>
         <div className="w-full h-20 bg-orange-100/50 rounded-sm"></div>
      </div>
    </div>

    {/* Screen 3: Product Detail (Front Center) */}
    <div className="absolute bottom-0 right-4 w-[70%] h-[80%] bg-white rounded-t-lg shadow-[0_-5px_30px_-5px_rgba(0,0,0,0.1)] border border-stone-100 transition-transform group-hover:translate-y-[-5%] duration-500 z-20">
      <div className="p-0">
        <div className="relative h-24 bg-stone-200">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=300')] bg-cover bg-center opacity-80"></div>
        </div>
        <div className="p-4">
           <h4 className="font-serif text-lg text-stone-900 leading-none mb-1">Royal Silk</h4>
           <p className="text-[10px] text-stone-500 mb-3">Banarasi Weave • Gold Thread</p>
           <div className="flex gap-2 mb-3">
             <div className="w-4 h-4 rounded-full bg-red-800 border-2 border-white shadow-sm"></div>
             <div className="w-4 h-4 rounded-full bg-amber-700 border-2 border-white shadow-sm"></div>
             <div className="w-4 h-4 rounded-full bg-indigo-900 border-2 border-white shadow-sm"></div>
           </div>
           <button className="w-full py-1.5 bg-stone-900 text-white text-[10px] uppercase tracking-widest hover:bg-stone-800">
             View Collection
           </button>
        </div>
      </div>
    </div>
  </div>
);

const BakeryTeaserPreview = () => {
  return (
    <div className="w-full h-full relative overflow-hidden group">
      {/* Background Image with Zoom Effect */}
      <img 
        src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80" 
        alt="Bakery"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[4000ms] ease-in-out scale-100 group-hover:scale-110"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500"></div>

      {/* Animated Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter font-serif animate-[fadeIn_0.8s_ease-out_0.2s_both] drop-shadow-lg italic" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          Sweet<br/>Delights
        </h3>
      </div>
      
      {/* Teaser Badge */}
      <div className="absolute bottom-4 right-4">
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          <PlayCircle className="w-4 h-4 text-rose-400" />
          <span className="text-[10px] text-white font-medium uppercase tracking-wider">Teaser</span>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

// Countdown Timer Component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Target date: Dec 31, 2025 23:59:59 IST
      const targetDate = new Date('2025-12-31T23:59:59+05:30');
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="flex flex-col items-center bg-slate-800 rounded-lg px-3 py-2 border border-slate-700">
        <span className="text-2xl font-bold text-white">{String(timeLeft.days).padStart(2, '0')}</span>
        <span className="text-xs text-slate-400">Days</span>
      </div>
      <span className="text-slate-500">:</span>
      <div className="flex flex-col items-center bg-slate-800 rounded-lg px-3 py-2 border border-slate-700">
        <span className="text-2xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="text-xs text-slate-400">Hours</span>
      </div>
      <span className="text-slate-500">:</span>
      <div className="flex flex-col items-center bg-slate-800 rounded-lg px-3 py-2 border border-slate-700">
        <span className="text-2xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="text-xs text-slate-400">Mins</span>
      </div>
      <span className="text-slate-500">:</span>
      <div className="flex flex-col items-center bg-slate-800 rounded-lg px-3 py-2 border border-slate-700">
        <span className="text-2xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className="text-xs text-slate-400">Secs</span>
      </div>
    </div>
  );
};

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('all');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
    };
    
    try {
      // Use environment variable or default to localhost in development
      let apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      
      // Ensure URL has protocol
      if (apiUrl && !apiUrl.startsWith('http://') && !apiUrl.startsWith('https://')) {
        apiUrl = `https://${apiUrl}`;
      }
      
      console.log('Sending to:', `${apiUrl}/api/contact`);
      console.log('Data:', data);
      
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      console.log('Response status:', response.status);
      const result = await response.json();
      console.log('Response result:', JSON.stringify(result, null, 2));
      
      if (response.ok && result.success) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        console.error('Form submission failed:', result);
        if (result.errors) {
          console.error('Validation errors:', result.errors);
          result.errors.forEach((err: any) => {
            console.error(`- ${err.field}: ${err.message}`);
          });
        }
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      
      {/* Navigation */}
      <nav className="fixed w-full z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform shadow-lg shadow-indigo-500/30">
                <Code2 className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight font-display">Digi<span className="text-indigo-500">Emp</span></span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-indigo-400 transition-colors">Services</button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium hover:text-indigo-400 transition-colors">Pricing</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium hover:text-indigo-400 transition-colors">Work</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-indigo-400 transition-colors">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-3 px-2 hover:bg-slate-800 rounded-lg text-slate-300">Services</button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left py-3 px-2 hover:bg-slate-800 rounded-lg text-slate-300">Pricing</button>
              <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left py-3 px-2 hover:bg-slate-800 rounded-lg text-slate-300">Work</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-3 px-2 hover:bg-slate-800 rounded-lg text-slate-300">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-grid-pattern">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-600/20 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight font-display">
            We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Digital Empires</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            From high-conversion websites to complex business dashboards and cinematic video content. One team for your entire digital presence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Start Project <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white rounded-full font-semibold hover:bg-slate-700 transition-colors border border-slate-700"
            >
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">Our Expertise</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We divide our focus into three core pillars to ensure deep expertise in every deliverable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group relative bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10">
                <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center transition-colors
                  ${service.id === 'web' ? 'bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white' : ''}
                  ${service.id === 'dash' ? 'bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white' : ''}
                  ${service.id === 'vid' ? 'bg-rose-500/10 text-rose-400 group-hover:bg-rose-500 group-hover:text-white' : ''}
                `}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-display">{service.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 className={`w-4 h-4 
                        ${service.id === 'web' ? 'text-indigo-500' : ''}
                        ${service.id === 'dash' ? 'text-emerald-500' : ''}
                        ${service.id === 'vid' ? 'text-rose-500' : ''}
                      `} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] -translate-y-1/2 -z-10"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] -translate-y-1/2 -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">Transparent Pricing</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-6">
              Professional development at competitive rates. No hidden fees.
            </p>
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="bg-red-600/10 border border-red-500/30 rounded-xl px-6 py-4 inline-block">
                <p className="text-red-400 font-semibold text-lg mb-2">Launch Offer: Only ₹1,999 — Valid Until 31st December</p>
                <p className="text-slate-300 text-sm max-w-2xl">
                  To celebrate the launch of our web development services, we're offering complete website development at a special introductory price of ₹1,999.
                </p>
                <p className="text-slate-400 text-xs mt-2">
                  This limited-time offer ends on 31st December. Don't miss out!
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-xs text-slate-500 uppercase tracking-wider">Time Remaining</p>
                <CountdownTimer />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Card 1: Web */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 flex flex-col hover:border-indigo-500/30 transition-all hover:-translate-y-1 duration-300 relative">
              <div className="absolute -top-3 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                Launch Offer
              </div>
              <div className="mb-4 p-3 bg-indigo-500/10 w-fit rounded-xl">
                <Monitor className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-2">Websites & Apps</h3>
              <p className="text-slate-400 text-sm mb-4">E-commerce, SaaS, Portfolios, and Landing Pages.</p>
              <div className="mb-4">
                <div className="text-4xl font-bold text-white mb-1">₹1,999<span className="text-lg text-slate-500 font-normal">/project</span></div>
                <p className="text-xs text-red-400 font-medium mb-2">Valid Until 31st December</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 mb-6 border border-slate-700">
                <p className="text-xs text-slate-300 leading-relaxed mb-2">
                  To celebrate the launch of our web development services, we're offering complete website development at a special introductory price of ₹1,999.
                </p>
                <p className="text-xs text-slate-400">
                  This limited-time offer ends on 31st December. Prices will revert to ₹14,999 post-offer. Don't miss out!
                </p>
              </div>
              <button onClick={() => scrollToSection('contact')} className="w-full py-3 rounded-xl bg-slate-800 hover:bg-indigo-600 text-white font-medium transition-all mb-8">Get Started</button>
              <div className="space-y-3 border-t border-slate-800 pt-6">
                <div className="flex items-center gap-3 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Complete Functional Product</div>
                <div className="flex items-center gap-3 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Source Code Ownership</div>
                <div className="flex items-center gap-3 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Mobile Responsive</div>
              </div>
            </div>

            {/* Card 2: Dashboards - Highlighted */}
            <div className="bg-slate-950 border border-indigo-500/50 rounded-3xl p-8 flex flex-col relative shadow-[0_0_30px_rgba(79,70,229,0.1)] hover:-translate-y-1 transition-all duration-300">
              <div className="absolute -top-3 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                Launch Offer
              </div>
              <div className="mb-4 p-3 bg-emerald-500/10 w-fit rounded-xl">
                <BarChart3 className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-2">Dashboards & Tools</h3>
              <p className="text-slate-400 text-sm mb-6 h-10">CRM, Analytics, and Business Intelligence Tools.</p>
              <div className="text-4xl font-bold text-white mb-1">₹1,499<span className="text-lg text-slate-500 font-normal">/project</span></div>
              <p className="text-xs text-slate-500 mb-8">One-time payment</p>
              <button onClick={() => scrollToSection('contact')} className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all mb-8 shadow-lg shadow-indigo-500/25">Get Started</button>
              <div className="space-y-3 border-t border-slate-800 pt-6">
                <div className="flex items-center gap-3 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Data Visualization</div>
                <div className="flex items-center gap-3 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Automation Scripts</div>
                <div className="flex items-center gap-3 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Admin Panels</div>
              </div>
            </div>

            {/* Card 3: Video */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 flex flex-col hover:border-rose-500/30 transition-all hover:-translate-y-1 duration-300">
              <div className="mb-4 p-3 bg-rose-500/10 w-fit rounded-xl">
                <Video className="w-6 h-6 text-rose-400" />
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-2">Video & Content</h3>
              <p className="text-slate-400 text-sm mb-6 h-10">Promotional, Tutorial, and Animated Content.</p>
              <div className="text-4xl font-bold text-white mb-1">₹40<span className="text-lg text-slate-500 font-normal">/sec</span></div>
              <p className="text-xs text-slate-500 mb-8">Pay per duration</p>
              <button onClick={() => scrollToSection('contact')} className="w-full py-3 rounded-xl bg-slate-800 hover:bg-rose-600 text-white font-medium transition-all mb-8">Get Started</button>
              <div className="space-y-3 border-t border-slate-800 pt-6">
                <div className="flex items-center gap-3 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-rose-500" /> High Quality Animation</div>
                <div className="flex items-center gap-3 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Script Assistance</div>
                <div className="flex items-center gap-3 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Professional Voiceover</div>
              </div>
            </div>
          </div>

          {/* Guarantee Grid */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12">
             <div className="text-center mb-10">
               <h3 className="text-2xl font-bold text-white mb-2 font-display">The DigiEmp Guarantee</h3>
               <p className="text-slate-400">We don't just deliver code; we deliver peace of mind.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                {GUARANTEES.map((g, i) => (
                  <div key={i} className="flex gap-4">
                     <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                          <g.icon className="w-5 h-5 text-indigo-400" />
                        </div>
                     </div>
                     <div>
                        <h4 className="font-bold text-white mb-1">{g.title}</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">{g.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>

        </div>
      </section>


      {/* Portfolio Section */}
      <section id="portfolio" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">Recent Work</h2>
              <p className="text-slate-400">Selected projects across our core disciplines.</p>
            </div>
            <div className="flex gap-2 p-1 bg-slate-900 rounded-lg border border-slate-800 self-start md:self-auto">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'all' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'}`}
              >All</button>
               <button 
                onClick={() => setActiveTab('Web & Apps')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'Web & Apps' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'}`}
              >Web</button>
               <button 
                onClick={() => setActiveTab('Business Tools')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'Business Tools' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'}`}
              >Tools</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO.filter(item => activeTab === 'all' || item.category === activeTab).map((item) => {
              const isLink = !!item.link;
              const Container = isLink ? 'a' : 'div';
              const containerProps = isLink ? {
                href: item.link,
                target: item.link !== '#' ? "_blank" : "_self",
                rel: "noopener noreferrer",
                className: "group cursor-pointer block"
              } : {
                className: "group cursor-default block"
              };

              return (
              <Container 
                key={item.id} 
                {...containerProps}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 bg-slate-900 border border-slate-800 shadow-lg group-hover:shadow-indigo-500/20 transition-all duration-300">
                  {item.id === '1' ? (
                     <VentureCollage />
                  ) : item.id === '2' ? (
                     <TextileCollage />
                  ) : item.id === '3' ? (
                     <BakeryTeaserPreview />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </>
                  )}
                  {/* Hover Overlay Icon - Only show if it's a link */}
                  {isLink && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
                       <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                          <ExternalLink className="w-5 h-5 text-white" />
                       </div>
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
                     <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">
                       {item.tag}
                     </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors flex items-center gap-2 font-display">
                  {item.title}
                  {isLink && (
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  )}
                </h3>
                <p className="text-sm text-slate-500">{item.category}</p>
              </Container>
            )})}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left Column: Info */}
            <div className="text-left">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                  Available for new projects
               </div>
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display leading-tight">Let's build something <br/> <span className="text-indigo-500">extraordinary.</span></h2>
               <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                 Whether you need a full SaaS platform, an internal dashboard, or a promotional video, we are ready to build.
               </p>
               
               <div className="space-y-6">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
                     <Mail className="w-5 h-5 text-white" />
                   </div>
                   <div>
                     <p className="text-sm text-slate-500">Email us at</p>
                     <p className="text-white font-medium">Prashantpoddar29@gmail.com</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
                     <Clock className="w-5 h-5 text-white" />
                   </div>
                   <div>
                     <p className="text-sm text-slate-500">Response time</p>
                     <p className="text-white font-medium">Within 24 hours</p>
                   </div>
                 </div>
               </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full -z-10"></div>
              
              {formStatus === 'success' ? (
                <div className="h-[400px] flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-bottom-4">
                   <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                     <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2 font-display">Message Sent!</h3>
                   <p className="text-slate-400 max-w-xs mx-auto mb-8">Thank you for contacting DigiEmp. We'll review your request and get back to you shortly.</p>
                   <button 
                      onClick={() => setFormStatus('idle')}
                      className="text-emerald-400 hover:text-emerald-300 font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all"
                   >
                     Send another message <ArrowRight className="w-4 h-4" />
                   </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <input type="hidden" name="_subject" value="New Project Request - DigiEmp" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">Name <span className="text-rose-500">*</span></label>
                      <input type="text" id="name" name="name" required placeholder="John Doe" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-600" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">Phone <span className="text-rose-500">*</span></label>
                      <input type="tel" id="phone" name="phone" required placeholder="+91" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-600" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">Email <span className="text-rose-500">*</span></label>
                    <input type="email" id="email" name="email" required placeholder="john@company.com" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-600" />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">Service Interest</label>
                    <div className="relative">
                      <select id="service" name="service" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none transition-all">
                        <option value="Websites & Apps">Websites & Apps</option>
                        <option value="Business Tools & Dashboards">Business Tools & Dashboards</option>
                        <option value="Videos & Content">Videos & Content</option>
                        <option value="Other">Other / Not Sure</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                        <ArrowRight className="w-4 h-4 rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">Message <span className="text-rose-500">*</span></label>
                    <textarea id="message" name="message" rows={4} required placeholder="Tell us about your project..." className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-600 resize-none"></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-white hover:bg-slate-200 disabled:opacity-70 disabled:cursor-not-allowed text-slate-900 font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mt-2"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Request <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  {formStatus === 'error' && (
                    <div className="text-center text-rose-400 text-sm mt-2">
                      <p>Something went wrong. Please check:</p>
                      <ul className="list-disc list-inside mt-1 text-xs">
                        <li>All required fields are filled</li>
                        <li>Email format is correct</li>
                        <li>Message is at least 10 characters</li>
                        <li>Check browser console (F12) for details</li>
                      </ul>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
              <Code2 className="text-white w-4 h-4" />
            </div>
            <span className="text-lg font-bold text-white font-display">Digi<span className="text-slate-500">Emp</span></span>
          </div>
          <div className="text-slate-500 text-sm">
            © 2024 DigiEmp Agency. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="https://wa.me/917624029175" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-500 transition-colors" title="Chat on WhatsApp">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
            <a href="tel:7624029175" className="text-slate-400 hover:text-indigo-500 transition-colors" title="Call Us">
              <Phone className="w-5 h-5" />
            </a>
            <a href="mailto:Prashantpoddar29@gmail.com" className="text-slate-400 hover:text-rose-500 transition-colors" title="Email Us">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;