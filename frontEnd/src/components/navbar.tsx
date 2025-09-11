import React, { useRef, useState, useEffect } from "react"
import List, {Img} from "./list"
import styles from '../styles/navbar.module.css'
import { listArray, bottomNavList } from '../assets/data/navData'
import { FaRegUser } from 'react-icons/fa';
import { FaCartArrowDown} from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const isLoggedIn = true;
const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    
    return (<div className={styles.nav}>

        <div className={styles.logo}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <FaCartArrowDown  className={styles.logoIcon}/>
                <h3>OBC</h3>
            </div>
                
            <div className={styles.menuBtnCon}>
                <HiOutlineMenuAlt3 className={styles.menuBtn} onClick={()=>setShowMenu(true)}/>
            </div>
        </div>

        

        <div className={styles.sideNav + (showMenu? ` ${styles.showSideNav}`:'')}>
            <div className={styles.navCloseBtn}>
                <MdOutlineCancel className={styles.navCloseIcon} onClick={()=>setShowMenu(false)}/>
            </div>
            <div className={styles.navUser}>
                <div className={styles.navUserIconDiv}>
                    <FaRegUser className={styles.navUserIcon}/>
                </div>

                <div className={styles.navUserInfo}>
                    {isLoggedIn ?
                        <div className={styles.whenUser}>
                            <h2>USERNAME</h2>
                            <p>EMAIL</p>
                        </div>
                        :
                        <div className={styles.whenNoUser} style={{justifyContent: 'space-evenly'}}>
                            <button className={`${styles.navLoginBtn} ${styles.navBtn}`}>Login</button>
                            <button className={`${styles.navSignupBtn} ${styles.navBtn}`}>Sign Up</button>
                        </div>}
                </div>
                    
                <hr style={{width: '80%'}}/>            
            </div>
                    
            {listArray && listArray.length > 0 &&(
                <ul >
                    {listArray?.map(a=><List key={a.id} {...a}/>)}
                    {!isLoggedIn ? '' : <List listItem='Logged Out'/>}
                </ul>
            )}

        </div>
    </div>);
}


const BottomNav = () => {
    
    return (
        <div className={styles.bottomNav}>
            {bottomNavList && bottomNavList.length > 0 &&(
                <ul>
                    {bottomNavList?.map((a, i) => <List key={i} {...a}/>)}
                </ul>
            )
            }
        </div>
    );
}

export default Navbar
export {BottomNav}

