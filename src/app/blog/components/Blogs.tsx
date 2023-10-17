'use client'

import { getBlogsMeta } from '@/lib/blogs/blogs';
import BlogListItem from './BlogListItem';
import { Meta } from '@/lib/blogs/blogs.ports';
import { useState } from 'react';

type BlogsProps = {
  blogsMeta?: Meta[];
}

export default function Blogs({ blogsMeta }: BlogsProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [search, setSearch] = useState<string>('');

  if (!blogsMeta) {
    return <p>No blogs yet!</p>
  }

  const handleClickedTag = (selected: string) => {
    if (selectedTags.includes(selected)) {
      setSelectedTags(selectedTags.filter(tag => tag !== selected));
    } else {
      setSelectedTags([...selectedTags, selected]);
    }
  }

  const allTags = new Set(blogsMeta.map(blog => blog.tags).flat());

  return (
    <section className='flex flex-col a md:gap-10 md:flex-row md:justify-evenly mx-auto mt-2 md:mt-10 prose prose-xl dark:prose-invert'>
      <div className='flex flex-col items-center content-center gap-5 bg-neutral rounded-lg p-4 h-fit w-[90vw] md:w-full'>
        <h2 className='text-8xl font-bold mt-0 mb-5'><span className='text-primary'>B</span>logs</h2>
        <div className='mb-2'>Grab a ☕ and stay a while!</div>
        <input type="text" placeholder="Search" className="input input-bordered input-primary w-full max-w-xs" onChange={(e) => setSearch(e.target.value)} />
        <div className='flex flex-row flex-wrap gap-3'>
          {
            // @ts-ignore
            [...allTags].map((tag: string) => {
              return (
                <span className={`badge badge-md badge-primary cursor-pointer md:hover:badge-accent gap-1 ${selectedTags.includes(tag) ? 'badge-accent' : ''} select-none`} onClick={() => handleClickedTag(tag)}>
                  {tag}
                  {
                    selectedTags.includes(tag) ?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                      : null
                  }
                </span>
              )
            }
            )
          }
        </div>
      </div>
      <ul className='list-none p-0 w-full'>
        {
          blogsMeta.filter(blog => {
            if (search) {
              return blog.title.toLowerCase().includes(search.toLowerCase()) || blog.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
            }
            return true;
          }
          ).map(blog =>
            <BlogListItem blogMeta={blog} />
          )
        }
      </ul>
    </section>
  )
}
