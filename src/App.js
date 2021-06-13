// import styles from '../styles/styles.module.css';
import "bootstrap/dist/css/bootstrap.min.css"

import {
  BrowserRouter as Router,
   Switch,
   Route,
 
} from "react-router-dom";

import './App.css';
import NavBar from './NavBar'
import About from './About'
import ProfileContainer from './ProfileContainer'
import ProfileForm from "./ProfileForm";

function App() {
  return (
   
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <About />
          </Route> 
          

          <Route exact path="/profiles" component={(routeInfo) => 
            <ProfileContainer routeData={routeInfo} />}>
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
