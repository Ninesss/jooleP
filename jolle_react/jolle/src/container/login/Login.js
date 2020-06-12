import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import {login} from '../../store/actions/auth';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    login : (u) => {dispatch(login(u))}
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
        username:"",
        password:""
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    await this.props.login(this.state);
    if(localStorage.getItem('sessionToken')!=null){
      this.props.history.push("/home");
    }
  }

  setUsername(e){
    this.setState({
      username:e
    })
  }

  setPassword(e){
    this.setState({
      password:e
    })
  }

  
  render(){
  return (
    <div className="Login">
      <a href="/signup"><h4 >Sign Up</h4></a>
      <h1>Joole</h1>
      <p>Building Product Selection Platform</p>
      <form onSubmit={this.handleSubmit} >
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            value={this.state.username}
            placeholder="email"
            onChange={e => this.setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={this.state.password}
            placeholder="password"
            onChange={e => this.setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
  }
}

export default connect(null,mapDispatchToProps)(Login);