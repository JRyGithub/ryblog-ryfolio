import TextLink from "@/app/components/textLink/textLink";
import { Meta } from "@/lib/blogs/blogs.ports";
import Link from "next/link";

type BlogListItemProps = {
  blogMeta: Meta;
};

const BlogListItem = ({ blogMeta }: BlogListItemProps) => {
  const tagString = blogMeta.tags.join(', ');

  return (
    <li key={blogMeta.id}>
      <TextLink href={`/blog/${blogMeta.id}`}>{blogMeta.title}</TextLink>
      <p className="italic text-xs mt-0 mb-0" >{tagString}</p>
      <p className="text-sm mt-0 mb-0">{blogMeta.date}</p>
    </li>
  )
}

export default BlogListItem;