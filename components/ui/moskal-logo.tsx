import Image from "next/image"
import { MoskalIcon } from "./moskal-icon"

interface MoskalLogoProps {
  iconSize?: number
  textHeight?: number
  className?: string
  iconOnly?: boolean
}

export function MoskalLogo({ iconSize = 28, textHeight = 24, className = "", iconOnly = false }: MoskalLogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <MoskalIcon size={iconSize} />
      {!iconOnly && (
        <div className="relative" style={{ height: textHeight, width: textHeight * 4 }}>
          <Image
            src="/moskal-text.svg"
            alt="Moskal"
            fill
            sizes="(max-width: 768px) 120px, 150px"
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      )}
    </div>
  )
}
