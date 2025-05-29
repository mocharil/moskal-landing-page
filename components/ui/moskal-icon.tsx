"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface MoskalIconProps {
  className?: string
  size?: number
}

export function MoskalIcon({ className, size = 24 }: MoskalIconProps) {
  return (
    <Image
      src="/moskal-icon.png"
      alt="Moskal"
      width={size}
      height={size}
      className={cn("object-contain", className)}
      priority
    />
  )
}

// SVG version for better scalability
export function MoskalIconSVG({ className, size = 24 }: MoskalIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <circle cx="50" cy="50" r="50" fill="#0047AB" />
      <path
        d="M25 70 L40 55 L55 65 L75 30"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M65 30 L75 30 L75 40"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
