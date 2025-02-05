import Link from 'next/link';
import React from 'react';
import Particles from './components/particles';
import Skills from './components/skills';
import Bio from './components/bio';

const navigation = [
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Home() {
  return (
    <div>
      <div className='flex flex-col items-center justify-center h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black'>
        <nav className='my-16 animate-fade-in'>
          <ul className='flex flex-wrap items-center justify-center gap-4'>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='xl:text-xl sm:text-lg text-sm duration-500 text-zinc-500 hover:text-zinc-300'
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        <div className='hidden h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
        <Particles className='absolute inset-0 -z-10 animate-fade-in' quantity={100} />
        <h1 className='z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text '>
          KChoe
        </h1>
        <div className='hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
        <div className='my-16 text-center animate-fade-in'>
          <h2 className='xl:text-xl sm:text-lg text-sm text-zinc-500 mx-6'>
            Hi, my name is Kevin Choe, I'm a Fullstack developer using React. Check out my{' '}
            <Link
              target='_blank'
              href='https://www.linkedin.com/in/kevinchongwonchoe/'
              className='underline duration-500 hover:text-zinc-300'
            >
              Linkedin
            </Link>
            <wbr /> to send me a message.{' '}
          </h2>
        </div>
      </div>
      <div className=' relative h-screen flex flex-col items-center justify-center bg-gradient-to-bl from-black via-zinc-600/20 to-black'>
        <Skills />
        <Particles className='absolute inset-0 -z-10 animate-fade-in' quantity={100} />
      </div>
      <div className='relative h-screen flex flex-col items-center justify-start bg-gradient-to-tl from-black via-zinc-600/20 to-black'>
        <Bio />
        <Particles className='absolute inset-0 -z-10 animate-fade-in' quantity={100} />
      </div>
    </div>
  );
}
