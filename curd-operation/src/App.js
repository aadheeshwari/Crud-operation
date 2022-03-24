import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addemploye from "./Addemploye";
import { Navbar } from 'react-bootstrap';


function App() {
    return (

        <main>
           <Navbar bg="light" id='nav'>
      <img src ="https://www.softwaresuggest.com/blog/wp-content/uploads/2019/04/Effective-method-to-Choose-Employee-Performance-Software-That-Eases-HR-Pain-Points-ss-blog.png " height='70px' padding-right="888px"/>
      <div id='tit'>
       
      <Navbar.Brand ><b> 👉 ENTER THE EMPLOYE DETAILS 👈</b></Navbar.Brand>
   
      </div>
    
       <img src ="https://www.softwaresuggest.com/blog/wp-content/uploads/2019/10/Track-your-employees-KPI-KRA-with-performance-reporting-software.png" height='70px' padding-right="888px"/>
  </Navbar>
           
            <Addemploye />
            
        </main>
    );
}

export default App;
