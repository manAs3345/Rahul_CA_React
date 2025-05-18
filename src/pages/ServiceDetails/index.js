import { useEffect,useState, useContext } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import serviceDetailsBannerImage from "../../images/service_details.jpg";
import { Banner } from '../../components/banner';
import { Topnavbar } from '../../components/navbar';
import { BannerSubText } from '../../components/bannerSubText';
import servicesData from '../../assets/services.json';
import servicesDubaiData from '../../assets/services_dubai.json';
import {Footer} from '../../components/footer';
import { CountryContext } from "../../App";
import { Outlet, Link } from 'react-router-dom';

export function ServiceDetails(){
    // const routeHist = useNavigate();
    // const [serviceName,setServiceName] = useState(null);
    // const [serviceDescription, setServiceDescription] = useState(null);
    // const [serviceImage, setserviceImage] = useState(null);
    // const [subServices, setSubServices]= useState([]);
    // const {currentCountry} = useContext(CountryContext);

    // useEffect(()=>{
    //     console.log(currentCountry);
    //     const serviceFunction = async()=>{
    //         const urlSearchParams = new URLSearchParams(window.location.search);
    //         const paramServiceName = urlSearchParams.get("service");
    //         if(!paramServiceName){
    //             routeHist('/services');
    //         }else{
    //             setServiceName(paramServiceName);
    //             if(currentCountry == 'india'){
    //                 let service_details_result = servicesData.services.filter((element)=>{
    //                     return element.name == serviceName
    //                 })[0];
    //                 if (service_details_result) {
    //                     setServiceDescription(service_details_result.description);
    //                     setserviceImage(service_details_result.image_url);
    //                     setSubServices(service_details_result.sub_services);
    //                     console.log(subServices);
    //                     const servicesContainer = document.getElementById("services");
    //                     subServices.forEach((sub_service,index)=>{
    //                         const newSubService = document.createElement("li");
    //                         const newUL = document.createElement("ul");
    //                         newSubService.textContent = `${sub_service.sub_service_name}`;
    //                         newUL.setAttribute('id',`${service_details_result.class_name}-${index}`);
    //                         newSubService.setAttribute("class","bold-element");
    //                         servicesContainer.appendChild(newSubService);
    //                         servicesContainer.appendChild(newUL);
    
    //                         const subServiceDescContainer = document.getElementById(`${service_details_result.class_name}-${index}`);
    //                         sub_service.sub_service_descriptions.forEach((description)=>{
    //                             const newDescription = document.createElement("li");
    //                             newDescription.textContent = description;
    //                             newDescription.classList.add("service-margin");
    //                             subServiceDescContainer.appendChild(newDescription);
    //                         });
    
    //                     })
                        
    //                 }
    //             }if(currentCountry == 'dubai'){
    //                 console.log("dubai la");
    //                 let service_details_result = servicesDubaiData.services.filter((element)=>{
    //                     return element.name == serviceName
    //                 })[0];
    //                 console.log(service_details_result);
    //                 if (service_details_result) {
    //                     setServiceDescription(service_details_result.description);
    //                     setserviceImage(service_details_result.image_url);
    //                     setSubServices(service_details_result.sub_services);
    //                     console.log(subServices);
    //                     const servicesContainer = document.getElementById("services");
    //                     subServices.forEach((sub_service,index)=>{
    //                         const newSubService = document.createElement("li");
    //                         const newUL = document.createElement("ul");
    //                         newSubService.textContent = `${sub_service.sub_service_name}`;
    //                         newUL.setAttribute('id',`${service_details_result.class_name}-${index}`);
    //                         newSubService.setAttribute("class","bold-element");
    //                         servicesContainer.appendChild(newSubService);
    //                         servicesContainer.appendChild(newUL);
    
    //                         const subServiceDescContainer = document.getElementById(`${service_details_result.class_name}-${index}`);
    //                         sub_service.sub_service_descriptions.forEach((description)=>{
    //                             const newDescription = document.createElement("li");
    //                             newDescription.textContent = description;
    //                             newDescription.classList.add("service-margin");
    //                             subServiceDescContainer.appendChild(newDescription);
    //                             console.log("new service:"+ newDescription);
    //                         });
    
    //                     })
                        
    //                 }
    //             }
                
    //             // console.log(service_details_result);
                
    //         }
    //     }
    //     serviceFunction();
    // })
    // return(
    //     <>
    //         <Topnavbar/>
    //         <BannerSubText bannerBackgroundImage={serviceDetailsBannerImage} bannerTitle={serviceName} bannerSubText={serviceDescription}/>
    //         <div id="service-details-section">
    //             {serviceImage!=null?<img src={serviceImage} alt="" id="service-details-img"/>:<div></div>}
    //             <div id="service-details">
    //                 <ol id="services">
                        
    //                 </ol>
    //             </div>
    //         </div>
    //         <Footer/>
    //     </>
    // );
    return(

        <Outlet/>
    );
}