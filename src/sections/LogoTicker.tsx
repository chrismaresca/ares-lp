"use client"

import Image from "next/image"

// Motion
import { motion } from "motion/react"

// Constants
import { logoTickerConstants } from "@/constants/website"

export default function LogoTicker() {
  return (
    <section className="w-full overflow-hidden bg-white py-8 md:py-12">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 pr-14 flex-none"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            {[...logoTickerConstants.logos, ...logoTickerConstants.logos, ...logoTickerConstants.logos, ...logoTickerConstants.logos].map((logo, index) => (
              <div key={index} className="w-[200px] h-[60px] relative">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  fill
                  className="object-contain logo-ticker-image"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

