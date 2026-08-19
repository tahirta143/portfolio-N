import { Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata = {
  title: "Ali Raza Amir — GoHighLevel Expert & Automation Specialist",
  description: "GoHighLevel sales funnels, CRM & automation that work for you. I build complete systems that capture leads, nurture prospects, automate follow-ups, and drive conversions.",
  keywords: ["GoHighLevel Expert", "GHL Automation", "Sales Funnels", "CRM Setup", "Workflow Automation", "Ali Raza Amir Portfolio"],
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
