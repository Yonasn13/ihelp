import requestController from "../controllers/requestController"

export default function request (props) {
    const requests = props.requests
    console.log(requests)
    return (
        <>
         <div>
            <h1>List of Requests</h1>
        </div>
        <div>
        {requests.map(request => (
         <h3 key={request.id} >UserId: {request.UserId}; HelperProfileId: {request.HelperProfileId}; Message: {request.message}</h3>
     ))}
   </div>  
        </>    
    )
}

export async function getServerSideProps(req, res) {
    const requests = await requestController.findAll()
    return {
        props: { requests },
    }

}