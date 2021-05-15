import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import StoreWrapper from './StoreWrapper';
import './index.css';


ReactDOM.render(
 <StoreWrapper>
<App/>
</StoreWrapper>   
,document.getElementById('root'));