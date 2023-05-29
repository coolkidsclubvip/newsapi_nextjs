import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";

function Footer() {
  return (
    <div className="container-fluid">
      <div className={styles.footer1}>
        <Link href={"/about"}>
          <span className={styles.about}>About</span>
        </Link>{" "}
        <Link href={"/privacy"}>
          <span className={styles.privacy}>Privacy</span>
        </Link>
      </div>
      <div className={styles.footer2}> LeisWebDev©2023</div>
    </div>
  );
}

export default Footer;
