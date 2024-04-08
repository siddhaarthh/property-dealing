import { Jost, Playfair_Display } from "next/font/google";
import "./globals.css";

import AuthProvider from "@/components/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-image-gallery/styles/css/image-gallery.css";

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
          {children}
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
  );
}
