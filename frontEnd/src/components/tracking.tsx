import { Link } from "react-router-dom"
import useAppStore from "./zustand" 
import styles from '../styles/tracking.module.css'


const Tracking = () => {

    return (
    <div className="container" style={{position: 'relative', gap: '0', marginBottom: '7%'}}>
        
        <div className={styles.header}><h2>Tracking Product</h2></div>
        
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h3 style={{opacity: '.4'}}>
                No product to Track, go back to  <Link to='/'>home</Link>
            </h3>
        </div>
    </div>)
}

export default Tracking
