import './App.css';
import React, { createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar/NavigationBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import useReviews from './components/hooks/useReviews';
import useData from './components/hooks/useData';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

export const AllContext = createContext();

function App() {

  const reviews = useReviews();
  const data = useData();
  return (
    <div className="App">
      <AllContext.Provider value={{ reviews, data }}>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/reviews' element={<Reviews></Reviews>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </AllContext.Provider>
    </div>
  );
}

export default App;
