import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import {
  BsHouseDoor,
  BsInfoCircle,
  BsPersonCircle,
  BsSearch,
} from "react-icons/bs";
export default function Navbar(props) {
  // fix the routes so that they send to the correct path
  const navbar = props.navbar;
  return (
    <>
      <nav className={styles.navbar}>
        <div className=" p-1 rounded">
          <Link href={"/"} className={styles.a}>
            <BsHouseDoor size="30" />
          </Link>
        </div>
        <div className=" p-1 mb-1 rounded">
          <Link href={"/about"} className={styles.a}>
            <BsInfoCircle size="30" />
          </Link>
        </div>

        <div className=" p-1 mb-1 rounded">
          <Link href={"/helper/profile"} className={styles.a}>
            <BsPersonCircle size="30" />
          </Link>
        </div>
      </nav>
    </>
  );
}
