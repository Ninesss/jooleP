import React from 'react';
import './Userinfo.css';
import {useDispatch,useSelector} from 'react-redux';
import {logout} from '../../store/actions/auth';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'

function Userinfo(){
    const dispatch = useDispatch();
    const name = useSelector(state => state.auth.name);

    return(
        <div style={{display:"flex",marginLeft:"-20%",marginTop:"0%"}}>
            <h4  style={{marginTop:"20px",fontSize: "20px",marginRight:"20px",color:"grey"}}>{name}</h4>
                <Link to="/"><h4 onClick={() => dispatch(logout())}  style={{marginTop:"20px",fontSize: "20px"}}>Logout</h4></Link>
                <Link to="/compare"><h4 style={{marginTop:"20px",marginLeft:"20px",fontSize: "20px"}}>Projects</h4></Link>
                <Image src={"/" + name +".jpg"} style={{marginLeft:"20px",width:"60px",height:"60px",borderRadius:"30px"}} />
        </div>
    )
}

export default Userinfo