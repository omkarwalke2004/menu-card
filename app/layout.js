import localFont from "next/font/local";
import "../styles/globals.scss"

import Providers from "@/Components/providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata = {
  title: "Restaurant E-Menu",
  description: "Interactive e-menu with CRUD operations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
       <Providers>
        {children}
       </Providers>
      </body>
    </html>
  );
}
