import React, { useEffect } from "react";
import Slider from "./../Slider/Slider";
import ApiFeatures from "../ApiFeatures/ApiFeatures";
import FilterTickets from "../FilterTickets/FilterTickets";
import TicketsDisplay from "./../TicketsDisplay/TicketsDisplay";
import { useDispatch, useSelector } from "react-redux";
import useGetData from "./../../hooks/useGetData";
import { updateTickets } from "../../redux/home.slice";
import { setPageHome } from "../../redux/nav.slice";
import styles from "./Home.module.css";

export default function Home() {
  let { isPageHome } = useSelector((state) => state.navbar);
  let dispatch = useDispatch();

  useGetData("tickets", (data) => {
    dispatch(updateTickets(data.data));
  });

  useEffect(() => {
    if (!isPageHome) {
      dispatch(setPageHome());
    }
  }, [isPageHome]);

  return (
    <React.Fragment>
      <Slider />
      <div className={`container-fluid my-4 ${styles.position}`}>
        <div className="row ">
          <div className="col-lg-2">
            <FilterTickets />
          </div>
          <div className="col-lg-10">
            <div className="row gy-4">
              <div className="col-12">
                <ApiFeatures />
              </div>
              <div className="col-12">
                <TicketsDisplay />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
