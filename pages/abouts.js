import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Aboutinfo() {
    return (
        <>
            <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
                </link>
            </div>
            <div className={styles.near}>
                <div className={styles.h}>
                        <h2><b>The Process</b></h2>
                </div>
                <div className={styles.abouts}>
                    <p> <b>Connection To Your Helpers</b></p>
                    <p>From helpers list you have the opportunity to choose a subsidary that you think might be good to handle your situation.
                        You could find volunteer from alover Italy.
                        you havr the option to send a request and message them after accepting your request.</p>
                    <p>Seek help with few clicks </p>
                    <p><b>
                        Help Others Out
                    </b></p>
                    <p>
                        Giving a helping hand to strangers is sometime diffcult, but there are folks who have been gifted
                        to whipe others tears.
                    </p>
                    <p>
                        Are you fabulous a human who likes to help in any situation?
                        Then you're at the right place. You could volunteer yourself help strangers get their permit of stay and make life easy for them.
                        create your own helper's page today and start your journey
                    </p>


                    <div className={styles.clicks}>

                        <Link href='/'>
                            <button type="button" className="btn btn-success"><b>HOME</b></button>
                        </Link>

                    </div>
                </div>
            </div>
            <div>

                <footer className={styles.foot} style={{ borderTop: '1px solid white', padding: '20px 20px' }}> &copy; {new Date().getFullYear()}  i-help</footer>
            </div>
        </>
    )
}
