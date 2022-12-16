import helperProfileController from '../../../controllers/helperProfileController';
import Image from 'next/image';
import Navbar from '../../../components/Navbar'
import styles from '../../../styles/Home.module.css'
const Profile = props => {
    const helperprofile = props.helperprofile
    const helper = helperprofile.User
    console.log("helper", helper)
    if (helperprofile) {
        return (
            <>
                <div className={styles.call}>
                    <div className={styles.contain}>
                        <div
                            style={{ borderRadius: '40px', overflow: 'hidden' }}>
                            <Image
                                src="/profile.png"
                                alt="Picture of the author"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                    <div className={styles.contain2}>
                        <h3>
                            {helper.firstName}
                            {helper.lastName}
                        </h3>
                        <br />
                    </div>
                    <div className={styles.container3}>
                        Description: {helperprofile.description}<br />
                        PhoneNumber: {helperprofile.phoneNumber}<br />
                        Language: {helperprofile.language}<br />
                        City: {helperprofile.city}<br />
                    </div>
                </div>
                <Navbar></Navbar>
            </>
        )
    } else {
        return 'please create a helper profile'
    }
}
export async function getServerSideProps(req, res) {
    const userId = 1
    const helperprofile = await helperProfileController.findUser(userId)
    return {
        props: { helperprofile },
    }
}
export default Profile