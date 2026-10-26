import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuickActionDock } from "@/components/QuickActionDock";

export const metadata: Metadata = {
  title: "MAHAVIR TRUST — Education, Scholarships & Community Leadership (Odisha)",
  description:
    "A premier charitable educational initiative advancing higher education grants, academic mentorship, and student dignity across Odisha, India.",
  keywords: [
    "Mahavir Trust",
    "Odisha Scholarships",
    "Education Charitable Trust",
    "Student Support Odisha",
    "Bhubaneswar Philanthropy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#1C2421]">
        <Header />
        <main className="flex-1">{children}</main>
        <QuickActionDock />
        <Footer />
      </body>
    </html>
  );
}
