import "@/styles/globals.css";
import { Vazirmatn } from "next/font/google";
import type { Metadata } from "next";
import Provider from "@/redux/provider";
import { Footer, Navbar } from "@/components/common";
import { Setup } from "@/components/utils";

const inter = Vazirmatn({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Auth",
  description: "Full Auth application that provides jwt authentication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body className={inter.className}>
        <Provider>
          <Setup />
          <Navbar />
          <div>{children}</div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
