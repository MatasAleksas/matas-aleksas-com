"use client"
import {useState} from "react";
import ShinyText from './ShinyText';
import {motion} from 'framer-motion';
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_EMAIL_ACCESS_CODE,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            if (response.ok) {
                setStatus("sent");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="py-32 px-6">
            <div className="max-w-2xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-center mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Let&#39;s <span><ShinyText
                    text="Connect"
                    speed={2}
                    delay={0}
                    color="#fb742d"
                    shineColor="#fb542a"
                    spread={120}
                    direction="left"
                    yoyo={false}
                    pauseOnHover={false}
                    disabled={false}
                    /></span>
                </motion.h2>

                <motion.p
                    className="text-center text-[#cccccc] mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Thanks for stopping by. I&#39;m always open to new opportunities,
                    collaborations, or just a good conversation.
                </motion.p>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="flex flex-col gap-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="contact-input"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="contact-input"
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="contact-input resize-none"
                        />

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="contact-submit"
                        >
                            {status === "sending" ? "Sending..." : "Send Message"}
                        </button>
                    </div>
                </motion.form>

                {status === "sent" && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-green-500 text-center mt-6"
                    >
                        Message sent! I&#39;ll get back to you soon!
                    </motion.p>
                )}

                {status === "error" && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-center mt-6"
                    >
                        Something went wrong. Try again or email me directly...
                    </motion.p>
                )}

                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <p className="text-[#cccccc] mb-4">Or find me elsewhere</p>
                    <div className="flex justify-center gap-6">
                        <a href="https://github.com/MatasAleksas" target="_blank" rel="noopener noreferrer" className="text-xl text-grey hover:text-orange transition-colors">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/matas-aleksas/" target="_blank" rel="noopener noreferrer" className="text-xl text-grey hover:text-orange transition-colors">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/matasaleksas/" target="_blank" rel="noopener noreferrer" className="text-xl text-grey hover:text-orange transition-colors">
                            <FaInstagram />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}