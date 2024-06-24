import "../styles/reset.css";
import "../styles/global.css";
import { Poppins } from "next/font/google";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Arkee Movie App",
  description: "movie app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={poppins.className}>
      <body>
        <Header />
        <main>
          <div>
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
