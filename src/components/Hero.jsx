"use client"
import Image from 'next/image'
import DarkVeil from '@/components/DarkVeil'
import { FaGithub, FaLinkedin, FaInstagram, FaFileAlt, FaChevronDown} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useState, useEffect } from 'react'


export default function Hero() {
    const words = ["Student", "Developer", "Problem Solver", "Creator", "Designer"]
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimating(true);

            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % words.length);
                setAnimating(false);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, );


    return (
        <section id="home" className='flex items-center justify-center gap-20 h-[95vh] px-4 md:px-20'>
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <DarkVeil
                    hueShift={217}
                    noiseIntensity={0}
                    scanlineIntensity={0}
                    speed={0.8}
                    scanlineFrequency={0}
                    warpAmount={4.2}
                />
            </div>

            <div className="hero-box relative z-10 bg-white/5 backdrop-blur-md border border-white/10 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-20 p-6 md:p-14 rounded-2xl max-w-full" >
                <div className="flex flex-col items-center md:items-start mb-4 md:mb-10">
                    <h1 className="text-2xl md:text-4xl text-center md:text-left">Hello, I&#39;m Matas.</h1>
                    <p className={"hero-text text-center md:text-left"}>I am a
                        <span className="cycle-container flex px-2 h-9.25">
                            <span className={animating ? "cycle-exit" : "cycle-active"}>
                                {words[currentIndex]}
                            </span>
                         </span>
                    </p>

                    <div className="flex gap-4 mt-4 text-xl">
                        <a href="https://github.com/MatasAleksas" target="_blank" rel="noopener noreferrer" className="text-grey hover:text-orange transition-colors">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/matas-aleksas/" target="_blank" rel="noopener noreferrer" className="text-grey hover:text-orange transition-colors">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/matasaleksas/" target="_blank" rel="noopener noreferrer" className="text-grey hover:text-orange transition-colors">
                            <FaInstagram />
                        </a>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-grey hover:text-orange transition-colors">
                            <FaFileAlt />
                        </a>
                        <a href="#contact" className="text-grey hover:text-orange transition-colors">
                            <MdEmail />
                        </a>
                    </div>

                    <a href="#about" className="explore-btn">
                        Explore More
                        <span className="explore-chevron">
                            <FaChevronDown />
                        </span>
                    </a>
                </div>

                <Image className={"hero-photo shrink-0"}
                       src={"/images/profile-placeholder.webp"}
                       width={250}
                       height={250}
                       alt={"Picture of author"}
                />
            </div>

        </section>
    );
}