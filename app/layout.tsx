import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Concienc-IA | Ética y Responsabilidad en la Inteligencia Artificial",
    template: "%s | Concienc-IA"
  },
  description: "Plataforma educativa para promover el uso ético y crítico de la Inteligencia Artificial.",
  keywords: ["IA ética", "Eric Bojado", "Colima", "Educación tecnológica", "Líderes del Mañana", "Inteligencia Artificial"],
  authors: [{ name: "Eric Bojado Flores" }],
  creator: "Eric Bojado Flores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
