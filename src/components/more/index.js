import React from "react";
import { useNavigate } from "react-router-dom";
import { PagesContext } from '../../App';
import './index.css';
import { useContext } from "react";



export function KnowMoreLinker(props){
    let navigate = useNavigate();
    let {currentPage,setCurrentPage} = useContext(PagesContext);
    return(
        <button className="moreServicesLink" onClick={()=>{navigate(props.navRoute);setCurrentPage(props.pageValue)}}>{props.linkText}</button>
    );
}