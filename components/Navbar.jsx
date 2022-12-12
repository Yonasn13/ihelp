import Link from "next/link"
import styles from "../styles/Navbar.module.css";

export default function Navbar(props) {
    // fix the routes so that they send to the correct path
    const navbar = props.navbar
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navlink}>
                    <Link href={'/'}>
                    🏛️
                    </Link>
                </div>
                <div className={styles.navlink}>
                    <Link href={'/about'}>
                        ℹ️
                    </Link>
                </div>
                <div className={styles.navlink}>
                    <Link href={'/helper/profile'}>
                        👩🏻
                    </Link>
                </div>
            </nav>
        </>
    )
}
