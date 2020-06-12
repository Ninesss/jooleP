import React from "react";
import "./Product.css";
import Image from 'react-bootstrap/Image'
import Button from '@material-ui/core/Button';
import Navb from "../navbar/Navb";
import { connect } from 'react-redux';

const mapStateToProps = function(state) {
    return {
      products : state.products,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      setCompare : (p) => {dispatch({type:'SET_COMPARE', product:p})}
    }
  }

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            product:{}
        };
    }

    componentDidMount() {
        this.setState({ product:this.props.products[this.props.match.params.productId-1] });
    }

    handleAdd = (id) => {
        this.props.setCompare(id);
      }

    render() {
        return(
            <div style={{display:"inline"}}>
                <Navb />
            <div style={{border:"3px solid rgba(0, 0, 0, .125)",display:"inline"}}>
                <div style={{display:"flex",color:"cornflowerblue",marginTop:"0px",marginLeft:"1%",marginBottom:"0px",fontSize:"20px"}}>
                    <a href="/home" style={{textDecoration:"none"}}>Mechanical</a>
                    <p style={{marginBottom:"0px"}}>&nbsp; > &nbsp;</p>
                    <a href="/cardpage/HVAC%20Fans" style={{textDecoration:"none"}}>HVAC Fans</a>
                    <p style={{marginBottom:"0px"}}>&nbsp; > &nbsp;</p>
                    <a href="/compare" style={{textDecoration:"none"}}>{this.state.product.model}</a>
                </div>
                <div style={{borderTop:"2px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginTop:"0px",display:"flex"}}>
                    <Image src={process.env.PUBLIC_URL+"/" + this.state.product.productId + ".jpeg"} style={{marginLeft:"10px",width:"160px",height:"80px"}} />
                    <h3 style={{marginLeft:"1%",color:"cornflowerblue",marginTop:"25px"}}>{this.state.product.manufacturer}&nbsp; / &nbsp;</h3>
                    <h3 style={{color:"cornflowerblue",marginTop:"25px"}}>{this.state.product.series}&nbsp; / &nbsp;</h3>
                    <h3 style={{color:"cornflowerblue",marginTop:"25px"}}>{this.state.product.model}</h3>
                    <h4 style={{color:"red",marginTop:"30px",marginLeft:"20px"}}>Past specification: 0 firm / 1297 global</h4>
                    <Button id={this.state.product.productId} onClick={()=>this.handleAdd(this.state.product.productId)} className="add">
                        Add to
                    </Button>
                </div>
                <div style={{display:"flex",borderBottom:"2px solid rgba(0, 0, 0, .125)",borderTop:"1px solid rgba(0, 0, 0, .125)"}}>
                    <a style={{textDecoration:"none"}} href="#ProductSummary"><div style={{border:"1px solid rgba(0, 0, 0, .125)",padding:"5px 30px 5px 30px",fontSize:"20px",backgroundColor:"whitesmoke"}}>Product Summary</div></a>
                    <a style={{textDecoration:"none"}} href="#ProductDetails"><div style={{border:"1px solid rgba(0, 0, 0, .125)",padding:"5px 30px 5px 30px",fontSize:"20px",backgroundColor:"whitesmoke"}}>Product Details</div></a>
                    <a style={{textDecoration:"none"}} href="#ProductDocumentation"><div style={{border:"1px solid rgba(0, 0, 0, .125)",padding:"5px 30px 5px 30px",fontSize:"20px",backgroundColor:"whitesmoke"}}>Product Documentation</div></a>
                    <a style={{textDecoration:"none"}} href="#Contact"><div style={{border:"1px solid rgba(0, 0, 0, .125)",padding:"5px 30px 5px 30px",fontSize:"20px",backgroundColor:"whitesmoke"}}>Contact</div></a>
                </div>
                <div style={{display:"inline"}}>
                    <a style={{textDecoration:"none"}} name="ProductSummary"><h2 style={{marginLeft:"30px",color:"cornflowerblue"}}>Product Summary</h2></a>
                    <div style={{display:"flex"}}>
                        <div style={{display:"inline",borderTop:"2px solid rgba(0, 0, 0, .125)",borderBottom:"0px solid rgba(0, 0, 0, .125)",marginLeft:"2%",width:"45%"}}>
                            <h4 style={{paddingLeft:"2%"}}>DESCRIPTION</h4>
                            <div style={{display:"inline"}}>
                                <div style={{display:"flex",borderTop:"2px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)"}}>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"30%",height:"30px",fontSize:"18px"}}>Manufacturer</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"30%",height:"30px",fontSize:"18px"}}>{this.state.product.manufacturer}</div>
                                </div>
                                <div style={{display:"flex",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)"}}>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"30%",height:"30px",fontSize:"18px"}}>Series</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"30%",height:"30px",fontSize:"18px"}}>{this.state.product.series}</div>
                                </div>
                                <div style={{display:"flex",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"2px solid rgba(0, 0, 0, .125)"}}>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"30%",height:"30px",fontSize:"18px"}}>Model</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"30%",height:"30px",fontSize:"18px"}}>{this.state.product.model}</div>
                                </div>
                            </div>
                            <h4 style={{paddingLeft:"2%"}}>TYPE</h4>
                            <div style={{display:"inline"}}>
                                <div style={{display:"flex",borderTop:"2px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)"}}>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"30%",height:"30px",fontSize:"18px"}}>Use Type</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"30%",height:"30px",fontSize:"18px"}}>{this.state.product.useType}</div>
                                </div>
                                <div style={{display:"flex",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)"}}>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"30%",height:"30px",fontSize:"18px"}}>Application</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"30%",height:"30px",fontSize:"18px"}}>{this.state.product.application}</div>
                                </div>
                                <div style={{display:"flex",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)"}}>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"30%",height:"30px",fontSize:"18px"}}>Mounting Location</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"30%",height:"30px",fontSize:"18px"}}>{this.state.product.location}</div>
                                </div>
                                <div style={{display:"flex",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)"}}>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"30%",height:"30px",fontSize:"18px"}}>Accessories</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"30%",height:"30px",fontSize:"18px"}}>{this.state.product.accessories}</div>
                                </div>
                                <div style={{display:"flex",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"2px solid rgba(0, 0, 0, .125)"}}>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"30%",height:"30px",fontSize:"18px"}}>Model year</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"30%",height:"30px",fontSize:"18px"}}>{this.state.product.modelYear}</div>
                                </div>
                            </div>
                        </div>
                        <div style={{display:"inline",borderTop:"2px solid rgba(0, 0, 0, .125)",borderBottom:"2px solid rgba(0, 0, 0, .125)",marginLeft:"2%",width:"45%"}}>
                            <h4 style={{paddingLeft:"2%"}}>TECHNICAL SPECIFICATIONS</h4>
                            <div style={{display:"inline"}}>
                                <div style={{display:"flex",borderTop:"2px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)"}}>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"30%",height:"31px",fontSize:"18px"}}>Airflow(CFM)</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"30%",height:"31px",fontSize:"18px"}}>{this.state.product.airflow}</div>
                                </div>
                                <div style={{display:"flex",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)"}}>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"30%",height:"31px",fontSize:"18px"}}>Power(W)</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"18%",height:"31px",fontSize:"18px"}}>Min</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"18%",height:"31px",fontSize:"18px"}}>{this.state.product.powerMin}</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"18%",height:"31px",fontSize:"18px"}}>Max</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"18%",height:"31px",fontSize:"18px"}}>{this.state.product.powerMax}</div>
                                </div>
                                <div style={{display:"flex",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)"}}>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"30%",height:"31px",fontSize:"18px"}}>Operating voltage(VAC)</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"18%",height:"31px",fontSize:"18px"}}>Min</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"18%",height:"31px",fontSize:"18px"}}>{this.state.product.voltageMin}</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"18%",height:"31px",fontSize:"18px"}}>Max</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"18%",height:"31px",fontSize:"18px"}}>{this.state.product.voltageMax}</div>
                                </div>
                                <div style={{display:"flex",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)"}}>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"30%",height:"31px",fontSize:"18px"}}>Fan speed(RPM)</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"18%",height:"31px",fontSize:"18px"}}>Min</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"18%",height:"31px",fontSize:"18px"}}>{this.state.product.fanspeedMin}</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"18%",height:"31px",fontSize:"18px"}}>Max</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"18%",height:"31px",fontSize:"18px"}}>{this.state.product.fanspeedMax}</div>
                                </div>
                                <div style={{display:"flex",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)"}}>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"30%",height:"31px",fontSize:"18px"}}>Number of fan speeds</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"30%",height:"31px",fontSize:"18px"}}>{this.state.product.speedNumber}</div>
                                </div>
                                <div style={{display:"flex",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)"}}>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"30%",height:"31px",fontSize:"18px"}}>Sound at max speed(dBA)</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"30%",height:"31px",fontSize:"18px"}}>{this.state.product.sound}</div>
                                </div>
                                <div style={{display:"flex",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)"}}>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"30%",height:"31px",fontSize:"18px"}}>Fan sweep diameter(in)</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"30%",height:"31px",fontSize:"18px"}}>{this.state.product.diameter}</div>
                                </div>
                                <div style={{display:"flex",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)"}}>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"30%",height:"31px",fontSize:"18px"}}>Height(in)</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"18%",height:"31px",fontSize:"18px"}}>Min</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"18%",height:"31px",fontSize:"18px"}}>{this.state.product.heightMin}</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"18%",height:"31px",fontSize:"18px"}}>Max</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"18%",height:"31px",fontSize:"18px"}}>{this.state.product.heightMax}</div>
                                </div>
                                <div style={{display:"flex",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"2px solid rgba(0, 0, 0, .125)"}}>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"30%",height:"31px",fontSize:"18px"}}>Weight(lbs)</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"30%",height:"31px",fontSize:"18px"}}>{this.state.product.weight}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a style={{textDecoration:"none"}} name="ProductDetails"><h2 style={{marginLeft:"30px",color:"cornflowerblue"}}>Product Details</h2></a>
                    <div style={{display:"inline"}}>
                        <div style={{display:"flex",borderTop:"2px solid rgba(0, 0, 0, .125)",borderBottom:"0px solid rgba(0, 0, 0, .125)",marginLeft:"2%",width:"92%"}}>
                            <h4 style={{paddingLeft:"1%"}}>SERIES INFORMATION</h4>
                        </div>
                        <div style={{paddingLeft:"1%",borderTop:"2px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginLeft:"2%",width:"92%",fontSize:"18px",backgroundColor:"whitesmoke"}}>
                            {this.state.product.details}
                        </div>
                        <div style={{paddingLeft:"1%",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginLeft:"2%",width:"92%",fontSize:"18px",backgroundColor:"white"}}>
                            {this.state.product.details}
                        </div>
                        <div style={{paddingLeft:"1%",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginLeft:"2%",width:"92%",fontSize:"18px",backgroundColor:"whitesmoke"}}>
                            {this.state.product.details}
                        </div>
                        <div style={{paddingLeft:"1%",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginLeft:"2%",width:"92%",fontSize:"18px",backgroundColor:"white"}}>
                            {this.state.product.details}
                        </div>
                        <div style={{paddingLeft:"1%",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginLeft:"2%",width:"92%",fontSize:"18px",backgroundColor:"whitesmoke"}}>
                            {this.state.product.details}
                        </div>
                        <div style={{paddingLeft:"1%",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginLeft:"2%",width:"92%",fontSize:"18px",backgroundColor:"white"}}>
                            {this.state.product.details}
                        </div>
                        <div style={{paddingLeft:"1%",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginLeft:"2%",width:"92%",fontSize:"18px",backgroundColor:"whitesmoke"}}>
                            {this.state.product.details}
                        </div>
                        <div style={{paddingLeft:"1%",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginLeft:"2%",width:"92%",fontSize:"18px",backgroundColor:"white"}}>
                            {this.state.product.details}
                        </div>
                        <div style={{paddingLeft:"1%",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginLeft:"2%",width:"92%",fontSize:"18px",backgroundColor:"whitesmoke"}}>
                            {this.state.product.details}
                        </div>
                        <div style={{paddingLeft:"1%",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginLeft:"2%",width:"92%",fontSize:"18px",backgroundColor:"white"}}>
                            {this.state.product.details}
                        </div>
                        <div style={{paddingLeft:"1%",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginLeft:"2%",width:"92%",fontSize:"18px",backgroundColor:"whitesmoke"}}>
                            {this.state.product.details}
                        </div>
                        <div style={{paddingLeft:"1%",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginLeft:"2%",width:"92%",fontSize:"18px",backgroundColor:"white"}}>
                            {this.state.product.details}
                        </div>
                        <div style={{paddingLeft:"1%",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"2px solid rgba(0, 0, 0, .125)",marginLeft:"2%",width:"92%",fontSize:"18px",backgroundColor:"whitesmoke"}}>
                            {this.state.product.details}
                        </div>
                        <div style={{paddingLeft:"1%",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginLeft:"2%",width:"92%",fontSize:"18px",backgroundColor:"white"}}>
                            {this.state.product.details}
                        </div>
                    </div>
                    <a style={{textDecoration:"none"}} name="ProductDocumentation"><h2 style={{marginLeft:"30px",color:"cornflowerblue"}}>Product Documentation</h2></a>
                    <a style={{textDecoration:"none"}} name="Contact"><h2 style={{marginLeft:"30px",color:"cornflowerblue"}}>Contact</h2></a>
                    <div style={{display:"flex"}}>
                        <div style={{display:"inline",borderTop:"2px solid rgba(0, 0, 0, .125)",borderBottom:"0px solid rgba(0, 0, 0, .125)",marginLeft:"2%",width:"45%"}}>
                            <h4 style={{paddingLeft:"2%"}}>SALES REPRESENTATIVE</h4>
                            <div style={{display:"inline"}}>
                                <div style={{display:"flex",borderTop:"2px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)"}}>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"30%",height:"30px",fontSize:"18px"}}>Name</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"30%",height:"30px",fontSize:"18px"}}>Marty McFly</div>
                                </div>
                                <div style={{display:"flex",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)"}}>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"30%",height:"30px",fontSize:"18px"}}>Phone</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"30%",height:"30px",fontSize:"18px"}}>+1 650 889 6222</div>
                                </div>
                                <div style={{display:"flex",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"2px solid rgba(0, 0, 0, .125)"}}>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"30%",height:"30px",fontSize:"18px"}}>Email</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"30%",height:"30px",fontSize:"18px"}}>marty@mcfly.com</div>
                                </div>
                                <div style={{display:"flex",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"2px solid rgba(0, 0, 0, .125)"}}>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"30%",height:"30px",fontSize:"18px"}}>Web</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"30%",height:"30px",fontSize:"18px"}}>
                                        <a href="http://www.google.com">http://www.google.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{display:"inline",borderTop:"2px solid rgba(0, 0, 0, .125)",borderBottom:"2px solid rgba(0, 0, 0, .125)",marginLeft:"2%",width:"45%"}}>
                            <h4 style={{paddingLeft:"2%"}}>MANUFACTURER</h4>
                            <div style={{display:"inline"}}>
                                <div style={{display:"flex",borderTop:"2px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)"}}>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"30%",height:"31px",fontSize:"18px"}}>Department</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"30%",height:"31px",fontSize:"18px"}}>Technical Support</div>
                                </div>
                                <div style={{display:"flex",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)"}}>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"30%",height:"31px",fontSize:"18px"}}>Phone</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"30%",height:"31px",fontSize:"18px"}}>+1 800 466 8200</div>
                                </div>
                                <div style={{display:"flex",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)"}}>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"30%",height:"31px",fontSize:"18px"}}>Email</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"30%",height:"31px",fontSize:"18px"}}>techsupport@bigass.com</div>
                                </div>
                                <div style={{display:"flex",borderTop:"1px solid rgba(0, 0, 0, .125)",borderBottom:"1px solid rgba(0, 0, 0, .125)"}}>
                                    <div style={{paddingLeft:"2%",backgroundColor:"whitesmoke",width:"30%",height:"31px",fontSize:"18px"}}>Web</div>
                                    <div style={{paddingLeft:"2%",backgroundColor:"white",width:"30%",height:"31px",fontSize:"18px"}}>
                                        <a href="http://wwww.bigassfans.com">http://wwww.bigassfans.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product);