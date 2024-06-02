import './index.css';

export function BannerSubText(props){
    return(
       <div id="banner">
            <img src={props.bannerBackgroundImage} alt="" id="banner_img"/>
            <div id="banner_overlay">
                <div id="banner_text">
                    <h1>{props.bannerTitle}</h1>
                    <p>{props.bannerSubText}</p>
                </div>
                
            </div>
       </div>
    );
}