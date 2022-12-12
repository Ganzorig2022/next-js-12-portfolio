import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  // console.log(urlFor(projects[0].technologies[2].image).url());
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{ opacity: 1 }}
      className='h-screen relative overflow-hidden flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      {/* SCROLLABLE CARDS */}
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
        {/* Projects */}
        {projects.map((project, i) => (
          <div
            key={i}
            className='w-screen h-screen flex flex-col space-y-5 items-center justify-center p-20 md:p-44 flex-shrink-0 snap-center'
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt=''
              className='rounded-xl w-[400px] h-[200px] object-cover'
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>
                  Case study {i + 1} of {projects.length}:{' '}
                </span>
                {project.title}
              </h4>

              <div className='flex items-center space-x-2 justify-center'>
                {/* {project?.technologies.map((technology) => (
                  <img
                    key={technology._id}
                    className='h-10 w-10 rounded-full bg-white'
                    src={urlFor(technology.image).url()}
                    alt='Technology image'
                  />
                ))} */}
              </div>

              <p className='text-lg text-center md:text-left'>
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#D7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  );
}
