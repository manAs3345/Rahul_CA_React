import { Link } from "react-router-dom";
import './index.css';

export function BannerImageText(props){
    return(
        <div id="banner-image-container">
        <img src={props.Image} id="banner-Image"/>
        <div id="banner-text-container">
            <h2>{props.bannerHeading}</h2>
            <div>{props.bannerSubText}</div>
            {props.bannerButtonText!=null?<button id="banner-Btn"><Link to={props.buttonLinkPath}>{props.bannerButtonText}</Link></button>:<></>}
        </div>
        </div>
    );
}