import React, { Component } from "react"
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"
import { Box, Grommet } from 'grommet';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import Contact from "./Contact"
 
const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

var AppBar = (props) => (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='light-2'
      pad={{ vertical: 'small', horizontal: 'medium' }}
      elevation='medium'
      {...props}
    />
  );

class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
              <Grommet theme={theme}>
                <AppBar>
                  <Typography variant="h6" color="inherit" noWrap>
                    The Researchist
                  </Typography>
                  <Box direction='row'>
                    <Button><NavLink exact to="/">Home</NavLink></Button>
                    <Button><NavLink to="/about">About</NavLink></Button>
                    <Button><NavLink to="/services">Services</NavLink></Button>
                    <Button><NavLink to="/contact">Contact</NavLink></Button>
                  </Box>                  
                </AppBar>

                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/services" component={Services}/>
                    <Route path="/contact" component={Contact}/>
                </div>
                </Grommet>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main