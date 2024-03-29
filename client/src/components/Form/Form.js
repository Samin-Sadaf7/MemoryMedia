import { Button, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPosts } from '../../actions/posts.js';
import useStyles from './Style';
const Form =()=>{
    const [postData, setPostData]= useState({
        creator : ' ',
        title : ' ',
        message :' ',
        tags : ' ',
        selectedFile:' '
        })
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleSubmit =(e)=>{
            e.preventDefault();
            dispatch(createPosts(postData));
    }
    const clear =()=>{
        
    }
    return(
        <Paper className={classes.Paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant='h6'> Creating a Memory</Typography>
            <TextField name="creator" variant='outlined' label='creator' fullWidth value={postData.creator} onChange={(e)=> setPostData({...postData, creator : e.target.value})}/>
            <TextField name="title" variant='outlined' label='title' fullWidth value={postData.title} onChange={(e)=> setPostData({...postData, title : e.target.value})}/>
            <TextField name="message" variant='outlined' label='message' fullWidth value={postData.message} onChange={(e)=> setPostData({...postData, message : e.target.value})}/>
            <TextField name="tags" variant='outlined' label='tags' fullWidth value={postData.tags} onChange={(e)=> setPostData({...postData, tags : e.target.value})}/>
            <div className={classes.fileInput}> 
            <FileBase
                type ="file"
                mutiple={false}
                onDone={({base64})=> setPostData({...postData, selectedFile:base64})}
            />
            </div>
            <Button className={classes.buttonSubmit} variant ="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant ="contained" color="secondary" size="small" onClick={clear} fullWidth>Reset</Button>
            </form>
        </Paper>
    );
};
export default Form;