// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export const metadata = { title: "GPTOT — Portfolio", description: "Dynamic portfolio powered by GitHub" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <main className="container mx-auto px-4 py-10 max-w-5xl">{children}</main>
      </body>
    </html>
  );
}