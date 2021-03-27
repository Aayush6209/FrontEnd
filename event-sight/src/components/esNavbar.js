import React from "react";
import {AiFillHome, AiOutlineLogout} from "react-icons/ai"
import {MdEvent} from "react-icons/md";
import {HiSaveAs} from "react-icons/hi";

const ESNavbar = ()=>{
    return <div className="ESNavbar">
        <div className="ESNavbarHeader">Event Sight</div>
        <div className="ESNavbarIconsDiv" >
        <div style={{display:"inline-block"}}><AiFillHome size="40px" className="ESNavbarIcons"/></div>
        <div style={{display:"inline-block"}}><MdEvent size="40px" className="ESNavbarIcons"/></div>
        <div style={{display:"inline-block"}}><HiSaveAs size="40px" className="ESNavbarIcons"/></div>
        <div style={{display:"inline-block"}}><AiOutlineLogout size="40px" className="ESNavbarIcons"/></div>
        </div>
        </div>
}

export default ESNavbar;