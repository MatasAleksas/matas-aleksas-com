"use client";
import Image from 'next/image'
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
    }, []);


    return (
        <section id="home" className='flex items-center justify-center gap-20 h-[75vh] px-20'>
            <div className="relative z-10 bg-grey flex items-center gap-20 p-10 rounded-2xl">
                <div className="flex flex-col">
                    <h1>Hello, I&#39;m Matas.</h1>
                    <p className={"hero-text"}>I am a
                         <span className="cycle-container flex px-2 h-[37px]">
                            <span className={animating ? "cycle-exit" : "cycle-active"}>
                                {words[currentIndex]}
                            </span>
                         </span>
                    </p>
                </div>

                <Image className={"hero-photo"}
                    src={"/images/profile-placeholder.jpg"}
                    width={250}
                    height={250}
                    alt={"Picture of author"}
                />
            </div>

        </section>
    );
}