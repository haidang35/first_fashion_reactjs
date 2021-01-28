import React from 'react';
import './CSS/search-box.css';
export default function Search_box(){
    function Close_search_box(){
        document.getElementById("search-box").style.display='none';
    }
    return(
        <div className="search-box" id="search-box">
            <i onClick={{Close_search_box}} className="fas fa-times" />
            <input type="text" placeholder="Search here ..." className="form-control" />
        </div>
    )
}