import 'react-bootstrap';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/pages/About";

function App() {
  return (
          <BrowserRouter>
              <NavigationBar/>

                  <Route path={'/about'} component={About}/>
                  <Route path={'/'} exact component={Home}/>

              <Footer/>
          </BrowserRouter>

  );


}

export default App;
