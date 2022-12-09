import helperProfileController from "../../../controllers/helperProfileController"
import Link from "next/link"


export default function helperProfile(props) {
    const helperProfiles = props.helperProfiles
    console.log(helperProfiles)

    return (
        <>
          <h3>Helpers</h3>
             <ul>
                {helperProfiles.map(helperProfile => (
                   <li key={helperProfile.id}>
                        City: {helperProfile.city}, Language: {helperProfile.language}
                        <Link href={`/user/helpers/[id]${helperProfile.id}`}>  {helperProfile.UserId}</Link>
                        </li>
                ))}
                 </ul>
        </>

    )
}


export async function getServerSideProps(req, res) {
    const helperProfiles = await helperProfileController.findAll()
    
    return {
        props: { helperProfiles }
    }

}