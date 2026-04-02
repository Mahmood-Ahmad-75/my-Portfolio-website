 import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/navbar/NavBar";
  
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web developer",
  description: "React Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body>
        
       <NavBar/>
        
        

        {children}
      </body>
    </html>
  );
}
