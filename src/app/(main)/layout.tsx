import { ReactNode } from "react";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { SanityLive } from "@/sanity/lib/live";
import "@/styles/global.css";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <main>
            <Header />
            {children}
            <Footer />
            <SanityLive />
          </main>
        </div>
      </body>
    </html>
  );
};

export default MainLayout;
