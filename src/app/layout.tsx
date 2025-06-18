import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Absolute Shipshow",
  icons: {
    icon: "/shipshow-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <Header/>
          <main className="flex-grow">
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
