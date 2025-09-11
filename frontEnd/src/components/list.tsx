import { forwardRef } from "react"
import { Link } from "react-router-dom";

type ListProp = {
    className?: string;
    style?: React.CSSProperties;
    listItem?: string;
    listConStyle?: React.CSSProperties;
    listConClass?: string;
    listIcons?: string | React.ReactNode;
    listIconStyle?: React.CSSProperties;
    listIconClass?: string;
    to?: string;
    liSrc?: string;
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
    const { className, style, listItem, listConStyle, to, liSrc,
    listConClass, listIcons, listIconClass, listIconStyle, ...rest} = props;

    const list = (
        <div className={listConClass} style={listConStyle}>
            <div className={listIconClass} style={listIconStyle}>
                {
                    liSrc ? 
                    <Img src={liSrc} className={className} style={style}/> : 
                    listIcons
                }
            </div>
            <p>{listItem}</p>
        </div>
    )
    
    if(to){
        return (

            <Link to={to}>
                <li ref={ref} className={className} style={style}>
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