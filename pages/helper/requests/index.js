import styles from '../../../styles/Home.module.css'
import helperProfileController from '../../../controllers/helperProfileController'
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
                <div>
                    <h3>list of Requests</h3>
                </div>
                <ul>
                    {requests.map(request => (
                        <li request={request} key={request.id}>
                            <Link href={`/helper/requests/${userFirstName.id}`}>
                                {userFirstName.firstName} wants to contact you
                            </Link>
                        </li>
                    )
                    )}
                </ul>

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