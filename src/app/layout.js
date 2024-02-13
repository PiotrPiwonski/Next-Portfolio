import "./globals.css";
import localFont from '@next/font/local';
import DarkMode from "./components/DarkMode/DarkMode";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const poppins = localFont({
  src: [
  {
  path: "../../public/fonts/Recoleta-Black.ttf",
  weight: "400",
  },
  {
  path: "../../public/fonts/Recoleta-Medium.ttf",
  weight: "300",
  },
  {
  path: "../../public/fonts/Recoleta-Light.ttf",
  weight: "200",
  },
  ],
  variable: "--font-Recoleta-Black",
  });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} dark:bg-night-500`}>        
        <Header/>
        <DarkMode />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
