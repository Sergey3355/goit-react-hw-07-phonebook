import axios from 'axios';

axios.defaults.baseURL = 'https://645a931e95624ceb2105da12.mockapi.io';

export function fetchContacts() {
  return axios.get('/contacts');
}

export function addContact(contact) {
  return axios.post('/contacts', contact);
}

export function deleteContact(id) {
  return axios.delete(`/contacts/${id}`);
}
