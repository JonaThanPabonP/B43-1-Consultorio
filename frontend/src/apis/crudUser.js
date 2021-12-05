import axios from "axios";


const url = "http://localhost:5000/";


export function addUser(user, callback) {
  axios
    .post(url +'users/', user)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      callback(err);
    });
}
