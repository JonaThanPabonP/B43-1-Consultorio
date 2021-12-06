import axios from "axios";
const url = "http://localhost:5000/";

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
    .get(url + "appointments/searchuser/", usuario)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      callback(err);
    });
}

export function deleteAppointment(aid, callback) {
  axios
    .delete(url + "appointments/" + aid)
    .then((res) => {
      callback(res);
    })
    .catch((err) => {
      callback(err);
    });
}
