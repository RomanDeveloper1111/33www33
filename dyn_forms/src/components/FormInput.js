import React, {useState}  from 'react';
import {Button, TextField, Grid} from '@material-ui/core';


const FormInput = (props) => {
    const [input, setInput] = useState('');


    const addPost = (e) => {
        e.preventDefault();
        props.addNewPost(input);
    }

    return (
        <Grid item xs={12} align='center'>
            <TextField value={input} onChange={e => setInput(e.target.value)} placeholder="Введите текст..." type='text' variant="outlined" />
            <Button onClick={addPost} variant="contained" color='primary'>Add Input</Button>
        </Grid>

    );

}

export default FormInput;