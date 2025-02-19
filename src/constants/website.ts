// Icons
import { Clock, Search, Maximize2, ShieldCheck } from "lucide-react";

// GLOBAL CONSTANTS
export const CONTACT_US_CALL_LINK = "https://cal.com/team/ares-legal/intro";
export const CHRONOLOGY_FILE_URL = "https://medchronai-files.s3.us-west-1.amazonaws.com/landing-page/ares-medchron-example.docx";
export const DEMO_BUTTON_TEXT = "Schedule a Call";

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
  // {
  //   title: "Contact Us",
  //   href: "/contact-us",
  // },
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
      description: "Eliminate 15+ hours of medical review and summarization per case.",
    },
    {
      icon: Search,
      stat: "100%",
      label: "Case Coverage",
      description: "Quickly learn the medical facts that will make or break a case.",
    },
    {
      icon: Maximize2,
      stat: "2x",
      label: "Caseload Capacity",
      description: "Take on more cases without sacrificing the quality.",
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
  sectionDescription: "Everything you need to know about Ares.",
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
    {
      src: "https://medchronai-files.s3.us-west-1.amazonaws.com/landing-page/nyaccidentlawyer.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVTFR2EZV5LSOMCUJ%2F20250219%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250219T182102Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIQCtLBpw8h%2FLU5zgEtHuotTqsGb4HoJHaG4U6Sz7fYr%2FJAIgAIMkLNRZxrmLv2f5iaNsg3qbhHZE%2F8BaK5vrBCCHOKgqiAMIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAEGgwzODQ3NzI0ODI2NjciDPgPKDsI3yDBKltrxircAhjrrgh5hTCStt%2BtFE9NeVHuFITgrUG%2B7uzRAzT7Ji99xi8OpsEu%2BteMCoNmjKefmcZB7b8m6VHAeQym4r5kofNAF1OvtJJWNjpInSCKnU77b3T4WMjDFx%2Fm%2BO1azREAT4fnoznlXJHb%2F8B6ScmjihzouVIxjM%2Bd7D%2BbmJ2bVCpFL177GPZTGkcm0ZPba5TMAGb9RTL6LyYp4DCuO7cylATYT3y5XZZ0ZRrF6RHngvGVnRV0BAV6m3OJ35tHYMxTpAaAwHIww4RkidgqBaDme4hOvEaszL14RSNnodA1Hml%2FqO7QsLDN20TLRTxBkVA2V4znfkZ3bJ2Q3sGfScbTZlmQvuo9M0ckSVQciocmL0Od1OGrwJAobtVMUZUtpqlrtko2wsbH%2FqUc1AVej%2FNRVcnJDKebOamA2QwaxOrMnyVLqQWO%2FAEZHh25aRWkebm0mIjg%2FC4wnSEOcM0cXzDjwdi9BjqzArDQN%2BcUmGflBt%2BNBAPSWfq56hBGRKICqpF6OIfovjpmZvzDJTa4rNUEWRjT2uhQvyxlfCkRuKTPSH5KOIHNiIvAadsYPbHlQWOwZgKPVI8Q26iXPfcE6uJ4jGBcRzeXJtAiJvQKHvTJyVYDd6qfxjXywAG70oT4E1YfF5IXvb2UXGNUTyDKH8acKiZPsKcqbr5OIS29Ss41JE8n97JJVVtkc%2FoGvt80YDOnhQg29cORViYBZ%2F1aI7uNhyoF%2B9%2F3dV2G7IPPnBsFGgVw%2BNCNvBU%2F3n1BB3mF53KBY6ne%2Bx0qZUT%2FctrHUqRk1PnD9KFY3c5MI2D8LQG2YnyEK2uIcNkgKiXLqdBj1dq1Friq7igIOo7FkgA2YSPknkMPGNpUcuzUJomTopFiwnO066ZF%2F2CiZIs%3D&X-Amz-Signature=abedd7772c74afe921425e68fe680142246db30e6dc88f36e7f0454666ddeae4&X-Amz-SignedHeaders=host&response-content-disposition=inline",
      alt: "Leav & Steinberg LLP",
    },
  ],
};

// Case Process Section

export const CASE_PROCESS_CONSTANTS = {
  badge: "How It Works",
  title: "Built By Experts In Medical Records And Legal Tech",
  description: "Ares is created by a founding team with experience in medical records and legal tech. Committed to building the best tool for personal injury law firms.",
  cta: "Book Demo",
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
      title: "Automatic Chronology Generation",
      description: "After analysis, get a comprehensive overview that includes a narrative summary, timeline of events, diagnostic highlights, and summaries for every visit.",
    },
    {
      number: "4",
      title: "You're All Set!",
      description: "Download the chronology as a PDF for easy sharing with clients and team members.",
    },
  ],
};

// Bottom CTA Section

export const bottomCTAConstants = {
  title: "Ready to let Ares work for you?",
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
  emails: ["founders@areslegal.ai"],
};
