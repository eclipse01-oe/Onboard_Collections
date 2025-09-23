import { Link } from "react-router-dom"
import useAppStore from "./zustand" 
import styles from '../styles/notifications.module.css'


const Notifications = () => {

    return (
    <div className="container" style={{position: 'relative', gap: '0', marginBottom: '7%'}}>
        
        <div className={styles.header}><h2>Notifications</h2></div>
        
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h3 style={{opacity: '.4'}}>
            No Notifications, go back to  <Link to='/'>home</Link>
            </h3>
        </div>
    </div>)
}

export default Notifications
