import ReactDOM from 'react-dom';

import React from 'react';

export const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
  );
  return <div>Hi There!</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));

/* App Challenges:
- Need to get the users physical location
- Need to determine the current month
- Need to change text and styling based on location + month*/
