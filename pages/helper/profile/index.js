import helperProfileController from '../../../controllers/helperProfileController';
import Image from 'next/image';
import Navbar from '../../../components/Navbar'
import styles from '../../../styles/Home.module.css'
import Link from 'next/link';

const Profile = props => {
    const helperprofile = props.helperprofile
    const helper = helperprofile.User
    console.log("helper", helper)
    return (
        <>
            <div className={styles.container}>
                <div class="di"
                    style={{ borderRadius: '40px', overflow: 'hidden' }}>
                    <Image
                        src="/cute-penguin.jpg"
                        alt="Picture of the author"
                        width={100}
                        height={100}
                    />
                </div>
            </div>
            <div className={styles.container2}>
                {helper.firstName}
                {helper.lastName}<br />
            </div>
            <div className={styles.container3}>
                Active: {helperprofile.active}<br />
                Description: {helperprofile.description}<br />
                PhoneNumber: {helperprofile.phoneNumber}<br />
                Language: {helperprofile.language}<br />
                City: {helperprofile.city}<br />
            </div>
            <div className={styles.btn}>
                <Link href="/helper/requests">
                    <div className='btn btn-primary'>Requests</div>
                </Link>
            </div>
            <Navbar></Navbar>
        </>
    )
}

export async function getServerSideProps(req, res) {
    const userId = 1
    const helperprofile = await helperProfileController.findUser(userId)
    return {
        props: { helperprofile },
    }
}

export default Profile




