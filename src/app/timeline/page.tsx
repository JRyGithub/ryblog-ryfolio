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
  const [iconSizes, setIconSizes] = useState<[number,number]>([35,35]);

  useEffect(() => {
    if(isMobile) setIconSizes([20,20]);
    else setIconSizes([35,35]);
  }, [isMobile]);

  return (
    <div className="flex flex-col justify-center items-center overflow-hidden mt-5">
      <FancyTitleBox imgHref={'/Josh.jpeg'} />
      <VerticalTimeline lineColor="hsl(var(--a))">
        {jobHistory.map((job, index) => {
          if (index === 0) {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work text-sm"
                contentStyle={{
                  background: 'hsl(var(--af))',
                  color: 'hsl(var(--n))',
                }}
                contentArrowStyle={{ borderRight: '7px solid  hsl(var(--a))' }}
                date={`${job.startDate} - ${job.endDate}`}
                iconStyle={{
                  background: 'hsl(var(--af))',
                  color: 'hsl(var(--s))',
                }}
                iconClassName="shadow-black"
                icon={
                  <div className='w-full h-full flex flex-col justify-center items-center'>
                    <Image src={job.imageHref} alt={`${job.company}'logo'`} width={iconSizes[0]} height={iconSizes[1]} />
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
              className="vertical-timeline-element--work"
              date={`${job.startDate} - ${job.endDate}`}
              contentStyle={{ background: 'hsl(var(--b3))', color: '#fff' }}
              iconStyle={{ background: 'hsl(var(--a))', color: '#fff' }}
              icon={
                <div className='w-full h-full flex flex-col justify-center items-center'>
                  <Image src={job.imageHref} alt={`${job.company}'logo'`} width={iconSizes[0]} height={iconSizes[1]} />
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
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
