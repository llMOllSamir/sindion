import axios from "axios";
import { useMutation } from "react-query";

export default function useAddTicket(onSuccess) {
  let fetching = async (values) => {
    let baseUrl = "http://localhost:8000/";
    return axios.post(`${baseUrl}tickets`, values);
  };

  return useMutation(fetching,{
    onSuccess
  });
}
