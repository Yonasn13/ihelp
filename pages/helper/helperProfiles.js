import helperProfileController from "../../controllers/helperProfileController"
import userController from '../../controllers/userController'

export default function helperProfile(props) {
    const helperProfiles = props.helperProfiles;
    console.log(helperProfiles)
    const users = props.users
    console.log(users)
    return (
        <>
            <div>
                <ol>
                {helperProfiles.map(helperProfile => (
                    <li helperProfile={helperProfile} key={helperProfile.id}>
                        UserId: {helperProfile.UserId}, description: {helperProfile.description}
                    </li>
                ))}
                </ol>
                <div>
                {users.map(user => (
                    <h3 key={user.id}>
                        firstName: {user.firstName}, lastName: {user.lastName}
                    </h3>
                    
                ))}
                </div>
                <h1>Hello Vernon!</h1>
            </div>
        </>

    )
}

export async function getServerSideProps(req, res) {
    const helperProfiles = await helperProfileController.findAll()
    const users = await userController.findAll()
    return {
        props: { helperProfiles, users }
    }

}