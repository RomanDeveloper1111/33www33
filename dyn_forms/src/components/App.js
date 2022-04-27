import React, { useState, useEffect} from "react";
import {render} from "react-dom";
import {Grid, Button, TextField} from "@material-ui/core";
import FormInput from "./FormInput";
import axios from "axios";


function App(){

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        get_all_posts()
    }, []);

    async function get_all_posts(){
        const response = await axios.get('http://127.0.0.1:8000/api/view-inputs');
        setPosts(JSON.parse(response.data[0]['dates']));
        console.log(JSON.parse(response.data[0]['dates']));

    }

    async function createNewPost(text_input){
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            text_input: text_input
            }),
        };
        let request_add = await fetch('http://127.0.0.1:8000/api/add', requestOptions)

        get_all_posts();
    }

    return (
        <Grid container spacing={1} >
            <FormInput addNewPost={createNewPost}/>
            <Grid item xs={12} align="center" >
                {posts.map((post, index) =>
                    <Grid key={index+1} item xs={12} align="center">
                        <TextField  value={post.title} disabled type='text' variant="outlined" />
                    </Grid>
                )}
            </Grid>

        </Grid>
    );
}

const el = document.getElementById('app');
render(<App />, el);



