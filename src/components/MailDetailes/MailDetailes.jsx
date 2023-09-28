import React from "react";
import styles from "./MailDetailes.module.css";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GrAttachment } from "react-icons/gr";

export default function MailDetails({ data }) {
  return (
    <React.Fragment>
      <div className="row" style={{ backgroundColor: "var(--White)" }}>
        <div className={` col-12 ${styles.head} `}>
          <span
            className={`${
              styles[data.status === "In Progress" ? "Progress" : data.status]
            }`}
          ></span>
          <p className="m-0">{data.status}</p>
        </div>
        <div className="col-12">
          <div className={`row p-2 ${styles.nav}`}>
            <div className="col-4">
              <div>
                <BiCommentDetail /> Details
              </div>
            </div>
            <div className="col-4">
              <div>
                <AiOutlineClockCircle />
              </div>
            </div>
            <div className="col-4">
              <div>
                <GrAttachment />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className={` row my-4 ${styles.item}`}>
            <div className="col-3">
              <span>Send by :</span>
            </div>
            <div className="col-6 text-start">
              <p>Yara Ayad</p>
            </div>
          </div>

          <div className={` row my-4 ${styles.item}`}>
            <div className="col-3">
              <span> Department:</span>
            </div>
            <div className="col-6  text-start">
              <p>{data.from}</p>
            </div>
          </div>

          <div className={`row my-4 ${styles.item}`}>
            <div className="col-3">
              <span> Assign to :</span>
            </div>
            <div className="col-6 text-start">
              <p>{data.to}</p>
            </div>
          </div>

          <div className={` row  my-4 ${styles.item}`}>
            <div className="col-3">
              <span>Status :</span>
            </div>
            <div className="col-6 text-start">
              <p>{data.status}</p>
            </div>
          </div>

          <div className={` row my-4 ${styles.item}`}>
            <div className="col-3">
              <span> Created Time : </span>
            </div>
            <div className="col-6 text-start">
              <p>05 Jul 2023, 08:30 AM</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
