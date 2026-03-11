"use client"
import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

export default function TwoTruths() {
    const statements = [
        { text: "I've bowled a 300 before", isLie: true },
        { text: "I was born in Lithuania", isLie: false },
        { text: "I've been to a Patriots game", isLie: false },
    ];

    const [selected, setSelected] = useState(null);
    const [revealed, setRevealed] = useState(false);

    return (
        <div className="max-w-md mx-auto text-center">
            <h3 className="text-2xl font-bold text-orange mb-2">Two Truths & A Lie</h3>
            <p className="text-[#cccccc] mb-8">Which one is the lie?</p>

            <div className="max-w-md mx-auto">
                {statements.map((statement, index) => (
                    <button
                        key={index}
                        onClick={() => !revealed && setSelected(index)}
                        className={`w-full text-left px-6 py-4 rounded-xl mb-3 transition-all duration-300
                        ${revealed
                            ? statement.isLie
                                ? "border border-red-500 text-red-500"
                                : "border border-green-500 text-green-500"
                            : selected === index
                                ? "border border-orange text-orange"
                                : "border border-white/10 text-white hover:border-white/30"
                            }
                        `}
                    >
                        {statement.text}
                    </button>
                ))}
            </div>

            {selected !== null && !revealed && (
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setRevealed(true)}
                    className="mt-6 px-8 py-3 border border-orange text-orange rounded-full hover:bg-orange hover:text-[#1a1a1a] transition-all duration-300 mx-auto block"
                >
                    Reveal Answer
                </motion.button>
            )}

            {revealed && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-center mt-6"
                >
                    <p className="text-lg mb-2">
                        {statements[selected].isLie
                            ? "Nice work!"
                            : "Not quite!"
                        }
                    </p>
                    <p className="text-[#cccccc]">
                        I&#39;ve never actually bowled a 300... yet.
                    </p>
                </motion.div>
            )}

            {revealed && (
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    onClick={() => {
                        setSelected(null);
                        setRevealed(false);
                    }}
                    className="mt-4 text-orange text-sm mx-auto block hover:text-white transition-colors"
                >
                    Play Again
                </motion.button>
            )}
        </div>
    );
}