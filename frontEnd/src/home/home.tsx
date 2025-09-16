import React, { useState, useEffect } from "react";
import { clothes, shoes, phones } from "../assets/data/goodsCardData";
import Card from "../components/card";
import Modal from "../components/modal";
import styles from "../styles/home.module.css";
import { FaSearch } from "react-icons/fa";
import { MdOutlineCancel, MdAddShoppingCart, MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { AnimatePresence, motion } from "framer-motion";
import Slider from "../components/slider";
import { Img } from "../components/list";

const categories = [
  { title: "Clothes", cat: clothes },
  { title: "Shoes", cat: shoes },
  { title: "Phones", cat: phones },
];

type Product = {
  about?: any;
  store?: any;
  id?: number;
  src?: string;
  price?: string;
  name?: string;
  desc?: string;
  rating?: number;
  icon?: React.ElementType;
};

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [index, setIndex] = useState(0);
  const [card, setCard] = useState<Product | null>(null);
  const [favorite, setFavorite] = useState(false)

  const addFavorite = ()=>{
    setFavorite(true)
  }

  useEffect(() => {

    document.body.style.overflow = card ? 'hidden' : 'auto'

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phones.length);
    }, 3000);

    return () => clearInterval(interval);

}, [phones.length, card]);


  return (
    <div className={styles.homeCon}>
      {/* Search Bar */}
      <div className={styles.searchCon}>

        <div className={styles.inputDiv}>
          <input
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <FaSearch style={{ height: "1.6rem", width: "1.6rem" }} 
            className={styles.inputIcon}
        />
        </div>
        
        <Modal isOpen={true} onClose={() => {}} 
            children={
                <div className={styles.modal}>
                    <button>Close</button>
                </div>
            }
        />

      </div>

      {/* Slider */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <div className={styles.sliderCon}>

          <div className={styles.sliderTitle}>
            <h3>Discount sales for the week</h3>
          </div>

          <div className={styles.sliderDiv}>
          <AnimatePresence mode="sync">
            {phones.map((p,i)=>
              <Slider 
                key={i}
                content={<Img src={p.src} className={styles.sliderImg}/>}
                animatePos={-index * 35}
              />
            )}
          </AnimatePresence>
        </div> 
        </div>
      </motion.div>

      {/* Categories */}
      <div className={styles.container}>
        {categories.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            {/* Title */}
            <motion.div
              className={styles.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              {c.title}
            </motion.div>

            {/* Cards */}
            <div className={styles.cardContainer}>
              {c.cat.map((a, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: j * 0.1 }}
                  viewport={{ once: false}}
                >
                  <Card
                    src={a.src}
                    name={a.name}
                    desc={a.desc}
                    rating={a.rating}
                    price={a.price}
                    productDiv={{
                      id: String(a.id),
                      className: styles.productCard,
                    }}
                    Icon={a.icon}
                    imgDiv={{ className: styles.imgDiv}}
                    imgProps={{ className: styles.img }}
                    detailsDivProps={{ className: styles.detailsDiv }}
                    viewDetails={{ className: styles.viewDetails, onClick:()=>setCard(a) }}
                    nameDivProps={{ className: styles.nameDiv }}
                    buttonProps={{ className: styles.button }}
                    iconProps={{ className: styles.icon }}
                    FavIcon={favorite ? MdFavorite : MdFavoriteBorder}
                    favIconProps={{ className: styles.favIcon,
                    onClick: favorite ? ()=>setFavorite(false) : addFavorite
                  }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* details page */}
    <AnimatePresence>
      {card && (
        
        <motion.div
        className={styles.detailsPageDiv}
        initial={{y: '100%', opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y:"100%", opacity: 0}}
        transition={{duration: .8}}
        >
          {/* Render selected product details */}
          <MdOutlineCancel onClick={() => setCard(null)} className={styles.detailsCancle}/>
            <Slider 
              drag="x" dragConstraints={{ left: 0, right: 0 }}
              className={styles.detailsSlider}
              style={{height: '50%', overflowX: 'auto'}}
                
              content={<><Img src={card.src} className={styles.sliderImg}
                  style={{width:' 70%', height: '100%', margin: '10px'}}
                />
                
                <Img src={card.src} className={styles.sliderImg}
                  style={{width:' 70%', height: '100%', margin: '10px'}}
                />
                
                <Img src={card.src} className={styles.sliderImg}
                  style={{width:' 70%', height: '100%', margin: '10px'}}
                />

                <Img src={card.src} className={styles.sliderImg}
                  style={{width:'70%', height: '100%', margin: '10px'}}
                />
                </>
              }
                
              />
          <div className={styles.detailsPageContent}>
            <div className={styles.detailsFav_Name}>

              <h2>{card.name} </h2>
              { !favorite ?
                <MdFavoriteBorder style={{height: '20px', width: '20px', color: 'red', cursor: 'pointer'}} 
                onClick={addFavorite}/> :
                <MdFavorite style={{height: '20px', width: '20px', color: 'red', cursor: 'pointer'}}
                onClick={()=>setFavorite(false)}/> 
              }
              
            </div>
          <table>
            <tbody>
              {card.rating && <tr>
              <td><h4>Rating:</h4></td>
              <td>{card.rating}⭐</td>
            </tr>}
            {card.about && <tr>
              <td><h4>About: </h4></td>
              <td>{card.about}</td>
            </tr>}
            {card.desc && <tr>
              <td><h4>desc: </h4></td>
               <td>{card.desc}</td>
            </tr>}
            
            {card.store && <tr>
              <td><h4>store: </h4></td>
              <td>{card.store}</td>
            </tr>}
            </tbody>
            <tfoot><h2>{card.price}</h2></tfoot>
          </table>
          
          <button>Add to cart <MdAddShoppingCart/></button>
        </div>
      </motion.div>
      )}</AnimatePresence>
    </div>
  );
};

export default Home;
