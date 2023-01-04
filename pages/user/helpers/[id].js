import Link from "next/link"
import Navbar from "../../../components/Navbar"
import helperProfileController from "../../../controllers/helperProfileController"
import Image from "next/image"
import styles from '../../../styles/Home.module.css'

export default function helperProfile(props) {
    const helperProfile = props.helperProfile
    console.log("we're getting the helper..",helperProfile)
    return (
        <>
            <div className={styles.profile}>
                <div
                    style={{ borderRadius: '40px', overflow: 'hidden' }} className={styles.h3HelpersList}>
                    <Image
                        src="/profile.png"
                        alt="Picture of the author"
                        width={50}
                        height={50}
                    />
                </div>
                <br />
                <h1 className={styles.h3HelpersList}>{helperProfile.User.firstName}</h1>
                <h6 className={styles.h3HelpersList}>{helperProfile.city}, 10121</h6>
                <p>Language: {helperProfile.language}</p>
                <p>About: {helperProfile.description}... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div>
                    <form action={'/api/userRequest'} method="POST">
                        <label htmlFor="message">Request message:</label> 
                        <br/>
                        <textarea type="text" id="message" name="message" />
                        <br />
                        <br />
                        <input type='text' name="UserId" hidden={true} defaultValue={helperProfile.UserId} />
                        <input type='text' name="HelperProfileId" hidden={true} defaultValue={helperProfile.id} />
                        <input type="submit" value="Send" className='btn btn-success'/>
                    </form>
                </div>
            </div>
            <Navbar></Navbar>
        </>
    )
}
export async function getServerSideProps(req, res) {
    const { id } = req.query
    const helperProfile = await helperProfileController.find(id)
    console.log(id)
    console.log(helperProfile)
    return {
        props: { helperProfile },
    }
}







