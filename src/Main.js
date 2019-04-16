import React, { Component } from "react"
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import Contact from "./Contact"
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/services" component={Services}/>
                    <Route path="/contact" component={Contact}/>
                </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main