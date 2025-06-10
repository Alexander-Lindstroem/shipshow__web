import Header from "@/components/Header";
import Home from "./page";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <Home />
        {children}
      </body>
    </html>
  );
}
