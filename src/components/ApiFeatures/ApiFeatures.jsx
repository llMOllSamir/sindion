import { useDispatch, useSelector } from "react-redux";
import styles from "./ApiFeatures.module.css";
import { BiSearch } from "react-icons/bi";
import { GrFilter } from "react-icons/gr";
import { useRef } from "react";
import ButtonAddTicket from "../ButtonAddTicket/ButtonAddTicket";
import { filterDataByName } from "../../redux/home.slice";

export default function ApiFeatures() {
  let { filterData } = useSelector((state) => state.home);
  let api = useRef();
  let search = useRef();
  let dispatch = useDispatch();

  let handleSearch = () => {
    dispatch(filterDataByName(search.current.value));
  };

  return (
    <div ref={api} className={`${styles.api}`}>
      <p>My tickets</p>
      <i className={styles.line}></i>
      <span>View ( {filterData.length} )</span>
      <label htmlFor="search">
        <BiSearch />
        <input
          ref={search}
          id="search"
          type="text"
          name="search"
          placeholder="Search ..."
          onChange={handleSearch}
        />
      </label>
      <div className={`${styles.filter}`}>
        <GrFilter />
      </div>
      <i className={styles.line}></i>

      <ButtonAddTicket />
    </div>
  );
}
