"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import Link from "next/link";

// Shadcn
import { Button } from "@/components/ui/button";

// Icons
import { ArrowRightIcon } from "lucide-react";

type TextOption = {
  text: string;
  href: string;
};

type TextOptions = {
  textOptions: TextOption[];
  blank?: boolean;
};

type MotionButtonWithCustomIconProps = {
  size?: "sm" | "lg" | "default" | "icon" | null | undefined;
  fromColor?: string;
  toColor?: string;
  CustomIcon?: React.ElementType;
  textOptions?: TextOptions;
  /** If true, the text and icon will change color on hover */
  switchTextColor?: boolean;
};

export function MotionButtonWithCustomIcon({
  size = "lg",
  // Default non-hovered background: bg-primary
  fromColor = "bg-primary",
  // Hover background: bg-black
  toColor = "bg-black",
  CustomIcon = ArrowRightIcon,
  textOptions = {
    textOptions: [
      { text: "View Our Projects", href: "/projects" },
      { text: "Read Our Blog", href: "/articles" }
    ],
    blank: true
  },
  switchTextColor = true,
}: MotionButtonWithCustomIconProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    // Only cycle text if more than one option exists.
    if (textOptions.textOptions.length < 2) return;

    let timer: NodeJS.Timeout;
    if (!isHovered) {
      timer = setInterval(() => {
        setCurrentTextIndex((prev) => (prev + 1) % textOptions.textOptions.length);
      }, 2500);
    }
    return () => clearInterval(timer);
  }, [textOptions.textOptions.length, isHovered]);

  const getIconSize = () => {
    switch (size) {
      case "sm":
        return "h-[1.2rem] w-[1.2rem]";
      case "lg":
        return "h-[1.35rem] w-[1.35rem]";
      case "default":
        return "h-[1.2rem] w-[1.2rem]";
      default:
        return "h-[1.35rem] w-[1.35rem]";
    }
  };

  return (
    <Link 
      href={textOptions.textOptions.length > 1 
        ? textOptions.textOptions[currentTextIndex].href 
        : textOptions.textOptions[0].href
      } 
      target={textOptions.blank ? "_blank" : "_self"}
    >
      <motion.div
        className={`relative ${fromColor} hover:${fromColor} z-0 overflow-hidden animate-fade-up delay-700 duration-1000 rounded-md group`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Button size={size} className={`bg-inherit hover:bg-transparent relative z-20 w-[200px] ${switchTextColor ? "group-hover:text-black" : ""} transition-all duration-400 ease-[0.22,1,0.36,1]`}>
          <div className="flex items-center justify-between w-full">
            <div className="relative overflow-hidden flex-1 mr-4">
              {textOptions.textOptions.length > 1 ? (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTextIndex}
                    initial={{ y: 20, opacity: 0, scale: 1 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      scale: isHovered ? 1.02 : 1,
                    }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{
                      duration: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="block text-center tracking-tight"
                  >
                    {textOptions.textOptions[currentTextIndex].text}
                  </motion.span>
                </AnimatePresence>
              ) : (
                <motion.span
                  className="block text-center tracking-tight"
                  animate={{
                    scale: isHovered ? 1.02 : 1,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {textOptions.textOptions[0].text}
                </motion.span>
              )}
            </div>
            <CustomIcon
              className={`transition-all duration-700 ease-[0.22,1,0.36,1] ${getIconSize()} flex-shrink-0 ${switchTextColor ? "group-hover:text-black" : ""}`}
              style={{
                transform: isHovered ? "translateX(8px)" : "translateX(0)",
                transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />
          </div>
        </Button>
        <motion.div
          className={`absolute inset-0 ${toColor} rounded-md z-10 group-hover:border-2 group-hover:border-black transition-[border] ease-[0.22,1,0.36,1]`}
          initial={{ y: "100%" }}
          animate={{ y: isHovered ? "0%" : "100%" }}
          exit={{ y: "100%" }}
          transition={{
            duration: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </motion.div>
    </Link>
  );
}
