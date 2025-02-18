import React from "react";

// Next
import Link from "next/link";

// Icons
import { Download } from "lucide-react";

interface DownloadChronologyProps {
  text?: string;
  className?: string;
  iconClassName?: string;
}

export default function DownloadChronology({ text, className, iconClassName }: DownloadChronologyProps) {
  return (
    <Link href="/api/download-chronology" download="ares-example-chronology.pdf" rel="noopener noreferrer" target="_blank" className={className}>
      {text} <Download className={iconClassName} strokeWidth={2} />
    </Link>
  );
}
