import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
 

export default class add1 extends Component {
  constructor(props) {
    super(props);

    this.onChangeAdd1 = this.onChangeAdd1.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      add1: ''
    }
  }

  onChangeAdd1(e) {
    this.setState({
      add1: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const addr = {
      add1: this.state.add1
    }
    console.log(add1);
 }

  render() {
    return (
      <div>
        <br/><br/>
                
        <h4 class ="text-dark">Do you need to change your add1?</h4><br/>
  
        <form onSubmit={this.onSubmit}>
          <div className="form-group" class ="text-dark">  
            <label>add1: </label><br/>
            <textarea 
                required
               className="form-control"
               class="col-sm-7"
                value={this.state.add1}
                onChange={this.onChangeadd1}
                rows = "10"

                />
          </div>
          <br/><br/>
          <div className="form-group">
          <Button className="ui button" onClick={this.onChangeadd1} style={{width:242, backgroundColor: "#ff8c00" }}  >
             Change
            </Button>
          </div>
        </form>
      {/* <br/> 
      <label class ="text-dark">
         <input type="radio"  
                value="  Cash on delivery"
                onChange = {this.onChange}/>
          &nbsp;
      Cash on delivery   
     </label> 
     <br/> */}
       
       <label class ="text-dark">
       <input type="radio"
                  value=" unavailable"
                  onChange = {this.onChange}
                  disabled     />
       &nbsp; <i> Unavailable</i>
       </label>
       <div className="form-group">
            <br/>
            <center><Button className="ui button" style={{width:242, backgroundColor: "#ff8c00" }}  >
             Next
            </Button> </center>
          </div>

      </div>
    )
  }
  }
