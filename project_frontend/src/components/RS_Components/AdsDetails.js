import React,{Component} from "react";
import axios from "axios";



export default class AdsDetails extends Component{
constructor (props){
  super(props);
  this.state={
    
    ads:{}
  };
}

componentDidMount(){
  const adID=this.props.match.params.adID;
  axios.get(`http://localhost:8070/ads/${adID}`).then((res)=>{
    if (res.data.success){
      this.setState({
        ads:res.data.ads
      });

      console.log(this.state.ads);
    }
  });

}
  render(){

    const{title,publishdate,description,image} = this.state.ads;
    return(
      
      <div style = {{marginTop:'20px'}} className="container">
      <h4> {title}</h4>

      <hr/>
      <dl className="row">
        <dt className="col-sm-3">title</dt>
        <dd className ="col-sm-9">{title}</dd>

        <dt className="col-sm-3">publishdate</dt>
        <dd className ="col-sm-9">{publishdate}</dd>

        <dt className="col-sm-3">description</dt>
        <dd className ="col-sm-9">{description}</dd>
        </dl>
        
        <div className="card-image waves-effect waves-block waves-light">

                    <img className="activator" style={{ width: '100%', height: '100%' }} src={image}/>

                </div>
       
      
         
        

      </div>
      
     
    )
  }
}