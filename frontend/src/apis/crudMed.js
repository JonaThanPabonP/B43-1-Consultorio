import axios from "axios";


const url = "http://localhost:5000/";


export function addMed(med, callback) {
  axios
    .post(url +'meds/', med)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      callback(err);
    });
}
