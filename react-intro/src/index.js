import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// JSX - JavaScript Extended
// no quotes - variables con be used within {}
// can render any JavaScript expression - a statement that evaluates to one value
// const message = 'Hello React !!!';
// const element = <h1>{message.toUpperCase()}</h1>;

// JSX creates React Elements - this happens internally
// const reactElement = React.createElement('h1', {}, 'Hello World');

// we can also return jsx from functions
const greet = () => {
  return <h1>Hello from a function</h1>
}

// wrap multiple lines in parentheses
// you can use a React Fragment ( <></> ) to wrap multiple root elements - bc at the root
// you can only have on parent element
// const element = (
//   <React.Fragment>
//     <h1>
//       Hello user
//     </h1>
//     <h3>
//       This is a heading
//     </h3>
//   </React.Fragment>
// );

// some html attributes have different names, e.g. class -> className
// for -> htmlFor
// const element = <h1 className='heading'>Hello Ironhackers</h1>

const myStyling = {
  color: 'red'
}

const element = (
  <div>
    <p style={{
      backgroundColor: 'pink'
    }}>
      Random Number: {Math.floor(Math.random() * 10)}
    </p>
    <p style={myStyling}>
      Second paragraph
    </p>
  </div>
)

ReactDOM.render(element, document.getElementById('root'));
// ReactDOM.render(greet(), document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
