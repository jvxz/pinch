import Providers from "@/components/providers";
import "@/styles/globals.css";
import { Radio_Canada_Big } from "next/font/google";
import { type Metadata } from "next";

const font = Radio_Canada_Big({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "pinch",
  description: "pinch",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning lang="en" className={`${font.className}`}>
      <body className="h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
