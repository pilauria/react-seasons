import ReactDOM from 'react-dom';
import React from 'react';

// export const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position), // ==> ASYNC
//     err => console.log(err)
//   );
//   return <div>Latitude:</div>;
// };

//////////////////////////////
class App extends React.Component {
  constructor(props) {
    super(props);
    // initialize state
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // update the state
        this.setState({ lat: position.coords.latitude }); // => callBack (ASYNC) it will run at some point in the future
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    return (
      <div>
        Latitude: {this.state.lat}
        <br />
        <p>{this.state.errorMessage ? this.state.errorMessage : 'mamma'}</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

/* App Challenges:
- Need to get the users physical location
- Need to determine the current month
- Need to change text and styling based on location + month*/
