import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
  departments: [],
  status: [],
  filterData: [],
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    updateTickets: (state, action) => {
      state.tickets = action.payload;
      state.filterData = action.payload;
    },
    updateDepartment: (state, action) => {
      state.departments = action.payload;
    },
    updateStatus: (state, action) => {
      state.status = action.payload;
    },
    filterDataByName: (state, action) => {
      state.filterData = [...state.tickets];
      state.filterData = state.filterData.filter((ele) =>
        ele.subject.match(new RegExp(action.payload,"gi"))
      );
    },
    filterDataByStatus: (state, action) => {
      if (action.payload !== "") {
        state.filterData = [...state.tickets];
        state.filterData = state.filterData.filter(
          (ele) => ele.status === action.payload
        );
      } else {
        state.filterData = [...state.tickets];
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateTickets,
  updateDepartment,
  updateStatus,
  filterDataByName,
  filterDataByStatus,
} = homeSlice.actions;

export default homeSlice.reducer;
