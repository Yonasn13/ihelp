/*import Link from 'next/link'
import { FaBell, FaHandPaper } from 'react-icons/fa'
import requestController from '../../../controllers/requestController'

export default function Request(props) {
  const requests = props.requests
  console.log(requests)
  return (
    <>
      <div >
        <h3>List of Requests</h3>
        <FaBell />
        {requests.map(request => (
          <p key={request.id} >
            <Link href='/id' ><FaHandPaper /></Link>
            {request.message} <br />
            {request.HelperProfile.User.firstName}  {request.HelperProfile.User.lastName}
          </p>
        ))}
      </div>
    </>
  )
}
export async function getServerSideProps(req, res) {
  const requests = await requestController.findAll()
  return {
    props: { requests },
    // will be passed to the page component as props
  }
}*/