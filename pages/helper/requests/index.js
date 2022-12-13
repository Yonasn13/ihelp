import styles from '../../../styles/Home.module.css'
import helperProfileController from '../../../controllers/helperProfileController'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'

const Requests = props => {
    const helper = props.helper
    const requests = helper.Requests

    const user = props.user
    const userFirstName = user.User
    console.log("userFirstName ", userFirstName)
    return (
        <>
            <div className={styles.container2}>
                <Navbar></Navbar>
                <div>
                    <h3 className={styles.h3RequestsList}>list of Requests</h3>
                </div>
                <div>
                    <ul>
                        {requests.map(request => (
                            <li request={request} key={request.id} className={styles.card}>
                                <Link href={`/helper/requests/${userFirstName.id}`} className={styles.LinkRequestsList}>
                                    {userFirstName.firstName} wants to contact you
                                </Link>
                            </li>
                        )
                        )}
                    </ul>
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
    return (
        { props: { helper, user } }
    )
}

export default Requests