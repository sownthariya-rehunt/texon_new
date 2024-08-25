import "./styles/bootstrap.min.css";
import "./styles/fontawesome.min.css";
import "./styles/remixicon.css";
import "./styles/animate.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-18-image-lightbox/style.css";
import "react-tabs/style/react-tabs.css";
import "swiper/css";
import "swiper/css/bundle";

// Global CSS
import "./styles/styles.css";
import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GoTop from "@/components/Layouts/GoTop";
import AosAnimation from "@/components/Layouts/AosAnimation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Best Whatsapp bot Multi messaging app-ECHO-SHARE-PRO",
  description: "Best whatsapp bot best multi messaging app best multi messaging whatsapp bot whatsapp automation in dubai",
  icons:'//src//app//favicon.ico'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <AosAnimation />

        <GoTop />
      </body>
    </html>
  );
}
