import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CrudDemo from './CrudDemo';
import AboutPage from './pages/AboutPage';
import Home from './pages/Home';
import WelcomePage from './pages/WelcomePage';
import PersonDetails from './PersonDetails';
import SavePerson from './SavePerson';


function DemoRouter(props) {
  console.log('props:',props)

  return (
    <Routes>
    <Route exact  path='/home' element={<Home />}></Route>
    <Route exact  path='/about' element={<AboutPage />}></Route>
    <Route exact  path='/' element={<WelcomePage />}></Route>
      <Route exact  path='/CrudDemo' element={<CrudDemo />} ></Route>
      <Route exact  path='/PersonDetail/:id' element={<PersonDetails />} ></Route>
      <Route exact  path='/SavePerson/' element={<SavePerson />} ></Route>
    </Routes>

  );
}

export default DemoRouter