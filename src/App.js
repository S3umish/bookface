

import {
  BrowserRouter as Router,
   Switch,
   Route,
 
} from "react-router-dom";

import './App.css';
import NavBar from './NavBar'
import About from './About'
import List from './List'
import ProfileForm from "./ProfileForm";

function App() {
  return (
   
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route> 
          

          <Route exact path="/profiles">
            <List />
          </Route> 
          

          <Route exact path="/profiles/new">
            <ProfileForm />
          </Route>
       
          </Switch>
        </div>
      </Router> 
     
   
  );
 
}

export default App;
