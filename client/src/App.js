import { AppBar, Container, Grid, Grow, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from "./actions/posts";
import Form from "./components/Form/Form";
import Posts from "./components/Post/Posts/Post";
import memories from "./images/memories.png";
import useStyles from "./styles";
const App = () =>{
    const classes= useStyles();
    const dispatch = useDispatch();
    useEffect(()=>{
            dispatch(getPosts);
    },[dispatch])
    return (
        <Container maxwidth="lg">
            <AppBar className={classes.AppBar} position="static" color="inherit">
                <Typography className={classes.heading} variant ="h2" align ="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"/>
            </AppBar>
        <Grow in>
            <Container>
                <Grid container justify="space-between" align-items="stretch" spacing ={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
        </Container>
    );
}
export default App;