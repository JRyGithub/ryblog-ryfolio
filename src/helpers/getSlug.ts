import matter from 'gray-matter';
import { join } from 'path';
import fs from 'fs';

const DOCS_DIRECTORY = 'docs';

export async function getSlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(DOCS_DIRECTORY, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}
