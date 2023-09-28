import React, { useState } from "react";
import ModelCreateTicketOption from "../ModelCreateTicketOption/ModelCreateTicketOption";

export default function ButtonAddTicket() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <React.Fragment>
      <button onClick={handleShow} className="btn-new">
        + New Ticket
      </button>
      <ModelCreateTicketOption handleClose={handleClose} show={show} />
    </React.Fragment>
  );
}
