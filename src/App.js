
import './App.css';
import Header from './components/header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx';
import Compose from './pages/Compose.jsx';
import Sidebar from './components/SidebarMain';



function App() {



 
  return (
    <>
     <Header></Header>
    <div className=''>
    
    
    
    
   
    <BrowserRouter>
    
   
    <Routes>

      <Route path="/home" element={<Home/>}></Route>
      <Route path="/compose" element={<Compose/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
    
      {/* <BrowserRouter>
     
      <Route>
        <Routes path="/" element={<Home/>}></Routes>
        <Routes path="/" element={<Compose/>}></Routes>
        <Routes path="/" element={<Contact/>}></Routes>




        </Route>
        </BrowserRouter> */}
      
      
    
    
    
      </div>
    </>
  );
}

export default App;
