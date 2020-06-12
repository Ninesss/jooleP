import React from "react";
import "./Search.css";
import { Form, Button, FormControl,ButtonToolbar,DropdownButton,MenuItem} from "react-bootstrap";
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            inputValue: ''
        };
    }
    
    updateInputValue(evt) {
        this.setState({
        inputValue: evt.target.value
        });
    }

    render(){
        return(
            <div>
                <Form inline style={{display:"flex",marginLeft:"32%",marginTop:"5%"}}>
                    <ButtonToolbar>
                        <DropdownButton title="Mechanical" id="dropdown-size-medium">
                        <MenuItem eventKey="1">Mechanical</MenuItem>
                        <MenuItem eventKey="2">medicine</MenuItem>
                        </DropdownButton>
                    </ButtonToolbar>
                    <FormControl onChange={evt => this.updateInputValue(evt)} type="text" placeholder="Search..." style={{width:"500px"}}/>
                    <Link to={"/cardpage/" + this.state.inputValue}><Button style={{width:"35px",padding:"5px 8px 0px 5px"}}><SearchIcon fontSize="large" /></Button></Link>
                </Form>
            </div>
        )
    }
}

export default Search