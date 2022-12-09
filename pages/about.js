import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function About() {
    return (

        <div>
            <Head>
                <title>about</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
                </link>
            </Head>

            <h3>Immigrants Help Stop</h3>
            <h6>Resquest for help</h6>
            <p>
                Are you having difficult time
                finding someone to help you
                getting your documents?
                then your worries are over,
                here you can have the aid you ever need.
            </p>
            <h6>Help others out</h6>
            <p>
                Are you an expert in helping others to have their permite of stay?
                Do you know someone who can give a helping hand, or do you like
                helping others that are struggling get their documents ?
                Well, good news, this App is for you, connect and reach out everyone everywhere.
            </p>
            <p><b>How it works?</b></p>
            <Link href='/pages/about'>
                <button type="button" className="btn btn-success">Success</button>
            </Link>


        </div>
    )
}
