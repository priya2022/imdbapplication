import React from 'react';


const MainDisplay = (props)=>{

const ListMain = ({carolData}) => {
    if(carolData)
    {
        return carolData.map((item)=>
        {
            return(
                <>
                
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div class="overlay-image" id="img1">

    </div>
       <div className="container-fluid">

        <div className="row">

            <div className="col-md-3 col-sm-3 col-xl-3 col-4 col-lg-3 " id="first">
                        <p>
                           <a href="https://priya2022.github.io/imdb2ndpage/"> 
                           <img src={item.name[0].image} alt="" className="sideimg" /></a>
                        </p>
                        <span ><i className="bi bi-bookmark-plus wishlist" ></i></span>
            </div>

          
            <div className="col-md-2 col-sm-2 col-xl-2  col-3 col-lg-2 d-flex align-items-center justify-content-center " id="second" >
                <span className="height_specs"><i className="bi bi-play-circle  play"></i></span>
            </div>

            <div className="col-md-7 col-sm-7 col-xl-7 col-5 col-lg-7 font_specs" id="third">
               <div className="height_specs">
                    <h2 id="title">
                        {item.name[0].movie}
                    </h2>
                    <p id="sub_title">
                        {item.name[0].content}
                    </p>
                    <span id="len">{item.name[0].length}</span>
                </div>   
               
            </div>

        </div>

    </div>

    </div>
    
    
    <div className="carousel-item ">
    <div class="overlay-image" id="img2">

    </div>
       <div className="container-fluid">

        <div className="row">

            <div className="col-md-3 col-sm-3 col-xl-3 col-4 col-lg-3 " id="first">
                        <p>
                           <a href="https://priya2022.github.io/imdb2ndpage/"> 
                           <img src={item.name[1].image} alt="" className="sideimg" /></a>
                        </p>
                        <span ><i className="bi bi-bookmark-plus wishlist" ></i></span>
            </div>

          
            <div className="col-md-2 col-sm-2 col-xl-2  col-3 col-lg-2 d-flex align-items-center justify-content-center " id="second" >
                <span className="height_specs"><i className="bi bi-play-circle  play"></i></span>
            </div>

            <div className="col-md-7 col-sm-7 col-xl-7 col-5 col-lg-7 font_specs" id="third">
               <div className="height_specs">
                    <h2 id="title">
                        {item.name[1].movie}
                    </h2>
                    <p id="sub_title">
                        {item.name[1].content}
                    </p>
                    <span id="len">{item.name[1].length}</span>
                </div>   
               
            </div>

        </div>

    </div>

    </div>

    <div className="carousel-item ">
    <div class="overlay-image" id="img3">

    </div>
       <div className="container-fluid">

        <div className="row">

            <div className="col-md-3 col-sm-3 col-xl-3 col-4 col-lg-3 " id="first">
                        <p>
                           <a href="https://priya2022.github.io/imdb2ndpage/"> 
                           <img src={item.name[2].image} alt="" className="sideimg" /></a>
                        </p>
                        <span ><i className="bi bi-bookmark-plus wishlist" ></i></span>
            </div>

          
            <div className="col-md-2 col-sm-2 col-xl-2  col-3 col-lg-2 d-flex align-items-center justify-content-center " id="second" >
                <span className="height_specs"><i className="bi bi-play-circle  play"></i></span>
            </div>

            <div className="col-md-7 col-sm-7 col-xl-7 col-5 col-lg-7 font_specs" id="third">
               <div className="height_specs">
                    <h2 id="title">
                        {item.name[2].movie}
                    </h2>
                    <p id="sub_title">
                        {item.name[2].content}
                    </p>
                    <span id="len">{item.name[2].length}</span>
                </div>   
               
            </div>

        </div>

    </div>

    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
                
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