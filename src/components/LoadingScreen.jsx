"use client"
import {useState, useEffect} from 'react'
import {motion, AnimatePresence} from "framer-motion"

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="z-50 flex flex-col items-center justify-center fixed w-full h-full bg-[#1a1a1a]"
                >
                    <p className="text-3xl font-bold text-white">Matas Aleksas</p>

                    <div className="progress-track">
                        <div className="progress-fill"></div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}