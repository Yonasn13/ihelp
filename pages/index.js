<<<<<<< HEAD
import Link from "next/link";
=======
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Navbar from '../components/Navbar';
>>>>>>> 76b0de5e927c9ef827f2197ebc30385b4ce98d53

export default function Home() {
  return (
    <>
<<<<<<< HEAD
      <h1>Empty Next App</h1>
      <Link href={'/user'}>Home</Link >
=======
      <div className=''>
        <div className={styles.halfPageGreen}>
          <div>
            <Image src={'/ihelp-logo.png'} alt="ihelp logo" width={200} height={150} />
          </div>
        </div>
        <div className={styles.halfPageWhite}>
          <div className={styles.h1Welcome}>
            <h1>Welcome to I-help!</h1>
          </div>
          <div className={styles.paragdiv}>
            <p>Part of being a person is about helping others.</p>
          </div>
          <div className={styles.container}>
            <p className={styles.paragp}>-Regis Murayi</p>
          </div>
          <div className={styles.container2}>
            <div className={styles.helperButton}>
            <div className='row'>
              <div className='btn btn-primary'>
                Helper
              </div>
            </div>
            </div>
            <div className={styles.helpButtn}>
            <div className=''>
              <div className='row'>
                <div className='btn btn-outline-success'>
                  Help
                </div>
              </div>
            </div>
            </div>
          </div>
          <Navbar></Navbar>
        </div>
      </div>
>>>>>>> 76b0de5e927c9ef827f2197ebc30385b4ce98d53
    </>
  );
}