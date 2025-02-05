'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { isMobile } from 'react-device-detect';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: isMobile ? 0 : 600,
    overflow: 'hidden',
  },
  animate: () => ({
    opacity: 1,
    overflow: 'visible',
    x: 0,
    duration: 1,
    ease: 'linear',
    transition: {
      delay: 0.8,
    },
  }),
};

const Bio = () => {
  return (
    <div>
      <motion.div
        className='bg-white borderBlack rounded-xl px-5 py-8 dark:bg-white/10 dark:text-white/80 lg:max-w-8xl md:max-w-2xl sm:max-w-md mx-4'
        variants={fadeInAnimationVariants}
        initial='initial'
        whileInView='animate'
        viewport={{
          once: true,
        }}
      >
        <h1 className='lg:text-4xl md:text-2xl sm:text-xl font-bold capitalize mb-8 text-center'>A Little About Me</h1>
        <h2 className='lg:text-2xl md:text-xl sm:text-lg font-normal text-center'>
          Hello I am a UCI Graduate with a degree in computer science. I have dabbled in video game development,
          algorithms, software engineering, and web development. Coding is all interconnected and I believe it's
          important to be well rounded in all aspects of coding. However, since I specialize in web development I am
          currently looking for a job as a Fullstack or Frontend engineer. Explore my{' '}
          <Link
            target='_blank'
            href='https://github.com/nivek724/'
            className='underline duration-500 hover:text-zinc-300'
          >
            Github
          </Link>{' '}
          for more projects as well as the code for this portfolio. I'm an athlete, gamer, and music producer in my free
          time and love being enlightened in different fields aside from programming. One of my current outside passions
          is a sport called tricking which I'm working on a project for that you can find on my{' '}
          <Link
            target='_blank'
            href='https://docs.google.com/document/d/1TNmqu-3_s4gEaixy8b2dFz4F7h_huo3xyxXV3z5GpB8/edit?usp=sharing'
            className='underline duration-500 hover:text-zinc-300'
          >
            Resume
          </Link>{' '}
          and github(soon). I'd love to talk about your favorite sport, game, or music so feel free to{' '}
          <Link target='_self' href='/contact' className='underline duration-500 hover:text-zinc-300'>
            contact
          </Link>{' '}
          me!
        </h2>
      </motion.div>
    </div>
  );
};

export default Bio;
