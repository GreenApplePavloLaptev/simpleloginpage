import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './card_background.svg';
import user from './user.png';
import lock from './lock.png';
import { Button, FormGroup, FormControl} from "react-bootstrap";


    const login = (
      <div className="block">
      <img className="img" src={logo}/>
    
      <div className="card">
        
      <form >
      <h1>Login</h1>
        <FormGroup className="form" controlId="email">
        <img className="user" src={user}/>
          <FormControl
          type="filed"
          placeholder="Username"
        />
        </FormGroup>

        <FormGroup className="form" controlId="password" >
        <img className="lock" src={lock}/>
          <FormControl 
          type="filed"
          placeholder="Password"
          />
        </FormGroup>
        <div className="bar">
        <input type="checkbox" className="switch_1"></input><h3>remember me</h3>
        <Button className="forgot_password" type="submit">forgot password</Button>
        <Button className="login" type="submit">Login</Button>
        <Button className="create_account" type="submit">Create Account</Button>
        </div>
      </form>
    </div>
    </div>
    );
    
    ReactDOM.render(login, document.getElementById('login'));
  
