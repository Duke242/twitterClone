import React from "react";
import './Sidebar.css'
import SidebarOption from "./SidebarOption";
import { MdHome, MdSearch, MdNotifications, MdMessage, MdOutlineBookmarkAdd, MdList, MdExpandMore } from "react-icons/md";
import { SocialIcon } from 'react-social-icons';


function Sidebar() { 
    return(
        <div className="sidebar">
            <SocialIcon className="twitterIcon" url="https://twitter.com/jaketrent" />
            <SidebarOption active className='sidebarOption' text="Home" Icon={<MdHome size={30}/>}/>
            <SidebarOption className='sidebarOption' text="Explore" Icon={<MdSearch size={30}/>}/>
            <SidebarOption className='sidebarOption' text="Notifications" Icon={<MdNotifications size={30}/>}/>
            <SidebarOption className='sidebarOption' text="Messages" Icon={<MdMessage size={30}/>}/>
            <SidebarOption className='sidebarOption' text="Bookmark" Icon={<MdOutlineBookmarkAdd size={30}/>}/>
            <SidebarOption className='sidebarOption' text="List" Icon={<MdList size={30}/>}/>
            <SidebarOption className='sidebarOption' text="More" Icon={<MdExpandMore size={30}/>}/>
            <button className="tweetButton">Tweet</button>
        </div>
    )
}

export default Sidebar; 