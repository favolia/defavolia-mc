import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

const minecraft = localFont({
  src: '../public/fonts/minecraft/minecraft.ttf',
  display: 'swap',
  variable: '--font-minecraft'
})

const minecraft_text = localFont({
  src: '../public/fonts/minecraft/minecraft_text.otf',
  display: 'swap',
  variable: '--font-minecraft_text'
})

const enchant = localFont({
  src: '../public/fonts/minecraft/enchant.ttf',
  display: 'swap',
  variable: '--font-enchant'
})

export const metadata = {
  title: "Defavolia MC3D",
  description: "Minecraft 3D Mob & Items Preview",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${minecraft.variable} ${minecraft_text.variable} ${enchant.variable}`}>
        <Toaster richColors />
        {children}
      </body>
    </html>
  );
}
