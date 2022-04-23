 
import axios from "axios";

const postMessage = (
    display,setDisplay,body
) => {
  const endpoint = 'http://localhost:8080/messages';
    axios
    .post(endpoint,body)
    .then((res) => {
      setDisplay(...[display], res.data)
    })
    .catch((error) => {
      console.log(error)
    });
  };

export default postMessage;