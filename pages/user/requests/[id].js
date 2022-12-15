import requestController from "../../../controllers/requestController";
import styles from "../../../styles/Home.module.css";
import { FaBell, FaEnvelope, FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import React from "react";
import ReactStars from "react-stars";
import Navbar from "../../../components/Navbar";
export default function Request(props) {
  const request = props.request;
  console.log(request);
  // Display a status icon base on the request status
  let color;
  if (request.status == "accepted") {
    color = "green";
  } else if (request.status == "declined") {
    color = "red";
  } else {
    color = "grey";
  }
  return (
    <>
      <div className={styles.callMe}>
        <div className={styles.form}>
          <h3>Request Details</h3>
          <h6>
            Status <FaCheckCircle color={color} />
          </h6>
          <div className="shadow p-4 mb-2 bg-body rounded">
            <div className="hstack gap-3">
              <div className="bg-light border">
                <FaEnvelope /> {request.HelperProfile.User.email}
              </div>
            </div>
            <div className="vstack gap-3">
              <div className="bg-light border">
                <FaWhatsapp color="green" /> {request.HelperProfile.phoneNumber}
              </div>
            </div>
          </div>
          </div>
          <div className={styles.rate}>
            Rate a helper
            <ReactStars count={5} size={24} color2={"#FFD700"} />
          </div>
      </div>
      <Navbar></Navbar>
    </>
  );
}
export async function getServerSideProps(req, res) {
  const { id } = req.query;
  const request = await requestController.find(id);
  return {
    props: { request },
  };
}