// app/actions.ts
interface Post {
    id: string
    title: string
    slug: string
    content: Array<{
      text?: string
      image?: string
      video?: string
    }>
}
  
const posts: Post[] = [
  {
    id: '1',
    title: 'First Blog Post',
    slug: 'first-blog-post',
    content: [
      { text: 'Welcome to my first blog post!' },
      { image: 'https://github.com/jackdrakes/ReadMe-Files/blob/main/Blocker/enbling.png?raw=true' },
      { text: 'This is some more content after the image.' },
      { video: 'https://www.youtube.com/embed/ApXoWvfEYVU' },
      { text: 'Welcome to my first blog post!' },
      { image: 'https://github.com/jackdrakes/ReadMe-Files/blob/main/Blocker/enbling.png?raw=true' },
    ]
  },
  {
    id: '2',
    title: 'First Blog Post',
    slug: 'first-blog-post',
    content: [
      { text: 'Welcome to my first blog post!' },
      { image: 'https://github.com/jackdrakes/ReadMe-Files/blob/main/Blocker/enbling.png?raw=true' },
      { text: 'This is some more content after the image.' },
      { video: 'https://www.youtube.com/embed/ApXoWvfEYVU' },
      { text: 'Welcome to my first blog post!' },
      { image: 'https://github.com/jackdrakes/ReadMe-Files/blob/main/Blocker/enbling.png?raw=true' },
    ]
  },
  {
    id: '4',
    title: 'First Blog Post',
    slug: 'first-blog-post',
    content: [
      { text: 'Welcome to my first blog post!' },
      { image: 'https://github.com/jackdrakes/ReadMe-Files/blob/main/Blocker/enbling.png?raw=true' },
      { text: 'This is some more content after the image.' },
      { video: 'https://www.youtube.com/embed/ApXoWvfEYVU' },
      { text: 'Welcome to my first blog post!' },
      { image: 'https://github.com/jackdrakes/ReadMe-Files/blob/main/Blocker/enbling.png?raw=true' },
    ]
  },
  {
    id: '5',
    title: 'First Blog Post',
    slug: 'first-blog-post',
    content: [
      { text: 'Welcome to my first blog post!' },
      { image: 'https://github.com/jackdrakes/ReadMe-Files/blob/main/Blocker/enbling.png?raw=true' },
      { text: 'This is some more content after the image.' },
      { video: 'https://www.youtube.com/embed/ApXoWvfEYVU' },
      { text: 'Welcome to my first blog post!' },
      { image: 'https://github.com/jackdrakes/ReadMe-Files/blob/main/Blocker/enbling.png?raw=true' },
    ]
  },{
    id: '6',
    title: 'First Blog Post',
    slug: 'first-blog-post',
    content: [
      { text: 'Welcome to my first blog post!' },
      { image: 'https://github.com/jackdrakes/ReadMe-Files/blob/main/Blocker/enbling.png?raw=true' },
      { text: 'This is some more content after the image.' },
      { video: 'https://www.youtube.com/embed/ApXoWvfEYVU' },
      { text: 'Welcome to my first blog post!' },
      { image: 'https://github.com/jackdrakes/ReadMe-Files/blob/main/Blocker/enbling.png?raw=true' },
    ]
  }
  // Add more posts as needed
]

export async function getPosts() {
  return posts
}

export async function getPost(slug: string) {
  return posts.find(post => post.slug === slug)
}
  