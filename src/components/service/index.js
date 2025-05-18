import { useNavigate } from 'react-router-dom';
import './index.css';
import { useEffect } from 'react';

export function Service(props){
    const routeHist = useNavigate();
    function handleTaxationModal(serviceRouteName,country){
       routeHist(`/serviceDetails/${country}/${serviceRouteName}`);
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
            <button id="more-btn" onClick={()=>handleTaxationModal(props.serviceRouteName,props.country)}>Know More</button>
        </div>
    );
}

