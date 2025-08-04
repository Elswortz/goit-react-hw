import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from '../../services/contacts-api';

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', getContacts);

export const addContactsThunk = createAsyncThunk('contacts/addContact', addContact);

export const deleteContactsThunk = createAsyncThunk('contacts/deleteContact', deleteContact);
