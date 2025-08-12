// Assuming Geist and Geist_Mono are imported from a JS-compatible source or replaced
// For demonstration, I'm commenting them out or replacing with placeholders
// import { Geist } from 'next/font/google';
// import { Geist_Mono } from 'next/font/mono';


// Placeholder for Geist and Geist_Mono if they are not directly convertible
const geistSans = { variable: "--font-geist-sans" }; // Replace with actual font loading if needed
const geistMono = { variable: "--font-geist-mono" }; // Replace with actual font loading if needed
import '../styles/globals.css'
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}