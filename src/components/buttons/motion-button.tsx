"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Next.js
import Link from "next/link";

type MotionButtonProps = {
  buttonText: string;
  buttonHref: string;
  blank?: boolean;
  variant: "primary" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
};

export function MotionButton({ buttonText, buttonHref, variant, size = "lg", blank = true }: MotionButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const fromColor = variant === "primary" ? "bg-primary" : "bg-white";
  const toColor = variant === "primary" ? "bg-white" : "bg-primary";
  const textColor = isHovered ? (variant === "primary" ? "text-zinc-900" : "text-white") : variant === "primary" ? "text-white" : "text-zinc-900";
  const borderColor = isHovered ? (variant === "primary" ? "border-zinc-900" : "border-white") : variant === "primary" ? "border-white" : "border-zinc-900";

  return (
    <Link href={buttonHref} target={blank ? "_blank" : "_self"}>
      <motion.div className={`relative ${fromColor} overflow-hidden rounded-lg border ${borderColor} transition-colors duration-150`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <Button size={size} className={`${textColor} bg-transparent hover:bg-transparent relative z-20 px-6 py-5 font-sans font-medium transition-colors duration-150 w-44`}>
          <span className="flex-1 text-left">{buttonText}</span>
          <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }}>
            <ArrowRight className="h-5 w-5" />
          </motion.div>
        </Button>
        <motion.div className={`absolute inset-0 ${toColor} z-10`} initial={{ y: "100%" }} animate={{ y: isHovered ? "0%" : "100%" }} transition={{ duration: 0.15, ease: "easeInOut" }} />
      </motion.div>
    </Link>
  );
}
