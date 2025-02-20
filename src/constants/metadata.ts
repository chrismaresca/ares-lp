import { Metadata } from "next";
// import { Twitter } from "next/dist/lib/metadata/types/twitter-types";


// Metadata
const TITLE = "Ares | Legal AI for Personal Injury Firms";
const DESCRIPTION = "Ares helps personal injury firms save hours on medical records review, uncover key facts, and build a winning strategy. Let Ares help you save time and settle faster.";
const BASE_URL = "https://areslegal.ai";
const SITE_NAME = "Ares";

// Open Graph Images
const OPEN_GRAPH_IMAGES = [
  {
    url: "https://areslegal.ai/og-image.png",
    width: 1200,
    height: 630,
    alt: "Ares Legal AI",
  },
];

// Twitter
// const TWITTER_METADATA: Twitter = {
//   card: "summary_large_image",
//   title: TITLE,
//   description: DESCRIPTION,
//   images: OPEN_GRAPH_IMAGES,
//   site: "@areslegalai",
//   creator: "@areslegalai",
// };

const LAYOUT_METADATA: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Karn Rahal" }, { name: "Chris Maresca" }],
  applicationName: SITE_NAME,
  keywords: ["legal ai", "personal injury", "law firm software", "medical records review", "medical chronology", "medical chronology software", "medical chronology review", "medical chronology review software", "legal technology", "case management", "litigation support"],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: BASE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    countryName: "United States",
    images: OPEN_GRAPH_IMAGES,
  },
  // twitter: TWITTER_METADATA,
};


export default LAYOUT_METADATA;
