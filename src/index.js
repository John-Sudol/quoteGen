import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Box from './Box';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';
import {quotes} from './quotes';

ReactDOM.render(
  <Box quote={quotes[0].quote} author={quotes[0].author} />,
  document.getElementById('root')
);
registerServiceWorker();
