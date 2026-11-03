'use client';

import { useState, useEffect } from 'react';

export default function AnalogClock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!time) return null;

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDegrees = seconds * 6;
  const minuteDegrees = minutes * 6 + seconds * 0.1;
  const hourDegrees = (hours % 12) * 30 + minutes * 0.5;

  const formattedDate = time.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const numbers = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Analog Clock Face */}
      <div className="relative w-36 h-36 rounded-full border-4 border-red-500 bg-black/70 backdrop-blur-sm flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.5)]">
        
        {/* Evenly spaced hour numbers using CSS rotation loop */}
        {numbers.map((num, i) => {
          const angle = i * 30;
          return (
            <span
              key={num}
              className="absolute text-[10px] text-gray-300 font-bold"
              style={{
                transform: `rotate(${angle}deg) translate(0, -50px) rotate(-${angle}deg)`,
              }}
            >
              {num}
            </span>
          );
        })}

        {/* Center Pin */}
        <div className="absolute w-2.5 h-2.5 bg-red-500 rounded-full z-20 shadow-[0_0_10px_rgba(239,68,68,1)]" />

        {/* Hour Hand */}
        <div
          className="absolute w-1 h-8 bg-white rounded-t-full origin-bottom bottom-1/2 z-10 transition-transform duration-300 ease-linear"
          style={{ transform: `rotate(${hourDegrees}deg)` }}
        />

        {/* Minute Hand */}
        <div
          className="absolute w-1 h-12 bg-[#5ce1e6] rounded-t-full origin-bottom bottom-1/2 z-10 transition-transform duration-300 ease-linear"
          style={{ transform: `rotate(${minuteDegrees}deg)` }}
        />

        {/* Second Hand (Glitch-free at 12 o'clock) */}
        <div
          className="absolute w-[2px] h-14 bg-red-500 rounded-t-full origin-bottom bottom-1/2 z-10"
          style={{ 
            transform: `rotate(${secondDegrees}deg)`,
            transition: seconds === 0 ? 'none' : 'transform 0.2s cubic-bezier(0.4, 2.08, 0.55, 0.44)'
          }}
        />
      </div>

      {/* Date Display Underneath */}
      <div className="text-white font-abrilfatface text-xs sm:text-sm tracking-wide text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
        {formattedDate}
      </div>
    </div>
  );
}