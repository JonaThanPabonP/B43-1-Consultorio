import axios from "axios";
// const url = "https://consultorio-b43-1.herokuapp.com/";
const url = "http://localhost:8080/";

export function getAppointment(aid, callback) {
  axios
    .get(url + "appointments/" + aid)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      callback(err);
    });
}

export function addAppointment(appo, callback) {
  axios
    .post(url + "appointments/", appo)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      callback(err);
    });
}

export function replaceAppointment(aid, appo, callback) {
  axios
    .put(url + "appointments/" + aid, appo)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      callback(err);
    });
}

export function searchAppoByUser(usuario, callback) {
  axios
    .get(url + "appointments/searchuser/"+ usuario)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      callback(err);
    });
}

export function searchAppoByDate(date, callback) {
  axios
    .get(url + "appointments/searchdate/"+ date)
    .then((res) => {
      callback(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      callback(err);
    });
}

export function deleteAppointment(aid, callback) {
  axios
    .delete(url + "appointments/" + aid)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      callback(err);
    });
}
