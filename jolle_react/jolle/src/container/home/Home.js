import React from "react";
import "./Home.css";
import Search from "../search/Search"
import Userinfo from "../userinfo/Userinfo";
import { connect } from 'react-redux';
import {setProducts} from '../../store/actions/products';

const mapDispatchToProps = (dispatch) => {
  return {
    setProducts : (g) => {dispatch(setProducts(g))}
  }
}

class Home extends React.Component{

  constructor(props) {
    super(props);
    this.state ={
        inputValue: '',
        products:[]
    };
  }

  

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {
  return (
    <div className="Home">
      <div style={{position:"absolute",top:"4%",left:"85%"}}>
        <Userinfo />
      </div>
      <div className="lander">
        <h1>Joole</h1>
        <p>Building Product Selection Platform</p>
        <Search />
      </div>
    </div>
  );
  }
}

export default connect(null,mapDispatchToProps)(Home);