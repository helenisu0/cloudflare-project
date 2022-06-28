import React from 'react'
import './Sidebar.css'
import { LineStyle, PermIdentity, MailOutline, DynamicFeed, ChatBubbleOutline} from '@material-ui/icons'
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                        <li className="sidebarListItem active">
                            <LineStyle className= "sidebarIcon"/>
                            Home
                        </li>
                        </Link>
                        <Link to="/employees"  className="link">
                        <li className="sidebarListItem">
                            <PermIdentity  className= "sidebarIcon"/>
                            Employee
                        </li>
                        </Link>

                        <Link to="/newEmployee"  className="link">
                        <li className="sidebarListItem">
                            <LineStyle className= "sidebarIcon"/>
                            New Employee
                        </li>
                        </Link>
                        <Link to="/products" className="link">
                        <li className="sidebarListItem">
                            <LineStyle  className= "sidebarIcon"/>
                            Department
                        </li>
                        </Link>

                        <Link to="/newProduct" className="link">
                        <li className="sidebarListItem">
                            <LineStyle  className= "sidebarIcon"/>
                           New Department
                        </li>
                        </Link>
                    </ul>
                </div> 
            </div>


            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyle className= "sidebarIcon"/>
                            Attendance
                        </li>
                        <li className="sidebarListItem">
                            <LineStyle className= "sidebarIcon"/>
                            Leave
                        </li>
                       
                    </ul>
                </div> 
            </div>



            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className= "sidebarIcon"/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className= "sidebarIcon"/>
                            FeedBack
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className= "sidebarIcon"/>
                            Messages
                        </li>
                    </ul>
                </div> 
            </div>
    </div>
  )
}
