import React from 'react';
import {BrowserRouter as Router ,Routes,Route}from 'react-router-dom';
import  Footer  from '../src/components/UG/Footer';
import Landingpage from "../src/Landingpage";
import Home from './components/UG/Home';
import OTS from './components/UG/OTS';
import NEET from './components/UG/NEET';
import GATE_OTS from './components/PG/GATE_OTS';
import { GateOts } from './components/PG/GateOts';
import { PgHome } from './components/PG/PgHome';
import { MbaHome } from './components/MBA/MbaHome';
import { TERMsCONDITIONS } from './components/UG/TERMsCONDITIONS';
import { Privacypolicy } from './components/UG/Privacypolicy';
import { IITJEE_EXAM } from './components/UG/IITJEE_EXAM';

const App = () => {
  return (
  <Router>
 {/* <Home/> */}
    <Routes>
    <Route path='/' element={ < Landingpage/>} />
    <Route path='/home' element={ <Home/> }/>
   <Route path='/iitjee' element={<OTS/>}/>

   
   <Route path='/neet' element={<NEET/>}/>
   <Route path='/' element={<GATE_OTS/>}/>
   <Route path='/' element={<GateOts/>}/>

   <Route path='/PgHome' element={<PgHome/>}/>
   <Route path='/MbaHome' element={<MbaHome/>}/>
   <Route path='/terms' element={<TERMsCONDITIONS/>}/>
   <Route path='/policy' element={<Privacypolicy/>}/>
   <Route path='/iitjeeExam' element={<IITJEE_EXAM/>}/>
  

    </Routes>
<Footer/>
  </Router>

  );
}

export default App;