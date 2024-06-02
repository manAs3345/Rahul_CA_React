
import { Link } from 'react-router-dom';
import ca_logo from '../../images/ca_logo.png';
import { HamburgerIcon } from '../hamburgerIcon';
import './index.css';
import { useContext, useEffect } from 'react';
import { PagesContext } from '../../App';

export function Topnavbar(){
    if(window.innerWidth<500){
        console.log("less than 500");
    }
    let {currentPage,setCurrentPage} = useContext(PagesContext);
    useEffect(()=>{
        window.addEventListener("resize",handleResize);

        // var elems = document.querySelectorAll("#navbar-tabs > a");
        // elems.forEach((element)=>{
        //     element.setAttribute("id","default");
        // })

        let hamburgerIcon = document.getElementById("hamburger");
        let hamburgerIconCB = document.getElementById("hamburger-icon");
        let navTabs = document.getElementById("navbar-tabs");
        let navBarContainer = document.getElementById("navbar-container");
        navBarContainer.style.display = "flex";
        hamburgerIcon.addEventListener("click",()=>{
        if(hamburgerIconCB.checked == true){
            console.log("is checked");
            navTabs.style.display = "block";
            navBarContainer.style.display = "block";
        }else{
            console.log("is not checked");
            navTabs.style.display = "none";
            navBarContainer.style.display = "flex";
        }
        })

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },);

    useEffect(()=>{
        console.log(currentPage);
        if(currentPage == 'home'){
            var elems = document.querySelectorAll("#navbar-tabs > a");
            elems.forEach((element,index)=>{
                if(index == 0){
                    element.setAttribute("id","active");
                }else{
                    element.setAttribute("id","inactive");
                }
            })
        }
        if(currentPage == 'about'){
            var elems = document.querySelectorAll("#navbar-tabs > a");
            elems.forEach((element,index)=>{
                if(index == 1){
                    element.setAttribute("id","active");
                }else{
                    element.setAttribute("id","inactive");
                }
            })
        }
        if(currentPage == 'services'){
            var elems = document.querySelectorAll("#navbar-tabs > a");
            elems.forEach((element,index)=>{
                if(index == 2){
                    elems[index].setAttribute("id","active");
                }else{
                    element.setAttribute("id","inactive");
                }
            })
        }
        if(currentPage == 'contact'){
            var elems = document.querySelectorAll("#navbar-tabs > a");
            elems.forEach((element,index)=>{
                if(index == 3){
                    elems[index].setAttribute("id","active");
                }else{
                    element.setAttribute("id","inactive");
                }
            })
        }
        
    },[currentPage])

    function handleResize(){
        
        if(window.innerWidth <=500){
           
        }
        return () => {
            window.removeEventListener('resize', handleResize);
          };
    }
    return(
        <div id='navbar-container'>
            <img src={ca_logo} id="ca-logo"/>
            <div id='hamburger-icon-container'>
                <label for="hamburger-icon" id="hamburger">
                    <HamburgerIcon/>
                </label>
                <input id="hamburger-icon" type='checkbox'></input>
            </div>
            <div id='navbar-tabs'>
                <Link to="/" onClick={()=>{setCurrentPage("home")}} className='home'>Home</Link>
                <Link to="/about" onClick={()=>{setCurrentPage("about")}} className='about'>About Us</Link>
                <Link to="/services" onClick={()=>{setCurrentPage("services")}} className='services'>Our Services</Link>
                <Link onClick={()=>{setCurrentPage("contact")}} className='contact'>Contact Us</Link>
            </div>
        </div>
    );
}