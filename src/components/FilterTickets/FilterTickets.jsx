import React, { useEffect, useRef, useState } from "react";
import styles from "./FilterTickets.module.css";
import Item from "./../Item/Item";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calender from "../../assets/Calendar.png";
import { useDispatch } from "react-redux";
import { filterDataByStatus } from "../../redux/home.slice";

export default function FilterTickets() {
  const [startDate, setStartDate] = useState(new Date());
  let handleDateChange = (date) => {
    setStartDate(date);
  };

  let refItem = useRef();

  let dispatch = useDispatch();

  let clicked = (e) => {
    let unActivated = Array.from(refItem.current.children);
    unActivated.forEach((item) => {
      if (item === e.target || item === e.target.parentElement) {
        item.classList.add(styles.active);
      } else {
        item.classList.remove(styles.active);
      }
    });
  };
  useEffect(() => {
    refItem.current.children[0].classList.add(styles.active);
    dispatch(filterDataByStatus(""));
  });

  return (
    <React.Fragment>
      <div className={`${styles.show}`}>
        <label className={`${styles.datePicker} mb-5`} htmlFor="">
          <img src={calender} alt="" />
          <DatePicker selected={startDate} onChange={handleDateChange} />
        </label>
        <div className="w-100" onClick={clicked} ref={refItem}>
          <Item
            className="bg-dark"
            title={"All Tickets"}
            number={0}
            onClick={""}
          />
          <Item
            title={"Solved"}
            number={0}
            color={"--Solved"}
            onClick={"Solved"}
          />
          <Item
            title={"Pending"}
            number={0}
            color={"--Pending"}
            onClick={"Pending"}
          />
          <Item
            title={"In Progress"}
            number={0}
            color={"--In-Progress"}
            onClick={"In Progress"}
          />
          <Item
            title={"Canceled"}
            number={0}
            color={"--Canceled"}
            onClick={"Canceled"}
          />
          <Item
            title={"Closed"}
            number={0}
            color={"--Medium-Gray"}
            onClick={"Closed"}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
