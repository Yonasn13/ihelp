import Link from "next/link"
import helperProfileController from "../../../controllers/helperProfileController"


export default function helperProfile(props) {
    const helperProfile = props.helperProfile
    console.log(helperProfile)
    return (
        <>
            <h2>Profile</h2>
            <div>
                <p> Image: {helperProfile.image}</p>
                <p> Name: {helperProfile.User.lastName} {helperProfile.User.firstName}</p>
                <p> City: {helperProfile.city}</p>
                <p> Helper profile info</p>
                <p> Language: {helperProfile.language}</p>
                <p> Description: {helperProfile.description}</p>

            </div>

            <div>
                <form action={`/api/request/${helperProfile.id}/request`} method="POST">
                    <label for="message">Request message:</label>
                    <input type="text" id="message" name="message" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}
export async function getServerSideProps(req, res) {
    const { id } = req.query
    const helperProfile = await helperProfileController.find(id)
    console.log(id)
    return {
        props: { helperProfile },

    }
}