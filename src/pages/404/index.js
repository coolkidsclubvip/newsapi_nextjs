import React from "react";
import CustomHead from "../../../components/layout/CustomHead";
import styles from "./404.module.scss";
import Link from "next/link";

function Custom404() {
  return (
    <div className={styles.container}>
      <CustomHead title={"404 Error"} />

      <div className={styles.content}>
        <p className={styles.text}>
          The page you’re looking for does not exist.
        </p>
        <Link href="/">
          <button className={styles.customButton}>Home</button>
        </Link>
        <div className={styles.backgroundWrapper}>
          <p>404</p>
        </div>
      </div>
    </div>
  );
}

export default Custom404;
