import { Jost, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

const play_fair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--playfair-display",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--jost",
});

export const metadata = {
  title: "BitWay Rentals - Streamlining Your Property Rental Experience",
  description:
    "Discover seamless property rentals with BitWay! Explore our user-friendly platform for hassle-free leasing experiences. From apartments to vacation homes, find your perfect rental match effortlessly. Join BitWay today for a smarter way to rent!",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en" className={`${play_fair.variable} ${jost.variable}`}>
        <body className="overflow-x-hidden font-jost text-primary">
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
