import type { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
