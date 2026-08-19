import { Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata = {
  title: "M Tahir — Senior Frontend Architect",
  description: "Modern, high-performance developer portfolio featuring smooth motion, Nature Green aesthetic, and software engineering showcase.",
  keywords: ["Software Engineer", "Frontend Developer", "Next.js", "React", "Full-Stack", "M Tahir Portfolio"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oswald.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 font-sans antialiased flex flex-col transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
