import { Vazirmatn } from "next/font/google";
import "./globals.css";

const font = Vazirmatn({ subsets: ["arabic", "latin"], display: "swap", weight: ["400", "800"] });

export const metadata = {
  title: "حسین سیدزاده | طراح، ادیتور و توسعه‌دهنده",
  description: "پورتفولیوی حسین سیدزاده؛ موشن دیزاین، طراحی لوگو، بک‌اند با جنگو و مهندسی هوش مصنوعی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={font.className}>{children}</body>
    </html>
  );
}
