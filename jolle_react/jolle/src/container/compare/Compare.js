import React from 'react';
import "./Compare.css";
import Navb from "../navbar/Navb";
import { connect } from 'react-redux';
import Image from 'react-bootstrap/Image'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const mapStateToProps = function(state) {
  return {
    products : state.products,
    compare : state.compare.group
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCompare : (p) => {dispatch({type:'SET_COMPARE', product:p})}
  }
}


class Compare extends React.Component{
    constructor(props) {
      super(props);
      this.state ={
      };
    }

    handleAdd = (id) => {
      this.props.setCompare(id);
    }
    
    componentDidMount() {

    }

    render(){
      return(
        <div>
          <Navb />
          <div style={{display:"inline"}}>
                <div style={{display:"flex",color:"cornflowerblue",marginTop:"0px",marginLeft:"1%",marginBottom:"0px",fontSize:"20px"}}>
                    <Link to="/home">Mechanical</Link>
                    <p style={{marginBottom:"0px"}}>&nbsp; > &nbsp;</p>
                    <Link to="/cardpage/HVAC%20Fans">HVAC Fans</Link>
                    <p style={{marginBottom:"0px"}}>&nbsp; > &nbsp;</p>
                    <a href="/compare" style={{textDecoration:"none"}}>Compare</a>
                </div>
          </div>
          

          <div style={{display:"flex"}}>
            <div style={{display:"inline"}}>
              <div style={{backgroundColor:"white",width:"300px",marginTop:"240px",fontSize:"20px",border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}}>DESCRIPTION</div>
              <div style={{backgroundColor:"white",width:"300px",fontSize:"20px",border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}}>Manufacturer</div>
              <div style={{backgroundColor:"white",width:"300px",fontSize:"20px",border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}}>Series</div>
              <div style={{backgroundColor:"white",width:"300px",fontSize:"20px",border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}}>Model</div>
              <div style={{backgroundColor:"white",width:"300px",fontSize:"20px",border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}}>TYPE</div>
              <div style={{backgroundColor:"white",width:"300px",fontSize:"20px",border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}}>Use Type</div>
              <div style={{backgroundColor:"white",width:"300px",fontSize:"20px",border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}}>Application</div>
              <div style={{backgroundColor:"white",width:"300px",fontSize:"20px",border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}}>Mounting Location</div>
              <div style={{backgroundColor:"white",width:"300px",fontSize:"20px",border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}}>Accessories</div>
              <div style={{backgroundColor:"white",width:"300px",fontSize:"20px",border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}}>Model year</div>
              <div style={{backgroundColor:"white",width:"300px",fontSize:"20px",border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}}>TECHNICAL SPECIFICATIONS</div>
              <div style={{backgroundColor:"white",width:"300px",fontSize:"20px",border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}}>Airflow(CFM)</div>
              <div style={{backgroundColor:"white",width:"300px",fontSize:"20px",border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}}>Power(W)</div>
              <div style={{backgroundColor:"white",width:"300px",fontSize:"20px",border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}}>Operating voltage(VAC)</div>
              <div style={{backgroundColor:"white",width:"300px",fontSize:"20px",border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}}>Fan speed(RPM)</div>
            </div>
          { this.props.products.map(product => (
            <div style={{display:"flex",border:"2px solid rgba(0, 0, 0, .125)"}}>
            {this.props.compare[product.productId-1]?
                <div style={{display:"inline"}}>
                  <div>
                  <Button id={product.productId} onClick={()=>this.handleAdd(product.productId)} className="addto">
                    Add to
                  </Button>
                  </div>
                  <Image style={{width:"400px",height:"200px"}} src={process.env.PUBLIC_URL+"/" + product.productId + ".jpeg"} />
                  <div style={{border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}} />
                  <div style={{fontSize:"20px",textAlign:"center",border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}}>{product.manufacturer}</div>
                  <div style={{fontSize:"20px",textAlign:"center",border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}}>{product.series}</div>
                  <div style={{fontSize:"20px",textAlign:"center",border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}}>{product.model}</div>

                  <div style={{border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}} />
                  <div style={{fontSize:"20px",textAlign:"center",border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}}>{product.useType}</div>
                  <div style={{fontSize:"20px",textAlign:"center",border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}}>{product.application}</div>
                  <div style={{fontSize:"20px",textAlign:"center",border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}}>{product.location}</div>
                  <div style={{fontSize:"20px",textAlign:"center",border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}}>{product.accessories}</div>
                  <div style={{fontSize:"20px",textAlign:"center",border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}}>{product.modelYear}</div>
                  <div style={{border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}} />
                  <div style={{fontSize:"20px",textAlign:"center",border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}}>{product.airflow}</div>
                  <div style={{display:"flex",fontSize:"20px",border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}}>
                    <div style={{textAlign:"center",backgroundColor:"whitesmoke",width:"100px"}}>Min</div>
                    <div style={{textAlign:"center",backgroundColor:"white",width:"100px"}}>{product.powerMin}</div>
                    <div style={{textAlign:"center",backgroundColor:"whitesmoke",width:"100px"}}>Man</div>
                    <div style={{textAlign:"center",backgroundColor:"white",width:"100px"}}>{product.powerMax}</div>
                  </div>
                  <div style={{display:"flex",fontSize:"20px",border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}}>
                    <div style={{textAlign:"center",backgroundColor:"whitesmoke",width:"100px"}}>Min</div>
                    <div style={{textAlign:"center",backgroundColor:"white",width:"100px"}}>{product.voltageMin}</div>
                    <div style={{textAlign:"center",backgroundColor:"whitesmoke",width:"100px"}}>Man</div>
                    <div style={{textAlign:"center",backgroundColor:"white",width:"100px"}}>{product.voltageMax}</div>
                  </div>
                  <div style={{display:"flex",fontSize:"20px",border:"2px solid rgba(0, 0, 0, .125)",height:"35px"}}>
                    <div style={{textAlign:"center",backgroundColor:"whitesmoke",width:"100px"}}>Min</div>
                    <div style={{textAlign:"center",backgroundColor:"white",width:"100px"}}>{product.fanspeedMin}</div>
                    <div style={{textAlign:"center",backgroundColor:"whitesmoke",width:"100px"}}>Man</div>
                    <div style={{textAlign:"center",backgroundColor:"white",width:"100px"}}>{product.fanspeedMax}</div>
                  </div>
                </div>
              :
              <div></div>
            }
            </div>
          ))}
          </div>
        </div>
      )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Compare);