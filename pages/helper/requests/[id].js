import styles from '../../../styles/Home.module.css'
import helperProfileController from '../../../controllers/helperProfileController'

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
                    <h3>Message from:</h3>
                </div>
                <ul>
                    {requests.map(request => (<p request={request} key={request.id}>{userFirstName.firstName}<br/> {request.message}</p>))}
                </ul>

            </div>
        </>
    )
}

export async function getServerSideProps (req, res) {
    const userId = 1
    const helper = await helperProfileController.findByUser(userId)
    const user = await helperProfileController.findUser(userId)
    console.log(user)
    return (
        {props: { helper, user }}
    )
}

export default Requests