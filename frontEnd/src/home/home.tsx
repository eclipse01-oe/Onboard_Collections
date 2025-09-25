import React, { useState, useEffect, useRef } from "react";
import { clothes, shoes, phones } from "../assets/data/goodsCardData";
import Card, { ProductCardRef } from "../components/card";
import Modal from "../components/modal";
import styles from "../styles/home.module.css";
import { FaSearch } from "react-icons/fa";
import {
  MdOutlineCancel,
  MdAddShoppingCart,
  MdFavoriteBorder,
  MdFavorite,
} from "react-icons/md";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Slider from "../components/slider";
import { Img } from "../components/list";
import useAppStore from "../components/zustand";

const categories = [
  { title: "Clothes", cat: clothes },
  { title: "Shoes", cat: shoes },
  { title: "Phones", cat: phones },
];

export type Product = {
  about?: any;
  store?: any;
  id: number;
  src?: string;
  price?: string;
  name?: string;
  desc?: string;
  rating?: number;
  icon?: React.ElementType;
};

const Home = () => {
  const buttonRefs = useRef<Record<number, ProductCardRef | null>>({});
  const [inputValue, setInputValue] = useState("");
  const [index, setIndex] = useState(0);
  const [card, setCard] = useState<Product | null>(null);
  const [flyingCarts, setFlyingCarts] = useState<
    { id: number; start: { x: number; y: number }; end: { x: number; y: number } }[]
  >([]);

  const addToCart = useAppStore((s) => s.addToCart);
  const cart = useAppStore((s) => s.cart);
  const addToFav = useAppStore((s) => s.addToFav);
  const removeFromFav = useAppStore((s) => s.removeFav);
  const fav = useAppStore((s) => s.favorite);
  const cartPos = useAppStore((s) => s.cartPos);

  const handleClick = (a: Product) => {
    const screen = window.innerWidth
    const ref = buttonRefs.current[a.id];
    if (!ref?.cartButtonRef || !cartPos) return;

    const rect = ref.cartButtonRef.getBoundingClientRect();
    const start = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2 
    }

    setFlyingCarts((prev) => [
      ...prev,
      { id: a.id, start, end: { x: cartPos.x, y: cartPos.y } },
    ]);

    addToCart(a);
  };

  useEffect(() => {
    document.body.style.overflow = card ? "hidden" : "auto";

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phones.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [phones.length, card]);


  useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);


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
          <FaSearch
            style={{ height: "1.6rem", width: "1.6rem" }}
            className={styles.inputIcon}
          />
        </div>

        <Modal
          isOpen={true}
          onClose={() => {}}
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
        transition={{ duration: 0.6, delay: 0.05, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.05 }}
      >
        <div className={styles.sliderCon}>
          <div className={styles.sliderTitle}>
            <h3>Discount sales for the week</h3>
          </div>

          <div className={styles.sliderDiv}>
            <AnimatePresence mode="sync">
              {phones.map((p, i) => (
                <Slider
                  key={i}
                  content={<Img src={p.src} className={styles.sliderImg} />}
                  animatePos={-index * 35}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Categories */}
      <div className='container'>
        {categories.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1,  }}
            viewport={{ once: false, amount: 0.05 }}
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
              {c.cat.map((a) => (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: .5 }}
                  viewport={{ once: false }}
                >
                  <Card
                    ref={(el) => (buttonRefs.current[a.id] = el)}
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
                    imgDiv={{ className: styles.imgDiv }}
                    imgProps={{ className: styles.img }}
                    detailsDivProps={{ className: styles.detailsDiv }}
                    viewDetails={{
                      className: styles.viewDetails,
                      onClick: () => setCard(a),
                    }}
                    nameDivProps={{ className: styles.nameDiv }}
                    buttonProps={{
                      className: styles.button,
                      disabled: cart.some((i) => i.id === a.id),
                      onClick: () => handleClick(a),
                    }}
                    btnChildren={
                      cart.find((i) => i.id === a.id) ? (
                        <h4>In cart</h4>
                      ) : (
                        <h4>Add to cart</h4>
                      )
                    }
                    iconProps={{ className: styles.icon }}
                    FavIcon={fav[a.id] ? MdFavorite : MdFavoriteBorder}
                    favIconProps={{
                      className: styles.favIcon,
                      onClick: fav[a.id]
                        ? () => removeFromFav(a.id)
                        : () => addToFav(a),
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔥 Global flying cart animations */}
      <AnimatePresence>
        {flyingCarts.map((anim) => (
          <motion.span
            key={anim.id}
            initial={{
              x: anim.start.x,
              y: anim.start.y,
              opacity: 1,
              scale: 1,
            }}
            animate={{
              x: [anim.start.x, anim.start.x, anim.end.x],
              y: [anim.start.y, anim.start.y - 40, anim.end.y],
              scale: [1, 1.2, 1],
              opacity: [1, 1, .2],
            }}
            transition={{ duration: 1, times: [0, 0.3, 1], ease: 'easeInOut' }}
            onAnimationComplete={() =>
              setFlyingCarts((prev) => prev.filter((f) => f !== anim))
            }
            style={{
              position: "fixed",
              zIndex: 9999,
              pointerEvents: "none",
              top: 0,
              left: 0
            }}
          >
            <MdAddShoppingCart style={{ color: "green", fontSize: "24px" }} />
          </motion.span>
        ))}
      </AnimatePresence>

      {/* Details page */}
      <AnimatePresence>
        {card && (
          <motion.div
            className={styles.detailsPageDiv}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: easeInOut }}
          >
            <div className={styles.cancleDiv}>
              <MdOutlineCancel
                onClick={() => setCard(null)}
                className={styles.detailsCancle}
              />
            </div>
            
            <Slider
              className={styles.detailsSlider}
              content={
                <>
                  <Img
                    src={card.src}
                    className={styles.sliderImg}
                    style={{
                      width: "70%",
                      height: "100%",
                      margin: "10px",
                    }}
                  />
                  <Img
                    src={card.src}
                    className={styles.sliderImg}
                    style={{
                      width: "70%",
                      height: "100%",
                      margin: "10px",
                    }}
                  />
                  <Img
                    src={card.src}
                    className={styles.sliderImg}
                    style={{
                      width: "70%",
                      height: "100%",
                      margin: "10px",
                    }}
                  />
                  <Img
                    src={card.src}
                    className={styles.sliderImg}
                    style={{
                      width: "70%",
                      height: "100%",
                      margin: "10px",
                    }}
                  />
                </>
              }
            />
            <div className={styles.detailsPageContent}>
              <div className={styles.detailsFav_Name}>
                <h2>{card.name}</h2>
                {!fav[card.id] ? (
                  <MdFavoriteBorder
                    style={{
                      height: "20px",
                      width: "20px",
                      color: "red",
                      cursor: "pointer",
                    }}
                    onClick={() => addToFav(card)}
                  />
                ) : (
                  <MdFavorite
                    style={{
                      height: "20px",
                      width: "20px",
                      color: "red",
                      cursor: "pointer",
                    }}
                    onClick={() => removeFromFav(card.id)}
                  />
                )}
              </div>
              <table>
                <tbody>
                  {card.rating && (
                    <tr>
                      <td>
                        <h4>Rating:</h4>
                      </td>
                      <td>{card.rating}⭐</td>
                    </tr>
                  )}
                  {card.about && (
                    <tr>
                      <td>
                        <h4>About: </h4>
                      </td>
                      <td>{card.about}</td>
                    </tr>
                  )}
                  {card.desc && (
                    <tr>
                      <td>
                        <h4>desc: </h4>
                      </td>
                      <td>{card.desc}</td>
                    </tr>
                  )}
                  {card.store && (
                    <tr>
                      <td>
                        <h4>store: </h4>
                      </td>
                      <td>{card.store}</td>
                    </tr>
                  )}
                </tbody>
                <tfoot>
                  <h2>{card.price}</h2>
                </tfoot>
              </table>

              <button
                disabled={cart.some((i) => i.id === card.id)}
                onClick={() => addToCart(card)}
              >
                {cart.some((i) => i.id === card.id) ? "In cart" : "Add to cart"}
                <MdAddShoppingCart />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
