/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function About({}: Props) {
  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        src='https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/me.jpg?alt=media&token=1b82e3bf-656b-466a-a93c-a0cf17a70d26'
        alt=''
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:h-95 md:w-64 xl:w-[500px] xl:h-[600px]'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is{' '}
          <span className='underline decoration-[#F7AB0A]/50'>little</span>{' '}
          background
        </h4>
        <p>
          I'm Ganzorig. I have started my coding journey in February 2022 since
          i retired from my former career which was geologist since 2010.
        </p>
      </div>
    </div>
  );
}

//tracking-[20px] ==> letter-spacing
