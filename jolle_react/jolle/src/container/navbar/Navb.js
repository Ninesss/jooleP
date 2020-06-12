import React from 'react';
import './Navb.css';
import { Link } from "react-router-dom";
import { Navbar} from "react-bootstrap";
import Search from '../search/Search'
import Userinfo from '../userinfo/Userinfo'

function Navb() {

  return (
      <div className="Navb">
        <Navbar fluid collapseOnSelect style={{height:"100%",marginBottom:"0px",backgroundImage:"linear-gradient(to right, whitesmoke, cornflowerblue,whitesmoke)"}}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Joole</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
        <div style={{position:"absolute",top:"2%",left:"25%"}}>
        <Search />
        </div>
        <div style={{position:"absolute",top:"4%",left:"85%"}}>
          <Userinfo />
        </div>
      </div>
  );
}

export default Navb;