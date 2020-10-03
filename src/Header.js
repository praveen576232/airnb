import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import React from 'react'
import './Header.css'
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className="header">
          <Link className="header" to="/">

            <img alt="" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"></img>
          </Link>
            <div className="header_input">
               <input></input>
               <SearchIcon/>
            </div>
            <div className="header_right">
<p>Become a hoast</p>
<LanguageIcon/>
<ExpandMoreIcon/>
<Avatar/>
            </div>
        </div>
    )
}

export default Header
