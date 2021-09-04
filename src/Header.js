import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core'; 
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">

            <Link to='/'>
            <img className="header_icon" src="http://1000marcas.net/wp-content/uploads/2020/01/Airbnb-Logo-1-500x281.png" alt=""></img>
            </Link>

            <div className="header_center">
                <input type="text" />
                <SearchIcon/>
            </div>

            <div className="header_right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>

    )
}

export default Header
