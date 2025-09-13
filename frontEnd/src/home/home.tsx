import React, { useState, useEffect } from "react";
import { clothes, shoes, phones } from "../assets/data/goodsCardData";
import ProductCard from "../components/card";
import Modal from "../components/modal";
import styles from "../styles/home.module.css";
import { FaSearch } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import Slider from "../components/slider";
import { Img } from "../components/list";

const categories = [
  { title: "Clothes", cat: clothes },
  { title: "Shoes", cat: shoes },
  { title: "Phones", cat: phones },
];

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % phones.length);
  }, 3000);
  return () => clearInterval(interval);
}, [phones.length]);


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
                  <ProductCard
                    src={a.src}
                    name={a.name}
                    desc={a.desc}
                    rating={a.rating}
                    price={a.price}
                    productDiv={{
                      id: String(a.id),
                      className: styles.productCard,
                    }}
                    imgDiv={{ className: styles.imgDiv }}
                    imgProps={{ className: styles.img }}
                    detailsDivProps={{ className: styles.detailsDiv }}
                    nameDivProps={{ className: styles.nameDiv }}
                    buttonProps={{ className: styles.button }}
                    iconProps={{ className: styles.icon }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
