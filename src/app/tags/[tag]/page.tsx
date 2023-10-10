import { getBlogsMeta } from "@/lib/blogs/blogs";
import Link from "next/link";

export const revalidate = 86400; // 24 Hours

type Props = {
  params: {
    tag: string;
  };
};

export async function generateStaticParams() {
  const blogs = await getBlogsMeta(); //deduped!

  if (!blogs) return [];

  const tags = new Set(blogs.map(blog => blog.tags).flat());

  return Array.from(tags).map(tag => ({ tag }));
}

export function generateMetaData({ params: { tag } }: Props) {
  return {
    title: `Blogs about ${tag}`,
  };
}

export default async function ({ params: { tag } }: Props) {
  const blogs = await getBlogsMeta(); //deduped!

  if (!blogs) return (<div>No Blogs</div>);

  const blogsByTag = blogs.filter(blog => blog.tags.includes(tag));

  if (!blogsByTag.length) {
    return (
      <div>
        <p>No blogs found for tag: {tag}</p>
        <Link href="/">Back Home</Link>
      </div>
    )
  }

  return (
    <>
      <h2>Results for tag: #{tag}</h2>
      <section>
        <ul>
          {blogsByTag.map(blog => {
            return (
              <li key={blog.id}>
                <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
              </li>
            )
          })
          }
        </ul>
      </section>
    </>
  )
}