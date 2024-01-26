import { Nav, Notifications } from "@/components";
import { Content } from "@/components/Content/Content";
import { Footer } from "@/components/Footer/Footer";
import { notificationsMock } from "@/const";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body className={inter.className}>
      <Providers>
        <Nav />
        <main className="my-6">
          <Content>{children}</Content>
        </main>
        <Footer />
        <Notifications data={notificationsMock} />
      </Providers>
      <Analytics />
      <SpeedInsights />
    </body>
  </html>
);

export default RootLayout;
