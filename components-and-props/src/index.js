import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// class component
// class Greeting extends React.Component {
//   render() {
//     return <h1>Hello</h1>
//   }
// }

// functional component
// function Greeting() {
//   return <h1>Hello from the functional component</h1>
// }

// class component using props
// class Greeting extends React.Component {
//   render() {
//     console.log(this.props);
//     return <h1>Hello {this.props.user}</h1>
//   }
// }

// functional component using props
function Greeting(props) {
  return <h1>Hello {props.user}</h1>
}

// function App() {
//   return (
//     <React.Fragment>
//       <Greeting user="Alice" />
//       <Greeting user="Bob" />
//     </React.Fragment>
//   )
// }


ReactDOM.render(
  // this refers to the greeting component
  <App />,
  document.getElementById('root')
);