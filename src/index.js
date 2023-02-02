import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';
import reportWebVitals from './reportWebVitals';


const toDos = ["Take out the Garbage", "go to get groceries", "shovel the driveway"]

const dones = ["picked up jimmy from school", "unloaded the dishwasher", "folded my laundry"]


ReactDOM.render(
  <MyList theList={toDos} 
  doneList={dones}
  />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
