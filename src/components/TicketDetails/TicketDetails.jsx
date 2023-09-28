import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetOneTicket } from "../../hooks/useGetData";
import Logo from "../Logo/Logo";
import { useDispatch, useSelector } from "react-redux";
import { setPageHome } from "../../redux/nav.slice";
import DetailsSlider from "./../DetailsSlider/DetailsSlider";
import styles from "./TicketDetails.module.css";
import { RiEditLine } from "react-icons/ri";
import { BiTrash } from "react-icons/bi";
import useDeleteTicket from "./../../hooks/useDeleteTicket";
import MailDetails from "./../MailDetailes/MailDetailes";

export default function TicketDetails() {
  let [ticket, setTicket] = useState({});
  let { isPageHome } = useSelector((state) => state.navbar);
  let { id } = useParams();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { refetch } = useGetOneTicket(id, (data) => {
    setTicket(data.data);
  });
  let { mutate } = useDeleteTicket(() => {
    navigate("/");
  });

  useEffect(() => {
    if (isPageHome) {
      dispatch(setPageHome());
    }
  }, [isPageHome]);

  useEffect(() => {
    refetch();
  }, [id]);

  return (
    <React.Fragment>
      <Logo />
      <DetailsSlider />
      <div className={"container-fluid px-5 my-4"}>
        <div className="row  g-5 mx-4  ">
          <div className="col-lg-8">
            <div className={`${styles.details}  row p-3  rounded-5 shadow`}>
              <div className={`col-12 ${styles.head} `}>
                <div className="row">
                  <div className="col-md-4 col-lg-2">
                    <span className={styles.circle}></span>
                  </div>
                  <div className={` col-md-8 col-lg-6`}>
                    <h5>User Name</h5>
                    <p>27 Jon 2023 - From : {ticket.from}</p>
                  </div>
                  <div className={`col-md-12 col-lg-4  ${styles.actions}`}>
                    <RiEditLine
                      onClick={() => {
                        navigate(`/updateTicket/${ticket.id}`);
                      }}
                    />
                    <BiTrash
                      onClick={() => {
                        mutate(ticket.id);
                      }}
                      style={{ color: "var(--Canceled)" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 p-5">
                <h5>{ticket.subject}</h5>
                <p style={{ color: "var(--Dark-Gray)" }} className="my-3">
                  {ticket.description}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <MailDetails data={ticket} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
