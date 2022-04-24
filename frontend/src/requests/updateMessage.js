import axios from "axios";

const updateMessage = (
    body,id
) => {
  const endpoint = `http://localhost:8080/messages/${id}`;
    axios
    .put(endpoint,body)
    .catch((error) => {
      console.log("error")
    });
  };

export default updateMessage;