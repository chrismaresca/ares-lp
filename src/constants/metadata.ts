import { Metadata } from "next";
// import { Twitter } from "next/dist/lib/metadata/types/twitter-types";

// Metadata
const TITLE = "Ares | Legal AI for Personal Injury Firms";
const DESCRIPTION = "Ares helps personal injury firms save hours on medical records review, uncover key facts, and build a winning strategy. Let Ares help you save time and settle faster.";
const BASE_URL = "https://areslegal.ai";
const SITE_NAME = "Ares";

const OG_IMAGE_URL = "https://medchronai-files.s3.us-west-1.amazonaws.com/landing-page/ares-og-1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVTFR2EZV6XGTMBES%2F20250220%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250220T162700Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIQCD4t07t2nbsTiBVUMaysBVC7JXlvbL1fd40VH4WgNvzgIgH1TRhHe6p7C6Od14ERyV9oo0Fbwdp0YuA3BR3bh1hHoqiAMIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAEGgwzODQ3NzI0ODI2NjciDGRp0J9O117w9Y%2FpbyrcAqdOryT1%2FpZ%2BZ362k1OVc8Y%2FxV9EA3zLXTXhquVX0LueF1Uf8tUeIegXqfS%2BNO5MLPfBnLDN7zsWVgN0RYuW1jMRAhPo0rzkC14RUC%2BjV1D%2Bhc9qyvpyevAU%2B3TPE89pAU8Z2GeeiviJlE48%2FW%2BBalYHReOkPvrE1xTkQNNwFdO3atA5yxyH1TA31lUrqrGIOnWfXAij9QqHksck3wF%2FX2IXG10xvVJ2MXSfBEuotijZyAuZ14HK%2B5QU272ayDupHfCLrlAP9D0qvEkc8GBRN8AyTJD%2Ff%2BgJGVhTuRDOJLw7cTbVdfI7kZCa5Kc0VdGOp0xdYGCA535E8E6NMx74CLVqMmzFllbVJNs6tEVxsbwxqOfgIvRW2%2F0%2Bzg7FHmJwWHZ9vA586XDcgznp9rD7gF9Ww4IOPGJREbTsnuNa%2BdhCS4XUvs%2FHAmSDY5yQy1evoJESDiLCxBCQCbOMazC4r929BjqzAurnQByCPRWRp0N2Mu8GHmAgJLKdBaDXMUaG%2BjZ2gi4xchhAAlnXhgS8LA625XejUGJ2lJCHwoTuCdmY6LfQ5fM44cfTy3lRfiBErl1bi9plp%2BYHYbSUFEsprZ9yPOK1q52%2B5oH5KpgZ0LsXsnY7vyx87sjoLS072oJzSk6I4iEv3IeURqAO2APdh7AOVU6OIT3AYO15qsdqbbFEuvswFTm8izNnak2iMJH9a0oPMrDO8qZk2PQbRMb7XU8wuWgFtjcAx%2F1aW8o5bCVQhPMc%2FSCLRonRx4dZkkj98SAyxaraBoY%2BYMA92fEmL3ZWuXoa2jAVs5okVyVCzOfJGglrAmt9f5FyMckVQMAlsjYA8mgLweDCS1P9P96QfDobykVSMm6F1DII8pX05gkILUWW7LnJuus%3D&X-Amz-Signature=34a8ac59c10e6c51df02e9d09be2d5063a0ec79bad9f68b8d57182912036c6d0&X-Amz-SignedHeaders=host&response-content-disposition=inline"

// Open Graph Images
const OPEN_GRAPH_IMAGES = [
  {
    url: OG_IMAGE_URL,
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
