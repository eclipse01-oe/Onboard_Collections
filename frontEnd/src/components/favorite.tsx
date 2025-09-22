import { Link } from "react-router-dom"
import useAppStore from "./zustand" 
import { BsTrashFill } from 'react-icons/bs'
import { MdAddShoppingCart } from 'react-icons/md'
import styles from '../styles/fav-cart.module.css'


const Favorite = () => {

    const favorite = useAppStore(a => a.favorite)
    const removeFromFav = useAppStore(a => a.removeFav)

    return (
    <div className="container" style={{position: 'relative', gap: '0', marginBottom: '7%'}}>
        
        <div className={styles.header}><h2>My Favorite</h2></div>
        
        {Object.entries(favorite).length > 0 ? Object.entries(favorite).map(([key, value])=>{
            return (
            <div style={{marginBottom: '8%'}}>
                <div className={styles.productDetails} >

                    <div className={styles.imgDiv}>
                        <img src={value.src} alt={value.name}
                        style={{width: '100%', height: '100%'}}/>
                    </div>
                
                    <div className={styles.detailsCon}>
                        <h4>{value.name}</h4>
                        <p>{value.desc}</p>
                        <p>{value.price}</p>
                        
                        <div style={{marginTop: '2px', marginBottom: '2%'}}>
                            <button style={{
                                display: 'flex', justifyContent: 'center',
                                alignItems: 'center', gap: '5px', backgroundColor: '#16e416ee',
                                color: 'white'
                            }}>
                                Add to cart
                                <MdAddShoppingCart style={{marginTop: '4px'}}/>
                            </button>
                        </div>
                            <BsTrashFill onClick={()=>removeFromFav(value.id)} style={{color: '#16e416ee'}}/>
                    </div>
                        

                </div>
            
            </div>
        )}) : 
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h3 style={{opacity: '.4'}}>
            You have no favorite, click here <Link to='/'>➕</Link> to add
            </h3>
        </div>}
    </div>)
}

export default Favorite
