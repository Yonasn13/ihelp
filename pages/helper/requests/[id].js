import styles from '../../../styles/Home.module.css'
import helperProfileController from '../../../controllers/helperProfileController'
import Navbar from '../../../components/Navbar'

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
                </div>
                <div>
                    <h4>{userFirstName.firstName}</h4>
                    <p>{requests[0].message}</p>
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