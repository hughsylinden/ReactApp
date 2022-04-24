import axios from "axios";

const getMessage = (
    setDisplay,id
) => {
  const endpoint = `http://localhost:8080/messages/${id}`;
    axios
    .get(endpoint)
    .then((res) => {
      setDisplay(res.data);
    })
    .catch((error) => {
      console.log(error)
    });
};

export default getMessage;