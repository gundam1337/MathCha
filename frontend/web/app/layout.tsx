import type { Metadata } from "next";
import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
//import { ChakraProvider } from "@chakra-ui/react";
import Navigationbar from '@/components/NavBar/Navbar'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
  title: "MathCha",
  description: "Generated by Omar Derkaoui",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          {/* <ChakraProvider>{children}</ChakraProvider> */}
          <Navigationbar/>
          {children}
          <Footer/>
        </NextUIProvider>
      </body>
    </html>
  );
}
