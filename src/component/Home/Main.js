import React, { Component } from 'react';
import './Main.css'
import MainDisplay from './MainDisplay'

const url = "https://testingimdb.herokuapp.com/movies"

class Main extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            movies:'',
            
        }
    }

    render()
    {

        return(
      <>
      <div className="box">

          <MainDisplay movieData ={this.state.movies}/>
      </div>
      </>
        )
        
    }

    componentDidMount(){
        fetch(url, {method:'GET'})
        .then((res) => res.json())
        .then((data)=>
        {
            this.setState({movies:data})
            
        })
    }
}
export default Main;
