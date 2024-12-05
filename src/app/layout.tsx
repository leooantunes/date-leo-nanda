import localFont from "next/font/local";
import "./globals.css";

const antonMono = localFont({
  src: "./fonts/AntonSC-Regular.ttf",
  variable: "--font-anton-mono",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${antonMono.variable}`}>{children}</body>
    </html>
  );
}