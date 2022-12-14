import requestController from "../../../controllers/requestController";
import React from "react";
import styles from "../../../styles/Home.module.css";
import { FaBell, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Navbar from "../../../components/Navbar";

export default function Request(props) {
  const request = props.request;
  console.log(request);

  return (
    <>
      <div className={styles.callMe}>
        <FaBell className={styles.bell} />
        <div className={styles.form}>
          <h3>Request Details</h3>
          <h6>Status </h6>
          <div className="shadow p-3 mb-5 bg-body rounded">
            <div className="hstack gap-6">
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
