"use client"
import { useInView } from "@/hooks/useInView";

export default function Footer() {
    const [footerRef, footerInView] = useInView();

    return (
        <footer ref={footerRef} className="border-t border-white/10 py-8 px-6">
            <div>
                {footerInView && (
                    <div className="footer-marquee mb-6">
                        <p>
                            © 2026 Matas Aleksas • All Rights Reserved •&nbsp;
                            © 2026 Matas Aleksas • All Rights Reserved •&nbsp;
                            © 2026 Matas Aleksas • All Rights Reserved •&nbsp;
                            © 2026 Matas Aleksas • All Rights Reserved •&nbsp;
                            © 2026 Matas Aleksas • All Rights Reserved •&nbsp;
                            © 2026 Matas Aleksas • All Rights Reserved •&nbsp;
                            © 2026 Matas Aleksas • All Rights Reserved •&nbsp;
                            © 2026 Matas Aleksas • All Rights Reserved •&nbsp;
                            © 2026 Matas Aleksas • All Rights Reserved •&nbsp;
                            © 2026 Matas Aleksas • All Rights Reserved •&nbsp;
                            © 2026 Matas Aleksas • All Rights Reserved •&nbsp;
                            © 2026 Matas Aleksas • All Rights Reserved •&nbsp;
                            © 2026 Matas Aleksas • All Rights Reserved •&nbsp;
                            © 2026 Matas Aleksas • All Rights Reserved •&nbsp;
                            © 2026 Matas Aleksas • All Rights Reserved •&nbsp;
                            © 2026 Matas Aleksas • All Rights Reserved •&nbsp;
                        </p>
                    </div>
                    )}

                <div className="flex justify-center gap-6">
                    <a href="https://github.com/MatasAleksas" target="_blank" rel="noopener noreferrer" className="underline text-grey hover:text-orange transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/matas-aleksas/" target="_blank" rel="noopener noreferrer" className="underline text-grey hover:text-orange transition-colors">LinkedIn</a>
                    <a href="https://www.instagram.com/matasaleksas/" target="_blank" rel="noopener noreferrer" className="underline text-grey hover:text-orange transition-colors">Instagram</a>
                    <a href="#contact" className="underline text-grey hover:text-orange transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
}
