'use client';

import AnalogClock from '@/components/AnalogClock';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative w-full h-[75vh] sm:h-[80vh] flex items-center justify-center overflow-hidden rounded-2xl mt-2 sm:mt-4">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="/Hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10" />

            {/* Feature words on the side */}
            <motion.div 
                initial="hidden"
                animate="show"
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: { staggerChildren: 0.25, delayChildren: 0.2 }
                    }
                }}
                className="absolute top-2 left-1 sm:left-4 z-20 flex flex-col gap-0.5 sm:gap-4 w-20 sm:w-40 text-center font-bungee text-lg sm:text-3xl xl:text-6xl tracking-wider select-none drop-shadow-[0_0_15px_rgba(92,225,230,0.4)]"
            >
               <motion.span 
                   variants={{ hidden: { y: -80, opacity: 0 }, show: { y: 0, opacity: 1 } }}
                   transition={{ type: "spring", stiffness: 120, damping: 14 }}
                   whileHover={{ 
                       rotate: [-6, 6, -6, 6, 0],
                       transition: { type: "tween", duration: 0.4, ease: "easeInOut" }
                   }}
                   className="text-[#5ce1e6] cursor-pointer inline-block"
               >
                   Fast
               </motion.span>
               <motion.span 
                   variants={{ hidden: { y: -80, opacity: 0 }, show: { y: 0, opacity: 1 } }}
                   transition={{ type: "spring", stiffness: 120, damping: 14 }}
                   whileHover={{ 
                       rotate: [6, -6, 6, -6, 0],
                       transition: { type: "tween", duration: 0.4, ease: "easeInOut" }
                   }}
                   className="text-white cursor-pointer inline-block"
               >
                   Secure
               </motion.span>
               <motion.span 
                   variants={{ hidden: { y: -80, opacity: 0 }, show: { y: 0, opacity: 1 } }}
                   transition={{ type: "spring", stiffness: 120, damping: 14 }}
                   whileHover={{ 
                       rotate: [-6, 6, -6, 6, 0],
                       transition: { type: "tween", duration: 0.4, ease: "easeInOut" }
                   }}
                   className="text-[#5ce1e6] cursor-pointer inline-block"
               >
                   Reliable
               </motion.span>
            </motion.div>

            {/* Analog Clock: Top-Right on Mobile, Bottom-Right on Medium/PC/LG Screens */}
            <motion.div 
                initial={{ y: -80, opacity: 0, scale: 0.7 }}
                animate={{ 
                    y: 0, 
                    opacity: 1, 
                    scale: 0.7,
                    rotate: [0, -3, 3, -3, 3, 0] 
                }}
                transition={{
                    y: { type: 'spring', stiffness: 140, damping: 10, delay: 0.6 },
                    opacity: { duration: 0.5, delay: 0.6 },
                    scale: { duration: 0.5, delay: 0.6 },
                    rotate: { type: 'tween', delay: 0.8, duration: 0.8, ease: "easeInOut" }
                }}
                whileHover={{ 
                    scale: 0.75, 
                    rotate: [0, 5, -5, 0],
                    transition: { rotate: { type: "tween", duration: 0.4 } }
                }}
                className="absolute top-2 right-2 md:top-auto md:bottom-6 md:right-4 z-20 scale-[0.45] sm:scale-75 md:scale-100 origin-top-right md:origin-bottom-right cursor-pointer"
            >
                <AnalogClock />
            </motion.div>

            {/* Description text: positioned at the bottom-left on md+ screens */}
            <motion.div 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 140, damping: 14, delay: 0.6 }}
                className="absolute bottom-6 left-4 z-25 max-w-[220px] sm:max-w-xs hidden md:block text-xs sm:text-sm lg:text-base text-gray-100 font-abrilfatface drop-shadow-[0_0_12px_rgba(0,0,0,0.9)]"
            >
                <p>Experience the fastest zero-hardware facial recognition system built for modern teams. Securely mark attendance from any employee device within authorized organization zones.</p>
            </motion.div>

            {/* Hero Content */}
            <motion.div 
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 180, damping: 10, delay: 0.4 }}
                className="relative z-25 text-center px-4 max-w-xs sm:max-w-lg flex flex-col items-center justify-center gap-4 pt-12 sm:pt-0"
            >
                <h1 className="text-xl sm:text-4xl xl:text-6xl text-white font-kings tracking-wide [-webkit-text-stroke:1px_rgba(220,38,38,0.7)] drop-shadow-[0_0_20px_rgba(239,68,68,0.7)]">
                    Welcome to FaceMark
                </h1>
                
                <p className="text-[11px] sm:text-base xl:text-xl text-white font-abrilfatface w-full max-w-md">
                    Next-generation facial recognition attendance tracking system built for speed and security.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full sm:w-auto items-center mt-2">
                    {/* Enroll Button */}
                    <motion.a
                        href="/Enroll"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        className="w-full sm:w-auto text-center bg-red-600 hover:bg-red-500 rounded-lg px-6 py-2.5 sm:py-3 cursor-pointer text-white font-abrilfatface text-xs sm:text-base border-2 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.8)] hover:shadow-[0_0_50px_rgba(239,68,68,1),0_0_25px_rgba(239,68,68,0.9)] transition-colors duration-0"
                    >
                        Enroll
                    </motion.a>

                    {/* Check-In Button */}
                    <motion.a
                        href="/Check-In"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        className="w-full sm:w-auto text-center bg-black hover:bg-red-600 rounded-lg px-6 py-2.5 sm:py-3 cursor-pointer text-white font-abrilfatface text-xs sm:text-base border-2 border-red-500 transition-colors duration-0 hover:shadow-[0_0_50px_rgba(239,68,68,1),0_0_25px_rgba(239,68,68,0.9)]"
                    >
                        Check-In
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
    </div>
  );
}