import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {About} from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetails } from './pages/ServiceDetails';
import { createContext, useState } from 'react';
import { Contact } from './pages/Contact';
import { ServiceDetailsTaxation } from './pages/ServiceDetails/India/Taxation';
import { ServiceDetailsAudit } from './pages/ServiceDetails/India/Audit';
import { ServiceDetailsBA } from './pages/ServiceDetails/India/BussinessAdvisory';
import { ServiceDetailsAccounting } from './pages/ServiceDetails/India/Accounting';
import { ServiceDetailsGST } from './pages/ServiceDetails/India/GST';
import { ServiceDetailsUAEOutsourcing } from './pages/ServiceDetails/UAE/outsourcing';
import { ServiceDetailsUAETaxation } from './pages/ServiceDetails/UAE/taxation';
import { ServiceDetailsUAECorporate } from './pages/ServiceDetails/UAE/corporate';
import { ServiceDetailsUAEAA } from './pages/ServiceDetails/UAE/advisory and assurance';
import { ServiceDetailsUKOutsourcing } from './pages/ServiceDetails/UK/outsourcing';
import { ServiceDetailsUSOutsourcing } from './pages/ServiceDetails/US/outsourcing';
import { ServiceDetailsAUSOutsourcing } from './pages/ServiceDetails/AUS/outsourcing';
import { IndividualReturnsUK } from './pages/ServiceDetails/UK/individual returns';
export const PagesContext = createContext();
export const CountryContext = createContext();

//added note
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
            <Route path='/serviceDetails' element={<ServiceDetails/>}>
            {/* india nested routes */}
              <Route path='india/taxation' element={<ServiceDetailsTaxation/>}/>
              <Route path='india/audit' element={<ServiceDetailsAudit/>}/>
              <Route path='india/ba' element={<ServiceDetailsBA/>}/>
              <Route path='india/accounting' element={<ServiceDetailsAccounting/>}/>
              <Route path='india/gst' element={<ServiceDetailsGST/>}/>

              <Route path='uae/outsourcing' element={<ServiceDetailsUAEOutsourcing/>}/>
              <Route path='uae/taxation' element={<ServiceDetailsUAETaxation/>}/>
              <Route path='uae/corporate' element={<ServiceDetailsUAECorporate/>}/>
              <Route path='uae/aa' element={<ServiceDetailsUAEAA/>}/>

              <Route path='uk/outsourcing' element={<ServiceDetailsUKOutsourcing/>}/>
              <Route path='uk/individualReturns' element={<IndividualReturnsUK/>}/>
              <Route path='us/outsourcing' element={<ServiceDetailsUSOutsourcing/>}/>
              <Route path='aus/outsourcing' element={<ServiceDetailsAUSOutsourcing/>}/>
            </Route>
            <Route path='/contact' element={<Contact></Contact>}/>
        </Routes>
      </PagesContext.Provider>
    </CountryContext.Provider>
    
  );
}

export default App;
