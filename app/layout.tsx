import type { Metadata, Viewport } from "next";
import { profile } from "@/data/profile";
import "./globals.css";

const pageTitle = `${profile.personal.name} - ${profile.personal.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.site.url),
  title: {
    default: pageTitle,
    template: `%s - ${profile.personal.name}`,
  },
  description: profile.site.description,
  keywords: [...profile.site.keywords],
  authors: [{ name: profile.personal.name, url: profile.site.url }],
  creator: profile.personal.name,
  openGraph: {
    type: "website",
    locale: profile.site.locale,
    url: profile.site.url,
    title: pageTitle,
    description: profile.site.description,
    siteName: profile.personal.name,
    images: [
      {
        url: profile.personal.image,
        width: 1200,
        height: 630,
        alt: profile.personal.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: profile.site.description,
    images: [profile.personal.image],
  },
  alternates: { canonical: profile.site.url },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: profile.site.themeColor,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={profile.site.language}>
      <body>
        <a
          href="#main"
          className="fixed left-3 top-3 z-[100] -translate-y-24 rounded-lg bg-[#22223B] px-4 py-3 font-bold text-white focus:translate-y-0"
        >
          {profile.site.skipLink}
        </a>
        {children}
      </body>
    </html>
  );
}
