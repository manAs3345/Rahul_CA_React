import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {About} from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetails } from './pages/ServiceDetails';
import { createContext, useState } from 'react';

export const PagesContext = createContext();
export const CountryContext = createContext();

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentCountry, setCurrentCountry] = useState('india');
  return (
    <CountryContext.Provider value={{currentCountry, setCurrentCountry}}>
      <PagesContext.Provider value={{currentPage,setCurrentPage}}>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/serviceDetails' element={<ServiceDetails/>}/>
        </Routes>
      </PagesContext.Provider>
    </CountryContext.Provider>
    
  );
}

export default App;
