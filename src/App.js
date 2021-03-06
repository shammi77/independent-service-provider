
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CheckOut from "./components/CheckOut/CheckOut";
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div>
      <h1 className="text-warning text-center m-5">Weeding Photography</h1>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path='checkout' element={<CheckOut></CheckOut>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route> 
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
