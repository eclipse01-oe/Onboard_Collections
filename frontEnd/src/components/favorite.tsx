import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import useAppStore from "./zustand";
import { BsTrashFill } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import styles from "../styles/fav-cart.module.css";
import { Product } from "../home/home";
import { AnimatePresence, motion, time } from "framer-motion";

const Favorite = () => {
  const toCartBtnRefs = useRef<Record<number, HTMLButtonElement | null>>({});
  const favorite = useAppStore((a) => a.favorite);
  const removeFromFav = useAppStore((a) => a.removeFav);
  const addToCart = useAppStore((a) => a.addToCart);
  const cart = useAppStore((a) => a.cart);
  const cartPos = useAppStore((a) => a.cartPos);

  const [flyingCarts, setFlyingCarts] = useState<
    { id: string; start: { x: number; y: number }; end: { x: number; y: number } }[]
  >([]);

  const handleAddToCart = (a: Product) => {
    addToCart(a);

    const screen = window.innerWidth
    const ref = toCartBtnRefs?.current[a.id];
    if (!ref || !cartPos) return;

    const rect = ref.getBoundingClientRect();

    // ✅ account for scroll because the flying item is `position: fixed`
    const start = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2 
    }

    setFlyingCarts((prev) => [
      ...prev,
      {
        id: Date.now().toString() + "-" + Math.random().toString(36).slice(2),
        start,
        end: { x: cartPos.x, y: cartPos.y },
      },
    ]);
  };

  useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

  return (
    <div className="container" style={{ position: "relative", gap: "0", marginBottom: "7%" }}>
      <motion.div className={styles.header}
        initial={{x: -20, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration: .8, ease: 'easeInOut', delay: .1}}
        viewport={{once: false, amount: 0.08}}
      >
        <h2>My Favorite</h2>
      </motion.div>

      <div>
        {Object.entries(favorite).length > 0 ? (
          Object.entries(favorite).map(([i, value]) => {
            return (
            <div key={value.id} style={{ marginBottom: "8%" }}>
                <div className={styles.productDetails}>
                    <motion.div className={styles.imgDiv}
                        key={value.id}
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: .5}}
                        viewport={{once: false, amount: 0.08}}
                    >
                      <motion.img
                        initial={{opacity: 0, }}
                        whileInView={{opacity: 1}}
                        transition={{duration: .5}}
                        viewport={{once: false, amount: 0.08}}
                        src={value.src}
                        alt={value.name}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </motion.div>

                    <motion.div className={styles.detailsCon}
                        key={value.id}
                        initial={{y: 20, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{duration: .8, ease: 'easeInOut', delay: .1}}
                        viewport={{once: false, amount: 0.08}}
                    >
                      <h4>{value.name}</h4>
                      <p>{value.desc}</p>
                      <p>{value.price}</p>

                      <div style={{ marginTop: "2px", marginBottom: "2%" }}>
                        <button
                          className={styles.favCartBtn}
                          onClick={() => handleAddToCart(value)}
                          disabled={cart.some((i) => i.id === value.id)}
                          ref={(el) => {
                            toCartBtnRefs.current[value.id] = el;
                          }}
                        >
                          {cart.find((i) => i.id === value.id) ? <>In cart</> : <>Add to cart</>}
                          <MdAddShoppingCart style={{ marginTop: "4px" }} />
                        </button>
                      </div>

                      <BsTrashFill
                        onClick={() => removeFromFav(value.id)}
                        style={{ color: "#16e416ee" }}
                      />
                    </motion.div>
                </div>
            </div>
            );
          })
        ) : (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <h3 style={{ opacity: ".4" }}>
              You have no favorite, click here <Link to="/">➕</Link> to add
            </h3>
          </div>
        )}
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
              y: [anim.start.y, anim.start.y - 40, anim.end.y + 65], // ⬆️ pop before flying
              scale: [1, 1.2, 1],
              opacity: [1, 1, .5],
            }}
            transition={{ duration: 1, times: [0, 0.3, 1], ease: "easeInOut" }}
            onAnimationComplete={() =>
              setFlyingCarts((prev) => prev.filter((f) => f.id !== anim.id))
            }
            style={{
              position: "fixed",
              zIndex: 9999,
              top: 0,
              left: 0,
              pointerEvents: "none",
            }}
          >
            <MdAddShoppingCart style={{ color: "green" }} />
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Favorite;
