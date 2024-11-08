import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "./(auth)/login/_components/sessionProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="flex justify-center items-center min-h-screen bg-primary"
      >
         <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
