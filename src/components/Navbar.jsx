"use client"
import ShinyText from './ShinyText';
import { useState, useEffect } from 'react'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed left-0 right-0 z-30 mx-auto transition-all duration-500
            ${isScrolled
            ? "max-w-4xl top-4 bg-white/5 backdrop-blur-md rounded-full py-2 px-6 border border-white/10"
            : "w-full top-0 bg-transparent py-4 px-6 border border-transparent"}`}>

            <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-8 flex-1">
                    <a className="text-orange nav-link" href='#about'>About</a>
                    <a className="text-orange nav-link" href='#professional'>Professional</a>
                    <a className="text-orange nav-link" href='#personal'>Personal</a>
                </div>

                <a className="text-orange font-bold text-center flex-1 text-2xl" href="#">
                    <ShinyText
                        text="Matas Aleksas"
                        speed={2}
                        delay={0}
                        color="#fb742d"
                        shineColor="#fb542a"
                        spread={120}
                        direction="left"
                        yoyo={false}
                        pauseOnHover={false}
                        disabled={false}
                    />
                </a>

                <div className="flex-1 flex justify-end">
                    <a className="text-orange contact-btn" href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}