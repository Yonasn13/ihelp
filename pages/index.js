import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <div className=''>
        <div className={styles.halfPageGreen}>
          <div>
            <Image src={'/ihelp-logo.png'} alt="/ihelp logo" width={200} height={150} />
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
              <Link href={'/helper/requests'}>
                <div className={styles.row}>
                  <div className='btn btn-primary'>
                    Helper
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.helpButtn}>
              <div className=''>
                <Link href={'/user/helpers'}>
                  <div className={styles.row}>
                    <div className='btn btn-outline-success'>
                      Help
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}