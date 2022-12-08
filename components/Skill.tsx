import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src='https://media.istockphoto.com/id/1413514709/photo/stylized-3d-javascript-icon-side-view.jpg?s=612x612&w=is&k=20&c=gT55FPqk5MMuUd7LDCYaBFOHQSqWBwCum9-ksyl5qd8='
        className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
      />

      {/* hover-lohoor 100% text ni garch irne. */}
      <div className='absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:w-32 xl:h-32 rounded-full'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100 '>100%</p>
        </div>
      </div>
    </div>
  );
}

//https://tailwindcss.com/docs/hover-focus-and-other-states

//Styling based on parent state (group-{modifier})
// When you need to style an element based on the state of some parent element, mark the parent with the group class, and use group-* modifiers like group-hover to style the target element:
