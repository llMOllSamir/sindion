import React, { useEffect } from "react";
import styles from "./TicketsDisplay.module.css";
import { useSelector } from "react-redux";
import NoData from "./../NoData/NoData";
import DataShow from "./../DataShow/DataShow";

export default function TicketsDisplay() {
  let { tickets } = useSelector((state) => state.home);

  useEffect(() => {}, []);
  return (
    <React.Fragment>
      <div className={`${styles.tickets}`}>
        {tickets.length === 0 ? <NoData /> : <DataShow />}
      </div>
    </React.Fragment>
  );
}
