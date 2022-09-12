import './App.css';
import Home from "./WebSection/Home";
import Contact from './WebSection/Contact';
import Navbar from "./WebSection/Navbar"; 
import About from './WebSection/About';
import Footer from "./WebSection/Footer";
 import Service from './WebSection/Service';
import Error from './WebSection/Error';
 // import { Route, Switch} from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Switch, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
      <Switch>
        {/* <Rauter>
          <Rauters> */}
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="/Service" component={Service}/>
          <Route component={Error}/>
          {/* </Rauters>
        </Rauter> */}
      </Switch>
    <Footer/>
    </>
  );
}
export default App;


