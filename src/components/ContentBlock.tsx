// components/ContentBlock.tsx
import Image from 'next/image'

interface ContentBlockProps {
  block: {
    text?: string
    image?: string
    video?: string
  }
}

export default function ContentBlock({ block }: ContentBlockProps) {
  if (block.text) {
    return <p className="text-lg">{block.text}</p>
  }

  if (block.image) {
    return (
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <Image
          src={block.image}
          alt="Blog content"
          fill
          className="object-fit"
        />
      </div>
    )
  }

  if (block.video) {
    return (
      <div className="aspect-video">
        <iframe
          src={block.video}
          className="w-full h-full rounded-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return null
}