import styles from "./Layout.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Fragment } from "react";

function Layout({ children }) {
  return (
    <Fragment >
      <Header />

      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
