import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
