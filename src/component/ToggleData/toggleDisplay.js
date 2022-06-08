import React, { Component } from 'react';
import axios from 'axios';

const url = "https://testingimdb.herokuapp.com/moviedetails?id=";

class ToggleData extends Component{

    toggleData = (event)=>{
        let movieId = this.props.movId;
        axios.get(url)
        .then((res)=>{this.props.movieName(res.data)})
    }

    render(){
        return(
            <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div >
        <h5 class="modal-title" id="exampleModalLabel"></h5>
        <button type="button"   class="btn-close float-end bg-info " data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body mx-auto"key ={item.id}>
        <p id="movieName" class="mx-auto"> {item.name}</p>
        <p class="mx-auto" id="rateThis" >RATE &nbsp; THIS</p>
        <div id="ratings_movie">
        <i class="bi bi-star-fill star_size"></i>
        <i class="bi bi-star-fill star_size"></i>
        <i class="bi bi-star-fill star_size"></i>
        <i class="bi bi-star-fill star_size"></i>
        <i class="bi bi-star-fill star_size"></i>
        <i class="bi bi-star-fill star_size"></i>
        <i class="bi bi-star-fill star_size"></i>
        <i class="bi bi-star-fill star_size"></i>
        <i class="bi bi-star-fill star_size"></i>
        <i class="bi bi-star-fill star_size"></i>
      </div>
      <button type="button" class="btn custom_color3">Rate</button>
      </div>
      
    </div>
  </div>
</div>
            </>
        )
    }
}
export default ToggleData