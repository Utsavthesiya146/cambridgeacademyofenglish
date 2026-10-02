import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Cambridge Academy of English | Bangalore",
  description: "India's Premier English Language & Foreign Language Training Institute in Kammanahalli, Bangalore. Expert IELTS, PTE, TOEFL, Spoken English, and Teacher Training courses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen flex flex-col font-sans overflow-x-hidden`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        
        <script type="text/javascript" dangerouslySetInnerHTML={{__html: `
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
          }
        `}} />
        <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
      </body>
    </html>
  );
}
