import styles from '../../../../styles/Home.module.css'
import helperProfileController from '../../../../controllers/helperProfileController'
import Navbar from '../../../../components/Navbar'
import { useState } from 'react'

const Requests = props => {
    const helper = props.helper
    const requests = helper.Requests

    const user = props.user
    const userFirstName = user.User
    console.log("userFirstName ", userFirstName)

    const [message, setMessage] = useState('');

    const [updated, setUpdated] = useState(message);

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleClick = () => {
        // 👇 "message" stores input field value
        setUpdated(message);
    };
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
                    <div>
                        <textarea
                            type="text"
                            id="message"
                            name="message"
                            form="usrform"
                            onChange={handleChange}
                            value={message}
                        />

                        <h2>Message: {message}</h2>

                        <h2>Updated: {updated}</h2>

                        <button onClick={handleClick} className="btn btn-success">Update</button>
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