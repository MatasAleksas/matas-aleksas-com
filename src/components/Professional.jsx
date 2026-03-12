"use client"
import {motion} from "framer-motion"
import { experience } from "@/data/experience"
import {certificationItems} from "@/data/certifications"
import { projects } from "@/data/projects"
import SpotlightCard from "@/components/SpotlightCard";

export default function Professional() {
    return (
        <section id="professional" className="py-32 px-6 bg-[#161616]">
            <div className="w-full max-w-6xl mx-auto ">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center mb-16"
                >
                    Professional
                </motion.h2>

                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="flex-1 flex flex-col gap-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-xl font-bold text-orange mb-4"
                        >
                            Experience
                        </motion.h2>

                        {experience.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <SpotlightCard key={index} spotlightColor="rgba(251, 116, 45, 0.2)">
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-lg font-bold text-white">{item.title}</h4>
                                        <span className="text-sm text-grey">{item.date}</span>
                                    </div>
                                    <p className="text-orange text-sm mb-4">{item.company}</p>

                                    <p className="text-sm text-[#cccccc] mb-4">{item.description}</p>

                                    <div className="flex gap-2 flex-wrap">
                                        {item.tags.map((tag) => (
                                            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/10 text-[#cccccc]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </SpotlightCard>
                            </motion.div>

                        ))}

                    </div>

                    <div className="flex-1 flex flex-col gap-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-xl font-bold text-orange mb-4"
                        >
                            Projects
                        </motion.h2>

                        {projects.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >

                                <SpotlightCard key={index} spotlightColor="rgba(251, 116, 45, 0.2)">
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-lg font-bold text-white">{item.title}</h4>
                                    </div>

                                    <div className="flex mb-4 gap-2 underline justify-between items-center">
                                        {item.github && (
                                            <a href={item.github} target="_blank" rel="noopener noreferrer" className="text-sm text-orange hover:text-white transition-colors">
                                                GitHub →
                                            </a>
                                        )}
                                        {item.link && (
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm text-orange hover:text-white transition-colors">
                                                Live Demo →
                                            </a>
                                        )}
                                    </div>

                                    <p className="text-sm text-[#cccccc] mb-4">{item.description}</p>


                                    <div className="flex gap-2 flex-wrap">
                                        {item.tags.map((tag) => (
                                            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/10 text-[#cccccc]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl font-bold text-orange"
                >
                    Certifications
                </motion.h2>

                <div className="flex gap-6 mt-16 flex-wrap">
                    {certificationItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.15 }}
                        >
                            <div className="bg-white/3 rounded-xl px-6 py-4 border border-white/10">
                                <h4 className="text-lg font-bold text-white">{item.title}</h4>
                                <h4 className="text-sm text-grey">{item.date}</h4>
                                <p className="text-orange text-sm ">{item.issuer}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-[#cccccc] mb-4">Want the full picture?</p>
                    <a href="/resume.pdf" target="_blank" className="resume-btn">
                        Download My Resume
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
