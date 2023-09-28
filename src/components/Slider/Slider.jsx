import styles from "./Slider.module.css";
import logo from "../../assets/Group 3 1.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { RiHome6Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { useRef } from "react";
export default function Slider() {
  let sliderRef = useRef();
  let navigate = useNavigate();

  return (
    <div ref={sliderRef} className={styles.slider}>
      <div className={styles.logo}>
        <img
          onClick={() => {
            navigate("/");
          }}
          src={logo}
          alt="Logo"
        />
      </div>
      <div className={styles.tabs}>
        <NavLink className={`${styles.link}`} to={"/"}>
          <RiHome6Line title="Home" /> <span>Home</span>
        </NavLink>
        <NavLink className={`${styles.link}`} to={"/Profile"}>
          <FaRegUser title="Profile" /> <span>Profile</span>
        </NavLink>
        <NavLink className={`${styles.link}`} to={"/Settings"}>
          <AiOutlineSetting title="Settings" /> <span>Settings</span>
        </NavLink>
      </div>
      
    </div>
  );
}
