import React from 'react';
import './Register.css';
import Logo from '../../images/logos/Group 1329.png';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (

        <div>
             <div className="reg-backGround">
             <div className="header">
                   <img style={{width: '15%'}} src={Logo} alt=""/>

               </div>
           <div className="register">
                <div className="register-sec">
                    
                    <h1>Register as a Volunteer </h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form">
                <div className="form-input">
                    <label htmlFor="username" className="form-label">
                        <input type="text" name="username" className="form-input" placeholder="Full Name" id="username"/>
                    </label>
                </div>
                <div className="form-input">
                    <label htmlFor="email" className="form-label">
                        <input type="email" name="email" placeholder="Username or Email"id="email" className="form-label"/>
                    </label>
                </div>
                <div className="form-input">
                    <label htmlFor="date" className="form-label">
                      <input  id="date"
        label="Birthday"
        type="date"
        defaultValue="dd/mm/yy"
       
         placeholder=" Date "/>
                    </label>
                </div>
                <div className="form-input">
                    <label htmlFor="description" className="form-label">
                       <input type="text" name="" id="" placeholder="Description"/>
                    </label>
                </div>
                <div className="form-input">
                    <label htmlFor="organize" className="form-label">
                       <input type="text" name="" id="" placeholder="Organize books at the library"/>
                    </label>
                </div>
                <br/>
              <div >
                  <input type="button"  value="Registration" placeholder=""/>
              </div>
                </div>

             </form>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Register;