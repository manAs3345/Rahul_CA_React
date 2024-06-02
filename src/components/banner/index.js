import './index.css';

export function Banner(props){
    return(
       <div class="banner">
            <img src={props.bannerBackgroundImage} alt="" class="banner_img"/>
            <div class="banner_overlay">
                <h1>{props.bannerTitle}</h1>
            </div>
       </div>
    );
}