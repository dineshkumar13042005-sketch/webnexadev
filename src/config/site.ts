export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  ctaLabel: string;
  whatsappMessage: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const SITE_CONFIG = {
  brand: {
    name: "WebnexaDev",
    tagline: "Your Digital Growth Partner — Websites, Software & Smart Business Solutions.",
    category: "IT Services, Web Development, Custom Software and Digital Solutions.",
    eyebrow: "IT SERVICES · WEB DEVELOPMENT · DIGITAL SOLUTIONS",
    heroHeadline: "We Build Digital Experiences That Grow Businesses.",
    heroDescription:
      "From high-converting websites and e-commerce stores to custom CRM software and AI-powered automation, we help businesses turn ideas into powerful digital solutions.",
    trustStatement: "Built around your business goals. Designed for your next stage of growth.",
    description:
      "WebnexaDev builds websites, custom software and digital solutions that help businesses establish and improve their online presence.",
  },

  contact: {
    whatsappNumber: "+91 7010957511",
    whatsappRawNumber: "917010957511",
    whatsappBaseUrl: "https://wa.me/917010957511",
    defaultHeroMessage:
      "Hi WebnexaDev! I'm interested in your IT services. I'd like to discuss a project.",
    finalCtaMessage:
      "Hi WebnexaDev! I'd like to start a project. Can you help me understand the next steps?",
    generalInquiryMessage:
      "Hi WebnexaDev! I'm interested in your IT services. Can we discuss my requirements?",
    faqQuestionMessage:
      "Hi WebnexaDev! I have a question about your IT services and project offerings.",
  },

  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#portfolio" },
    { label: "Why Us", href: "#why-us" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  // Strictly honest credibility claims - no fabricated client counts, no fake logos or revenue claims
  credibilityPoints: [
    {
      value: "1+",
      label: "Happy Client",
      subtext: "Verified direct client relationship",
      icon: "UserCheck",
    },
    {
      value: "Verified",
      label: "Completed Projects",
      subtext: "Delivered production-ready work",
      icon: "CheckCircle2",
    },
    {
      value: "100%",
      label: "Business-Focused",
      subtext: "Tailored to commercial goals",
      icon: "Briefcase",
    },
    {
      value: "Modern",
      label: "Responsive Architecture",
      subtext: "Optimized across phones, tablets & desktops",
      icon: "Smartphone",
    },
  ],

  services: [
    {
      id: "ecommerce-development",
      title: "E-commerce Website Development",
      description:
        "Launch a professional online store designed to showcase products and simplify the buying journey.",
      iconName: "ShoppingCart",
      features: [
        "Product catalogues",
        "Shopping cart",
        "Payment gateway integration",
        "Order management",
        "Responsive product pages",
        "Admin dashboard integration",
      ],
      ctaLabel: "Discuss E-commerce Website",
      whatsappMessage:
        "Hi WebnexaDev! I'm interested in developing an e-commerce website. Can we discuss my requirements?",
    },
    {
      id: "meta-ads-landing-pages",
      title: "Meta Ads Landing Pages",
      description:
        "Turn campaign traffic into meaningful enquiries with landing pages built around a clear offer and strong call to action.",
      iconName: "Target",
      features: [
        "Campaign-specific landing pages",
        "Conversion-focused page structure",
        "Lead enquiry forms",
        "WhatsApp integration",
        "Mobile-first layouts",
        "Analytics and conversion tracking setup",
      ],
      ctaLabel: "Discuss Landing Page",
      whatsappMessage:
        "Hi WebnexaDev! I need a landing page for my Meta Ads campaign. Can we discuss the project?",
    },
    {
      id: "custom-crm-software",
      title: "Custom CRM Software",
      description:
        "Manage leads, customer records, sales activities and follow-ups through software tailored to your business workflow.",
      iconName: "Layers",
      features: [
        "Lead management",
        "Customer records",
        "Sales pipeline",
        "Follow-up reminders",
        "Reports and dashboards",
        "Role-based access where required",
      ],
      ctaLabel: "Discuss CRM Software",
      whatsappMessage:
        "Hi WebnexaDev! I'm interested in custom CRM software for my business. I'd like to discuss the features I need.",
    },
    {
      id: "business-website-development",
      title: "Business Website Development",
      description:
        "Build a strong digital presence with a professional website that explains your services and encourages customers to contact you.",
      iconName: "Globe",
      features: [
        "Business landing pages",
        "Multi-page company websites",
        "Service and portfolio sections",
        "Enquiry forms",
        "WhatsApp integration",
        "Basic technical SEO",
      ],
      ctaLabel: "Discuss Business Website",
      whatsappMessage:
        "Hi WebnexaDev! I need a professional business website. Can we discuss my requirements?",
    },
    {
      id: "ai-chatbots-automation",
      title: "AI Chatbots and Automation",
      description:
        "Reduce repetitive work and organize customer enquiries using practical AI-powered tools and business automation.",
      iconName: "Bot",
      features: [
        "FAQ chatbot integration",
        "Enquiry collection",
        "Automated response workflows",
        "Customer support assistance",
        "CRM workflow integration",
        "WhatsApp workflow integrations where supported",
      ],
      ctaLabel: "Discuss Automation",
      whatsappMessage:
        "Hi WebnexaDev! I'm interested in AI chatbots and business automation. Can we discuss possible solutions?",
    },
    {
      id: "meta-ads-lead-generation",
      title: "Meta Ads and Lead Generation Solutions",
      description:
        "Build a more organized customer acquisition journey through campaign planning, landing pages and enquiry tracking.",
      iconName: "TrendingUp",
      features: [
        "Lead generation funnel planning",
        "Campaign landing pages",
        "Creative and CTA alignment",
        "Lead tracking setup",
        "Conversion measurement",
        "Enquiry workflow improvements",
      ],
      ctaLabel: "Discuss Lead Generation",
      whatsappMessage:
        "Hi WebnexaDev! I'd like to discuss digital marketing and lead generation solutions for my business.",
    },
  ] as ServiceItem[],

  // ONLY featured client project to display - strictly no Urban Nest Furniture or Aaraa Boutique
  featuredProject: {
    client: "Siva Construction",
    industry: "Construction",
    location: "Coimbatore, Tamil Nadu",
    category: "Business Website",
    description:
      "A construction business website created to present residential construction services, organize project categories and help potential customers explore the company's work.",
    capabilities: [
      "Residential construction showcase",
      "Interactive category navigation",
      "Project gallery and specifications display",
      "Direct quote & enquiry consultation flow",
      "High-speed mobile-first architecture",
    ],
    whatsappMessage:
      "Hi WebnexaDev! I saw the Siva Construction project and would like to discuss a similar website for my business.",
  },

  whyChooseUs: [
    {
      title: "Business-First Thinking",
      description:
        "We understand business goals and customer needs before deciding what to build, ensuring every line of code adds commercial value.",
      iconName: "Compass",
    },
    {
      title: "Mobile-First Experience",
      description:
        "We build responsive interfaces engineered to work smoothly on smartphones, tablets, and desktop workstations alike.",
      iconName: "Smartphone",
    },
    {
      title: "Conversion-Focused Design",
      description:
        "We use clear messaging, intuitive navigation, and prominent calls to action to turn curious visitors into high-intent enquiries.",
      iconName: "Zap",
    },
    {
      title: "Scalable Technology",
      description:
        "We choose maintainable modern architectures that grow effortlessly as your user base and business requirements expand.",
      iconName: "Cpu",
    },
  ] as WhyChooseItem[],

  processSteps: [
    {
      step: "01",
      title: "Discover",
      description:
        "Understand the business, target customers, requirements, and project goals through structured consultation.",
    },
    {
      step: "02",
      title: "Plan and Design",
      description:
        "Define the page structure, user journey, technical approach, and high-fidelity visual direction.",
    },
    {
      step: "03",
      title: "Develop and Test",
      description:
        "Build the website or software with clean code, test interactive states, and validate responsive performance.",
    },
    {
      step: "04",
      title: "Launch and Support",
      description:
        "Deploy the solution to secure hosting and provide the agreed maintenance and technical support.",
    },
  ] as ProcessStep[],

  faqs: [
    {
      question: "What services does WebnexaDev provide?",
      answer:
        "WebnexaDev provides end-to-end digital services including custom business websites, e-commerce stores, Meta Ads landing pages, custom CRM software, AI chatbot integrations, and conversion-focused lead generation workflows.",
    },
    {
      question: "Can you build custom e-commerce websites?",
      answer:
        "Yes. We develop tailored e-commerce platforms featuring custom product catalogues, shopping carts, secure payment gateway integrations (Razorpay, Stripe, etc.), order management, and responsive customer checkout experiences.",
    },
    {
      question: "Can you develop CRM software for my business?",
      answer:
        "Yes. We design and build custom CRM systems tailored to your specific sales processes, including lead tracking, customer record management, follow-up reminders, pipeline visualization, and role-based permissions.",
    },
    {
      question: "Do you create landing pages for Meta Ads?",
      answer:
        "Yes. We build high-speed, conversion-optimized landing pages specifically tailored to Meta Ads (Facebook & Instagram) campaigns, featuring clear value propositions, direct WhatsApp integration, and conversion tracking pixels.",
    },
    {
      question: "How long does a website project take?",
      answer:
        "Timelines depend on project scope, features, content readiness, and technical complexity. A focused business landing page typically takes 1 to 2 weeks, while larger multi-page sites or custom CRM systems take 3 to 6 weeks. We provide clear milestone timelines upfront.",
    },
    {
      question: "How much does a website cost?",
      answer:
        "Project pricing is based on scope, required integrations, custom functionality, and technical depth. We offer transparent pricing structures starting from small business landing pages up to full custom web software. We will provide an itemized quote after discussing your requirements.",
    },
    {
      question: "Can you redesign an existing website?",
      answer:
        "Yes. We can modernize your existing website by improving visual design, mobile responsiveness, page loading speeds, user experience, and conversion pathways while preserving existing brand equity.",
    },
    {
      question: "Can you integrate WhatsApp into my website?",
      answer:
        "Yes. We integrate interactive WhatsApp chat triggers, prefilled contextual message buttons, and floating quick-chat widgets so prospective clients can reach you with zero friction.",
    },
    {
      question: "Do you provide website maintenance?",
      answer:
        "Yes. We offer maintenance and ongoing support packages covering performance monitoring, security updates, content updates, technical SEO adjustments, and feature enhancements.",
    },
    {
      question: "How can I start a project with WebnexaDev?",
      answer:
        "You can start immediately by clicking 'Start a Project' to submit your project details, or click 'Chat on WhatsApp' (+91 7010957511) to discuss your goals directly with our team.",
    },
  ] as FaqItem[],

  formOptions: {
    services: [
      "E-commerce Website",
      "Meta Ads Landing Page",
      "CRM Software",
      "Business Website",
      "AI Chatbot and Automation",
      "Lead Generation",
      "Other",
    ],
    budgets: [
      "Need guidance",
      "Under ₹10,000",
      "₹10,000–₹25,000",
      "₹25,000–₹50,000",
      "₹50,000+",
      "To be discussed",
    ],
  },
};

/**
 * Builds a valid, safe WhatsApp URL with an encoded message.
 */
export function buildWhatsAppUrl(message?: string): string {
  const base = SITE_CONFIG.contact.whatsappBaseUrl;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message.trim())}`;
}
