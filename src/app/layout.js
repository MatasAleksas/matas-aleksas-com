import "./globals.css";
import { Cabin  } from "next/font/google"
import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import LoadingScreen from "@/components/LoadingScreen"

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
        <Intro />
        <div className="flex mx-auto top-0 left-0 w-full">
            <p>Hey</p>
        </div>
        {children}
      </body>
    </html>
  );
}
