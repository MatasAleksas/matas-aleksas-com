"use client"
import { useState, useEffect, useRef } from "react"
import { motion } from 'framer-motion'

export default function Intro() {
    const [isVisible, setIsVisible] = useState(false);
    const [displayedText, setDisplayedText] = useState("");
    const punchline = "I build software that works — and works for people.";
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!isVisible) return;

        let currentIndex = 0;

        const interval = setInterval(() => {
            if (currentIndex < punchline.length) {
                setDisplayedText(punchline.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 70);

        return () => clearInterval(interval);
    }, [isVisible]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="pt-24 pb-20 md:pt-55 md:pb-50 px-4 md:px-6 bg-linear-to-b from-[#1a1a1a] to-[#161616]">

            <div className="max-w-4xl mx-auto">
                <div className="intro-h1-container">
                    <h1 className="intro-h1 invisible">
                        {punchline}
                    </h1>
                    <h1 className="intro-h1 intro-h1-overlay">
                        {displayedText}
                        <span className="typing-cursor"> |</span>
                    </h1>
                </div>

                <motion.p
                    className="intro-p"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{ duration: 1, delay: 3}}
                >
                    I’m a student at the <span className="text-orange"> University of New Hampshire </span>who enjoys
                    building <span className="text-orange"> software</span> that makes a real
                    <span className="text-orange"> difference</span>, whether by improving efficiency or
                    <span className="text-orange"> helping</span> people connect. I care about creating tools
                    that are both practical and <span className="text-orange"> well-designed.</span>
                </motion.p>

                <motion.p
                    className="intro-p"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{ duration: 1, delay: 3.4 }}
                >
                    Right now, I’m <span className="text-orange"> focused </span>
                    on strengthening my fundamentals while <span className="text-orange"> building</span> projects
                    that push me technically, including this website you’re reading.
                </motion.p>
            </div>
        </section>
    );
}