import helperProfileController from "../controllers/helperProfileController"

export default function helperProfile (props) {
    const helperProfiles = props.helperProfiles
    console.log(helperProfiles)
    return (
        <>
         <navbar></navbar>
         <div >
            <h1>List of Helpers</h1>
        </div>
        <div>
        {helperProfiles.map(helperProfile => (
         <h3 key={helperProfile.id}>UserId: {helperProfile.UserId}; Active: {helperProfile.active}; Description: {helperProfile.description}</h3>
     ))}
   </div> 
        </>
        
    )
}

export async function getServerSideProps(req, res) {
    const helperProfiles = await helperProfileController.findAll()
    return {
        props: { helperProfiles }
    }

}