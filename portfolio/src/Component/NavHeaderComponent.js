import React,{ useState } from 'react';
import { MdMenu } from "react-icons/md";


const NavHeaderComponent=()=>{
    const [navState,setNavState]=useState(false);

    const onSideNavHandler=()=>{
        setNavState(preState=>!preState);
    }

    return(
            <div className='nav-header-container'>
                <h3 className='nav-menu-icon' onClick={onSideNavHandler}>
                   <MdMenu />
                </h3>
                <ul className={navState?'display-side-nav-visible':'display-side-nav-hide'}>
                    <li><a href='#about'>about</a></li>
                    <li><a href='#skills'>skills</a></li>
                    <li><a href='#contact'>contact</a></li>
                </ul>
            </div>
    )
}

export default NavHeaderComponent;