import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Sidebar from "../components/Sidebar";
import Input from "../components/Input";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lawlens-ai",
  description: "your legal ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-screen w-screen">
        <div className="side-bar w-1/10 float-left">
          <Sidebar />
        </div>
        <div className="main w-9/10 flex flex-col items-center ">
          <div className="min-h-[75vh] flex w-4/5 mt-4 ">{children}</div>
          <div className="flex justify-center mt-8 mb-8  w-full">
            <Input />
          </div>
        </div>
      </body>
      <footer className="text-custom-light-gray text-xs mb-6 text-center">
        LawLens AI Free Research Preview. Our goal is to make AI systems more
        natural and safe to interact with. Your feedback will help us improve.
      </footer>
    </html>
  );
}
