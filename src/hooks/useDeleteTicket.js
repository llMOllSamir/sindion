import axios from "axios";
import { useMutation } from "react-query";

export default function useDeleteTicket(onSuccess) {
  let fetching = async (id) => {
    let baseUrl = "http://localhost:8000/";
    return axios.delete(`${baseUrl}tickets/${id}`);
  };

  return useMutation(fetching, {
    onSuccess,
  });
}
