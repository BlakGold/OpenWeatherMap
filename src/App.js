import React from "react";
import Map from "./components/Map";
import styles from "./App.scss";

class App extends React.Component {
  state = {
    dataLoaded: false
  };

  componentDidMount() {
    let apiCallDuration = 3000;
    console.log(`*** App: componentDidMount() ***`);
    console.log(`fetching OpenWeatherMap API data...`);
    setTimeout(() => {
      this.setState({
        dataLoaded: true
      });
    }, apiCallDuration);
  }

  componentDidUpdate() {
    console.log(`*** App: componentDidUpdate() ***`);
  }

  render() {
    const { dataLoaded } = this.state;
    return <div className={styles.App}>{dataLoaded && <Map />}</div>;
  }
}

export default App;
