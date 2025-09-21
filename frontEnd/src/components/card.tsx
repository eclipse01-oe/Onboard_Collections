import React, {useRef, forwardRef, useImperativeHandle} from "react"
import {Img} from './list'


type ProductCardProps = {
    src?: string
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
    viewDetails?: React.HTMLAttributes<HTMLDivElement>
    iconProps?: React.SVGProps<SVGSVGElement>
    children?: React.ReactNode
    btnChildren?: React.ReactNode
    Icon?: React.ElementType
    FavIcon?: React.ElementType
    favIconProps?: React.SVGProps<SVGSVGElement>
}

export type ProductCardRef = {
    productCardRef?: HTMLDivElement | null
    cartButtonRef?: HTMLButtonElement | null
}

const Card = forwardRef<ProductCardRef, ProductCardProps>((p, ref) => {
    const { name, desc, rating, price, productDiv, imgDiv, imgProps,
        Icon: Icon, FavIcon: FavIcon, src, detailsDivProps, nameDivProps,
         buttonProps, iconProps, children, viewDetails, favIconProps, btnChildren
    } = p

    const cardRef = useRef<HTMLDivElement | null>(null)
    const cartButtonRef = useRef<HTMLButtonElement | null>(null)

    useImperativeHandle(ref, () => ({
        productCardRef: cardRef?.current,
        cartButtonRef: cartButtonRef?.current
    }))

    return (
        <div {...productDiv} ref={cardRef}>
            {children}
            <div {...imgDiv}>
               {src && <Img {...imgProps} src={src}/>}
               {FavIcon ? <FavIcon {...favIconProps} /> : null}
            </div>
            <div {...detailsDivProps}>
                <div {...viewDetails}>
                    <div {...nameDivProps}>
                    <h3>{name ?? 'Name'}</h3>
                    <div>⭐{rating ?? 0}</div>
                </div>
                <p>{desc ?? 'No description'}</p>
                <h4>{price ?? 0}</h4>
                </div>
                
                <button ref={cartButtonRef} {...buttonProps}>
                    {btnChildren}
                    {Icon ? <Icon {...iconProps} /> : null}
                </button>
            </div>
            
        </div>
    )
})
Card.displayName = 'Card'

export default 
Card