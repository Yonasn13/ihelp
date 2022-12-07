import Link from "next/link"
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

export default function Navbar(props) {
    // fix the routes so that they send to the correct path
    const session = props.session
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navlink}>
                    <Link href={`/`}>
                    <Image className={styles.logo} src={'/images/hd-airbnb-logo-drawing.png'} alt='I-help logo' width={100} height={300}/></Link>
                    <Image className={styles.avator} src="/home/adela-yari/code/Adela-yari/ihelp/pages/images/avator.png" width={50} height={50}></Image>
                </div>
                <div >

                </div>
                <div className={styles.navlink}>
                    <Link href={'flats/profile'}>Profile</Link>
                </div>
            </nav>
        </>
    )
}