import * as React from 'react';

function getTitle(title) {
  return title;
}

function App() {
  return (
    <div className="App">
      <h1>Hello {getTitle('React')} </h1>

      <label htmlFor="search"> Search: </label>
      <input id="search" type="text"></input>
    </div>
  );
}

export default App;
