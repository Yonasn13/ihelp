import React from 'react'
import helpersController from '../../controllers/helperController'
import { useState, useEffect } from 'react'


export default function Helper() {

    const [data, setData] = useState(null)
    const [helper, setHelper] = useState(false)

    useEffect(() => {
        setHelper(true)
        fetch('/api/profile-data')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setHelper(false)
            })
    }, [])
    if (helper) return <p>Helper</p>
    if (!data) return <p>No profile</p>

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.bio}</p>
        </div>
    )

}



export async function getServerSideProps(req, res) {
    const helpers = await helpersController.findByPk()
    return {
        props: { helpers },
        // will be passed to the page component as props
    }
}

