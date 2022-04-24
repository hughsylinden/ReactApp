import axios from "axios";

const deleteMessage = (
    display,setDisplay,id
) => {
  const endpoint = `http://localhost:8080/messages/${id}`;
    axios
    .delete(endpoint).then(res => {
      setDisplay(display.filter(message => message.id !== id))
    })
};

export default deleteMessage;