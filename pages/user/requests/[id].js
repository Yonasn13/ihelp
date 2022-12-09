import React from 'react'
import userController from '../../../controllers/userController'
import { FaRegEnvelope, FaBell, FaWhatsapp } from 'react-icons/fa';

export default function User(props) {
    const user = props.user
    return (
        <div>
            <FaBell />

            <h3>Request Details</h3>
            <p><FaRegEnvelope />{user.email}</p>
            <p> < FaWhatsapp />{user.phoneNumber}</p>
        </div>
    )
}

export async function getServerSideProps(req, res) {
    const users = await userController.findAll()
    return {
        props: { users },
    }
}