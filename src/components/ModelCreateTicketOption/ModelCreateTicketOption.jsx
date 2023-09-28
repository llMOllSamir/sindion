import React, { useRef, useState } from "react";
import styles from "./ModelCreateTicketOption.module.css";
import { Button, Modal } from "react-bootstrap";
import { BiLayerMinus } from "react-icons/bi";
import { FiLayers } from "react-icons/fi";
import { AiOutlineCheck, AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ModelCreateTicketOption({ show, handleClose }) {
  let [checkOption, setCheckOption] = useState(0);
  let navigate = useNavigate();
  let checkOne = useRef();
  let checkTwo = useRef();
  let selectOption = (num) => {
    setCheckOption(num);
    if (num === 1) {
      checkOne.current.classList.add(styles.select);
      checkOne.current.children[2].style.backgroundColor =
        "var(--Primary-blue-300)";
      checkTwo.current.classList.remove(styles.select);
      checkTwo.current.children[2].style.backgroundColor = "var(--White)";
    } else {
      checkTwo.current.classList.add(styles.select);
      checkOne.current.children[2].style.backgroundColor = "var(--White)";
      checkOne.current.classList.remove(styles.select);
      checkTwo.current.children[2].style.backgroundColor =
        "var(--Primary-blue-300)";
    }
  };

  return (
    <React.Fragment>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header className={`border-0`} closeButton>
          <div className={styles.icon}>
            <AiOutlinePlusCircle />
          </div>
          <Modal.Title style={{ fontSize: "18px" }}>
            Create Now Ticket
            <p className={styles.p}>Chose Ticket type to create new ticket </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <div
            ref={checkOne}
            onClick={() => {
              selectOption(1);
            }}
            className={styles.section}
          >
            <div className={styles.icon}>
              <BiLayerMinus />
            </div>
            <div>
              <h6> Create Company Ticket</h6>
              <p className={styles.p}>
                Creating a new ticket to be sent to a department in another
                company
              </p>
            </div>
            <div className={styles.check}>
              <AiOutlineCheck />
            </div>
          </div>

          <div
            ref={checkTwo}
            onClick={() => {
              selectOption(2);
            }}
            className={styles.section}
          >
            <div className={styles.icon}>
              <FiLayers />
            </div>
            <div>
              <h6> Create Support Ticket </h6>
              <p>
                Creating a new ticket to be sent to a department in another
                company
              </p>
            </div>
            <div className={styles.check}>
              <AiOutlineCheck />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex flex-nowrap justify-content-between border-0 align-items-center">
          <Button
            className="w-100"
            variant="outline-secondary"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            className="w-100"
            style={{ backgroundColor: "var(--Primary-blue-300)" }}
            variant="primary"
            onClick={() => {
              if (checkOption === 1) {
                handleClose();
                navigate("/addTicket");
              }
            }}
          >
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
