import { getBlogsMeta } from "@/lib/blogs/blogs";
import Blogs from "./components/Blogs";
export const revalidate = 86400; // 24 Hours

export default async function () {
  const blogs = await getBlogsMeta();

  return <Blogs blogsMeta={blogs} />
}
