'use client';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { jobHistory } from './resources/jobHistory';
import Image from 'next/image';
import FancyTitleBox from '../components/fancyTitleBox/fancyTitleBox';
import { isMobile } from 'react-device-detect';
import { useEffect, useState } from 'react';

const Timeline = () => {
  const [clickedTimelineElement, setClickedTimelineElement] = useState<string | null>(null);

  return (
    <div className="flex flex-col justify-center items-center overflow-hidden mt-5">
      <FancyTitleBox imgHref={'/Josh.jpeg'} />
      <VerticalTimeline lineColor="hsl(var(--p))" layout='1-column-left'>
        {jobHistory.map((job, index) => {
          if (index === 0) {
            return (
              <VerticalTimelineElement
                key={job.company}
                className="vertical-timeline-element--work text-sm cursor-pointer pr-5"
                onTimelineElementClick={() => setClickedTimelineElement(job.company)}
                contentStyle={{
                  background: !clickedTimelineElement || clickedTimelineElement === job.company ? 'hsl(var(--p))' : 'hsl(var(--n))',
                  color: !clickedTimelineElement || clickedTimelineElement === job.company ? 'hsl(var(--pc))' : 'hsl(var(--nc))',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDuration: '700ms',
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
                <p>{job.description}</p>
              </VerticalTimelineElement>
            );
          }
          return (
            <VerticalTimelineElement
              key={job.company}
              className="vertical-timeline-element--work cursor-pointer pr-5"
              onTimelineElementClick={() => setClickedTimelineElement(job.company)}
              date={`${job.startDate} - ${job.endDate}`}
              contentStyle={{ 
                background: clickedTimelineElement === job.company ? 'hsl(var(--p)': 'hsl(var(--n))', 
                color: clickedTimelineElement === job.company ? 'hsl(var(--pc)' : 'hsl(var(--nc))',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDuration: '700ms',
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
              <p>{job.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
