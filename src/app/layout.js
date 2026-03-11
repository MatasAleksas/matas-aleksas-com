import "./globals.css";
import { Cabin  } from "next/font/google"
import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import LoadingScreen from "@/components/LoadingScreen"
import Professional from "@/components/Professional";
import Personal from "@/components/Personal";
import Contact from "@/components/Contact";

const cabin = Cabin ({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cabin.className}>
        <LoadingScreen />
        <NavBar />
        <Hero />
        <div className="h-42 bg-linear-to-b from-black to-[#161616]" />
        <Intro />
        <div className="section-divider" />
        <Professional />
        <div className="section-divider" />
        <Personal />
        <div className="section-divider" />
        <Contact />
        {children}
      </body>
    </html>
  );
}
