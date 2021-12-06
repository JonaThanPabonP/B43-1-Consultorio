import axios from "axios";


const url = "https://consultorio-b43-1.herokuapp.com/";


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
