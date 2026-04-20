 import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/navbar/NavBar";
  
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CognitiveStack — Full Stack + AI Engineering",
  description:
    "CognitiveStack — Full Stack + AI-integrated engineering. React, React Native, Node.js, and LLM / STS / TTS systems, shipped in production.",
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
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600&family=Archivo+Black&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Symbols+Outlined"
        />
      </head>
      <body>
        
       <NavBar/>
        
        

        {children}
      </body>
    </html>
  );
}
