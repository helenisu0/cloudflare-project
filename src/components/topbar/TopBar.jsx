import React from 'react'
import './topBar.css'
import {NotificationsNone, Language, Settings} from '@material-ui/icons'
export default function TopBar () {
  return (
    <div className= "topbar">

        <div className="topbarWrapper">

                <div className="topLeft"> 
                    <span className="logo">EMS</span>
                </div>
                <div className="topRight">  
                        <div className="topbarIconContainer">
                            <NotificationsNone/>
                            <span className="topIconBadge">2 </span>

                        </div>
                        <div className="topbarIconContainer">
                            <Language/>
                            <span className="topIconBadge">2 </span>

                        </div>
                        <div className="topbarIconContainer">
                            <Settings/>
                        </div>

                        <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png" alt="" className="topAvatar" />
                </div>
        </div>
       

    </div>
  )
}


