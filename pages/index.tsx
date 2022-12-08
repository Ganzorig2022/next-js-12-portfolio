/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import type { NextPage } from 'next';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    // * scrollbar scrollbar-track-gray-400/2 scrollbar-thumb-[#color] - tailwind scrollbar npm suulgasan.
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
      <Head>
        <title>Ganzo's portfolio</title>
      </Head>

      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* ABOUT */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>

      {/* Skils */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      {/* Contact  */}
      <section id='contact' className='snap-start '>
        <ContactMe />
      </section>

      {/* Footer  */}
      <Link href='#hero'>
        <footer className='sticky bottom-5 w-ful cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img
              src='https://ps.w.org/back-to-the-top-button/assets/icon-256x256.png?rev=2283756'
              alt=''
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

// ******section id='contact' gdg ni daraa ni <Link href={'#skills'}/> tag dr darhad tuhain component ruu userne.!!!!!!!!!!!!!!!!!!!!
//snap-center ==> scroll-snap-align:center ==> scroll-dhod tuhain component dr ochxod.... SNAPPABLE
