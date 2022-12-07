import React from 'react'
import usersController from '../../controllers/userController'
import { useState, useEffect } from 'react'


export default function User(props) {

    const [data, setData] = useState(null)
    const [user, setUser] = useState(false)

    useEffect(() => {
        setUser(true)
        fetch('/api/profile-data')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setUser(false)
            })
    }, [])
    if (user) return <p>User</p>
    if (!data) return <p>No profile </p>

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.bio}</p>
        </div>
    )

}



export async function getServerSideProps(req, res) {
    const users = await usersController.findAll()
    return {
        props: { users },
        // will be passed to the page component as props
    }
}
