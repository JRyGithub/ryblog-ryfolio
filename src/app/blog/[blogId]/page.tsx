import { getBlogByName, getBlogsMeta } from "@/lib/blogs/blogs"
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import 'highlight.js/styles/github-dark.css';
import Image from "next/image";

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

  const tags = meta.tags.map((tag, i) => {
    return (
      <Link key={i} href={`/tags/${tag}`}>
        <span className={`badge badge-md badge-primary cursor-pointer md:hover:badge-accent gap-1 select-none`}>
          {tag}
        </span>
      </Link>
    )
  }
  )

  return (
    <div className="w-full flex justify-center p-2">
      <section className="w-full mt-2 prose prose-sm md:prose-xl dark:prose-invert">
        <h2 className="mt-4 mb-2">{meta.title}</h2>
        {meta.image && (
          <Image src={meta.image} height={300} width={300} alt={`${meta.title} image`} className="mx-auto" />
        )}
        <p className="mt-0 text-sm italic">- Joshua Ryland, last updated {pubDate}</p>
        <article>
          {content}
        </article>
        <section>
          <h3>Related:</h3>
          <div className="flex flex-row gap-4">
            {tags}
          </div>
        </section>
        <section>
          <div className="flex flex-row gap-1 mb-10">
            <Link href={'/'}>Home</Link>
            <Link href={'/blog'}>Blogs</Link>
          </div>
        </section>
      </section>
    </div>
  )
}
