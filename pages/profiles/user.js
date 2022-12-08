import React from 'react'
import userController from '../../controllers/userController'
import Image from 'next/image';




export default function User(props) {
    const user = props.user


    return (
        <>

            <div class="di"
                style={{ borderRadius: '40px', overflow: 'hidden' }}>
                <Image
                    src="/UserImage.png"
                    alt="Picture of the author"
                    width={100}
                    height={100}
                    objectFit="cover"

                />
                <h3 > {user.firstName}       {user.lastName}</h3>

            </div>
            <form class="form" >
                <div >

                    <p> <b>Lang:</b>    {user.language}</p>
                    <p> <b>city:</b>    {user.city}</p>
                    <p> <b>email:</b>   {user.email}</p>
                    <p> <b>number:</b>  {user.phoneNumber}</p>

                </div>

            </form>
           
        </>
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
