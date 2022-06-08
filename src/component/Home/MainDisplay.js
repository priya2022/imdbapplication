import React from 'react';
import {Link} from 'react-router-dom';

const MainDisplay = (props)=>{

const ListMain = ({movieData}) => {
    if(movieData)
    {
        return movieData.map((item)=>
        {
            return(
                <>
                <Link to={`/details/${item.id}`} key ={item.id}>
                <div className="card col-md-3  my-2 col-lg-4 col-xl-4 col-8 col-sm-3 " >
                  <img src={item.image} className="card-img-top" alt={item.name}/>
                  <span><i className="bi bi-bookmark-plus wishlist" ></i></span>
                  <div className="card-body">
                    <span className="card-text rated"><i className="bi bi-star-fill mr-3"></i>{item.ratings}</span>
                    <a href="#" className="btn   float-end" onclick="load()" id="rating_button"data-bs-toggle="modal"  data-bs-target="#exampleModal"data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="bi bi-star"></i></a>
                    <h5 className="card-title " id="movie_name">{item.name}</h5>
                    <a href="#" className="btn btn-secondary custom_color my-2 w-100" style={{fontWeight:'600'}} id="wat_id"><i className="bi bi-plus mr-3"></i>Watchlist</a>
                    <a href="#" className="btn btn-secondary custom_color1  bottom_style mt-1 w-65 d-xs-none d-col-none d-sm-none d-md-inline-block d-inline-block d-xl-inline-block " style={{fontWeight:'500'}}><i className="bi bi-play-fill mr-3"></i>Trailer</a>
                    <a href="#" className="btn btn-secondary custom_color1 custom_color2 rounded-circle d-xs-none d-col-none d-sm-none d-md-inline-block d-lg-inline-block d-xl-inline-block  float-end mt-2 ml-2"><i className="bi bi-info-circle"></i></a>
                  </div>
                  </div>
                  <div className="card col-md-3  my-2 col-lg-4 col-xl-4 col-8 col-sm-3 " >
                  <img src={item.image} className="card-img-top" alt={item.name}/>
                  <span><i className="bi bi-bookmark-plus wishlist" ></i></span>
                  <div className="card-body">
                    <span className="card-text rated"><i className="bi bi-star-fill mr-3"></i>{item.ratings}</span>
                    <a href="#" className="btn   float-end" onclick="load()" id="rating_button"data-bs-toggle="modal"  data-bs-target="#exampleModal" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="bi bi-star"></i></a>
                    <h5 className="card-title " id="movie_name">{item.name}</h5>
                    <a href="#" className="btn btn-secondary custom_color my-2 w-100" style={{fontWeight:'600'}} id="wat_id"><i className="bi bi-plus mr-3"></i>Watchlist</a>
                    <a href="#" className="btn btn-secondary custom_color1  bottom_style mt-1 w-65 d-xs-none d-col-none d-sm-none d-md-inline-block d-inline-block d-xl-inline-block " style={{fontWeight:'500'}}><i className="bi bi-play-fill mr-3"></i>Trailer</a>
                    <a href="#" className="btn btn-secondary custom_color1 custom_color2 rounded-circle d-xs-none d-col-none d-sm-none d-md-inline-block d-lg-inline-block d-xl-inline-block  float-end mt-2 ml-2"><i className="bi bi-info-circle"></i></a>
                  </div>
                  </div>


                 
                  </Link>

                  
                
                </>
            )
        })
    }
}

    return(
        <>
        {ListMain(props)}
        </>
    )
}
export default MainDisplay;