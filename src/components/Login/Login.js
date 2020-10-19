import React, { Fragment } from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import Logo from '../../images/logos/Group 1329.png';
import firebaseConfig from '../../firebase.config';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    var provider = new firebase.auth.GoogleAuthProvider()

    const handleGoogle = () => {
        firebase.auth().signInWithPopup(provider)
        .then(res =>{
            console.log(res);
        }

        ).catch(error => {
            console.log(error.message);
        });
    }
  
    return (
        <Fragment >
           <div className="login-backGround">
               <div className="header">
                   <img style={{width: '15%'}} src={Logo} alt=""/>

               </div>
           <div className="login">
                <div className="login-sec">
                    <h1>Login With </h1>
                    <br/>
                    <div className="google" >
                    <i style ={{color : 'blue' , fontSize:'24px'}} class="fa fa-google"></i>
                    <span> 
                        <button style={{ border: 'none', backgroundColor:'white', }}onClick={handleGoogle}>Continue With Google</button>  </span>
                    </div>
                    <p>Don't have an account? <span><a href="/#">Create an account</a></span></p>
                   
                </div>
            </div>
           </div>
        </Fragment>
    );
};

export default Login;