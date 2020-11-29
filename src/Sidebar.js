import React from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import CreateIcon from "@material-ui/icons/Create"
import InsertCommentIcon from "@material-ui/icons/InsertComment"
import SidebarOption from './SidebarOption'
import DraftsIcon from "@material-ui/icons/Drafts"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import PeopleAltIcon from "@material-ui/icons/PeopleAlt"
import AppsIcon from "@material-ui/icons/Apps"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import InboxIcon from "@material-ui/icons/Inbox"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

function Sidebar() {
    return (
        <div className = "sidebar">
            <div className="sidebar__header">

            <div className="sidebar__info">
                <h2>Abhishek's Dev Community</h2>
                <h3>
                    <FiberManualRecordIcon />
                    Abhishek Singh
                </h3>
            </div>
            <CreateIcon/>
            </div>
            <SidebarOption Icon = {InsertCommentIcon} title="Threads" />

            <SidebarOption Icon = {InboxIcon} title="Mention & reactions" />

            <SidebarOption Icon = {DraftsIcon} title="Saved items" />

            <SidebarOption Icon = {BookmarkBorderIcon} title="Channel browser" />

            <SidebarOption Icon = {PeopleAltIcon} title="People & user groups" />

            <SidebarOption Icon = {AppsIcon} title="Apps" />

            <SidebarOption Icon = {FileCopyIcon} title="File Browser" />

            <SidebarOption Icon = {ExpandLessIcon} title="Show less" />
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title = "Channels" />
        </div>
    )
}

export default Sidebar
