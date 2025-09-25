import React, { useRef, useState, useEffect, useLayoutEffect } from "react"
import { Link } from "react-router-dom"
import List, {Img} from "./list"
import styles from '../styles/navbar.module.css'
import { listArray, bottomNavList } from '../assets/data/navData'
import { FaCaretDown, FaCartArrowDown, FaRegUser } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { motion, AnimatePresence } from "framer-motion";
import useAppStore from "./zustand"

const isLoggedIn = false;
const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [windowSize, setWindowsize] = useState(window.innerWidth)

    useEffect(()=>{
        const checkWindowSize = ()=> {
            const windowWidth = window.innerWidth
            setWindowsize(windowWidth)
            windowWidth > 1000 && setShowMenu(false)
        }
        checkWindowSize()
        window.addEventListener('resize', checkWindowSize)
        
        return ()=>window.removeEventListener('resize', checkWindowSize)
    }, [])

    const sideBarContent = ()=>{
        return(<>
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
                           <Link to='/login'><button className={`${styles.navLoginBtn} ${styles.navBtn}`}>Login</button></Link>
                            <Link to='/signup'><button className={`${styles.navSignupBtn} ${styles.navBtn}`}>Sign Up</button></Link>
                        </div>}
                </div>
                    
                <hr style={{width: '80%'}}/>            
            </div>
                    
            {listArray && listArray.length > 0 &&(
                <ul >
                    {listArray?.map((a, i)=><List key={i} {...a}/>)}
                    {!isLoggedIn ? '' : <List listItem='Logged Out'/>}
                </ul>
            )}
        </>)
    }
    
    return (
    <div className={styles.nav}>

        <div className={styles.logo}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <FaCartArrowDown  className={styles.logoIcon}/>
                <h3>OBC</h3>
            </div>
                
            <div className={styles.menuBtnCon}>
                <HiOutlineMenuAlt3 className={styles.menuBtn} onClick={()=>setShowMenu(true)}/>
            </div>
        </div>

       { windowSize <= 1000 ? 
        <AnimatePresence>
            {showMenu && (
            <motion.div 
                className={styles.sideNav + (showMenu? ` ${styles.showSideNav}`:'')}
                initial={{x: '100%'}}
                animate={{x: '0%'}}
                exit={{x: '100%'}}
                transition={{duration: .7}}
            >
                {sideBarContent()}
            </motion.div>)}
        </AnimatePresence> : 

        <div className={styles.sideNav} style={{display: 'flex'}}>
                {sideBarContent()}
        </div>
        }
        
    </div>);
}


const BottomNav = () => {

    const setCartPos = useAppStore(a => a.setCartPos)
    const cartRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const updatePos = () => {
        if (cartRef.current) {
            const rect = cartRef.current.getBoundingClientRect();
            setCartPos?.({ x: rect.x + rect.width / 2 , y: rect.y + rect.height / 2});
        }
    };

        updatePos(); // run once on mount
            window.addEventListener("resize", updatePos);
            window.addEventListener("scroll", updatePos);

        return () => {
            window.removeEventListener("resize", updatePos);
            window.removeEventListener("scroll", updatePos);
        };
    }, [setCartPos]);


    
    return (<div className={styles.bottomNavCon} >
        <div className={styles.bottomNavProfile}  ref={cartRef}>
            <Link to='/cart' style={{height: '100%', width: '100%', display: 'contents'}}>
                <FaCartArrowDown style={{
                height: '100%', width: '60%', color: 'green',
                }} />
            </Link>
        </div>
        <div className={styles.bottomNav}> 
        
            {bottomNavList && bottomNavList.length > 0 &&(
                <ul>
                    {bottomNavList?.map((a, i) => <List key={i}
                        
                        to={a.to}
                        id={a.id} className={a.id && styles.bottomList}
                        listIcon={a.listIcon}
                        listIconStyle={{width: '100%', height: '100%'}}
                        listConStyle={{
                            width: '150%', marginTop: '100%'
                        }}
                        linkClassName={({ isActive }) =>`${styles.navItem} ${isActive ? styles.active : ''}`}
                        linkStyle={{width: '100%'}}
                    />)}
                </ul>
            )
            }
        </div>
    </div>);
}

export default Navbar
export {BottomNav}

