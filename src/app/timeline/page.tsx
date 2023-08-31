'use client';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { jobHistory } from './resources/jobHistory';
import Image from 'next/image';
import FancyTitleBox from '../components/fancyTitleBox/fancyTitleBox';
import { useState } from 'react';
import clsx from 'clsx';

const Timeline = () => {
  const [clickedTimelineElement, setClickedTimelineElement] = useState<string | null>(null);
  const [descriptionHidden, setDescriptionHidden] = useState<string | undefined>(undefined);

  return (
    <div className="flex flex-col justify-center items-center overflow-hidden mt-5 select-none">
      <FancyTitleBox imgHref={'/Josh.jpeg'} />
      <VerticalTimeline lineColor="hsl(var(--p))" layout='1-column-left'>
        {jobHistory.map((job, index) => {
          if (index === 0) {
            return (
              <VerticalTimelineElement
                key={job.company}
                className="vertical-timeline-element--work text-sm pr-5"
                onTimelineElementClick={() => {
                  if (job.company === clickedTimelineElement && !descriptionHidden) {
                    setDescriptionHidden(job.company)
                  } else {
                    setDescriptionHidden(undefined)
                    setClickedTimelineElement(job.company)
                  }
                }}
                contentStyle={{
                  background: !clickedTimelineElement || clickedTimelineElement === job.company ? 'hsl(var(--p))' : 'hsl(var(--n))',
                  color: !clickedTimelineElement || clickedTimelineElement === job.company ? 'hsl(var(--pc))' : 'hsl(var(--nc))',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDuration: '700ms',
                  cursor: 'pointer',
                }}
                contentArrowStyle={{
                  borderRight: !clickedTimelineElement || clickedTimelineElement === job.company ? '7px solid  hsl(var(--p))' : '7px solid  hsl(var(--n))',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDuration: '700ms',
                }}
                date={`${job.startDate} - ${job.endDate}`}
                iconStyle={{
                  background: 'hsl(var(--n))',
                  color: 'hsl(var(--pc))',
                  boxShadow: '0 0 0 4px hsl(var(--p))',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDuration: '700ms',
                }}
                iconClassName="shadow-black"
                icon={
                  <div className='w-full h-full flex flex-col justify-center items-center'>
                    <Image src={job.imageHref} alt={`${job.company}'logo'`} width={20} height={20} />
                  </div>
                }
              >
                <h3 className="vertical-timeline-element-title">
                  {job.company} - {job.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {job.location}
                </h4>
                <div className='flex flex-col gap-1'>
                  <p>{job.description}</p>
                  <div className={clsx(!clickedTimelineElement || clickedTimelineElement === job.company ? "animate-bounce" : "")}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                  {descriptionHidden === job.company && (
                    <ul className='list-disc list-inside bg-primary-focus rounded-lg shadow-lg p-2 transition duration-700 ease-in-out'>
                      {
                        job.furtherDescription && job.furtherDescription.map((description, index) =>
                          <li className='p-1' key={index}>{description}</li>
                        )
                      }
                    </ul>

                  )
                  }

                </div>
              </VerticalTimelineElement>
            );
          }
          return (
            <VerticalTimelineElement
              key={job.company}
              className="vertical-timeline-element--work pr-5"
              onTimelineElementClick={() => {
                if (job.company === clickedTimelineElement && !descriptionHidden) {
                  setDescriptionHidden(job.company)
                } else {
                  setDescriptionHidden(undefined)
                  setClickedTimelineElement(job.company)
                }
              }}
              date={`${job.startDate} - ${job.endDate}`}
              contentStyle={{
                background: clickedTimelineElement === job.company ? 'hsl(var(--p)' : 'hsl(var(--n))',
                color: clickedTimelineElement === job.company ? 'hsl(var(--pc)' : 'hsl(var(--nc))',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDuration: '700ms',
                cursor: 'pointer',
              }}
              iconStyle={{
                background: 'hsl(var(--n))',
                color: 'hsl(var(--sc))', boxShadow: '0 0 0 4px hsl(var(--p))',
              }}
              icon={
                <div className='w-full h-full flex flex-col justify-center items-center'>
                  <Image src={job.imageHref} alt={`${job.company}'logo'`} width={20} height={20} />
                </div>
              }
              contentArrowStyle={{
                borderRight: clickedTimelineElement === job.company ? '7px solid  hsl(var(--p))' : '7px solid  hsl(var(--n))',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDuration: '700ms',
              }}
            >
              <h3 className="vertical-timeline-element-title">
                {job.company} - {job.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {job.location}
              </h4>
              <div className='flex flex-col gap-1'>
                <p>{job.description}</p>
                <div className={clsx(clickedTimelineElement === job.company ? "animate-bounce" : "")}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
                {descriptionHidden === job.company && (
                  <ul className='list-disc list-inside bg-primary-focus rounded-lg shadow-lg p-2 transition duration-700 ease-in-out'>
                    {
                      job.furtherDescription && job.furtherDescription.map((description, index) =>
                        <li className='p-1' key={index}>{description}</li>
                      )
                    }
                  </ul>

                )
                }

              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
