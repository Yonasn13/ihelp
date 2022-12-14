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
      <div>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <div className={styles.callMe}></div>

        <FaBell className={styles.bell} />
        <div className={styles.form}>
          <h3>List of Requests</h3>
          {requests.map((request) => (
            <div key={request.id}>
              <div className="shadow  p-3 mb-2 bg-body rounded">
                <div className="invisible">
                  <FaHandPaper />
                </div>
                <div className={styles.name}>
                  <b>
                    Help request to {request.HelperProfile.User.firstName}
                    {request.HelperProfile.User.lastName}
                  </b>
                </div>
                <div className="hstack gap-2">
                  <div>
                    <FaUserCircle size="40" />
                  </div>
                  <div>
                    <FaHandPaper />
                  </div>
                </div>
              </div>

              {requests.map((request) => (
                <div key={request.id}>
                  <Link href={`/user/requests/${request.HelperProfile.User.id}`}>
                    <div className="shadow  p-3 mb-2 bg-body rounded">
                      <div className="invisible">
                        <FaHandPaper />
                      </div>
                      <div className={styles.name2}>
                        <b>
                          Help request to {request.HelperProfile.User.firstName}
                          {request.HelperProfile.User.lastName}
                        </b>
                      </div>
                      <div class="hstack gap-2">
                        <div>
                          <FaUserCircle size="40" />
                        </div>
                        <div>
                          <FaHandPaper />
                        </div>
                        <div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

              ))}
            </div>
          ))}
        </div>
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
