import { useContext, useEffect, useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { PagesContext } from '../../App';

export function PopularService(props){
    const [showBtn, setBtnState] = useState(false);
    const routeHist = useNavigate();
    let serviceName = props.popularServiceRouteName;
    let {currentPage,setCurrentPage} = useContext(PagesContext);

    function handleClick(routeName){
        routeHist(`serviceDetails/india/${routeName}`);
        setCurrentPage('services');
    }

    return(
        <div id="popular-service" onMouseOver={()=>{setBtnState(true)}} onMouseLeave={()=>{setBtnState(false)}}>
                <img src={props.popularServiceImg} alt=""/>
                <div id="popular-service-overlay">
                    <h3>{props.popularServiceName}</h3>
                    <p>
                        {props.popularServiceDescription}
                    </p>
                    <button id={showBtn == true ? "km-button-show":"km-button-hide"} onClick={()=>{handleClick(serviceName)}}>Know More</button>
                </div>
                
        </div>
    );
}