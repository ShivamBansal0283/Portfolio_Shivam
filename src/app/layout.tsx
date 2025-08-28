

// // src/app/layout.tsx
// import "./globals.css";
// import type { Metadata } from "next";
// import { ReactNode } from "react";
// import Providers from "@/components/Providers";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// export const metadata: Metadata = {
//   title: "Shivam Bansal — Portfolio",
//   description: "Dynamic portfolio powered by GitHub"
// };

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className="min-h-dvh bg-background text-foreground antialiased">
//         <Providers>
//           <div className="container mx-auto max-w-6xl px-4">
//             <Header />
//             <main className="py-10">{children}</main>
//             <Footer />
//           </div>
//         </Providers>
//       </body>
//     </html>
//   );
// }




import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Providers from "../components/Providers";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

export const metadata: Metadata = {
  title: "Shivam Bansal — Portfolio",
  description: "Dynamic portfolio powered by GitHub",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <Providers>
          <div className="container mx-auto max-w-6xl px-4">
            <Header />
            <main className="py-10">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}