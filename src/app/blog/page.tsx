import Blogs from "./components/Blogs";
export const revalidate = 86400; // 24 Hours

export default async function () {
  return <Blogs />
}
