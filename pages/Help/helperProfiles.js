import helperProfileController from "../../controllers/helperProfileController"
import userController from '../../controllers/userController'
import styles from '../../styles/Home.module.css'

export default function helperProfile(props) {
    const helperProfiles = props.helperProfiles;
    console.log(helperProfiles)
    const users = props.users
    console.log(users)
    return (
        <>
            <div className={styles.container}>
                {helperProfiles.map(profile => {
                    <h3 key={profile.id}>
                        UserId: {profile.userId}, description: {profile.description}
                    </h3>
                })}
                {users.map(user => {
                    <h3 key={user.id}>
                        firstName: {user.firstName}, lastName: {user.lastName}
                    </h3>
                })}
            </div>
        </>

    )
}

export async function getServerSideProps(req, res) {
    const helperProfiles = await helperProfileController.findAll();
    const users = await userController.findAll()
    return {
        props: { helperProfiles, users }
    }

}