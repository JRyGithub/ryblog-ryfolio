'use client'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { jobHistory } from './resources/jobHistory';

const Timeline = () => {
  return (
    <div className='overflow-hidden'>
      <VerticalTimeline lineColor='hsl(var(--a))'>
        {
          jobHistory.map((job, index) => {
            if(index === 0){
              return (
                <VerticalTimelineElement
                className="vertical-timeline-element--work text-sm"
                contentStyle={{ background: 'hsl(var(--pf))', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  hsl(var(--pf))' }}
                date={`${job.startDate} - ${job.endDate}`}
                iconStyle={{ background: 'hsl(var(--sf))', color: 'hsl(var(--a))' }}
                iconClassName='shadow-black'
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
                }
              >
                <h3 className="vertical-timeline-element-title">{job.company} - {job.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{job.location}</h4>
                <p>
                {job.description}
                </p>
              </VerticalTimelineElement>
              )
            }
            return (
              <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={`${job.startDate} - ${job.endDate}`}
              contentStyle={{ background: 'hsl(var(--p))', color: '#fff' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              }
            >
              <h3 className="vertical-timeline-element-title">{job.company} - {job.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{job.location}</h4>
              <p>
                {job.description}
              </p>
            </VerticalTimelineElement>
            )
          })
        }
      </VerticalTimeline>
    </div>
  )
}

export default Timeline;