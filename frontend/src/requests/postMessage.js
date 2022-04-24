 import axios from "axios";

const postMessage = (
    body
) => {
  console.log('hea')
  const endpoint = 'http://localhost:8080/messages';
    axios
    .post(endpoint,body)
    .then((res) => {
      //setDisplay(...[display], res.data)
      console.log(res)
    })
    .catch((error) => {
      console.log(error)
    });
  };

export default postMessage;