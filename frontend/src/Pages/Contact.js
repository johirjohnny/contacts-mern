import React, { useState } from 'react';
import Header from '../Components/Header';
import ContactForm from '../Components/ContactForm';

import ContactTable from '../Components/ContactTable';

const Contact = () => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Header></Header>
            <ContactForm open={open}
                handleClose={handleClose}></ContactForm>
            <ContactTable open={open}
                handleClose={handleClose}
                handleClickOpen={handleClickOpen}></ContactTable>
        </div>
    );
};

export default Contact;