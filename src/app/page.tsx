// app/page.tsx
import { getPosts } from '@/app/actions'
import BlogCard from '@/components/BlogCard'

export default async function Home() {
  const posts = await getPosts()
  
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  )
}

