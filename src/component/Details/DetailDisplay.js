import React, { Component} from 'react';
import Display from './Display';
import axios from 'axios';
import './Details.css';
import DetailD from './DetailD';

const url= "https://testingimdb.herokuapp.com/moviedetails?id="

class DetailDisplay extends Component {
    constructor(props){
        super(props)
        this.state ={
            details:'',
        }   
    }


    render() {
        return(
        <div className="row">
                    <div id="mainListing">
                        <div id="filter">
                           
                        </div>
                        <Display/>
                        <DetailD DisplayData={this.state.details}/>
                    </div>
                </div>
        )
    }

    componentDidMount(){
        let mov_id = this.props.match.params.movId;
        axios.get(`${url}${mov_id}`)
        .then((res) => {this.setState({details:res.data})})
    }
    

}
export default DetailDisplay