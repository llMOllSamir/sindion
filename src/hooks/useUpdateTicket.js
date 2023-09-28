import axios from "axios";
import { useMutation } from "react-query";

export default function useUpdateTicket(id, onSuccess) {
  let fetching = async (values) => {
    let baseUrl = "http://localhost:8000/";
    return axios.put(`${baseUrl}tickets/${id}`, values);
  };

  return useMutation(fetching, { onSuccess });
}
