import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import ArNavBar from "@/components/ArNavBar";
import ArFooter from "@/components/ArFooter";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  display: "swap" 
});

export const metadata: Metadata = {
  title: "HighEnd | General Trading",
  description: "Trading company in UAE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
          <ArNavBar />
          {children}
          <ArFooter />
        </body>
    </html>
  );
}
