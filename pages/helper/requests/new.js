import styles from '../../../styles/Home.module.css'
import helperProfileController from '../../../controllers/helperProfileController'
import Navbar from '../../../components/Navbar'
import Link from 'next/link'

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
                    <h3>Message from</h3>
                </div>
                <div>
                    <h3>{userFirstName.firstName}</h3>
                    <p>{requests[0].message}</p>
                    <p>{requests[0].status}</p>
                    <form>
                        <label htmlFor="message">Reply: </label><br />
                        <label htmlFor="message"></label><br />
                        <input type="text" id="message" name="message" /><br /><br />
                        <Link href={'/helper/requests'}>
                            <input type="submit" value="send" />
                        </Link>

                    </form>
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