import React from 'react';
import {Link} from 'react-router-dom';

const ListingDisplay = (props) => {

    const renderData = ({DisplayData}) => {
        if(DisplayData){
            if(DisplayData.length > 0 ){
                return DisplayData.map((item) => {
                    return(
         <div className="item" key={item.id}>

              <div class="container-fluid box">
            <div class="container-specific ">
      
            <div class=" container-fluid box1">
             <div class="row">
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-6 col-6">
                <h4 id = "titleMain">{item.name}</h4>
            </div>
            <div class="col-md-2 col-sm-2 col-lg-2 col-xl-2 col-2 d-md-block d-col-none d-sm-none d-xl-block d-lg-block specColor ">
                <p id = "titB">IMDb RATINGS</p>
            </div>
            <div class="col-md-2 col-sm-2 col-lg-2 col-xl-2 col-2 d-md-block d-col-none d-sm-none d-xl-block d-lg-block  specColor">
                <p id = "titB">YOUR RATINGS</p>
            </div>
            <div class="col-md-2 col-sm-2 col-lg-2 col-xl-2 col-2 specColor d-col-none d-sm-none d-xl-block d-lg-block ">
                <p id = "titB">POPULARITY</p>
            </div>
        </div>


        <div class="row">
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-6 col-6 specColor">
            <span>{item.year} &bull;</span>
            <span>{item.rated} &bull;</span>
            <span>{item.length}</span>

          </div>
          <div class="col-md-2  col-lg-2 col-xl-2  d-col-none d-sm-none d-xl-block d-md-block d-sm-block d-lg-block">
              <button class="btn btn-customB"><p id="titA"><i class="bi bi-star-fill"></i>{item.ratings}/10</p></button>
          </div>
          <div class="col-md-2  col-lg-2 col-xl-2  d-col-none d-sm-none d-xl-block d-md-block d-sm-block d-lg-block">
            <button class="btn btn-customB"><p id="titA"><i class="bi bi-star"></i>Rate</p></button>
          </div>
          <div class="col-md-2  col-lg-2 col-xl-2  d-col-none d-sm-none d-xl-block d-md-block d-sm-block d-lg-block ">
            <button class="btn btn-customB"><p id="titA">4126</p></button> 
          </div>
      </div>
      </div>


      <div class=" container-fluid box2 mb-2">
        <div class="row">
          
          <div class="col-md-2  col-lg-2 col-xl-2 d-col-none d-sm-none d-xl-block d-md-block d-sm-block d-lg-block ">
            <p>cast & crew </p>
          </div>
          <div class="col-md-2 col-sm-4 col-lg-2 col-xl-2 col-4 d-xl-block d-md-block d-sm-block d-lg-block ">
            <p>user reviews </p>
          </div>
          <div class="col-md-2  col-lg-2 col-xl-2  d-col-none d-sm-none d-xl-block d-md-block d-sm-block d-lg-block ">
            IMDb pro 
          </div>
          <div class="col-md-2 col-sm-2 col-lg-2 col-xl-2 col-2 ">
            <i class="bi bi-share-fill"></i>
          </div>
        </div>
      </div>


      <div class="container-fluid box3">
        <div class="row">
          <div class="col-md-3 col-lg-3 col-xl-3 d-sm-block d-col-block d-md-block d-lg-block d-xl-block  ">
            <img src={item.image} alt={item.name} class="imgMain"/>
            <span ><i class="bi bi-bookmark-plus wishlist" ></i></span>
          </div>


          <div class=" col-sm-5 col-5 col-md-9 col-lg-9 col-xl-9 d-md-block d-lg-block d-xl-block d-sm-none d-col-none ">
          <video class="videoMain"  muted controls>
              <source src="../videos/sample.mp4" type="video/mp4" />          
            </video>
          </div>

        
        </div>
        
      </div>


      <div class="container-fluid box4">

        <div class="row">
          <div class="col-md-8 col-sm-12 col-lg-8 col-xl-8 col-12">
            <div class="genreButton my-3">
              <button type="button" class="btn btn-info specificBtn">{item.genre[0].genre_type}</button>
              <button type="button" class="btn btn-info specificBtn">{item.genre[1].genre_type}</button>
              <button type="button" class="btn btn-info specificBtn">{item.genre[2].genre_type}</button>
            </div>
              <p class="precise">
                {item.synopsis}
              </p>
              <hr/>
              <p class="precise">
                Director <a href="">
                  &nbsp; &nbsp; {item.director}
                </a>
              </p>
              <hr/>
              <p class="precise">
                Writer <a href="">
                  &nbsp; &nbsp; {item.writer}
                </a>
              </p>
              <hr/>
              <p class="precise">
                Stars &nbsp; &nbsp;
                <a href="">{item.stars[0].star_name} &bull;</a>     
                <a href="">{item.stars[1].star_name} &bull;</a>
                <a href="">{item.stars[2].star_name}</a>
              </p>
              <hr/>
            
          </div>
          <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-12 ">
            <button type="button" class="btn btn-info specBtn my-3 w-100">
              <i class="bi bi-plus-lg"></i> &nbsp; Add to watchlist
            </button>
            <p id="blue">
              2k User Reviews
            </p>
            <p id="blue">
              704 Critic Reviews
            </p>
            <p id="blue">
              94 Metascore
            </p>
            <div class="row mb-2">
            <div class="d-md-none d-sm-block d-col-block col-sm-4 d-lg-none d-xl-none col-4 ">
              <button class="btn btn-customB"><p id="titA"><i class="bi bi-star-fill"></i>9.1/10</p></button>
          </div>
          <div class="d-md-none d-sm-block d-col-block col-sm-4 d-lg-none d-xl-none col-4 ">
            <button class="btn btn-customB"><p id="titA"><i class="bi bi-star"></i>Rate</p></button>
          </div>
          <div class="d-md-none d-sm-block d-col-block col-sm-4 d-lg-none d-xl-none col-4 ">
            <button class="btn btn-customB"><p id="titA">4126</p></button> 
          </div>
        </div>
          </div>
        </div>

      </div>

      </div>
 
      </div>


      <div class="container box5">
        <div class="row">
          <p class="m-title col-md-10  col-sm-8 col-lg-10 col-xl-10 col-8">
            &nbsp; &nbsp; Videos
          </p>
          <p class="col-md-2 col-sm-4 col-lg-2 col-xl-2 col-4"> <button class=" specB2"><i class="bi bi-pencil-fill"></i>&nbsp; Edit</button></p>
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-12 col-lg-6 col-xl-6 col-12 ">
            <video class="videoMain1"  muted controls>
              <source src="../videos/sample.mp4" type="video/mp4" />          
            </video>
          </div>
          <div class="col-md-6 col-sm-12 col-lg-6 col-xl-6 col-12 ">
            <video class="videoMain1"  muted controls>
              <source src="../videos/sample.mp4" type="video/mp4" />          
            </video>
          </div>
        </div>
      </div>

      <div class="container box6">
        <div class="row">
          <p class="m-title col-md-10  col-sm-8 col-lg-10 col-xl-10 col-8">
            &nbsp; &nbsp; Photos
          </p>
          <p class="col-md-2 col-sm-4 col-lg-2 col-xl-2 col-4"> <button class=" specB2"><i class="bi bi-pencil-fill"></i>&nbsp; Edit</button></p>
        </div>
        <div class="row">
          <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3 col-12 photoMargin">
            <img src={item.image} alt="" class="img-responsive, photo"/>
          </div>
          <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3 col-12 photoMargin">
            <img src={item.image} alt="" class="img-responsive, photo"/>
          </div>
          <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3 col-12 photoMargin">
            <img src={item.image} alt="" class="img-responsive, photo"/>
          </div>
          <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3 col-12 photoMargin">
            <img src={item.image} alt="" class="img-responsive, photo"/>
          </div>
        </div>

      </div>



      <div class="container box7 ">
        <div class="row">
          <p class="m-title col-md-10  col-sm-8 col-lg-10 col-xl-10 col-8">
            &nbsp; &nbsp; Top Cast
          </p>
          <p class="col-md-2 col-sm-4 col-lg-2 col-xl-2 col-4"> <button class=" specB2"><i class="bi bi-pencil-fill"></i>&nbsp; Edit</button></p>
        </div>
        
        <div class="row box14 my-2">
          <div class="col-md-6 col-sm-12 col-lg-6 col-xl-6 col-12  ">
            <div class="row">
              <div class="col-md-3 col-sm-4 col-lg-3 col-xl-3 col-4">
                <img src={item.cast[0].img} alt="" class="imgCasting"/>
              </div>
              <div class=" col-md-6  col-sm-8 col-lg-6 col-xl-6 col-8 mt-3 specF">
                <p id="bold">{item.cast[0].name}</p>
                <p>{item.cast[0].alias}</p>
              </div>
            </div>

          </div>
          <div class="col-md-6 col-sm-12 col-lg-6 col-xl-6 col-12 ">
            <div class="row">
              <div class="col-md-3 col-sm-3 col-lg-3 col-xl-3 col-3">
                <img src={item.cast[1].img} alt="" class="imgCasting"/>
              </div>
              <div class=" col-md-6  col-sm-8 col-lg-6 col-xl-6 col-8 mt-3 specF">
                <p id="bold">{item.cast[1].name}</p>
                <p>{item.cast[1].alias}</p>
              </div>
            </div>

          </div>
        </div>

        
        <div class="row box14 my-2">
          <div class="col-md-6 col-sm-12 col-lg-6 col-xl-6 col-12  ">
            <div class="row">
              <div class="col-md-3 col-sm-3 col-lg-3 col-xl-3 col-3">
                <img src={item.cast[2].img} alt="" class="imgCasting"/>
              </div>
              <div class=" col-md-6  col-sm-8 col-lg-6 col-xl-6 col-8 mt-3 specF">
                <p id="bold" >{item.cast[2].name}</p>
                <p>{item.cast[2].alias}</p>
              </div>
            </div>

          </div>
          <div class="col-md-6 col-sm-12 col-lg-6 col-xl-6 col-12">
            <div class="row">
              <div class="col-md-3 col-sm-3 col-lg-3 col-xl-3 col-3">
                <img src={item.cast[3].img} alt="" class="imgCasting"/>
              </div>
              <div class=" col-md-6  col-sm-8 col-lg-6 col-xl-6 col-8 mt-3 specF">
                <p id="bold">{item.cast[3].name}</p>
                <p>{item.cast[3].alias}</p>
              </div>
            </div>

          </div>
        </div>

        
        <div class="row box14 my-2">
          <div class="col-md-6 col-sm-12 col-lg-6 col-xl-6 col-12 ">
            <div class="row">
              <div class="col-md-3 col-sm-3 col-lg-3 col-xl-3 col-3">
                <img src={item.cast[4].img} alt="" class="imgCasting"/>
              </div>
              <div class=" col-md-6  col-sm-8 col-lg-6 col-xl-6 col-8 mt-3 specF">
                <p id="bold">{item.cast[4].name}</p>
                <p>{item.cast[4].alias}</p>
              </div>
            </div>

          </div>
          <div class="col-md-6 col-sm-12 col-lg-6 col-xl-6 col-12 ">
            <div class="row">
              <div class="col-md-3 col-sm-3 col-lg-3 col-xl-3 col-3">
                <img src={item.cast[5].img} alt="" class="imgCasting"/>
              </div>
              <div class=" col-md-6  col-sm-8 col-lg-6 col-xl-6 col-8 mt-3 specF">
                <p id="bold">{item.cast[5].name}</p>
                <p>{item.cast[5].alias}</p>
              </div>
            </div>

          </div>
        </div>

        
        <div class="row box14 my-2">
          <div class="col-md-6 col-sm-12 col-lg-6 col-xl-6 col-12 ">
            <div class="row">
              <div class="col-md-3 col-sm-3 col-lg-3 col-xl-3 col-3">
                <button class="imgCasting"><i class="bi bi-person"></i></button>
              </div>
              <div class=" col-md-6  col-sm-8 col-lg-6 col-xl-6 col-8 mt-3 specF">
                <p id="bold">{item.cast[6].name}r</p>
                <p>{item.cast[6].alias}</p>
              </div>
            </div>

          </div>
          <div class="col-md-6 col-sm-12 col-lg-6 col-xl-6 col-12">
            <div class="row">
              <div class="col-md-3 col-sm-3 col-lg-3 col-xl-3 col-3">
                <button class="imgCasting"><i class="bi bi-person"></i></button>
              </div>
              <div class=" col-md-6  col-sm-8 col-lg-6 col-xl-6 col-8 mt-3 specF">
                <p id="bold">{item.cast[7].name}</p>
                <p>{item.cast[7].alias}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
       

      <div class="container box8">
        <div class="row">
          <p class="m-title col-md-10  col-sm-8 col-lg-10 col-xl-10 col-8">
            &nbsp; &nbsp; Movie Details
          </p>
          <p class="col-md-2 col-sm-4 col-lg-2 col-xl-2 col-4"> <button class=" specB2"><i class="bi bi-pencil-fill"></i>&nbsp; Edit</button></p>
        </div>
        
        <div class="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-12">
          <p class="precise"id="bold">
            Director &nbsp; &nbsp; <a href="">
             {item.director}
            </a>
          </p>
          <hr/>
          <p class="precise" id="bold">
            Writer &nbsp; &nbsp;<a href="">
              {item.writer}
            </a>
          </p>
          <hr/>
          <p class="precise" id="bold">
            All cast and crew<i class="bi bi-box-arrow-right float-end"></i>
          </p>
          <hr/>
          <p class="precise" id="bold">
           See more Details at IMDbPro <i class="bi bi-box-arrow-right float-end"></i>
          </p>   
          <hr/>
        </div>

      </div>

      <div class="container box9">
        <div class="row">
          <p class="m-title col-md-10  col-sm-8 col-lg-10 col-xl-10 col-8">
            &nbsp; &nbsp; StoryLine
          </p>
          <p class="col-md-2 col-sm-4 col-lg-2 col-xl-2 col-4"> <button class=" specB2"><i class="bi bi-pencil-fill"></i>&nbsp; Edit</button></p>
        </div>
        <div class="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-12 storyBox">
          <p>Aspiring actress serves lattes to movie stars in between auditions and jazz musician Sebastian scrapes by playing cocktail-party gigs in dingy bars. But as success mounts, they are faced with decisions that fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart

          </p>
          <button type="button" class="btn btn-info specBtn2">
            musician
          </button>
          <button type="button" class="btn btn-info specBtn2">
            jazz Music
          </button>
          <button type="button" class="btn btn-info specBtn2">
            Actress
          </button>
          <button type="button" class="btn btn-info specBtn2">
            Pianist
          </button>

          <button type="button" class="btn btn-info specBtn2">
           
            <a href=""> 271 More</a>
          </button>
          
        </div>
      </div>

      <div class="container box10">
        <p class="m-title ">
          &nbsp; &nbsp; Plot Summary 
        </p>
        <div class="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-12">
          <span >
            <a href="">Plot Summary&nbsp; &bull;&nbsp;</a>
          </span>
          <span ><a href="">Plot Synopsis</a></span>
          <hr/>

          <span id="bold">
            Tagline
          </span>
          <span id="blue">
            
          &nbsp; &nbsp; Here's to the fools who dream.
          </span>
          <hr/>

          <span id="bold">
            Genre &nbsp; &nbsp;
          </span>
          <span id="blue">
            <a href="">
              {item.genre[0].genre_type}&nbsp;&bull; &nbsp;
            </a>
            <a href="">
            {item.genre[1].genre_type}&nbsp;&bull; &nbsp;
            </a>
            <a href="">
            {item.genre[2].genre_type}
            </a>
            
          </span>
          <hr/>

          <span id="bold">
            Motion Picture Rating (MPAA) &nbsp; &nbsp;
          </span>
          <span id="blue">
            
          {item.rated} for some Languages
          </span>
          <hr/>

          <span id="bold">
            Parents guide &nbsp; &nbsp;<i class="bi bi-box-arrow-right float-end"></i>
          </span>
          <span>
            
         arrow
          </span>
          <hr/>

        </div>
        
      </div>


      <div class="container box12">
          <div class="row">
            <div class="col-md-10 col-sm-10 col-lg-10 col-xl-10 col-10">
              <p id="specYelBg">
                Top Review
              </p>

            </div>
            <div class="col-md-2 col-sm-2 col-lg-2 col-xl-2 col-2">
              <p>
                <i class="bi bi-star-fill"></i>10/10 
              </p>
            </div>
          </div>
          <div class="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-12">
            <div class="userTitle">
              <h2>
                A true ode to the Golden Era of Hollywood
              </h2>
              <p>
                
                The vibrant colors and use of musical scores to set the mood for scenes transported myself back in time. This movie feels not only like a beautifully nostalgic nod to Hollywood of yesteryear, but also that of a timeless love story. Gosling and Stone have a charm to their chemistry on screen during the musical and dance numbers. All these aspects lead to a raw portrayal of love that many experience in life, with still providing a sense of hope and wonder to the viewers. I was entranced from the opening scene until the final note played by Goslings piano. I absolutely recommend this film to any and everyone!
              </p>

              <span>
                <i class="bi bi-hand-thumbs-up"></i> helpful&bull;168 &nbsp; &nbsp; 
              </span>
              <span>
                <i class="bi bi-hand-thumbs-down"></i> 3
              </span>

            </div>
          </div>
        </div>

        <div class="container box12">
        
        <div class="row">
          <p class="m-title col-md-10  col-sm-8 col-lg-10 col-xl-10 col-8">
            &nbsp; &nbsp; Technical Specs
          </p>
          <p class="col-md-2 col-sm-4 col-lg-2 col-xl-2 col-4"> <button class=" specB2"><i class="bi bi-pencil-fill"></i>&nbsp; Edit</button></p>
        </div>

      <span id="bold">
        Runtime &nbsp; &nbsp;
      </span>
      <span id="blue">
        {item.length}
      </span>
      <hr/>

      <span id="bold">
        Color &nbsp; &nbsp;
      </span>
      <span id="blue">
        Color
      </span>
      <hr/>

      <span id="bold">
        Sound Mix &nbsp; &nbsp;
      </span>
      <span >
        <a href="">Dolby Atmos</a>
        <a href="">Dolby Digital</a>
      </span>
      <hr/>

      <span id="bold">
        Aspect Ratio &nbsp; &nbsp;
      </span>
      <span id="blue">
        2:55:1
      </span>
      <hr/>
    </div>

      

     </div>
                    )
                })
            }else{
                return(
                    <>
                        <h2>No Data For Filter</h2>
                    </>
                )
            }
        }else{
            return(
                <>
                    <img src="../images/loader.gif" alt="loader"/>
                    <h1>Loading.....</h1>
                </>
                
            )
        }
    }

    return(
        <div id="content">
            {renderData(props)}
        </div>
    )

}

export default ListingDisplay