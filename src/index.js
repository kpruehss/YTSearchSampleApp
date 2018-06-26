import React from 'react'
import ReactDom from 'react-dom';
// Create a new component. This component should produce some HTML
const App = () => {
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put it in the DOM
ReactDom.render(<App />, document.querySelector('.container'));
