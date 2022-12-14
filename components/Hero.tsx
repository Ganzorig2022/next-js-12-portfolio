/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from '../components/BackgroundCircles';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, my name is ${pageInfo.name}`,
      'guy-who-loves-learning-things',
      '<ButLovesToCodeMore',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img
        src={urlFor(pageInfo.heroImage).url()}
        alt=''
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
      />
      <div className='z-20 '>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          {pageInfo.role}
        </h2>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#f7ab0a' />
        </h1>

        <div className='pt-5'>
          <Link href={'#about'}>
            <button className='px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>
              About
            </button>
          </Link>
          {/* https://tailwindcss.com/docs/adding-custom-styles */}
          {/* globals.css dr custom heroButton class uusgew.  */}
          <Link href={'#experience'}>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href={'#skills'}>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href={'#projects'}>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

//tracking-[15px] ==> letter-spacing:15px
