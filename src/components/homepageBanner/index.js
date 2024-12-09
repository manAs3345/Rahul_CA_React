import { Link, useNavigate } from 'react-router-dom';
import './index.css';
import { useContext, useEffect } from 'react';
import { PagesContext } from '../../App';



export function HomePageBanner(props){
    let {currentPage,setCurrentPage} = useContext(PagesContext);
    const routeHist = useNavigate();
    function handleClick(){
        let buttonClick = document.getElementById("abt-cta-btn");
        routeHist('/about')
            
    }
    function handleClick2(){
        let buttonClick = document.getElementById("serv-cta-btn");
        routeHist('/services')
            
    }
    return(
        <div id='home-banner-container'>
            <img src= {props.bannerImage} id="HomePageBannerImage"/>
            <div id="cta-black-overlay">
                <h1>{props.homeBannerTitle}</h1>
                <div id="cta-btns">
                    <button class='cta-btn' id="abt-cta-btn" value='about' onClick={()=>{handleClick()}}>{props.button1Text}</button>
                    <button class='cta-btn' id="serv-cta-btn" value='services' onClick={()=>{handleClick2()}}>{props.button2Text}</button>
                </div>
            </div>
        </div>
    );
}