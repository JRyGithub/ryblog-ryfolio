import { getBlogsMeta } from '@/lib/blogs/blogs';

export default async function Blogs() {
  const blogs = await getBlogsMeta();

  if (!blogs) {
    return <p>No blogs yet!</p>
  }

  return (
    <section className='mt-6 mx-auto max-w-2xl'>
      <h2 className='text-4xl font-bold'>Blog</h2>
      <ul className='list-none p-0 w-full'>
        {
          blogs.map(blog =>
            <li>{blog.title}</li>
          )
        }
      </ul>
    </section>
  )
}
