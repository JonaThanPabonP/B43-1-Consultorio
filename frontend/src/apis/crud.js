import axios from "axios";
const url = "http://localhost:5000/";

export function getAppointment(aid, callback) {
  axios
    .get(url +'appointments/'+ aid)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      callback(err);
    });
}
