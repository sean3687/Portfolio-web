import React from 'react'
import * as AiIcons from "react-icons/ai";

const SidebarItems = [
    {
        title: "Home",
        route: '/',
        icon: "01.",
        cName: 'nav-home'
    },
    {
        title: 'About',
        route: '/about',
        icon: "02.",
        cName: 'nav-about'
    },
    {
        title: 'Project',
        route: '/project',
        icon: "03.",
        cName: 'nav-project'
    },
    {
        title: 'Blog',
        route: '/blog',
        icon: "04.",
        cName: 'nav-blog'
    },
    {
        title: 'Contact',
        route: '/contact',
        icon: "05.",
        cName: 'nav-contact'
    },
];

export default SidebarItems;

// <AiIcons.AiOutlineHome/> <AiIcons.AiOutlineUser/> <AiIcons.AiOutlineProfile/> <AiIcons.AiOutlineEdit/> <AiIcons.AiOutlinePhone/>
