import React, { Component } from "react"
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Box, Grommet } from 'grommet';
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import Contact from "./Contact"
 
const theme = {
  global: {
    colors: {
        'light-2': '#f5f5f5',
        'text': {
          light: 'rgba(0, 0, 0, 0.87)',
        },
      },
      edgeSize: {
        small: '14px',
      },
      elevation: {
        light: {
          medium: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
        },
      },    
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
                    <Button component={NavLink} exact to="/">Home</Button>
                    <Button component={NavLink} to="/about">About</Button>
                    <Button component={NavLink} to="/services">Services</Button>
                    <Button component={NavLink} to="/contact">Contact</Button>
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