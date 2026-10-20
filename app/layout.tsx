import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jenul Abedeen | Full Stack Software Developer",
  description: "Portfolio of Jenul Abedeen, Full Stack Software Developer working with React.js, Next.js, Vue.js and Node.js.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
