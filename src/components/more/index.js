import React from "react";
import { useNavigate } from "react-router-dom";
import './index.css';



export function KnowMoreLinker(props){
    let navigate = useNavigate();
    return(
        <button className="moreServicesLink" onClick={()=>{navigate(props.navRoute)}}>{props.linkText}</button>
    );
}