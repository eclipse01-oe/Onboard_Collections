import React, {useState, useMemo, useEffect} from 'react'
import { Link } from "react-router-dom"
import useAppStore from "./zustand"
import { BsTrashFill } from 'react-icons/bs'
import styles from '../styles/fav-cart.module.css'
import { priceInCurrency, randomNumber } from '../assets/data/goodsCardData'



const Cart = ()=>{
    const [qty, setQty] = useState<{[key: number]: string}>({})
    const cart = useAppStore(a=>a.cart)
    const removeFromCart = useAppStore(a=>a.removeCart)
    const [shippingFee, setShippingFee] = useState<{[key: number]: number}>({})

    // deleting item from cart
    const handleRemove = (id: number) => {
        removeFromCart(id) // remove from store
        // also remove its shipping fee
        setShippingFee(prev => {
            const updated = { ...prev }
            delete updated[id]
            return updated
        })
    }

    // setting shipping price
    useEffect(() => {
        cart.forEach(item => {
            setShippingFee(prev=> {
                if (prev[item.id] !== undefined) return prev
                
                return {...prev, [item.id]: randomNumber(1000, 5000, 2)}
            })
        })
    }, [cart])

    const totalShipping = useMemo(() => {
        return Object.values(shippingFee).reduce((acc, fee) => acc + fee, 0)
    }, [shippingFee])

    // getting total
    const grandTotal = useMemo(() => {
        return cart.reduce((acc, item) => {
            const price = parseFloat(item.price.replace(/[^0-9.]/g, "")) || 0
            const qnty = Number(qty[item.id]) || 1
            return acc + price * qnty + Number(shippingFee[item.id]) 
        }, 0)
    }, [cart, qty, shippingFee])
    

    return (

    <div className={`container ${styles.container}`}>

        <div className={styles.header}><h2>My Cart</h2></div>

        {/* mapping the cart item */}
        {cart.length > 0 ? cart.map((item)=>{
            const qnty = qty[item.id] || '1'
            const total = Number(parseFloat(item.price.replace(/[^0-9.]/g, "")))
            * Number(qnty)

            return (<>
                <div style={{marginBottom: '10%'}}>
                    <div key={item.id} className={styles.productDetails} >
                        <div className={styles.imgDiv}>
                            <img src={item.src} alt={item.name}
                            style={{width: '100%', height: '100%'}}/>
                        </div>

                        <div className={styles.detailsCon}>
                            <h4>{item.name}</h4>
                            <p>{item.desc}</p>
                            <p>{item.price}</p>
                            <div className={styles.productQuantity}>
                                <label htmlFor={`qty-${item.id}`}>qty</label>
                               <input
                                type="number" min='1' step='1'
                                id={`qty-${item.id}`} value={qnty}
                                onChange={(e)=>setQty((prev)=>({...prev, [item.id]: e.target.value}))}
                            /> 
                            </div>

                            <div className={styles.total}>
                                <h4>Total:</h4>
                                <h4>
                                    {priceInCurrency('en-NG', 'NGN')
                                    .format(isNaN(total) ? 0 : total)}
                                    </h4>
                            </div>
                            
                            <BsTrashFill onClick={()=>handleRemove(item.id)} style={{color: 'green'}}/>

                        </div>
                        
                    </div>
                </div>
            </>)}) : 
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h3 style={{opacity: '.4'}}>
                Your cart is empty, click here <Link to='/'>➕</Link> to add
                </h3>
            </div>
        }

        {/* checkin out section */}
        {cart.length > 0 && 
        <div>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <h4>shipping fee & tax:</h4>
                <h4>
                    {priceInCurrency('en-NG', 'NGN')
                    .format(totalShipping)}
                </h4>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <h4>Checkout Total:</h4>
                <h4>
                    {priceInCurrency('en-NG', 'NGN')
                    .format(isNaN(grandTotal) ? 0 : grandTotal)}
                </h4>
            </div>
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%',
                position: 'absolute', bottom: '0'
                }}
            >
                <button style={{width: '100%', color: 'white', backgroundColor: '#16e416ee'}}>
                    check out <span>→</span>
                </button>
        </div>
        </div>
        }

    </div>)
}

export default Cart
