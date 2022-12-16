import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import { FaBell, FaUserCircle, FaHandPaper } from "react-icons/fa";
import requestController from "../../../controllers/requestController";
import Navbar from "../../../components/Navbar";
export default function Request(props) {
  const requests = props.requests
  console.log(requests)
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <div className={styles.form}>

        <h3>List of Requests</h3>

        {requests.map((request) => (
          <div key={request.id} className={styles.LinkRequestsList}>

            <Link href={`/user/requests/${request.HelperProfile.User.id}`} className={styles.a}>
              <div className="shadow p-3 mb-2 bg-body rounded d-flex">

                <div className="px-3">
                  <FaUserCircle size="40" />
                </div>

                <div>
                  <b> Help request to {request.HelperProfile.User.firstName} {request.HelperProfile.User.lastName} </b>
                </div>

              </div>
            </Link>

          </div>
        ))}

      </div>
      <Navbar></Navbar>
    </>
  )
}
export async function getServerSideProps(req, res) {
  const id = 1
  const requests = await requestController.findAllUser(id)
  return {
    props: { requests },
  }
}