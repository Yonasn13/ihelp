import requestController from '../../../controllers/requestController'
import React from 'react'
import styles from '../../../styles/Home.module.css'
import { FaBell, FaEnvelope, FaWhatsapp, FaCheckCircle } from 'react-icons/fa'
import Footer from '../../../components/footer'


export default function Request(props) {
    const request = props.request
    console.log(request)


    function readMessage() {
        let status = 'seen'
        if (status == 'seen') {
            return (<FaCheckCircle color={'green'} />)
        } else {
            return (<FaCheckCircle color={'grey'} />)
        }
    }
    console.log(readMessage())
    return (
        < >

            <div className={styles.callMe}>

                <FaBell className={styles.bell} />
                <div className={styles.form}>

                    <h3>Request Details</h3>

                    <h6>Status  <FaCheckCircle color={'grey'} /></h6>

                    <p>
                        <FaEnvelope /> {request.HelperProfile.User.email} <br />
                        <FaWhatsapp color='green' />
                        {request.HelperProfile.phoneNumber}
                    </p>


                </div>
            </div>
            <div>
                <Footer>&copy; {new Date().getFullYear()} Absida</Footer>

            </div>
        </>

    )
}

export async function getServerSideProps(req, res) {
    const { id } = req.query
    const request = await requestController.find(id)
    return {
        props: { request },
    }
}
