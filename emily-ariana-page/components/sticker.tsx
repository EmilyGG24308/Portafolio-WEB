import Image from 'next/image'

export type StickerName =
  | 'butterfly-blue'
  | 'butterfly-pink'
  | 'rose-pink'
  | 'heart-pink'
  | 'flower-green'
  | 'stamp-swan'
  | 'stamp-flower'
  | 'fairy'
  | 'sun-green'
  | 'tulips'
  | 'blossom'

type StickerProps = {
  name: StickerName
  /** Tailwind positioning + sizing classes, e.g. "left-4 top-10 w-20" */
  className?: string
  /** rotation in degrees */
  rotate?: number
  /** opacity 0-100 */
  opacity?: number
}

export function Sticker({
  name,
  className = '',
  rotate = 0,
  opacity = 100,
}: StickerProps) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute select-none ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, opacity: opacity / 100 }}
    >
      <Image
        src={`/stickers/${name}.png`}
        alt=""
        width={200}
        height={200}
        className="h-auto w-full drop-shadow-sm"
      />
    </span>
  )
}
