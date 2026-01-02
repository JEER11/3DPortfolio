import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useState, useEffect } from "react";

import { CTA } from "../components";
import { experiences, skills } from "../constants";
import { contact } from "../assets/icons";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(document.documentElement.classList.contains('dark'));

  useEffect(() => {
    // Create an observer to watch for dark mode changes
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);
  return (
    <section className='max-container'>
      <h1 className='head-text dark:text-white'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Jeraldine!
        </span>{" "}
        
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500 dark:text-slate-300'>
        <p>
          Computer Engineer at NJIT, specializing in software development, Computer communications and architecture. I have a passion for creating, learning and using technology to solve real world problems. 
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text dark:text-white'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12 skills-section'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text dark:text-white'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500 dark:text-slate-300'>
          <p>
            Currently looking for an internship or full-time opportunity to gain hands on experience in the field of software, computer and electrical engineering. I am eager to apply my skills and knowledge in a real world setting, while also learning from industry professionals.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                dateClassName='dark:text-slate-300'
                iconStyle={{ 
                  background: `radial-gradient(circle at center, rgba(0, 0, 0, 0.7) 0%, transparent 80%), ${experience.iconBg}`,
                  boxShadow: 'none'
                }}
                icon={
                  <img
                    src={experience.icon || contact}
                    alt={experience.company_name}
                    style={{ 
                      width: experience.iconStyle?.width || '60%',
                      height: experience.iconStyle?.height || '60%',
                      objectFit: 'contain',
                      position: 'absolute',
                      top: experience.iconStyle?.top || '50%',
                      left: experience.iconStyle?.left || '50%',
                      transform: `translate(-50%, -50%) ${experience.iconScale ? `scale(${experience.iconScale})` : ''}`
                    }}
                  />
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                  background: isDarkMode ? '#0f172a' : '#fff',
                }}
                contentArrowStyle={{
                  borderRight: isDarkMode ? '7px solid #0f172a' : '7px solid #fff',
                }}
              >
                <div>
                  <h3 className='text-black dark:text-white text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 dark:text-slate-300 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 dark:text-slate-400 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200 dark:border-slate-700' />

      <CTA />
    </section>
  );
};

export default About;
