import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AdBar from "./components/AdBar";
import Header from "./components/Header";
import ProductCarousel from "./components/ProductCarousel";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-commerce App",
  description: "A easy to use E-commerce platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <AdBar />
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
