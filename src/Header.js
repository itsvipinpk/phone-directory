import React  from 'react';

import "./Header.css"

//this is functional component !
const Header = function(){

    const headerStyle = {textAlign:'center', padding:20, background:'#000', color:'#fff', textTransform:'uppercase'};

    return(

        // <div style={headerStyle}>
        //   Phone Directory !
        // </div>

         <div className="header">
        Phone Directory !
        </div>

    )
}

//this is class componenet 


export default Header;