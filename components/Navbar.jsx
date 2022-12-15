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
        <div>
          <Link href={"/"}>
            <BsHouseDoor size="30" />
          </Link>
        </div>
        <div>
          <Link href={"/about"}>
            <BsInfoCircle size="30" />
          </Link>
        </div>
        <div>
          <Link href={"/helper/profile"}>
            <BsPersonCircle size="30" />
          </Link>
        </div>
      </nav>
    </>
  );
}