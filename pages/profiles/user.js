import React from 'react'
import userController from '../../controllers/userController'


export default function User(props) {
    const user = props.user


    return (
        <div>
            <h1>{user.firstName}</h1>
            <p>{user.lastName}</p>
        </div>
    )

}



export async function getServerSideProps(req, res) {
    const userId = 1
    const user = await userController.find(userId)
    return {
        props: { user },
        // will be passed to the page component as props
    }
}
