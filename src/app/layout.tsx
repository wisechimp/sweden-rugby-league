import { ReactNode } from "react";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { UmamiAnalytics } from "@/components/third-party-services/umami-analytics";
import "@/styles/global.css";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <main>
            <Header />
            {children}
            <Footer />
            <UmamiAnalytics />
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
