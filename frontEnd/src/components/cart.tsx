import useAppStore from "./zustand"


const Cart = ()=>{

    const cart = useAppStore(a=>a.cart)
    const removeFromCart = useAppStore(a=>a.removeCart)

    return (<>
        <h1>My Cart</h1>
        {cart.length > 0 ? cart.map((item, index)=>{
            return (
            <div key={index}>
                <img src={item.src} alt={item.name} />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button onClick={()=>removeFromCart(item.id)}>Remove</button>
            </div>
        )}) : <h1 style={{opacity: '.4'}}>Your cart is empty</h1>}
    </>)
}

export default Cart
