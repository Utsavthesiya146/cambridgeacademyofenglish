import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CounsellingModal from '@/components/CounsellingModal';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { OrganizationSchema } from '@/components/StructuredData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cambridgeacademyofenglish.vercel.app'),
  title: {
    default: 'Cambridge Academy of English | India’s No 1 Language Academy',
    template: '%s | Cambridge Academy of English',
  },
  description:
    'Speak with Confidence. Communicate with Excellence. 21 Years of Excellence in English Language Training, IELTS, PTE, Foreign Languages, and Kids English in Bangalore.',
  keywords: [
    'English Language Academy in Bangalore',
    'Best English Speaking Classes in Bangalore',
    'Spoken English Classes in Bangalore',
    'IELTS Coaching in Bangalore',
    'PTE Coaching in Bangalore',
    'English Language Training in Bangalore',
    'German Language Classes in Bangalore',
    'French Language Classes in Bangalore',
    'English Classes for Kids in Bangalore',
    'Cambridge Academy of English',
  ],
  authors: [{ name: 'Cambridge Academy of English' }],
  creator: 'Cambridge Academy of English',
  publisher: 'Cambridge Academy of English',
  icons: {
    icon: '/favicon.ico',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'Cambridge Academy of English | Bangalore, India',
    description:
      'India’s No 1 Language Academy. 21 Years of Excellence in English Language Training, IELTS, PTE, and Foreign Languages in Bangalore.',
    url: 'https://cambridgeacademyofenglish.vercel.app',
    siteName: 'Cambridge Academy of English',
    images: [
      {
        url: '/images/hero-classroom.jpg',
        width: 1200,
        height: 630,
        alt: 'Cambridge Academy of English Classroom',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cambridge Academy of English | Bangalore',
    description:
      'India’s No 1 Language Academy. 21 Years of Excellence in English Language Training.',
    images: ['/images/hero-classroom.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION_ID || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <OrganizationSchema />
        <GoogleAnalytics />
      </head>
      <body className="min-h-screen flex flex-col font-sans overflow-x-hidden bg-slate-50 text-slate-800 antialiased selection:bg-[#d4af37] selection:text-[#0a192f]">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* Global Conversion Widgets */}
        <FloatingWhatsApp />
        <CounsellingModal />

        {/* Google Translate Integration */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                if (window.google && window.google.translate) {
                  new window.google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
                }
              }
            `,
          }}
        />
        <script
          type="text/javascript"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          async
        ></script>
      </body>
    </html>
  );
}
