import React from 'react';
import './Header.css';
import {Avatar} from "@material-ui/core"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import SearchIcon from "@material-ui/icons/Search"
import HelpOutlineIcon  from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <div className = "header">
            <div className="header__left">
                <Avatar
                    className="header__avatar"
                    alt= "Abhishek Singh"
                    // src={user?.photoURL}
                    />       
                    <AccessTimeIcon/>
                {/* Time Icon */}        
            </div>

            <div className="header__search">
                {/* Search Icon */}
                <SearchIcon/>

                {/* Input */}
                <input placeholder = "Search Abhishek's Dev Community" type="text" name="" id=""/>
            </div>

            <div className="header__right">
                {/*Help Icon */}
                <HelpOutlineIcon/>
            </div>
        </div>
    )
}

export default Header
