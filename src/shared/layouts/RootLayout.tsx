import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const RootLayout = () => {
  return (
    <>
      <a href="#main" className="sr-only">
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
