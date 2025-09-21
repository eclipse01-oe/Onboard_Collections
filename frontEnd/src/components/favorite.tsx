import useAppStore from "./zustand"


const Favorite = () => {

    const favorite = useAppStore(a => a.favorite)
    const removeFromFav = useAppStore(a => a.removeFav)

    return (<>
        <h1>My Favorite</h1>
        {Object.entries(favorite).length > 0 ? Object.entries(favorite).map(([key, value])=>{
            return (
            <div key={key}>
                <img src={value.src} alt={value.name} />
                <p>{value.name}</p>
                <p>{value.price}</p>
                <button onClick={()=>removeFromFav(value.id)}>Remove</button>
            </div>
        )}) : <h1 style={{opacity: '.4'}}>You have no favorite</h1>}
    </>)
}

export default Favorite
