import axios from 'axios';
import TOKEN from './config';

const axiosInstance = axios.create({
  baseURL: 'https://staging.api.meuprospere.com.br/v1',
  headers: TOKEN,
});

export function addContact(contact) {
  axiosInstance.post('contacts', contact)
    .then(request => request)
    .catch(error => (
      `Sorry! We can't add this user. Error code ${error.code}`
    ));
}

export function getUser(id) {
  axiosInstance.get(`contacts/${id}`)
    .then(request => (
      request.data
    ))
    .catch(error => (
      `Sorry! We can't get this user. Error code  ${error.code}`
    ));
}

export function listUsers() {
  axiosInstance.get()
    .then(request => (
      request.data
    ))
    .catch(error => (
      `Sorry! We can't user list. Error code' ${error.code}`
    ));
}
