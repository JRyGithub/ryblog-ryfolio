import { Blog, FileTree, Meta } from './blogs.ports';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeAutoLinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import Video from '@/app/components/video/Video';
import CustomBlogImage from '@/app/components/customBlogImage/CustomBlogImage';

const BLOGS_URL =
  'https://api.github.com/repos/JRyGithub/ryblog-mdx-blogs/git/trees/main?recursive=1';
const BLOG_URL =
  'https://raw.githubusercontent.com/JRyGithub/ryblog-mdx-blogs/main/';

export async function getBlogByName(
  blogName: string,
): Promise<Blog | undefined> {
  const res = await fetch(`${BLOG_URL}${blogName}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-Github-Api-Version': '2022-11-28',
    },
  });

  if (!res.ok) return undefined;

  const rawMdx = await res.text();

  if (rawMdx === '404: Not Found') return undefined; //Github returns 200 if not found

  const { frontmatter, content } = await compileMDX<Omit<Meta, 'id'>>({
    source: rawMdx,
    components: {
      Video,
      CustomBlogImage,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          // @ts-ignore
          rehypeHighlight,
          rehypeSlug,
          [
            rehypeAutoLinkHeadings,
            {
              behavior: 'wrap',
            },
          ],
        ],
      },
    },
  });

  const id = blogName.replace(/\.mdx$/, '');

  const blogObj: Blog = {
    meta: {
      id,
      ...frontmatter,
    },
    content,
  };

  return blogObj;
}

export async function getBlogsMeta(): Promise<Meta[] | undefined> {
  const res = await fetch(BLOGS_URL, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-Github-Api-Version': '2022-11-28',
    },
  });

  if (!res.ok) return undefined;

  const repoFile: FileTree = await res.json();

  const mdxBlogsArray = repoFile.tree.filter((file) =>
    file.path.endsWith('.mdx'),
  );

  const blogsMeta: Meta[] = [];

  for (const blogFile of mdxBlogsArray) {
    const blog = await getBlogByName(blogFile.path);

    if (blog) blogsMeta.push(blog.meta);
  }

  return blogsMeta;
}
