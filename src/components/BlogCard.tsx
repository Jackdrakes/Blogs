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
      <div className="lg:rounded-lg  bg-gray-800 overflow-hidden hover:ring-2 hover:ring-blue-500 transition">
        {firstImage && (
          <div className="relative h-48 md:h-50">
            <Image
              src={firstImage}
              alt={post.title}
              fill
              className="object-cover"
            />

            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-transparent to-transparent">
              <h2 className="text-xl font-semibold text-white truncate">{post.title}</h2>
            </div>
          </div>
          
        )}
        
      </div>
    </Link>
  )
}

