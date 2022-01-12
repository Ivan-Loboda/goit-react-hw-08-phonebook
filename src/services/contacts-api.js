import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getAllContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const postNewContact = async newContact => {
  const { data } = await axios.post('/contacts', newContact);
  return data;
};

export const deleteContact = async contactId => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};
