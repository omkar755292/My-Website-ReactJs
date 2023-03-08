import './App.css';
import './style.css'
import Navbar from './components/navbar';
import Body from './components/body';
import Sidebar from './components/sidebar';
import About from './components/about';
import Project from './components/project';
import Blog from './components/blog';
import Contact from './components/contact';
import Footer from './components/footer';
import Error from './components/error';
import {
  BrowserRouter as Router, Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <>
          <Navbar />
          <Sidebar />
          <Switch>
            {/* <Route exact path="/home" render={() => {
              return (
                <>
                  <Body />
                </>
              )
            }}>
            </Route> */}

            <Route exact path="/home">
              <Body />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/project">
              <Project />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route >
              <Error />
            </Route>
          </Switch>
          <Footer />
        </>
      </Router>
    </>
  );
}

export default App;
