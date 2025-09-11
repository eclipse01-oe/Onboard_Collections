import React, {useEffect, useState, useRef, forwardRef, useImperativeHandle} from "react"
import {Img} from './list'
import { MdAddShoppingCart } from 'react-icons/md';

type ProductCardProps = {
    src: string
    name?: string
    desc?: string
    rating?: number
    price?: string
    productDiv?: React.HTMLAttributes<HTMLDivElement>
    imgDiv?: React.HTMLAttributes<HTMLDivElement>
    imgProps?: React.ImgHTMLAttributes<HTMLImageElement>
    detailsDivProps?: React.HTMLAttributes<HTMLDivElement>
    nameDivProps?: React.HTMLAttributes<HTMLDivElement>
    buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
    iconProps?: React.SVGProps<SVGSVGElement>
}

export type ProductCardRef = {
    productCardRef?: HTMLDivElement | null
    cartButtonRef?: HTMLButtonElement | null
}

const ProductCard = forwardRef<ProductCardRef, ProductCardProps>((p, ref) => {
    const { name, desc, rating, price, productDiv, imgDiv, imgProps,
        src, detailsDivProps, nameDivProps, buttonProps, iconProps
    } = p

    const cardRef = useRef<HTMLDivElement | null>(null)
    const cartButtonRef = useRef<HTMLButtonElement | null>(null)

    useImperativeHandle(ref, () => ({
        productCardRef: cardRef?.current,
        cartButtonRef: cartButtonRef?.current
    }))

    return (
        <div {...productDiv} ref={cardRef}>
            <div {...imgDiv}>
               <Img {...imgProps} src={src}/>
            </div>
            <div {...detailsDivProps}>
                <div {...nameDivProps}>
                    <h3>{name ?? 'Name'}</h3>
                    <div>⭐{rating ?? 0}</div>
                </div>
                <p>{desc ?? 'No description'}</p>
                <h4>{price ?? 0}</h4>
                <button ref={cartButtonRef} {...buttonProps}>
                <h4>Add to cart</h4>
                <MdAddShoppingCart {...iconProps}/>
            </button>
            </div>
            
        </div>
    )
})
ProductCard.displayName = 'ProductCard'

export default ProductCard