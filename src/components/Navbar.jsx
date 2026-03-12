"use client"
import ShinyText from './ShinyText';
import { useState, useEffect } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className={`fixed left-0 right-0 z-30 mx-auto transition-all duration-500
            ${menuOpen
            ? "w-full top-0 bg-transparent py-4 px-6 border border-transparent"
            : isScrolled
                ? "max-w-4xl top-4 bg-white/5 backdrop-blur-md rounded-full py-2 px-6 border border-white/10"
                : "w-full top-0 bg-transparent py-4 px-6 border border-transparent"
        }`}>

            <div className="flex justify-between items-center w-full relative z-50">
                <div className="hidden md:flex items-center gap-8 flex-1">
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

                <div className="hidden md:flex flex-1 justify-end">
                    <a className="text-orange contact-btn" href="#contact">Contact</a>
                </div>

                <button
                    className="md:hidden text-orange text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Full-screen mobile overlay */}
            {menuOpen && (
                <div className="md:hidden fixed inset-0 w-full h-screen bg-[#161616]/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8">
                    <a className="text-orange text-2xl nav-link" href='#about' onClick={closeMenu}>About</a>
                    <a className="text-orange text-2xl nav-link" href='#professional' onClick={closeMenu}>Professional</a>
                    <a className="text-orange text-2xl nav-link" href='#personal' onClick={closeMenu}>Personal</a>
                    <a className="text-orange contact-btn text-xl" href="#contact" onClick={closeMenu}>Contact</a>
                </div>
            )}
        </nav>
    );
}