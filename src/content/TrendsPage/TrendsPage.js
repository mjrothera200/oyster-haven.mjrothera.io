import React from 'react';
import { Component } from 'react';

import TrendChart from '../../components/TrendChart';


const MSEC_DAILY = 86400000;

class TrendsPage extends Component {


  state = {
    data: [{ x: 0, y: 0 }],
    value: 0,
    lastDrawLocation: null,
    crosshairValues: [],
    hintValue: -1
  };
  constructor(props) {
    super(props);
    this.state = {
      data: [{ x: 0, y: 0 }],
      value: 0,
      lastDrawLocation: null,
      crosshairValues: [],
      hintValue: -1
    };
  }

  getTrends() {

    const timestamp = new Date('September 9 2017').getTime();

    this.setState(() => {
      return {
        data: [
          { x: timestamp + MSEC_DAILY, y: 42.9 },
          { x: timestamp + MSEC_DAILY * 2, y: 41.2 },
          { x: timestamp + MSEC_DAILY * 3, y: 27 },
          { x: timestamp + MSEC_DAILY * 4, y: 24.8 }
        ],
        crosshairValues: [],
        hintValue: 2
      };
    });

  }
  // Lifecycle methods
  componentDidMount() {
    console.log('TrendsPage mounted');

    
    this.timerID = setInterval(
      () => this.getTrends(),
      1000 * 5
    );
    

  }

  componentWillUnmount() {
    console.log('Trends Page unmounted');
  }

  


  render() {

    return (
      <div className="bx--grid bx--grid--full-width trends-page">
        <div className="bx--row trends-page__banner">
          <div className="bx--col-lg-16">
            <h1 className="trends-page__heading">Latest Trends</h1>
          </div>
        </div>
        <div className="bx--row trends-page__r3">
          <TrendChart
          title="Temperatire"
          fieldunits="º"
          data={this.state.data}
          />
        </div>
        <div className="bx--row trends-page__r3">

        </div>
      </div>
    );
  }
}

export default TrendsPage;
