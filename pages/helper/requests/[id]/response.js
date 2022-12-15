import styles from '../../../../styles/Home.module.css'
import helperProfileController from '../../../../controllers/helperProfileController'
import Navbar from '../../../../components/Navbar'
import requestController from '../../../../controllers/requestController'

const Requests = props => {
    const request = props.request

    const user = props.user
    const userFirstName = user.User
    console.log("userFirstName ", userFirstName)
    return (
        <>
            <div className={styles.container}>
                <div>
                    <h3>Message from:</h3>
                </div>
                <div>
                    <h3>{userFirstName.firstName}</h3>
                    <p>{request.message}</p>
                    <p>{request.status}</p>
                    <form action='/api/helperResponse' method='POST'>
                        <label htmlFor="message">Reply: </label><br />
                        <br />
                        <textarea type="text" id="message" name="message" /><br /><br />
                        <input type='text' hidden={true} defaultValue={request.UserId} />
                        <input type='text' hidden={true} defaultValue={request.HelperProfileId} />
                        <input type="submit" value="    Send    " className='btn btn-success'/>

                    </form>
                </div>
            </div>
            <Navbar></Navbar>
        </>
    )
}

export async function getServerSideProps(req, res) {
    const userId = 1
    const { id } = req.query
    const request = await requestController.find(id)
    const helper = await helperProfileController.findByUser(userId)
    const user = await helperProfileController.findUser(userId)
    console.log(user)
    console.log(helper)
    return (
        { props: { helper, user, request } }
    )
}

export default Requests