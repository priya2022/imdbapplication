import React, { Component } from 'react';
import './homestyle.css'
import Carousel from './Carousel'

const url = "https://testingimdb.herokuapp.com/homeDetails"

class HomeDisplay extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            
            home:''
        }
    }

    render()
    {

        return(
      <>
      <div className="box">

          <Carousel carolData ={this.state.home}/>
      </div>
      </>
        )
        
    }

    componentDidMount(){
        fetch(url, {method:'GET'})
        .then((res) => res.json())
        .then((data)=>
        {
            
            this.setState({home:data})
        })
    }
}
export default HomeDisplay;
