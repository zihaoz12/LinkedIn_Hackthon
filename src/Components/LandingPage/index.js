import React from 'react';
import {Link}  from 'react-router-dom';
const LandingPage = ()=>{
    return(
        <div>
            <h1>this is landing Page</h1>
            <Link to="/home">Link to home</Link>
        </div>
    )
}

export default LandingPage;