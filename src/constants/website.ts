// Icons
import { Clock, Search, Maximize2, ArrowRight } from "lucide-react";

// GLOBAL CONSTANTS
export const DEMO_CALL_LINK = "https://cal.com/team/ares-legal/demo";
// TODO: add a contact us call link
export const CONTACT_US_CALL_LINK = "https://cal.com/team/ares-legal/intro-call";
export const CHRONOLOGY_FILE_URL = "https://medchronai-files.s3.us-west-1.amazonaws.com/landing-page/ares-medchron-example.docx";
export const DEMO_BUTTON_TEXT = "Schedule Demo";

// Avatar Images
const AVATAR_IMAGES = ["https://medchronai-files.s3.us-west-1.amazonaws.com/landing-page/daniel-headshot.jpeg", "https://medchronai-files.s3.us-west-1.amazonaws.com/landing-page/jason-epstein.jpeg", "https://medchronai-files.s3.us-west-1.amazonaws.com/landing-page/louis-maxwell-holzberg.png", "https://medchronai-files.s3.us-west-1.amazonaws.com/landing-page/zach-harris.jpeg"];

// HERO SECTION
export const heroSection = {
  title: "Save Time, Settle Faster",
  description: "Ares helps personal injury firms save hours on medical records review, uncover key facts, and build a winning strategy. Let Ares help you save time and settle faster.",
  mainCTA: DEMO_BUTTON_TEXT,
  secondaryCTA: "Example Chronology",
  trustBadgeText: "Trusted by leading personal injury firms",
  avatarImages: AVATAR_IMAGES,
};

// Header Section

export const NAVIGATION_ITEMS = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Testimonials",
    href: "/#testimonials",
  },
  {
    title: "Solutions",
    href: "/#solutions",
  },
  // {
  //   title: "Contact Us",
  //   href: "/contact-us",
  // },
];

export const SOLUTIONS = [
  {
    title: "Case Intake",
    description: "Streamline your entire case workflow with AI-powered automation.",
    href: "/solutions/case-management",
  },
  {
    title: "Medical Chronology",
    description: "Extract key insights from legal documents in seconds.",
    href: "/solutions/document-analysis",
  },
  {
    title: "Demand Letters",
    description: "Find relevant cases and statutes with intelligent search.",
    href: "/solutions/legal-research",
  },
  {
    title: "Litigation Support",
    description: "Provide a seamless experience for your clients.",
    href: "/solutions/litigation-support",
  },
];

// Benefits Section

export const BENEFITS_CONSTANTS = {
  badge: "Introducing Ares",
  title: {
    firstLine: {
      beforeItalic: "Automate",
      italic: "high quality",
      afterItalic: "case research",
    },
    secondLine: {
      before: "to speed up your case generation",
    },
  },
  description: "Ares analyzes your cases & surfaces insights you'd normally spend hours uncovering.",
  cards: [
    {
      icon: Clock,
      stat: "15+",
      label: "Hours Saved Per Case",
    },
    {
      icon: Search,
      stat: "100%",
      label: "Case Coverage",
    },
    {
      icon: Maximize2,
      stat: "2x",
      label: "Caseload Capacity",
    },
  ],
};

// FAQ Section

export const FaqConstants = {
  sectionTitle: "Frequently asked questions",
  sectionDescription: "Everything you need to know about the product and billing.",
  questions: [
    {
      question: "Is there a free trial available?",
      answer: "Yes, you can try our service free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you started with everything as smoothly possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated amount for the remainder of the current billing cycle. If you downgrade, you'll receive credit for the remainder of the current billing cycle.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel your subscription at any time, and you'll retain access to the service until the end of your current billing period. We don't offer refunds for partial months.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can add additional information to your invoices, including PO numbers, custom notes, and additional recipient emails. You can manage these settings in your billing dashboard.",
    },
    {
      question: "How does billing work?",
      answer: "We bill monthly or annually, depending on your preference. All plans are billed in advance. For monthly plans, you'll be billed on the same date each month. For annual plans, you'll be billed once per year.",
    },
    {
      question: "How do I change my account email?",
      answer: "You can change your account email from your account settings page. After changing your email, you'll need to verify your new email address.",
    },
  ],
};

// Testimonials Section

export const testimonialsConstants = {
  badge: "Testimonials",
  title1: "Don't take our word for it!",
  title2: "Hear it from our partners.",
  testimonials: [
    {
      quote: "I love how Ares provides a straightforward, high-level summary of a client's medical records. It helps me quickly grasp key dates, the patient's age, and the overall treatment story at a glance. It's been a huge time-saver and cuts down on the hours I'd normally spend sifting through endless pages of records.",
      author: "Zachary",
      title: "Founding Attorney",
      company: "Harris Legal",
      avatar: "https://medchronai-files.s3.us-west-1.amazonaws.com/landing-page/zach-harris.jpeg",
    },
    {
      quote: "My paralegal was amazed by how Ares helps pinpoint missing records and streamline our trial timelines. It's incredibly useful from a trial standpoint and is exactly what we need to stay organized and find any gaps. The summaries are so clear and detailed that it feels like a game-changer for our practice.",
      author: "Louis",
      title: "Attorney",
      company: "Holzberg Legal",
      avatar: "https://medchronai-files.s3.us-west-1.amazonaws.com/landing-page/louis-maxwell-holzberg.png",
    },
    {
      quote: "Ares is a huge step up from what we were using before. It's more organized and pulls out exactly what I need across multiple providers, such as massage therapists, chiropractors, surgeons, and more. I love how it zeroes in on the key findings from imaging without me digging through dozens of pages. It also makes it easy to track how a client's symptoms line up chronologically and medically with their injuries. Overall, it helps me build a clear narrative for my demand.",
      author: "Daniel",
      title: "Lead Pre Litigation Attorney",
      company: "Fielding Law Group",
      avatar: "https://medchronai-files.s3.us-west-1.amazonaws.com/landing-page/daniel-headshot.jpeg",
    },
  ],
};

// Logo Ticker Section
// TODO: move these to our own blob storage
export const logoTickerConstants = {
  logos: [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fieldinglaw-WZH7CEKiuw8H8tEj8Kh0K3Yr3SvdyK.png",
      alt: "Fielding Law Group",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plg-logo-pe1Y0hVD9PeWXGN86Bzs0ZBEp5IMvd.png",
      alt: "Premier Law Group",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/holzberg.png-5y2PaQvO3RDsmaI9MwqYF1qf5jbiKz.webp",
      alt: "Holzberg Legal",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/harrislaw-drIOGr0S01K8rfzIgnYJ978id9G6aW.png",
      alt: "Harris Legal",
    },
  ],
};

// Case Process Section

export const CASE_PROCESS_CONSTANTS = {
  badge: "Our Roadmap",
  title: "Built By Experts In Medical Records And Legal Tech",
  description: "Ares is created by a founding team with experience in medical records and legal tech. Committed to building the best tool for personal injury law firms.",
  cta: "Schedule a call",
  processSteps: [
    {
      title: "Case intake and evaluation",
      comingSoon: false,
      description: "Evaluate case value and key facts to identify the best cases, helping you grow your firm's capacity to take on more.",
      completed: true,
      action: DEMO_BUTTON_TEXT,
      actionHref: DEMO_CALL_LINK,
      actionActive: true,
    },
    {
      title: "Medical Chronology",
      comingSoon: false,
      description: "Comprehensive analysis of medical records, automatically identifying key treatments, diagnoses, and expert opinions.",
      completed: true,
      action: DEMO_BUTTON_TEXT,
      actionHref: DEMO_CALL_LINK,
      actionTarget: "_blank",
      actionActive: true,
    },
    {
      title: "Demand Letters",
      comingSoon: true,
      description: "Automated generation of persuasive demand letters, incorporating all relevant case details and medical findings.",
      completed: false,
      action: "Coming Soon",
      actionHref: DEMO_CALL_LINK,
      actionTarget: "_blank",
      actionActive: false,
    },
    {
      title: "Continuous Discovery",
      comingSoon: true,
      description: "Ongoing process of gathering and analyzing new information, ensuring your case strategy remains up-to-date.",
      completed: false,
      action: "Coming Soon",
      actionHref: DEMO_CALL_LINK,
      actionTarget: "_blank",
      actionActive: false,
    },
    {
      title: "Litigation Management",
      comingSoon: true,
      description: "Comprehensive oversight of the entire litigation process, from filing to settlement or trial.",
      completed: false,
      action: "Coming Soon",
      actionHref: DEMO_CALL_LINK,
      actionTarget: "_blank",
      actionActive: false,
    },
  ],
};



// Bottom CTA Section

export const bottomCTAConstants = {
  title: "Let's find more value in your cases.",
  description: "Ares is a tool that helps you find more value in your cases. It is a tool that helps you find more value in your cases. It is a tool that helps you find more value in your cases.",
  cta: DEMO_BUTTON_TEXT,
};

// Footer Section

export const footerConstants = {
  copyright: "© 2025 Ares Legal. All rights reserved.",
  emails: ["karn@areslegal.com", "chris@areslegal.com"],
};


// Contact Us Section

export const contactUsConstants = {
  tag1: "Contact",
  tag2: "Us",
  title: "We Believe Founders Should Always Be Accessible",
  description: "We believe founders should always be accessible. If you have any questions, please don't hesitate to reach out to us.",
  copyEmailSubtitle: "Or, if you're like Chris and also don't have email set up on Mac, you can copy our emails directly:",
  copyEmailSubtitleMobile: "Send us an email at:",
  emails: ["karn@areslegal.com", "chris@areslegal.com"],
};

