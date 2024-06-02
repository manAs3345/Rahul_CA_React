import './index.css';



export function HomePageBanner(props){
    return(
        <div id='home-banner-container'>
            <img src= {props.bannerImage} id="HomePageBannerImage"/>
            <div id="cta-black-overlay">
                <h1>{props.homeBannerTitle}</h1>
                <div id="cta-btns">
                    <button id='cta-btn'>{props.button1Text}</button>
                    <button id='cta-btn'>{props.button2Text}</button>
                </div>
            </div>
        </div>
    );
}