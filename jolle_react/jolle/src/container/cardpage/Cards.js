import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import "./Cards.css";
import { Checkbox} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = function(state) {
  return {
    filter : state.filter,
    compare : state.compare.group
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCompare : (p) => {dispatch({type:'SET_COMPARE', product:p})}
  }
}

class Cards extends React.Component{

  constructor(props) {
    super(props);
    this.state ={
    };
  }

  handleAdd = (id) => {
    this.props.setCompare(id);
  }
  
  render() {
    return (
      <div style={{height:"900px",width:"1600px",display:"inline",border:"2px solid rgba(0, 0, 0, .125)",marginTop:"0px"}}>
        <div style={{display:"flex",color:"cornflowerblue",marginTop:"15px",marginLeft:"15px",fontSize:"20px"}}>
            <Link to="/home">Mechanical</Link>
              <p>&nbsp; > &nbsp;</p>
            <Link to="/cardpage/HVAC%20Fans">HVAC Fans</Link>
        </div>
        <div style={{display:"flex"}}>
        { this.props.filter.map(product => (
            <Card className="card" key={product.productId}>
              <CardActionArea>
              <Link to={"/Product/" + product.productId}>
                <CardMedia
                  className="media"
                  image={process.env.PUBLIC_URL+"/" + product.productId + ".jpeg"}
                  title="Contemplative Reptile"
                />
              </Link>
              <CardContent>
                <div variant="h5" style={{fontSize:"18px",fontWeight:"bold",textAlign:"center",color:"cornflowerblue"}}>
                  {product.manufacturer}
                </div>
                <div variant="h5" style={{fontSize:"18px",fontWeight:"bold",textAlign:"center",color:"cornflowerblue"}}>
                  {product.series}
                </div>
                <div variant="h5" style={{fontSize:"18px",fontWeight:"bold",textAlign:"center",color:"cornflowerblue"}}>
                  {product.model}
                </div>
                <div variant="h5" style={{textAlign:"center",color:"grey",backgroundColor:"whitesmoke"}}>
                  <h5>{product.airflow} CFM</h5>
                  <h5>{product.powerMax} W at max speed</h5>
                  <h5>{product.sound} dBA at max speed</h5>
                  <h5>{product.diameter} fan sweep diameter</h5>
                </div>
                <div variant="h5" style={{textAlign:"center",color:"red"}}>
                  <h5>Past specifications:</h5>
                  <h5>0 firm / 1297 global</h5>
                </div>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <Checkbox
                  color="primary"
                  style={{marginLeft:"20px"}}
                  checked={this.props.compare[product.productId-1] ? true : false}
                />
                <p style={{marginBottom:"0px",marginRight:"50px",fontSize:"20px"}}>compare</p>
                <Button id={product.productId} onClick={()=>this.handleAdd(product.productId)} className="addto">
                  Add to
                </Button>
              </CardActions>
            </Card>
          ))}
          </div>
      </div>
      )
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Cards);