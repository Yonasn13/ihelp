import Link from "next/link"
import Navbar from "../../../components/Navbar"
import helperProfileController from "../../../controllers/helperProfileController"
import Image from "next/image"
import styles from '../../../styles/Home.module.css'

export default function helperProfile(props) {
    const helperProfile = props.helperProfile
    console.log(helperProfile)
    return (
        <>
            <div className={styles.profile}>
                <h2>Profile</h2>

                <div class="di"
                    style={{ borderRadius: '40px', overflow: 'hidden' }}>
                    <Image
                        src="/cute-penguin.jpg"
                        alt="Picture of the author"
                        width={100}
                        height={100}
                    />
                </div>
                <br />
                <p> Name: {helperProfile.User.lastName} {helperProfile.User.firstName}</p>
                <p> City: {helperProfile.city}</p>
                <p> Helper profile info</p>
                <p> Language: {helperProfile.language}</p>
                <p> Description: {helperProfile.description}</p>
                <div>
                    <form action={`/user/requests`} method="POST">
                        <label for="message">Request message:</label>
                        <br />
                        <input type="text" id="message" name="message" />
                        <input type="submit" value="Send" />
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







