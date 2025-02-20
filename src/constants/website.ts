// Icons
import { Clock, Search, Maximize2, ShieldCheck } from "lucide-react";

// GLOBAL CONSTANTS
export const CONTACT_US_CALL_LINK = "https://cal.com/team/ares-legal/intro";
export const CHRONOLOGY_FILE_URL = "https://medchronai-files.s3.us-west-1.amazonaws.com/landing-page/ares-medchron-example.docx";
export const DEMO_BUTTON_TEXT = "Schedule a Call";
export const SIGN_IN_LINK = "https://app.areslegal.ai/";
// Avatar Images
const AVATAR_IMAGES = ["https://medchronai-files.s3.us-west-1.amazonaws.com/landing-page/daniel-headshot.jpeg", "https://medchronai-files.s3.us-west-1.amazonaws.com/landing-page/jason-epstein.jpeg", "https://medchronai-files.s3.us-west-1.amazonaws.com/landing-page/louis-maxwell-holzberg.png", "https://medchronai-files.s3.us-west-1.amazonaws.com/landing-page/zach-harris.jpeg"];

// HERO SECTION
export const heroSection = {
  title: "Save Time, Settle Faster",
  description: "Ares helps personal injury firms save hours on medical records review, uncover key facts, and build a winning strategy. Let Ares help you save time and settle faster.",
  mainCTA: DEMO_BUTTON_TEXT,
  secondaryCTA: "Get sample chronology",
  trustBadgeText: "Trusted by leading personal injury firms",
  avatarImages: AVATAR_IMAGES,
};

// Header Section

export const NAVIGATION_ITEMS = [
  {
    title: "Features",
    href: "/#features",
  },
  {
    title: "Testimonials",
    href: "/#testimonials",
  },
  {
    title: "Process",
    href: "/#process",
  },
  {
    title: "FAQ",
    href: "/#faq",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
];

// export const SOLUTIONS = [
//   {
//     title: "Case Intake",
//     description: "Streamline your entire case workflow with AI-powered automation.",
//     href: "/solutions/case-management",
//   },
//   {
//     title: "Medical Chronology",
//     description: "Extract key insights from legal documents in seconds.",
//     href: "/solutions/document-analysis",
//   },
//   {
//     title: "Demand Letters",
//     description: "Find relevant cases and statutes with intelligent search.",
//     href: "/solutions/legal-research",
//   },
//   {
//     title: "Litigation Support",
//     description: "Provide a seamless experience for your clients.",
//     href: "/solutions/litigation-support",
//   },
// ];

// Benefits Section

export const BENEFITS_CONSTANTS = {
  badge: "Introducing Ares",
  title: {
    firstLine: {
      beforeItalic: "Automate",
      italic: "",
      afterItalic: "medical records review",
    },
    secondLine: {
      before: "with cutting-edge AI",
    },
  },
  description: "Ares analyzes your cases & surfaces key insights you'd normally spend hours uncovering.",
  cards: [
    {
      icon: Clock,
      stat: "10+",
      label: "Hours Saved Per Case",
      description: "Eliminate 10+ hours of medical records review per case.",
    },
    {
      icon: Search,
      stat: "Learn",
      label: "Key Case Facts",
      description: "Quickly learn key facts that will make or break your case.",
    },
    {
      icon: Maximize2,
      stat: "Increase",
      label: "Your Caseload",
      description: "Take on more cases without sacrificing the quality of your work.",
    },
    {
      icon: ShieldCheck,
      stat: "100%",
      label: "Secure & Compliant",
      description: "HIPAA compliant with enterprise-grade data privacy and security.",
    },
  ],
};

// FAQ Section

export const FaqConstants = {
  sectionTitle: "Frequently asked questions",
  sectionDescription: "Get answers to common questions about Ares, from accuracy to security.",
  questions: [
    {
      question: "How do I know Ares is accurate?",
      answer: "We provide references to specific pages in the original documents for all medical events. Accuracy is paramount to Ares AI. Note: we always recommend final manual review on AI generated outputs.",
    },
    {
      question: "Is my data private and secure?",
      answer: "Yes. We fully encrypt all your data with enterprise-grade security. We have a Zero Data Retention Agreement with our AI providers. Your data will never be used to train models.",
    },
    {
      question: "What types of medical records can Ares handle?",
      answer: "Ares can handle all types of medical records, from PDFs to scanned documents - even handwritten notes!",
    },
  ],
};

// Testimonials Section

export const testimonialsConstants = {
  badge: "Testimonials",
  title1: "Don't just take our word for it!",
  title2: "Hear from our partners.",
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
    {
      src: "https://medchronai-files.s3.us-west-1.amazonaws.com/landing-page/nyaccidentlawyer.png",
      alt: "Leav & Steinberg LLP",
    },
  ],
};

// Case Process Section

export const CASE_PROCESS_CONSTANTS = {
  badge: "How It Works",
  title: "Let Ares do the heavy lifting",
  description: "Ares turns raw medical records into comprehensive summaries in 4 easy steps.",
  cta: "Schedule a Call",
  processSteps: [
    {
      number: "1",
      title: "Upload Case Files",
      description: "Drag and drop documents into the platform.",
    },
    {
      number: "2",
      title: "AI-Powered Analysis",
      description: "Ares instantly reads, extracts, and organizes all medical data.",
    },
    {
      number: "3",
      title: "Automatic Summary Generation",
      description: "Get a comprehensive overview that includes a narrative summary, diagnostic highlights, and summaries for every visit.",
    },
    {
      number: "4",
      title: "You're All Set!",
      description: "Export the summary as a PDF if you'd like for easy sharing with your team.",
    },
  ],
};

// Bottom CTA Section

export const bottomCTAConstants = {
  title: "Ready to let Ares work for you?",
  description: "Ares will help you save time and settle faster. Please reach out if you'd like to see how Ares can transform your firm.",
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
  emails: ["founders@areslegal.ai"],
};
