import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import MetaPixel from "@/components/MetaPixel";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Editify | A casa de quem edita vídeo",
  description:
    "Editify é o ecossistema de quem leva edição de vídeo a sério. Aprenda, conecte-se e seja contratado. Tudo num lugar só.",
  metadataBase: new URL("https://editify.com.br"),
  icons: {
    icon: "/favicon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Editify | A casa de quem edita vídeo",
    description:
      "O ecossistema de quem leva edição de vídeo a sério. Treinamento, Comunidade e Contratação num lugar só.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="min-h-screen antialiased">
        {children}
        <MetaPixel />
      </body>
    </html>
  );
}
