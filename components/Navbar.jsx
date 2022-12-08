import Link from "next/link"
import styles from "../styles/Navbar.module.css";

export default function Navbar(props) {
    // fix the routes so that they send to the correct path
    const session = props.session
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
                    <Link href={'/search'}>
                        🔍
                    </Link>
                </div>
                <div className={styles.navlink}>
                    <Link href={'/profile/user'}>
                        👩🏻
                    </Link>
                </div>
            </nav>
        </>
    )
}
