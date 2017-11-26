import axios from 'axios';
import TOKEN from './config';

const axiosInstance = axios.create({
  baseURL: 'https://staging.api.meuprospere.com.br/v1',
  headers: TOKEN,
});

export function addContact(contact) {
  return axiosInstance.post('contacts', contact)
    .then(response => Promise.resolve(response.data))
    .catch(error => Promise.reject(error));
}

export function getContact(id) {
  return axiosInstance.get(`contacts/${id}`)
    .then(response => Promise.resolve(response.data))
    .catch(error => Promise.reject(error));
}

export function listUsers() {
  return axiosInstance.get('contacts')
    .then(response => Promise.resolve(response.data))
    .catch(error => Promise.reject(error));
}
