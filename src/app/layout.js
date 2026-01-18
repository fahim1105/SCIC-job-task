import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { ToastProvider } from "@/contexts/ToastContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="bg-base-100 text-base-content transition-colors duration-300">
        <ToastProvider>
          <Navbar />
          <main className="min-h-screen bg-base-100">{children}</main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}