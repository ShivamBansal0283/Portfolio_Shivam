// // app/layout.tsx
// import "./globals.css";
// import { ReactNode } from "react";

// export const metadata = { title: "GPTOT — Portfolio", description: "Dynamic portfolio powered by GitHub" };

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="min-h-dvh bg-background text-foreground antialiased">
//         <main className="container mx-auto px-4 py-10 max-w-5xl">{children}</main>
//       </body>
//     </html>
//   );
// }

import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shivam Bansal — Portfolio",
  description: "Portfolio of Shivam Bansal — dynamic GitHub-powered projects",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="container mx-auto max-w-6xl px-4">
            <Header />
            <main className="py-10">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
