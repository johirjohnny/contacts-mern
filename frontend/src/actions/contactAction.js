import axios from 'axios';

import {
    CONTACT_CREATE,
    CONTACT_UPDATE,
    CONTACT_DELETE,
    CONTACT_DELETE_ALL,
    CONTACT_FETCH_ALL,
} from '../constants/contactConstants';
export const createContact = (form) => async (dispatch, getState) => {
    try {

        const { data } = await axios.post('/contact', form);
        dispatch({ type: CONTACT_CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const fetchContacts = () => async (dispatch, getState) => {
    try {

        const { data } = await axios.get('/contact');
        dispatch({ type: CONTACT_FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
};