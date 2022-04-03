import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouteComponent from './routes';

// animation effect  start
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();
// animation effect end

ReactDOM.render(
  <RouteComponent />
,
  document.getElementById('root')
);

