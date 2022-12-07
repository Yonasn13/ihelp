import React from 'react'
import helperController from '../../controllers/helperController'
import Image from 'next/image'

export default function Helper(props) {
    const helper = props.helper

    return (

        <>
            <div className='di' style={{ borderRadius: '40px', overflow: 'hidden' }}>
                <Image src="/nike.png"
                    alt="Nike"
                    width={100}
                    height={100}
                    objectFit="cover"
                />
                <h3>{helper.firstName}</h3>
            </div>
            <form class="form">

                <div>
                    <h3>{helper.lastName}</h3>
                    <p> {helper.language}</p>
                    <p> {helper.city}</p>
                    <p> {helper.phoneNumber}</p>



                </div>
            </form>
        </>
    )
}

export async function getServerSideProps(req, res) {
    const helperId = 1
    const helper = await helperController.find(helperId)
    return {
        props: { helper },
        // will be passed to the page component as props
    }
}

