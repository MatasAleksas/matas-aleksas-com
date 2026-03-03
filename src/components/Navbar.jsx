"use client";

export default function Navbar() {
    return (
        <nav className="fixed flex justify-between items-center mx-auto top-0 left-0 w-full z-50 px-6 py-4">
            <div className="mx-13 flex gap-10 items-center">
                <a className="text-orange nav-link" href='#about'>About</a>
                <a className="text-orange nav-link" href='#professional'>Professional</a>
                <a className="text-orange nav-link" href='#personal'>Personal</a>
            </div>
            <a className="text-orange text-3xl font-bold flex-2 text-center mx-9" href='#'>Matas Aleksas</a>
            <a className="text-orange flex-1 text-right mx-10" href='#contact'>Contact</a>
        </nav>
    );
}