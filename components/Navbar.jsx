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
        <div class="shadow-sm p-1 mb-1 bg-body rounded">
          <Link href={"/"}>
            <BsHouseDoor size="30" />
          </Link>
        </div>
        <div class="shadow-sm p-1 mb-1 bg-body rounded">
          <Link href={"/about"}>
            <BsInfoCircle size="30" />
          </Link>
        </div>
        <div class="shadow-sm p-1 mb-1 bg-body rounded">
          <Link href={"/search"}>
            <BsSearch size="30" />
                  </Link>
                  
          <input type="text" placeholder="Search"/>
        </div>

        <div class="shadow-sm p-1 mb-1 bg-body rounded">
          <Link href={"/helper/profile"}>
            <BsPersonCircle size="30" />
          </Link>
        </div>
      </nav>
    </>
  );
}
