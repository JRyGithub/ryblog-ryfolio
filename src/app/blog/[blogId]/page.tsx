import { getBlogByName, getBlogsMeta } from "@/lib/blogs/blogs"
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import 'highlight.js/styles/github-dark.css';

export const revalidate = 86400; // 24 Hours

// Creates slugs for all blogs
export async function generateStaticParams() {
  const blogs = await getBlogsMeta(); //deduped!

  if (!blogs) return [];

  return blogs.map(blog => ({
    blogId: blog.id
  }));
}

type GenerateMetaDataProps = {
  params: {
    blogId: string
  }
}

// Simply generates the metadata for the page from the slug
export async function generateMetaData({ params: { blogId } }: GenerateMetaDataProps) {
  const blog = await getBlogByName(`${blogId}.mdx`); //deduped!

  if (!blog) {
    return {
      title: 'Blog not found',
    }
  }

  return {
    title: blog.meta.title,
  }
}

export default async function ({ params: { blogId } }: GenerateMetaDataProps) {
  const blog = await getBlogByName(`${blogId}.mdx`); //deduped!

  if (!blog) {
    console.log({ blogId })
    return notFound();
  }

  const { meta, content } = blog;

  const pubDate = meta.date;

  const tags = meta.tags.map((tag, i) =>
    <Link key={i} href={`/tags/${tag}`}>{tag}</Link>
  )

  return (
    <>
      <h2 className="text-3xl mt-4 mb-0">{meta.title}</h2>
      <p className="mt-0 text-sm">{pubDate}</p>
      <article>
        {content}
      </article>
      <section>
        <h3>Related:</h3>
        <div className="flex flex-row gap-4">
          {tags}
        </div>
      </section>
      <p className="mb-10">
        <Link href={'/'}>Home</Link>
      </p>
    </>
  )
}
