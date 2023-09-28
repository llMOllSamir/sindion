import styles from "./NoData.module.css";
import ButtonAddTicket from "../ButtonAddTicket/ButtonAddTicket";
import noData from "../../assets/No data-pana 1.png";
export default function NoData() {
  return (
    <div className={`${styles.noData}`}>
      <img src={noData} alt="" />
      <h3>No data to show</h3>
      <p>
        Create a new Ticket Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.
      </p>
      <ButtonAddTicket />
    </div>
  );
}
