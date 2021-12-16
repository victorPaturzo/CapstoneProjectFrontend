import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';

ReactDOM.render(
    <Router>
            <StyledEngineProvider injectFirst>
            <App />
            </StyledEngineProvider>
    </Router>,
  document.querySelector("#root")
);