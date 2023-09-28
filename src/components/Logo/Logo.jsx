import styles from "./Logo.module.css";
import logo from "../../assets/Group 3.svg";
import { useNavigate } from "react-router-dom";
export default function Logo() {
  let navigate = useNavigate();
  return (
    <div className={styles.logo}>
      <img
        onClick={() => {
          navigate("/");
        }}
        src={logo}
        alt=""
      />
    </div>
  );
}
