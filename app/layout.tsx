import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "조성민 | 프론트엔드 개발자 포트폴리오",
  description: "5년차 프론트엔드 개발자 조성민의 포트폴리오입니다. React, Next.js, TypeScript를 활용한 웹 개발 프로젝트와 경험을 소개합니다.",
  keywords: "프론트엔드 개발자, 조성민, 포트폴리오, React, Next.js, TypeScript, 웹 개발, JavaScript, Frontend Developer",
  authors: [{ name: "조성민", url: "https://github.com/worldhostm" }],
  creator: "조성민",
  publisher: "조성민",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: "조성민 | 프론트엔드 개발자 포트폴리오",
    description: "5년차 프론트엔드 개발자 조성민의 포트폴리오입니다. React, Next.js, TypeScript를 활용한 웹 개발 프로젝트와 경험을 소개합니다.",
    siteName: "조성민 포트폴리오",
    images: [
      {
        url: "/project1.png",
        width: 1200,
        height: 630,
        alt: "조성민 프론트엔드 개발자 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "조성민 | 프론트엔드 개발자 포트폴리오",
    description: "5년차 프론트엔드 개발자 조성민의 포트폴리오입니다. React, Next.js, TypeScript를 활용한 웹 개발 프로젝트와 경험을 소개합니다.",
    images: ["/project1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    other: {
      "naver-site-verification": "your-naver-verification-code",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
