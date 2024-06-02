import { useEffect, useState } from 'react';
import './index.css';

export function PopularService(props){
    const [showBtn, setBtnState] = useState(false);

    return(
        <div id="popular-service" onMouseOver={()=>{setBtnState(true)}} onMouseLeave={()=>{setBtnState(false)}}>
                <img src={props.popularServiceImg} alt=""/>
                <div id="popular-service-overlay">
                    <h3>{props.popularServiceName}</h3>
                    <p>
                        {props.popularServiceDescription}
                    </p>
                    <button id={showBtn == true ? "km-button-show":"km-button-hide"}>Know More</button>
                </div>
                
        </div>
    );
}