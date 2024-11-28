import { getPost } from '@/app/actions'
import ContentBlock from '@/components/ContentBlock'
import LikeButton from '@/components/LikeButton'

export default async function PostPage({ params }: { params: Promise<{ slug: string }>}) {
  const { slug } = await params; // No need to await here
  
  const post = await getPost(slug);
  
  if (!post) return <div>Post not found</div>

  return (
    <article className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <div className="space-y-8">
        {post.content.map((block, index) => {
          return <ContentBlock key={index} block={block} />
        })}
      </div>
      <div className="mt-8">
        <LikeButton postId={post.id} />
      </div>
    </article>
  )
}