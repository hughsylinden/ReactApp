import axios from "axios";

const getMessages = (
    setDisplay
) => {
  const endpoint = 'http://localhost:8080/messages';
    axios
    .get(endpoint)
    .then((res) => {
      setDisplay(res.data);
    })
    .catch((error) => {
      console.log(error)
    });
};

export default getMessages;