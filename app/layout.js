import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me a chai",
  description: "This website is done to do nothing :)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <SessionWrapper>
        <div className="min-h-[95.2vh]     items-center  bg-neutral-950  bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] ">
       
        
           
         
          <Navbar />

          {children}
          
        </div>
        
        <Footer  />
        </SessionWrapper>
        
      </body>
    </html>
  );
}
