import { Vazirmatn } from "next/font/google";
import "./globals.css";

const font = Vazirmatn({ subsets: ["arabic", "latin"], display: "swap", weight: ["400", "800"] });

const title = "حسین سیدزاده | طراح، ادیتور و توسعه‌دهنده";
const description = "پورتفولیوی حسین سیدزاده؛ موشن دیزاین، طراحی لوگو، بک‌اند با جنگو و مهندسی هوش مصنوعی";

export const metadata = {
  metadataBase: new URL("https://hosseinseyedzade.dreamservice.net"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "/",
    title,
    description,
    siteName: "حسین سیدزاده",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={font.className}>{children}</body>
    </html>
  );
}
