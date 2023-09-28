import React, { useEffect, useState } from "react";
import styles from "./Item.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { filterDataByStatus } from "../../redux/home.slice";
export default function Item({ title, color = "transparent", onClick = "" }) {
  let [counter, setCounter] = useState(0);
  let { tickets } = useSelector((state) => state.home);

  let dispatch = useDispatch();

  useEffect(() => {
    if (onClick === "") {
      setCounter(tickets.length);
    } else {
      setCounter(tickets.filter((ele) => ele.status === onClick).length);
    }
  }, [tickets]);
  return (
    <React.Fragment>
      <div
        className={styles.item}
        onClick={() => {
          dispatch(filterDataByStatus(onClick));
        }}
      >
        <span style={{ backgroundColor: `var(${color})` }}></span>
        <h5>
          {title} <span>({counter})</span>
        </h5>
        <IoIosArrowForward />
      </div>
    </React.Fragment>
  );
}
