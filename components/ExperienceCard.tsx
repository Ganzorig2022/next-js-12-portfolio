import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col items-center space-y-7 flex-shrink-0 rounded-lg w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        alt=''
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>CEO of GanzoTech LLC</h4>
        <p className='font-bold text-2xl mt-1'>GANZO</p>
        <div className='flex space-x-2 my-2'>
          {/* Tech Used */}
          <img
            className='h-10 w-10 rounded-full'
            src='https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text-thumbnail.png'
            alt=''
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text-thumbnail.png'
            alt=''
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text-thumbnail.png'
            alt=''
          />
        </div>
        <p className='uppercase py-5 text-gray-300'>Started work.....</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary points</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </article>
  );
}
