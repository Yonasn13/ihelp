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
      <div className={styles.callMe}>
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
                   Help request to {request.User.firstName}
                    {request.User.lastName}
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
                 {request.message}
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
                       Help request to {request.User.firstName}
                        {request.User.lastName}
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
                      <Link href={`/user/requests/${request.User.id}`}>{request.message} </Link>
                      </div>
                    </div>
                  </div>
                </div>
                
              ))}
            </div>
          ))}
        </div>
      </div>
      <Navbar></Navbar>
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