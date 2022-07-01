import Sidebar from './components/sidebar/Sidebar';
import TopBar from './components/topbar/TopBar'
import './App.css'
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from './pages/userList/EmployeeList';
import Employee from './pages/employee/Employee'
import NewEmployee from './pages/newProduct/NewEmployee';
import ProductList from './pages/newProduct/productList/ProductList'
import Product from './pages/product/Product'



function App() {
  return (
    <Router>
     <TopBar/>
     <div className="Container">
       <Sidebar/>
       <Routes>
        <Route path='/' element={<Home/>}/> 

        <Route path='/employees' element={<EmployeeList/>}/>

        <Route path='/employees/:employeeId' element={<Employee/>}/>
        
        <Route path='/newEmployee' element={<NewEmployee/>}/>

        <Route path='/products' element={<ProductList/>}/>

        <Route path='/products/:productId' element={<Product/>}/>

        {/* <Route path='/newProduct' element={<NewProduct/>}/> */}

        
        

       </Routes>
     
      
      
      
     </div>
    </Router>
  );
}

export default App;
