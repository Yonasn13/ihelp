import requestController from "../../../controllers/requestController";
import styles from "../../../styles/Home.module.css";
import { FaBell, FaEnvelope, FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import React from "react";
import { BsHouseDoor } from "react-icons/bs";
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
        <FaBell className={styles.bell} />
        <div className={styles.form}>
          <h3>Request Details</h3>
          <p>
            Status <FaCheckCircle color={color} />{" "}
          </p>
          <div class="shadow p-3 mb-5 bg-body rounded">
            <div class="hstack gap-6">
              <div class="bg-light border">
                <FaEnvelope /> {request.HelperProfile.User.email}
              </div>
            </div>

            <div class="vstack gap-3">
              <div class="bg-light border">
                <FaWhatsapp color="green" /> {request.HelperProfile.phoneNumber}
              </div>
            </div>
          </div>
          <div>
            Rate a helper
            <ReactStars count={5} size={24} color2={"#ffd700"} />
          </div>
        </div>
      </div>

      <Navbar />
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
