import React from 'react';
import FileBase from 'react-file-base64';
import {
    DialogActions,
    TextField,
    DialogContentText,
    DialogContent,
    DialogTitle,
    Dialog,
    Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    file: {
        marginTop: '15px',
    },
}));

  
  
const ContactForm = ({open, handleClose}) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby='form-dialog-title'
        >
            <DialogTitle id='form-dialog-title'>Contact Details</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    
                </DialogContentText>

                <TextField
                    autoFocus
                    margin='dense'
                    id='name'
                    label='Your Name'
                    type='text'
                    fullWidth
                    value=''
                />
                <TextField
                    autoFocus
                    margin='dense'
                    id='email'
                    label='Email Address'
                    type='email'
                    fullWidth
                    value=''
                  
                />
                <TextField
                    autoFocus
                    margin='dense'
                    id='phn1'
                    label='Phone Number'
                    type='number'
                    fullWidth
                    value=''
                    
                />
                <TextField
                    autoFocus
                    margin='dense'
                    id='phn2'
                    label='Alternative Phone Number'
                    type='number'
                    fullWidth
                    value=''
                    
                />
                <TextField
                    autoFocus
                    margin='dense'
                    id='address'
                    label='Your Address'
                    type='text'
                    fullWidth
                    value=''
                    
                />
                <div >
                    <FileBase
                        type='file'
                        multiple={false}
                        
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <Button color='secondary' onClick ={handleClose}>
                    Close
        </Button>
                <Button color='primary' >submit
                   
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ContactForm;