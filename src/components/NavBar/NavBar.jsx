import React, { useRef } from "react";
import styles from "./NavBar.module.css";
import { GrNotification } from "react-icons/gr";
import { BiLogIn } from "react-icons/bi";
import { NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "../../redux/nav.slice";
export default function NavBar() {
  let dispatch = useDispatch();
  let { lang, isPageHome } = useSelector((state) => state.navbar);
  let navRef = useRef();

  return (
    <React.Fragment>
      <nav ref={navRef} className={`${styles.nav}`}>
        <div className={`${styles.welcome}`}>
          {isPageHome ? (
            <>
              <h4>Hello!</h4>
              <p>Welcome Back</p>
            </>
          ) : (
            ""
          )}
        </div>
        <div className={`${styles.icons}`}>
          <div className={`${styles.icon}`}>
            <NavDropdown style={{ fontSize: "14px" }} title={lang}>
              <NavDropdown.Item
                onClick={() => {
                  dispatch(setLang("EN"));
                }}
              >
                EN
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  dispatch(setLang("العربيه"));
                }}
              >
                العربيه
              </NavDropdown.Item>
            </NavDropdown>
          </div>
          <div className={`${styles.icon}`}>
            <GrNotification />
            <div className={`${styles.notification}`}>3</div>
          </div>
          <div className={` ${styles.user}`}>
            <NavDropdown
              style={{ fontSize: "12px", textAlign: "center" }}
              title={
                <>
                  <div className={`${styles.icon}`}></div> Employee
                </>
              }
            >
              <NavDropdown.Item style={{ fontSize: "12px" }}>
                <BiLogIn /> Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
