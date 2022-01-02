import ReactDOM from 'react-dom';
import React from 'react';
import { SeasonDisplay } from './SeasonDisplay';

// export const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position), // ==> ASYNC
//     err => console.log(err)
//   );
//   return <div>Latitude:</div>;
// };

//////////////////////////////
class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // initialize state
  //   this.state = { lat: null, errorMessage: '' };
  // }
  state = { lat: null, errorMessage: '' }; // **** //

  componentDidMount() {
    // console.log('My component was rendered to the screen');
    window.navigator.geolocation.getCurrentPosition(
      // update state
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message }) // => callBack (ASYNC) it will run at some point in the future
    );
  }

  // componentDidUpdate() {
  //   console.log('My component was just updated - it rerendered!');
  // }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

/* App Challenges:
- Need to get the users physical location
- Need to determine the current month
- Need to change text and styling based on location + month*/

// **** // we can omit the constructor function because babel implement the constructor function for us
