import styles from '../../../../styles/Home.module.css'
import helperProfileController from '../../../../controllers/helperProfileController'
import Navbar from '../../../../components/Navbar'
import Link from 'next/link'

const Requests = props => {
    const helper = props.helper
    const requests = helper.Requests

    const user = props.user
    const userFirstName = user.User
    console.log("userFirstName ", userFirstName)
    return (
        <>
            <div className={styles.container}>
                <Navbar></Navbar>
                <div>
                    <h3>Message from:</h3>
                    <h4>{userFirstName.firstName}</h4>
                    <p>{requests[0].message}</p>
                </div>
                <div className={styles.container2}>
                    <div className='row'>
                        <div className='btn btn-success'>
                            <Link href={`/helper/requests/${userFirstName.id}/message`} className={styles.LinkBtnButtons}>
                                Accept
                            </Link>
                        </div>
                        <div className='btn btn-danger'>
                            <Link href={'/helper/requests'} className={styles.LinkBtnButtons}>Decline</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(req, res) {
    const userId = 1
    const helper = await helperProfileController.findByUser(userId)
    const user = await helperProfileController.findUser(userId)
    console.log(user)
    console.log(helper)
    return (
        { props: { helper, user } }
    )
}

export default Requests