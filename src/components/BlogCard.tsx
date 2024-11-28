// components/BlogCard.tsx
import Link from 'next/link'
import Image from 'next/image'

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    slug: string;
    content: Array<{
      text?: string;
      image?: string;
      video?: string;
    }>
  }
}

export default function BlogCard({ post }: BlogCardProps) {
  const firstImage = post.content.find(block => 'image' in block)?.image

  return (
    <Link href={`/post/${post.slug}`}>
      <div className="rounded-lg bg-gray-800 overflow-hidden hover:ring-2 hover:ring-blue-500 transition">
        {firstImage && (
          <div className="relative h-48">
            <Image
              src={firstImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-4">
          <h2 className="text-xl font-semibold">{post.title}</h2>
        </div>
      </div>
    </Link>
  )
}

