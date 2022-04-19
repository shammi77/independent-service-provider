
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';




function App() {
  return (
    <div className="App">
      
      <h1 className="text-warning">Weeding Photography</h1>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        
      </Routes>
      

    </div>
  );
}

export default App;
