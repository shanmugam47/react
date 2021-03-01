import React from 'react'; 

import { BrowserRouter as Router,Switch,Route, } from "react-router-dom";
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import NotFound from "./components/pages/NotFound"
import Navbar from "./components/layout/Navbar"
import AddUser from "./components/users/AddUser"
import EditUser from "./components/users/EditUser"
import View from "./components/users/View"


function App() {
  console.log(process)
  return (
    
      <Router>
        <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/users/add" component={AddUser}/>
        <Route exact path="/users/edit/:id" component={EditUser}/>
        <Route exact path="/users/:id" component={View}/>
        <Route   component={NotFound}/>
      </Switch>

      </div>
      </Router>
  )
    

    
}
export default App;




