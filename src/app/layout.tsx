import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSupport from "@/components/FloatingSupport";

export const metadata: Metadata = {
  title: "Starway Immigration | Dedicated Visa & Immigration Consultancy",
  description: "Professional visa and immigration consultancy services for students, business, and families. Fast processing and expert guidance at Starway Immigration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingSupport />
      </body>
    </html>
  );
}
