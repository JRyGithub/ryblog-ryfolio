import Blogs from "@/app/blog/components/Blogs";
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

export function generateMetadata({ params: { tag } }: Props) {
  return {
    title: `Blogs about ${tag}`,
  };
}

export default async function ({ params: { tag } }: Props) {
  const blogs = await getBlogsMeta(); //deduped!

  return (
    <Blogs blogsMeta={blogs} optionalTag={[tag]} />
  )
}