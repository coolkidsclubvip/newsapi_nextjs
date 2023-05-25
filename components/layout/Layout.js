import styles from "./Layout.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <>
    
      <Header />

      <main className={styles.main}>{children}</main>
      <Footer/>
   </>
  );
}

export default Layout;
