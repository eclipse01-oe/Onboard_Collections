import { forwardRef } from "react"
import { Link } from "react-router-dom";

type ListProp = {
    className?: string;
    style?: React.CSSProperties;
    listItem?: string;
    listConStyle?: React.CSSProperties;
    listConClass?: string;
    listIcon?: React.ElementType; // Component to render as the icon
    listIconStyle?: React.CSSProperties;
    listIconClass?: string;
    to?: string;
    liSrc?: string;
    id?: string;
}

type ImgProps = {
    src: string;
    alt?: string;
    className?: string;
    style?: React.CSSProperties;
}

const Img = forwardRef<HTMLImageElement, ImgProps> ((props, ref)=>{
    const {src, alt, className, style, ...prop} = props
    return(
        <img src={src} alt={alt}  className={className} style={style} ref={ref} {...prop}/>
    )
})
Img.displayName = 'Img'

const List = forwardRef<HTMLLIElement, ListProp>((props, ref) => {
    const { className, style, listItem, listConStyle, to, liSrc, id,
    listConClass, listIcon: ListIcon, listIconClass, listIconStyle, ...rest} = props;

    const list = (
        <div className={listConClass} style={listConStyle}>
            {
                liSrc ? (
                    <Img src={liSrc} className={className} style={style} />
                ) : (
                    ListIcon ? <ListIcon className={listIconClass} style={listIconStyle} /> : null
                )
            }
            <p>{listItem}</p>
        </div>
    )
    
    if(to){
        return (
            <Link to={to}>
                <li ref={ref} className={className} style={style} id={id} {...rest}>
                    {list}
                </li>
            </Link>
        )
    }

    return (
        <li ref={ref} className={className} style={style}>
           {list}
        </li>
    )
})

List.displayName='List'
export default List
export { Img };