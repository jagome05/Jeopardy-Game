import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AppLayout() {

  // todo edit h and w of page

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}