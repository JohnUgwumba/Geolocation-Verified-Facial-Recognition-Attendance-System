'use client';

import { useState, useRef } from 'react';
import { Menu, Phone, Mail, MapPin } from 'lucide-react';
import './globals.css';
import { FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";
import { motion, AnimatePresence } from 'framer-motion';

// Import fonts cleanly from your root components folder
import { fugazOne, abrilFatface, arbutus, creepster, kings, bungee } from '@/components/fonts';

const contact = {
  phone: '+2347080506722',
  email: 'johnugwumba@gmail.com',
  location: 'Nigeria',
};

const menuItems = ['Home', 'Enroll','Check-In', 'Contact'];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isAnimatingRef = useRef(false);

  const toggleSidebar = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <html 
      lang="en" 
      suppressHydrationWarning 
      className={`${fugazOne.variable} ${abrilFatface.variable} ${arbutus.variable} ${creepster.variable} ${kings.variable} ${bungee.variable} dark h-full`}
    >
      <body className="bg-background text-foreground antialiased min-h-screen flex flex-col m-0 p-0 mx-6 sm:mx-16 bg-black relative">
        
        {/* Header / Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md px-4 sm:px-16 py-3 sm:py-4 flex justify-between items-center">
          
          {/* Logo slides in from the left with a bouncy spring */}
          <motion.div 
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 220, damping: 10 }}
            className="flex flex-col items-start"
          >
            {/* Top Row: Icon + "aceMark" scaled down on small screens */}
            <div className="flex items-center gap-1 sm:gap-1.5">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-red-500 flex justify-center items-center shadow-[0_0_10px_rgba(239,68,68,0.8)] shrink-0">
                <span className="text-lg sm:text-2xl font-arbutus font-bold text-[#5ce1e6]">F</span>
              </div>
              <span className="text-lg sm:text-3xl text-white font-arbutus tracking-wide leading-none">aceMark</span>
            </div>

            {/* Bottom: "Attendance" label */}
            <p className="text-[10px] sm:text-sm md:text-base text-gray-300 pl-8 sm:pl-11 font-fugazone tracking-widest -mt-1 sm:-mt-1.5">
              Attendance
            </p>
          </motion.div>

          {/* Menu Button & Unfolding Sidebar slides in from the right with a bouncy spring */}
          <motion.div 
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 220, damping: 10 }}
            className="relative flex flex-col items-end"
          >
            <motion.div 
              onClick={toggleSidebar}
              className="bg-black w-10 h-10 sm:w-14 sm:h-14 rounded-xl border-2 border-red-500 flex justify-center items-center cursor-pointer shadow-[0_0_15px_rgba(239,68,68,0.5)] hover:shadow-[0_0_35px_rgba(239,68,68,1),0_0_10px_rgba(239,68,68,0.8)] transition-shadow duration-300 z-10"
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-[#5ce1e6]" />
            </motion.div>

            <AnimatePresence 
              onExitComplete={() => {
                isAnimatingRef.current = false;
              }}
            >
              {isSidebarOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0, scaleY: 0 }}
                  animate={{ opacity: 1, height: 'auto', scaleY: 1 }}
                  exit={{ opacity: 0, height: 0, scaleY: 0 }}
                  style={{ originY: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                  onAnimationComplete={() => {
                    isAnimatingRef.current = false;
                  }}
                  className="absolute top-10 sm:top-14 -right-5 sm:-right-7 flex flex-col gap-0.5 sm:gap-1 w-max z-50 overflow-visible pt-1 pr-3 pb-3 items-end"
                >
                  <motion.div 
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={{
                      show: {
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.05,
                        }
                      },
                      hidden: {
                        transition: {
                          staggerChildren: 0.05,
                          staggerDirection: -1
                        }
                      }
                    }}
                    className="flex flex-col gap-0.5 sm:gap-1 items-end"
                  >
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={{
                          hidden: { opacity: 0, y: -15 },
                          show: { opacity: 1, y: 0 }
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        className="relative bg-black hover:bg-red-600 rounded-lg px-2.5 py-1 sm:px-4 sm:py-2 cursor-pointer text-white font-abrilfatface text-xs sm:text-lg text-right z-10 hover:z-30 transition-colors duration-0 hover:shadow-[0_0_50px_rgba(239,68,68,1),0_0_25px_rgba(239,68,68,0.9)]"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 w-full pt-28">
          {children}
        </main>

        {/* Footer */}
        <footer className="flex flex-col gap-3 sm:gap-6 m-3 sm:m-6 p-3 sm:p-6 pb-2 border-2 border-red-500 bg-gradient-to-b from-black via-red-500/30 to-red-500/90 rounded-lg shadow-lg overflow-hidden">
          
          {/* Footer main container with staggered children sliding in one after the other */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.25,
                  delayChildren: 0.1
                }
              }
            }}
            className="flex flex-col md:flex-row justify-between gap-6 sm:gap-8 items-start md:items-center"
          >
            {/* Contact section slides in from top */}
            <motion.div 
              variants={{
                hidden: { y: -50, opacity: 0 },
                show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 140, damping: 14 } }
              }}
              className="flex flex-col gap-1.5 sm:gap-3"
            >
              <h2 className="text-xs sm:text-lg md:text-xl text-white font-abrilfatface">Contact</h2>
              <motion.div className="flex flex-row items-center gap-1 sm:gap-2 cursor-pointer" whileHover={{ scale: 1.05 }}>
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
                <p className="text-[10px] sm:text-sm md:text-base text-gray-300">{contact.phone}</p>
              </motion.div> 
              <motion.div className="flex flex-row items-center gap-1 sm:gap-2 cursor-pointer" whileHover={{ scale: 1.05 }}>
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
                <p className="text-[10px] sm:text-sm md:text-base text-gray-300">{contact.email}</p>
              </motion.div>
            </motion.div>

            {/* Location section slides in from top */}
            <motion.div 
              variants={{
                hidden: { y: -50, opacity: 0 },
                show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 140, damping: 14 } }
              }}
              className="flex flex-col gap-1.5 sm:gap-3"
            >
              <h2 className="text-xs sm:text-lg md:text-xl text-white font-abrilfatface">Location</h2>
              <div className="flex flex-row items-center gap-1 sm:gap-2">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
                <p className="text-[10px] sm:text-sm md:text-base text-gray-300">{contact.location}</p>
              </div>
            </motion.div>

            {/* Social media icons slide in from the right with clean spacing */}
            <motion.div 
              variants={{
                hidden: { x: 60, opacity: 0 },
                show: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 140, damping: 14 } }
              }}
              className="flex flex-row gap-3 sm:gap-6 items-center"
            >
              <motion.div whileHover={{ scale: 1.15 }} className="cursor-pointer">
                <FaXTwitter className="h-4 w-4 sm:h-9 sm:w-9 text-white" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.15 }} className="cursor-pointer">
                <FaInstagram className="h-4 w-4 sm:h-9 sm:w-9 text-white hover:text-red-300 transition-colors" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.15 }} className="cursor-pointer">
                <FaFacebook className="h-4 w-4 sm:h-9 sm:w-9 text-white hover:text-blue-300 transition-colors" />
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="border-t border-red-500/30 pt-1 pb-0 text-center">
            <p className="text-[9px] sm:text-sm text-white font-abrilfatface">
              ©2026 FaceMark Attendance
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}