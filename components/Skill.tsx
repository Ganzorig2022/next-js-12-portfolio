import React from 'react';
import { motion } from 'framer-motion';
import { Skill as SkillType } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  skill: SkillType;
  directionLeft?: boolean;
};

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className='rounded-full border border-gray-500 object-contain w-16 h-16 md:h-24 md:w-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out bg-white'
      />

      {/* hover-lohoor 100% text ni garch irne. */}
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:h-24 md:w-24 xl:w-28 xl:h-28 rounded-full'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100 '>
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

//https://tailwindcss.com/docs/hover-focus-and-other-states

//Styling based on parent state (group-{modifier})
// When you need to style an element based on the state of some parent element, mark the parent with the group class, and use group-* modifiers like group-hover to style the target element:
