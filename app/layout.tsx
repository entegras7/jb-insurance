import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JB Insurance & Capital | Jamshedpur',
  description: 'Expert insurance solutions for vehicle, health, and business in Adityapur & Jamshedpur.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* --- UNIVERSAL MOBILE FIX: WORKS ON ALL NEXT.JS VERSIONS --- */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        
        {/* Fonts & Icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className} style={{margin: 0, padding: 0}}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}