// components/LikeButton.tsx
'use client'

import { useState } from 'react'
import { HeartIcon } from 'lucide-react'

interface LikeButtonProps {
  postId: string
}

export default function LikeButton({ postId }: LikeButtonProps) {
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(0)


  const handleLike = async () => {
    setLiked(!liked) 
    setCount(prev => liked ? prev - 1 : prev + 1) 

    console.log(postId)
    // Here you would typically make an API call to update the like count
  }

  return (
    <button
      onClick={handleLike}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition
        ${liked ? 'bg-pink-600 text-white' : 'bg-gray-800 hover:bg-gray-700'}`}
    >
      <HeartIcon className={liked ? 'fill-current' : ''} />
      <span>{count}</span>
    </button>
  )
}