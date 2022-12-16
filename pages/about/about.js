import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function About() {
  return (
    <>
      <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        ></link>
      </div>
      <div className={styles.near}>
        <div className={styles.h}>
          <h3>
            <b>Immigrants Help Arena</b>
          </h3>
        </div>
        <div className={styles.abouts}>
          <p>
            <b>Resquest for help</b>
          </p>

          <p>
            Are you having difficulties finding someone to help you getting your
            documents?
            <br />
            Then your worries are over, here you can have the aid you ever need.
          </p>
          <p>
            <b>Help others out</b>
          </p>
          <p>
            Are you an expert in helping others to have their permite of stay?{" "}
            <br />
            Do you know someone who can give a helping hand, <br /> or do you
            like helping others that are struggling get their documents ?<br />
            Well, the good news is, this App is for you, connect and reach out
            everyone everywhere.
          </p>
          <div className={styles.clicks}>
            <Link href="/abouts">
              <button type="button" className="btn btn-success">
                <b>CONTINUE</b>
              </button>
            </Link>
          </div>
        </div>
        <footer
          className={styles.foot}
          style={{ borderTop: "1px solid white", padding: "20px 20px" }}
        >
          {" "}
          &copy; {new Date().getFullYear()} i-help
        </footer>
      </div>
    </>
  );
}
