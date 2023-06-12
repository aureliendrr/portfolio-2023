"use client"

import React from 'react';
import { useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import RoundedButton from './RoundedButton';
import { RiArrowRightFill, RiArrowLeftFill } from 'react-icons/ri'

interface ICarouselProps {
  className?: string;
  children: JSX.Element[];
  autoSlide?: boolean;
  interval?: number;
}

const Carousel = ({ className, children: slides, autoSlide = false, interval = 3000 }: ICarouselProps) => {

  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
  const next = () => setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));

  const intervalRef: { current: NodeJS.Timeout | null } = React.useRef(null);

  useEffect(() => {
    if (!autoSlide) return;
    const timer = setInterval(next, interval);
    intervalRef.current = timer;
    return () => clearInterval(timer);
  }, []);

  const stopTimer = () => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
  };

  return (
    <div className={`${className} md:basis-0 overflow-hidden relative rounded-2xl`}>
      <div className='flex h-full transition-transform ease-in-out duration-500' style={{ transform: `translateX(-${current * 100}%` }}>{slides}</div>
      <div className='absolute inset-0 flex items-center justify-between p-4 pointer-events-none'>
        <RoundedButton className='pointer-events-auto' onClick={() => { prev(), stopTimer() }}><RiArrowLeftFill /></RoundedButton>
        <RoundedButton className='pointer-events-auto' onClick={() => { next(), stopTimer() }}><RiArrowRightFill /></RoundedButton>
      </div>

      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => { setCurrent(index), stopTimer() }}
              className={`cursor-pointer transition-all w-[10px] h-[10px] rounded-full ${current === index ? "bg-main" : "bg-second"}`}>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel;