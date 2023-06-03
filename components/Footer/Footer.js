import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer1}>
        <Link href={"/about"} className={styles.navlink}>
          <span>About</span>
        </Link>{" "}
        <Link href={"/privacy"} className={styles.navlink}>
          <span className={styles.privacy}>Privacy</span>
        </Link>
        <Link href={"/contact"} className={styles.navlink}>
          <span className={styles.privacy}>Contact</span>
        </Link>
      </div>
      <div className={styles.footer2}> LeisWebDev©2023</div>
    </div>
  );
}

export default Footer;
