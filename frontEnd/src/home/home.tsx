import React, {useState, useEffect} from 'react'
import {clothes, shoes, phones} from '../assets/data/goodsCardData'
import ProductCard from '../components/card'
import styles from '../styles/home.module.css'
import { FaSearch } from 'react-icons/fa';

const categories = [
    {title: 'Clothes', cat: clothes},
    {title: 'Shoes', cat: shoes},
    {title: 'Phones', cat: phones}
]

const Home = ()=>{
    
    return(
    <div className={styles.homeCon}>

        <div className={styles.searchCon}>
            <input type="text" placeholder='Search'/>
            <button type='button'>
                <FaSearch style={{height: '1.6rem', width: '1.6rem'}}/>
            </button>
        </div>

        <div className={styles.container}>
            { categories.map((c, i)=>{
                return(
                    <div key={i}>
                        <div className={styles.title}
                        >{c.title}</div>
                        <div className={styles.cardContainer}>
                        {
                            c.cat.map((a, i)=><ProductCard key={i} src={a.src}
                                name={a.name} desc={a.desc} rating={a.rating} price={a.price}
                                productDiv={{id: String(a.id),className: styles.productCard}} 
                                imgDiv={{className: styles.imgDiv}} 
                                imgProps={{className: styles.img}} 
                                detailsDivProps={{className: styles.detailsDiv}} 
                                nameDivProps={{className: styles.nameDiv}} 
                                buttonProps={{className: styles.button}} 
                                iconProps={{className: styles.icon}} />
                            )
                        }
                        </div>
                    </div>
                )
            })}
        </div>
    </div>)
}
export default Home