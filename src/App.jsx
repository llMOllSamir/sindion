import React from "react";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import { QueryClient, QueryClientProvider } from "react-query";
import ModelCreateTicket from "./components/ModelCreateTicket/ModelCreateTicket";
import UpdateTicket from "./components/UpdateTicket/UpdateTicket";
import TicketDetails from "./components/TicketDetails/TicketDetails";

function App() {
  let queryClient = new QueryClient({});

  const routs = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/", element: <Home /> },
        { path: "/Profile", element: <Profile /> },
        { path: "/Settings", element: <Settings /> },
        { path: "/addTicket", element: <ModelCreateTicket /> },
        { path: "/TicketDetails/:id", element: <TicketDetails /> },
        { path: "/updateTicket/:id", element: <UpdateTicket /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <React.Fragment>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={routs} />
        </QueryClientProvider>
      </Provider>
    </React.Fragment>
  );
}

export default App;
