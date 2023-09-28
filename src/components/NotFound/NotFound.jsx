import React from "react";
import Logo from "../Logo/Logo";

export default function NotFound() {
  return (
    <React.Fragment>
      <Logo />
      <h1
        className="w-100 d-flex justify-content-center align-items-center "
        style={{ minHeight: "75vh" }}
      >
        Page Not Found
      </h1>
    </React.Fragment>
  );
}
