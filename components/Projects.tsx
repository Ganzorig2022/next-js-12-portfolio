import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
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
              src='https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              alt=''
              className='rounded-xl w-[400px] h-[200px] object-cover'
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>
                  Case study {i + 1} of {projects.length}:{' '}
                </span>
                Spotify clone
              </h4>
              <p className='text-lg text-center md:text-left'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate non ratione minima numquam aspernatur magni dolorem
                ipsam, laboriosam et alias sequi ipsa exercitationem deserunt ab
                nam repudiandae tenetur vero fuga.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#D7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  );
}
