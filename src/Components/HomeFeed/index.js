import React from 'react';
import CarouselEvents from './Carousel';


const HomeFeed = ()=>{
    return(
        <div>
            <div className="container">
                <a className="nav-icon"><span><i className="fa fa-bars"></i></span></a>      
            </div>

            <div>
                <h1>Explore</h1>
                <form className="form-inline">
                    <i className="fas fa-search" aria-hidden="true"></i>
                    <input type="password" className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search"/>
                </form>
            </div>

            <CarouselEvents/>
        </div>
    )
}

export default HomeFeed;