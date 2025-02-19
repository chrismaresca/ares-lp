"use client";

import Link from "next/link";
import { Linkedin, Mail, Copy, Send, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// Constants
import { footerConstants } from "@/constants/website";

// Radix (shadcn) DropdownMenu primitives
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const email = "founders@areslegal.ai";

  const handleCopy = () => {
    // Copy the email to clipboard
    navigator.clipboard.writeText(email);
    setCopied(true);

    // Delay closing the menu and resetting the copied state
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
      // Optional extra delay for visual feedback
      setTimeout(() => setCopied(false), 300);
    }, 1500);
  };

  // Cleanup any pending timeouts on unmount
  useEffect(() => {
    const cleanup = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
    return cleanup;
  }, []);

  return (
    <footer className="bg-muted/30">
      <div className="container flex flex-col items-center justify-between gap-6 py-8 md:h-24 md:flex-row md:py-0">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          {footerConstants.copyright}
        </p>

        <div className="flex items-center gap-6">
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <button
                className="p-0 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none"
                aria-label="Email options"
              >
                <Mail className="h-5 w-5" />
                <span>{email}</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              {/* Prevent auto-closing by intercepting the onSelect event */}
              <DropdownMenuItem
                onSelect={(e) => {
                  e.preventDefault();
                  handleCopy();
                }}
                className="cursor-pointer"
              >
                {copied ? (
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="mr-2 h-4 w-4" />
                )}
                <span>{copied ? "Copied!" : "Copy email"}</span>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`mailto:${email}`} className="flex items-center cursor-pointer">
                  <Send className="mr-2 h-4 w-4" />
                  <span>Send email</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <button className="p-0 focus:outline-none">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </button>
        </div>
      </div>
    </footer>
  );
}
