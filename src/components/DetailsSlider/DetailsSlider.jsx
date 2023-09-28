import React, { useRef } from "react";
import styles from "./DetailsSlider.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterDataByStatus } from "../../redux/home.slice";
import { IoIosArrowBack } from "react-icons/io";
import { Form } from "react-bootstrap";

export default function DetailsSlider() {
  let selected = useRef();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { filterData } = useSelector((state) => state.home);
  let handelSelect = () => {
    dispatch(filterDataByStatus(selected.current.value));
  };
  let styleTable = {
    Solved: { border: styles.borderSolved, btn: styles.Solved },
    Pending: { border: styles.borderPending, btn: styles.Pending },
    Closed: { border: styles.borderClosed, btn: styles.Closed },
    Progress: { border: styles.borderProgress, btn: styles.Progress },
    Canceled: { border: styles.borderCanceled, btn: styles.Canceled },
  };

  return (
    <React.Fragment>
      <div className={styles.slider}>
        <div className={styles.head}>
          <IoIosArrowBack
            onClick={() => {
              navigate("/");
            }}
          />
          <Form.Select
            size="sm"
            className="fw-bold"
            onChange={handelSelect}
            ref={selected}
            aria-label="Default select example"
          >
            <option value="">All Tickets</option>
            <option value="Solved">Solved</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
            <option value="Pending">Pending</option>
            <option value="Canceled">Canceled</option>
          </Form.Select>
        </div>
        <div className="row my-3">
          {filterData &&
            filterData.lenght !== 0 &&
            filterData.map((ele) => (
              <div
                onClick={() => {
                  navigate(`/TicketDetails/${ele.id}`);
                }}
                key={ele.id}
                className={`${styles.item}   col-12`}
              >
                <div className={`row gx-2 `}>
                  <div
                    className={`col-6 ${
                      styleTable[
                        ele.status === "In Progress" ? "Progress" : ele.status
                      ].border
                    } `}
                  >
                    <h6 style={{ fontSize: "14px" }}>User Name</h6>
                    <p style={{ fontSize: "10px" }}>
                      27 Jon 2023 - From: {ele.from} - To {ele.to} - Branch
                    </p>
                  </div>
                  <div className="col-6">
                    <div
                      className={`${
                        styleTable[
                          ele.status === "In Progress" ? "Progress" : ele.status
                        ].btn
                      } ${styles.btn}`}
                    >
                      {ele.status}
                    </div>
                    <span className={styles.smCircle}></span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </React.Fragment>
  );
}
