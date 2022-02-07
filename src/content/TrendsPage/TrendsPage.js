import React from 'react';
import { Component } from 'react';

import TrendChart from '../../components/TrendChart';
import SummaryChart from '../../components/SummaryChart';
import Select from 'react-select'
const options = [
  { value: 'watertemp', label: 'Water Temperature (F)' },
  { value: 'temp', label: 'Outside Temperature (F)' },
  { value: 'wind', label: 'Wind Speed (mph)' },
  { value: 'waterlight', label: 'Water Light (lumens)' }
]

class TrendsPage extends Component {


  state = {
    data: [{ x: 0, y: 0 }],
    summarydata: [
      { x: 0, y: 0 }
    ],
    hints: [],
    yunits: '',
    xtitle: '',
    sxtitle: '',
    ytitle: '',
    ydomainlow: 0,
    ydomainhigh: 100,
    ythresholdlow: 25,
    ythresholdhigh: 75,
    selectedMeasure: 'watertemp',
    targetyear: 2022,
    targetmonth: 1
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [{ x: 0, y: 0 }],
      hints: [],
      yunits: '',
      xtitle: '',
      sxtitle: '',
      ytitle: '',
      ydomainlow: 0,
      ydomainhigh: 100,
      ythresholdlow: 25,
      ythresholdhigh: 75,
      selectedMeasure: 'watertemp',
      targetyear: 2022,
      targetmonth: 1
    };
  }

  getTrends() {
    const headers = { 'x-api-key': process.env.REACT_APP_OYSTER_HAVEN_QUERY };
    try {
      var url = new URL("https://ed4b9t53ua.execute-api.us-east-1.amazonaws.com/prod/historical"),
        params = { measure: this.state.selectedMeasure, timeframe: this.state.targetmonth }
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
      fetch(
        url,
        {
          method: 'GET',
          headers,
        }
      )
        .then(response => response.json())
        .then(json => {
          console.log(json);
          this.setState(() => {
            return {
              data: json.dataset,
              hints: json.hints,
              ytitle: json.metadata.ytitle,
              yunits: json.metadata.yunits,
              xtitle: 'Month to Date'
            };
          });
        });
    } catch (error) {
      console.log('Error: ' + error);
    }
  }

  getSummary() {
    const headers = { 'x-api-key': process.env.REACT_APP_OYSTER_HAVEN_QUERY };
    try {
      var url = new URL("https://ed4b9t53ua.execute-api.us-east-1.amazonaws.com/prod/summary"),
        params = { measure: this.state.selectedMeasure, year: this.state.targetyear }
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
      fetch(
        url,
        {
          method: 'GET',
          headers,
        }
      )
        .then(response => response.json())
        .then(json => {
          console.log(json);
          // Get the new trends
          this.getTrends()
          this.setState(() => {
            return {
              summarydata: json.dataset,
              ytitle: json.metadata.ytitle,
              yunits: json.metadata.yunits,
              ythresholdlow: json.metadata.lowthreshold,
              ythresholdhigh: json.metadata.highthreshold,
              ydomainlow: json.metadata.ydomainlow,
              ydomainhigh: json.metadata.ydomainhigh,
              sxtitle: 'Year to Date'
            };
          });
        });
    } catch (error) {
      console.log('Error: ' + error);
    }
  }


  // Lifecycle methods
  componentDidMount() {
    console.log('TrendsPage mounted');
    this.getSummary()


  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.selectedMeasure !== this.state.selectedMeasure) {
      console.log("New Measure Selected: " + this.state.selectedMeasure)
      this.getSummary()
    }
  }

  componentWillUnmount() {
    console.log('Trends Page unmounted');
  }

  handleMeasureChange = (selectedOption) => {
    this.setState({ selectedMeasure: selectedOption.value });
    //console.log(`Option selected:`, selectedOption.label);
  }

  render() {

    return (
      <div className="bx--grid bx--grid--full-width trends-page">
        <div className="bx--row trends-page__banner">
          <div className="bx--col-lg-16">
            <h1 className="trends-page__heading">Latest Trends</h1>
            <Select options={options} onChange={this.handleMeasureChange} defaultValue={options[0]} />
          </div>
        </div>
        <div className="bx--row trends-page__r3">
          <SummaryChart
            title="Temperature"
            yunits={this.state.yunits}
            ytitle={this.state.ytitle}
            xtitle={this.state.sxtitle}
            data={this.state.summarydata}
            ydomainlow={this.state.ydomainlow}
            ydomainhigh={this.state.ydomainhigh}
            ythresholdlow={this.state.ythresholdlow}
            ythresholdhigh={this.state.ythresholdhigh}
          />
        </div>
        <div className="bx--row trends-page__r3">
          <TrendChart
            title="Temperature"
            yunits={this.state.yunits}
            ytitle={this.state.ytitle}
            xtitle={this.state.xtitle}
            data={this.state.data}
            hints={this.state.hints}
          />
        </div>
        <div className="bx--row trends-page__r3">

        </div>
      </div>
    );
  }
}

export default TrendsPage;
