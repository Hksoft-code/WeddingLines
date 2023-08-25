import NavigationBar from "@/components/NavigationBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/sections/Footer";
import SmallDeviceNavBar from "@/components/SmallDeviceNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wedding line",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ background: "none" }}>
        <header>
          <span className="lg:block hidden">
            <NavigationBar />
          </span>
          <span className="lg:hidden block">
            <SmallDeviceNavBar />
          </span>
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
