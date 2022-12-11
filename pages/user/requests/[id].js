/*import requestController from '../../../controllers/requestController'
import React from 'react'
import { FaBell, FaWhatsapp, FaCheckCircle } from 'react-icons/fa'
import Navbar from '../../../components/Navbar'

export default function Request(props) {
    const request = props.request
    console.log(request)
    return (
        <div>
            <h3>Request Details</h3>
            <FaBell />
            <p>Status: <FaCheckCircle color={'green'} /></p>
            <p>   <FaWhatsapp color='green' /> {request.HelperProfile.phoneNumber}
            </p>
            <Navbar></Navbar>
        </div>
    )
}
export async function getServerSideProps(req, res) {
    const { id } = req.query
    const request = await requestController.find(id)
    return {
        props: { request },
    }
}*/