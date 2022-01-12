import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from '../../services/contacts-api';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.getAllContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.postNewContact(newContact);
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await contactsApi.deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
