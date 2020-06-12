import Cards from "./Cards"
import Navb from "../navbar/Navb";
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import "./Sidebar.css";
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {setProducts} from '../../store/actions/products';
import axios from 'axios';


const ExpansionPanel = withStyles({
    root: {
      border: '2px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 20,
    '&$expanded': {
      minHeight: 20,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(1),
  },
}))(MuiExpansionPanelDetails);
  
const mapStateToProps = function(state) {
  return {
    products : state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter : (g) => {dispatch({type:'FILTER', group:g})},
    setProducts : (g) => {dispatch(setProducts(g))}
  }
}

  
class CardPage extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
          airflowValue:[2000,10000],
          maxPowerValue:[0,100],
          maxSoundValue:[0,100],
          sweepDiameterValue:[0,100],
          heightValue:[0,100],
          firmValue:[0,10],
          globalValue:[0,1500],
        };
      }
    
      async componentDidMount() {
        if(this.props.match.params.line === "HVAC Fans"){
          this.props.setFilter(this.props.products);
        }
        let prd = axios.create();
        await prd.interceptors.request.use(function(config) {
          const token = localStorage.getItem("sessionToken");
          if ( token != null ) {
            config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
        }, function(err) {
          return Promise.reject(err);
        });
        prd.get(`http://localhost:8080/product/HVAC%20Fans`)
          .then(res => {
            const products = res.data;
            this.props.setProducts(products)
            console.log(products)
          })
      }
      
      handleAirflowChange = (event, newValue) => {
        this.setState({
          airflowValue: newValue
        })
      }
      handleMaxPowerChange = (event, newValue) => {
        this.setState({
          maxPowerValue: newValue
        })
      }
      handleMaxSoundChange = (event, newValue) => {
        this.setState({
          maxSoundValue: newValue
        })
      }
      handleSweepDiameterChange = (event, newValue) => {
        this.setState({
          sweepDiameterValue: newValue
        })
      }
      handleHeightChange = (event, newValue) => {
        this.setState({
          heightValue: newValue
        })
      }
      handleFirmChange = (event, newValue) => {
        this.setState({
          firmValue: newValue
        })
      }
      handleGlobalChange = (event, newValue) => {
        this.setState({
          globalValue: newValue
        })
      }
    
      handleClear = () => {
        this.setState({
          airflowValue:[2000,10000],
          maxPowerValue:[0,100],
          maxSoundValue:[0,100],
          sweepDiameterValue:[0,100],
          heightValue:[0,100],
          firmValue:[0,10],
          globalValue:[0,1500],
        })
      }
  
      handleSave = () => {
      let res = [];
      for(let product of this.props.products){
        if(product.airflow >= this.state.airflowValue[0] && product.airflow <= this.state.airflowValue[1] &&
        product.powerMax >= this.state.maxPowerValue[0] && product.powerMax <= this.state.maxPowerValue[1] &&
        product.sound >= this.state.maxSoundValue[0] && product.sound <= this.state.maxSoundValue[1] &&
        product.diameter >= this.state.sweepDiameterValue[0] && product.diameter <= this.state.sweepDiameterValue[1] &&
        product.heightMax >= this.state.heightValue[0] && product.heightMax <= this.state.heightValue[1]
        ){
          res.push(product);
        }
      }
        this.state.filter = res;
        console.log(this.state.filter)
        this.props.setFilter(this.state.filter)
      }


    
      render(){
        return(
            <div style={{display:"inline"}}>
                <Navb />
                <div style={{display:"flex",marginTop:"0px"}}>
                <div>
                <div style={{display:"flex"}}>
                  <h4 style={{marginLeft:"20px",marginTop:"20px",fontSize:"20px"}}>Search :</h4>
                  <Button 
                    onClick={() => this.handleSave()}
                    variant="contained" style={{marginLeft:"30px",marginTop:"10px",marginBottom:"10px",backgroundColor:"grey",color:"whitesmoke",fontSize:"15px",borderRadius:"0px"}}>Save</Button>
                  <Button 
                    onClick={() => this.handleClear()}
                    variant="contained" style={{marginLeft:"30px",marginTop:"10px",marginBottom:"10px",backgroundColor:"grey",color:"whitesmoke",fontSize:"15px",borderRadius:"0px"}}>Clear</Button>
                </div>
                <div style={{display:"flex"}}>
                  <div style={{fontSize:"20px",padding:"15px 51px 15px 52px",border:"2px solid rgba(0, 0, 0, .125)",textAlign:"center"}}>
                    Product
                  </div>
                  <div style={{fontSize:"20px",padding:"15px 56px 15px 56px",border:"2px solid rgba(0, 0, 0, .125)",textAlign:"center"}}>
                    Project
                  </div>
                </div>
                <ExpansionPanel square style={{width:"350px"}} >
                  <ExpansionPanelSummary>
                    <Typography style={{fontSize:"20px"}}>Product Type</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel square style={{width:"350px"}}>
                  <ExpansionPanelSummary >
                    <Typography style={{fontSize:"20px"}}>Technical Specifications</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <div>
                    <div style={{fontSize:"15px",marginBottom:"0px",marginLeft:"10px"}}>Airflow(CFM)</div>
                    <div className="slider">
                    <input className="input" size='1' value={this.state.airflowValue[0]} onChange={(event)=>this.setAirflowValue([+event.target.value,this.state.airflowValue[1]])} />
                    <Slider
                      value={this.state.airflowValue}
                      min={2000}
                      max={10000}
                      onChange={this.handleAirflowChange}
                      valueLabelDisplay="auto"
                      aria-labelledby="range-slider"
                    />
                    <input className="input" size='1' value={this.state.airflowValue[1]} onChange={(event)=>this.setAirflowValue([this.state.airflowValue[0],+event.target.value])} />
                    </div>
                    <div style={{fontSize:"15px",marginBottom:"0px",marginLeft:"10px"}}>Max power(W)</div>
                    <div className="slider">
                    <input className="input" size='1' value={this.state.maxPowerValue[0]} onChange={(event)=>this.setMaxPowerValue([+event.target.value,this.state.maxPowerValue[1]])} />
                    <Slider
                      value={this.state.maxPowerValue}
                      min={0}
                      max={100}
                      onChange={this.handleMaxPowerChange}
                      valueLabelDisplay="auto"
                      aria-labelledby="range-slider"
                    />
                    <input className="input" size='1' value={this.state.maxPowerValue[1]} onChange={(event)=>this.setMaxPowerValue([this.state.maxPowerValue[0],+event.target.value])} />
                    </div>
                    <div style={{fontSize:"15px",marginBottom:"0px",marginLeft:"10px"}}>Sound at max speed(dBA)</div>
                    <div className="slider">
                    <input className="input" size='1' value={this.state.maxSoundValue[0]} onChange={(event)=>this.setMaxSoundValue([+event.target.value,this.state.maxSoundValue[1]])} />
                    <Slider
                      value={this.state.maxSoundValue}
                      min={0}
                      max={100}
                      onChange={this.handleMaxSoundChange}
                      valueLabelDisplay="auto"
                      aria-labelledby="range-slider"
                    />
                    <input className="input" size='1' value={this.state.maxSoundValue[1]} onChange={(event)=>this.setMaxSoundValue([this.state.maxSoundValue[0],+event.target.value])} />
                    </div>
                    <div style={{fontSize:"15px",marginBottom:"0px",marginLeft:"10px"}}>Fan sweep diameter(in)</div>
                    <div className="slider">
                    <input className="input" size='1' value={this.state.sweepDiameterValue[0]} onChange={(event)=>this.setSweepDiameterValue([+event.target.value,this.state.sweepDiameterValue[1]])} />
                    <Slider
                      value={this.state.sweepDiameterValue}
                      min={0}
                      max={100}
                      onChange={this.handleSweepDiameterChange}
                      valueLabelDisplay="auto"
                      aria-labelledby="range-slider"
                    />
                    <input className="input" size='1' value={this.state.sweepDiameterValue[1]} onChange={(event)=>this.setSweepDiameterValue([this.state.sweepDiameterValue[0],+event.target.value])} />
                    </div>
                    <div style={{fontSize:"15px",marginBottom:"0px",marginLeft:"10px"}}>Height(in)</div>
                    <div className="slider">
                    <input className="input" size='1' value={this.state.heightValue[0]} onChange={(event)=>this.setHeightValue([+event.target.value,this.state.heightValue[1]])} />
                    <Slider
                      value={this.state.heightValue}
                      min={0}
                      max={100}
                      onChange={this.handleHeightChange}
                      valueLabelDisplay="auto"
                      aria-labelledby="range-slider"
                    />
                    <input className="input" size='1' value={this.state.heightValue[1]} onChange={(event)=>this.setHeightValue([this.state.heightValue[0],+event.target.value])} />
                    </div>
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel square style={{width:"350px"}}>
                  <ExpansionPanelSummary>
                    <Typography style={{fontSize:"20px"}}>Brand</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel square style={{width:"350px"}}>
                  <ExpansionPanelSummary>
                    <Typography style={{fontSize:"20px"}}>Past Selections</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <div>
                    <div style={{fontSize:"15px",marginBottom:"0px",marginLeft:"10px"}}>Firm</div>
                    <div className="slider">
                    <input className="input" size='1' value={this.state.firmValue[0]} onChange={(event)=>this.setFirmValue([+event.target.value,this.state.firmValue[1]])} />
                    <Slider
                      value={this.state.firmValue}
                      min={0}
                      max={10}
                      onChange={this.handleFirmChange}
                      valueLabelDisplay="auto"
                      aria-labelledby="range-slider"
                    />
                    <input className="input" size='1' value={this.state.firmValue[1]} onChange={(event)=>this.setFirmValue([this.state.firmValue[0],+event.target.value])} />
                    </div>
                    <div style={{fontSize:"15px",marginBottom:"0px",marginLeft:"10px"}}>Global</div>
                    <div className="slider">
                    <input className="input" size='1' value={this.state.globalValue[0]} onChange={(event)=>this.setGlobalValue([+event.target.value,this.state.globalValue[1]])} />
                    <Slider
                      value={this.state.globalValue}
                      min={0}
                      max={1500}
                      onChange={this.handleGlobalChange}
                      valueLabelDisplay="auto"
                      aria-labelledby="range-slider"
                    />
                    <input className="input" size='1' value={this.state.globalValue[1]} onChange={(event)=>this.setGlobalValue([this.state.globalValue[0],+event.target.value])} />
                    </div>
                    </div>
                  </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel square style={{width:"350px"}}>
                    <ExpansionPanelSummary>
                      <Typography style={{fontSize:"20px"}}>Certifications</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                    </div>
                      <Cards />
                    </div>
                  </div>
                  )
              }
}

export default connect(mapStateToProps,mapDispatchToProps)(CardPage);
