 import axios from "axios";

const postMessage = (
    body
) => {
  const endpoint = 'http://localhost:8080/messages';
    axios
    .post(endpoint,body)
    .catch((error) => {
      console.log(error)
    });
  };

export default postMessage;