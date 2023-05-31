import React from "react";
import { Fragment } from "react";
import CustomHead from "../../../components/layout/CustomHead";
import styles from "./privacy.module.scss";

function privacy() {
  return (
    <Fragment>
      <CustomHead title={"Privacy"} />
      <div className="container mt-5 ">
        <div className={styles.body}>
          <h1>Important Privacy Policy</h1>

          <p>
            Laboris cillum eu adipisicing minim voluptate quis fugiat veniam
            enim minim exercitation. Enim do commodo non deserunt in. Ullamco
            officia nisi ut ex sit amet minim dolore cillum sint cupidatat. Sint
            amet quis amet mollit enim sunt nulla Lorem in magna. Ut consectetur
            tempor do ea exercitation anim reprehenderit enim. Amet aliqua
            occaecat elit veniam deserunt elit dolore consequat incididunt
            ullamco consectetur pariatur est. Ad et amet occaecat enim est.
            Commodo et do et ut est dolore officia. Eiusmod minim consectetur
            culpa velit ea culpa esse nulla irure culpa minim commodo. Ut
            aliquip qui ex commodo id fugiat adipisicing magna id ad mollit id
            duis. Consectetur laboris sint fugiat enim dolor ea consequat irure
            velit magna incididunt. Do commodo fugiat est aliquip elit esse. Non
            est laboris sint in adipisicing consequat enim officia esse nisi
            laboris adipisicing veniam ut. Non pariatur minim sint ut sint ex
            dolore eiusmod et. Est incididunt exercitation labore ullamco
            aliquip velit cupidatat occaecat. Ad id ad cupidatat laboris eiusmod
            aliquip veniam veniam non laborum sunt. Duis veniam excepteur quis
            duis enim et eiusmod nisi tempor fugiat aliquip pariatur eu.
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default privacy;
