import axios from "axios";


const url = "https://consultorio-b43-1.herokuapp.com/";


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
