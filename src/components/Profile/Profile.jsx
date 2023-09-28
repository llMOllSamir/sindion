import React, { useEffect } from "react";
import Slider from "../Slider/Slider";
import { useDispatch, useSelector } from "react-redux";
import { setPageHome } from "../../redux/nav.slice";

export default function Profile() {
  let { isPageHome } = useSelector((state) => state.navbar);
  
  let dispatch = useDispatch();

  useEffect(() => {
    if (!isPageHome) {
      dispatch(setPageHome());
    }
  }, [isPageHome]);

  return (
    <React.Fragment>
      <Slider />
      <h1>No Thing Available</h1>
    </React.Fragment>
  );
}
