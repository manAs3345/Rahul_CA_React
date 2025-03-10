import { useNavigate } from 'react-router-dom';
import './index.css';
import { useEffect } from 'react';

export function Service(props){
    const routeHist = useNavigate();
    function handleTaxationModal(serviceName){
       routeHist(`/serviceDetails?service=${serviceName}`);
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return(
        <div id="service">
            <img src={props.serviceImage} alt="" id="service-icon"/>
            <h3 id="serviceName">{props.serviceName}</h3>
            <p>
                {props.serviceDescription}
            </p>
            <button id="more-btn" onClick={()=>handleTaxationModal(props.serviceName)}>Know More</button>
        </div>
    );
}

