"use client"

export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-8 px-6">
            <div>
                <p className="text-center text-grey text-sm mb-5">
                    © 2026 Matas Aleksas • All Rights Reserved
                </p>

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
