import styles from "./DataShow.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function DataShow() {
  let { filterData } = useSelector((state) => state.home);
  let navigate = useNavigate();

  let styleTable = {
    Solved: { border: styles.borderSolved, btn: styles.Solved },
    Pending: { border: styles.borderPending, btn: styles.Pending },
    Closed: { border: styles.borderClosed, btn: styles.Closed },
    Progress: { border: styles.borderProgress, btn: styles.Progress },
    Canceled: { border: styles.borderCanceled, btn: styles.Canceled },
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Company Name</th>
          <th>Subject</th>
          <th>From</th>
          <th>To</th>
          <th>Type</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {filterData.map((ele) => (
          <tr
            onClick={() => {
              navigate(`/TicketDetails/${ele.id}`);
            }}
            key={ele?.id}
            className={
              styleTable[ele.status === "In Progress" ? "Progress" : ele.status]
                .border
            }
          >
            <td>
              <span className={styles.circle}></span>Company Name
            </td>
            <td>{ele.subject}</td>
            <td>{ele.from}</td>
            <td>{ele.to}</td>
            <td>Internal</td>
            <td>27 Jon 2023</td>
            <td>
              <p
                className={`${
                  styleTable[
                    ele.status === "In Progress" ? "Progress" : ele.status
                  ].btn
                } ${styles.btn}`}
              >
                {ele.status}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
