import requestController from '../../../controllers/requestController'


export default function Request(props) {
    const requests = props.requests
    return (
        <>
            <din >
                <h3>List of Requests</h3>

                {requests.map(request => (
                    <p key={request.id} >HelperProfile: {request.helperProfileId}<br />
                        Message: {request.message}</p>
                ))}
            </din>

            )
        </>
    )
}

export async function getServerSideProps(req, res) {
    const requests = await requestController.findAll()
    return {
        props: { requests },
        // will be passed to the page component as props
    }
}