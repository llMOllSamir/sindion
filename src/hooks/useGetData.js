import axios from "axios";
import { useQuery } from "react-query";

export default function useGetData(data, onSuccess) {
  let baseUrl = "http://localhost:8000/";
  let fetching = async () => {
    return await axios.get(`${baseUrl}${data}`);
  };
  return useQuery(data, fetching, {
    onSuccess,
  });
}

export function useGetOneTicket(id, onSuccess) {
  let baseUrl = "http://localhost:8000/tickets/";
  let fetching = async () => {
    return await axios.get(`${baseUrl}${id}`);
  };
  return useQuery("ticket", fetching, {
    onSuccess,
    enabled:false
  });
}
