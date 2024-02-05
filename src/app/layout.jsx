import { Roboto } from "next/font/google";
import "./globals.css";
import classNames from "@/utils/classNames";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/providers";
import Toaster from "@/components/Toaster";

const roboto = Roboto({ weight:["100","300","400","500","700","900"],subsets: ["latin"],variable:"--font-roboto" });

export const metadata = {
  title: "Easy Shop",
  description: "Online based e-commerce web application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className="transition-all">
      <body className={classNames(roboto.variable, " font-roboto")}>
        <Providers>
          <div className="flex min-h-screen flex-col justify-between">
            <div>
              <Navbar />
              <main className="container mx-auto">{children}</main>
            </div>
            <Footer />
          </div>
        </Providers>
        <Toaster/>
      </body>
    </html>
  );
}
