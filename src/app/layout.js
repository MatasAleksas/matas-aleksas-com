import "./globals.css";
import { Cabin  } from "next/font/google"
import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";
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
        {children}
      </body>
    </html>
  );
}
