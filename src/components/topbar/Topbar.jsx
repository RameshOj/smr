import React from 'react'
import "./topbar.css";
import { Person, Search, Chat, Notifications } from "@material-ui/icons"
/**
* @author
* @function Topbar
**/

const Topbar = (props) => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">SMR Social</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input placeholder="Search For Friends Posts or Anything" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  )

}

export default Topbar