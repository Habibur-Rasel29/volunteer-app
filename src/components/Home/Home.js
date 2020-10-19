import { Button, Card, CardActions, CardContent, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const useStyles = makeStyles({
    root: {
      minWidth: 280,
    },
  });

const Home = ({task}) => {
    const classes = useStyles();
    console.log(task)
    return (
        <div className="col-md-3 image">
          <Link to ="/login">
        <Card className={classes.root}>
      <CardContent>
     
     <img style={{width : '100%'}} src={require(`../../images/${task.pic}`)} alt="aaaa"/>
 
     
      </CardContent>
      <a href="/#"><p className="name">{task.name}</p></a> 
      
     
      
      
    </Card>
    </Link>
           
            
        </div>
    );
};

export default Home;