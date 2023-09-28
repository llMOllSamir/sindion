import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./../NavBar/NavBar";
import { useDispatch } from "react-redux";
import { setLang } from "../../redux/nav.slice";
import useGetData from "../../hooks/useGetData";
import {
  updateDepartment,
  updateStatus,
  updateTickets,
} from "../../redux/home.slice";

export default function Layout() {
  let dispatch = useDispatch();

  useGetData("tickets", (data) => {
    dispatch(updateTickets(data.data));
  });
  useGetData("departments", (data) => {
    dispatch(updateDepartment(data.data));
  });
  useGetData("status", (data) => {
    dispatch(updateStatus(data.data));
  });

  useEffect(() => {
    if (localStorage.getItem("lang")) {
      dispatch(setLang(localStorage.getItem("lang")));
    }
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      <Outlet />
    </React.Fragment>
  );
}
