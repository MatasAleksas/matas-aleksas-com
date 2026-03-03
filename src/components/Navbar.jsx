"use client";
import ShinyText from './ShinyText';

export default function Navbar() {
    return (
        <nav className="fixed upper-nav flex justify-center items-center mx-auto top-0 left-0 w-full z-30 px-3 py-4">
            <div className="left-nav flex mx-13 gap-10 items-center">
                <a className="text-orange nav-link" href='#about'>About</a>
                <a className="text-orange nav-link" href='#professional'>Professional</a>
                <a className="text-orange nav-link" href='#personal'>Personal</a>
            </div>
            <a className="text-orange text-3xl font-bold mx-10 text-center" href='#'>
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
            <a className="text-orange text-right mx-10 contact-btn" href='#contact'>Contact</a>
        </nav>
    );
}