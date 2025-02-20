import { Metadata } from "next";
// import { Twitter } from "next/dist/lib/metadata/types/twitter-types";

// Metadata
const TITLE = "Ares | Legal AI for Personal Injury Firms";
const DESCRIPTION = "Ares helps personal injury firms save hours on medical records review, uncover key facts, and build a winning strategy. Let Ares help you save time and settle faster.";
const BASE_URL = "https://areslegal.ai";
const SITE_NAME = "Ares";

const OG_IMAGE_URL =
  "https://medchronai-files.s3.us-west-1.amazonaws.com/landing-page/ares-og-2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVTFR2EZVS4KNBN3G%2F20250220%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250220T163843Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIQC2jjp81%2BYezGnZkPdqMqRjgvFpr%2FWDnEZarfxnuP5GggIgJBYzo5F9dZAi0ofh0%2FolbRWjRdSD8Mnn1g%2BKw2yxfPcqiAMIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAEGgwzODQ3NzI0ODI2NjciDOwq8kNd0nVTrWgw9yrcAoDM4lzeGszVuZ%2B%2F58RAd%2FUDdpFTgp7ZGr4LsFPuSOfGjpMdrUqYLY98gThz22vGzPYDtZWAFzUB7h6IXVumRzqBOw5KnJ6TghP%2FoHWsbSM0uqggS5Sn6OMq7qhhwYI1W44FGhSYhEkoblPsmqg%2BdDZ1IrmaPHOgVz9d7sLqa4Ni2XaUyYXAHNIk1dqLdZkF5hSxasN2%2B%2BmcYLaWgH0Oe3mt%2BFCeZrkxjm66PGzGKDl%2FOoNN%2Bku%2FTbRM8pEjwqQ0U5GM7gXuHgHkteL%2FWs3GF0ilssXO8S0MvL9sHbw8eEw3QgOtfUwd8Lmor6pLBqFU21rL%2BW%2BDuZP5OqX6%2F%2B3x9h44fINA2rmNDORegRvsV31rnvvGeiVbPEgDwD33x%2FsfRsfh5T1Yg4KvZCHlWiBWt5FRmcfmHmiTPxHXc%2FAbv1f89%2F%2Bu2E2lmP8C%2Bo%2FiJqLXQOTWKX%2F3yKFhLPonwjDytN29BjqzApn2bYLGQe9RJY9Sspk5GaJhO3CMFsBRh%2FWJI%2Fvg0ew5K%2FnlfnNVgp0vJQigDxvjePKecScFWVCZwhk%2FxAV7KiqMIFpWq5BN700pW1UuJ5K9sPcG%2FAhizJH3R9lYjgWqX%2FyPs94z9R9Ap5Jmrh6buAZvzg%2BDOuxmvhcu78QaVz8Y5r9jVtDSJ7oJ4ganzcIZaBQx%2B2fYcqcClzpJzp8H9%2BgFBnEDKgv8FKlC78p9%2FxTomvorhmjZmnmxRnIbl2mG0KgKmyC9wL%2BEQh6N5wXKgue29F%2F5JzALXA6OP8FB9lUnsqaLcGqrzOJ%2FTlnLDi8aPBjlhLkiU%2FHIWDJG7w0LUgz5UywvlPC4I6uOcqDA1tK9r%2FZ30EJ2R5suiZUO5RMu5B2pI%2BvIK8%2FHC3YR5OaoF4FadvM%3D&X-Amz-Signature=7fee17ad51576b5b47ab930381931ad288c8e59f93b67e457191f193557df069&X-Amz-SignedHeaders=host&response-content-disposition=inline";
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
