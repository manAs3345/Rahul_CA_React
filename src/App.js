import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {About} from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetails } from './pages/ServiceDetails';
import { createContext, useState } from 'react';
import { Contact } from './pages/Contact';

export const PagesContext = createContext();
export const CountryContext = createContext();


function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentCountry, setCurrentCountry] = useState('india');
  return (
    // <div>
    //   <button>Learn More</button>
    // </div>
    <CountryContext.Provider value={{currentCountry, setCurrentCountry}}>
      <PagesContext.Provider value={{currentPage,setCurrentPage}}>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/serviceDetails' element={<ServiceDetails/>}/>
            <Route path='/contact' element={<Contact></Contact>}/>
        </Routes>
      </PagesContext.Provider>
    </CountryContext.Provider>
    
  );
}

export default App;
