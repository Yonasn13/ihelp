import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import { FaBell, FaUserCircle, FaHandPaper } from "react-icons/fa";
import requestController from "../../../controllers/requestController";
import Navbar from "../../../components/Navbar";
export default function Request(props) {
  const requests = props.requests;
  console.log(requests);
  return (
    <>
      <div>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
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
                    {" "}
                    {request.HelperProfile.User.firstName}{" "}
                    {request.HelperProfile.User.lastName}{" "}
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
                    <Link href="/requests">{request.message} </Link>
                  </div>
                </div>
              </div>

              {requests.map((request) => (
                <div key={request.id}>
                  <div className="shadow  p-3 mb-2 bg-body rounded">
                    <div className="invisible">
                      <FaHandPaper />
                    </div>
                    <div className={styles.name2}>
                      <b>
                        {" "}
                        {request.HelperProfile.User.firstName}{" "}
                        {request.HelperProfile.User.lastName}{" "}
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
                        <Link href="/requests/1">{request.message} </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <Navbar />
      </div>
    </>
  );
}

export async function getServerSideProps(req, res) {
  const requests = await requestController.findAll();
  return {
    props: { requests },
    // will be passed to the page component as props
  };
}
