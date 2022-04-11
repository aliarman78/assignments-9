import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import DashBoard from './components/DashBoard/DashBoard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

import Reviews from './components/Reviews/Reviews';

function App() {
  return (<div >
    <Header />
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path='/dashboard' element={<DashBoard />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/about' element={<About />} />
    </Routes>
  </div>
  );
}

export default App;