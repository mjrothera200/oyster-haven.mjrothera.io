import React from 'react';
import { Component } from 'react';

import TrendChart from '../../components/TrendChart';
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
    hints: [],
    yunits: '',
    xtitle: '',
    ytitle: '',
    selectedMeasure: 'watertemp'
  };
  constructor(props) {
    super(props);
    this.state = {
      data: [{ x: 0, y: 0 }],
      hints: [],
      yunits: '',
      xtitle: '',
      ytitle: '',
      selectedMeasure: 'watertemp'
    };
  }

  getTrends() {
    const headers = { 'x-api-key': process.env.REACT_APP_OYSTER_HAVEN_QUERY };
    try {
      var url = new URL("https://ed4b9t53ua.execute-api.us-east-1.amazonaws.com/prod/historical"),
        params = { measure: this.state.selectedMeasure, timeframe: 1 }
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

  // Lifecycle methods
  componentDidMount() {
    console.log('TrendsPage mounted');
    this.getTrends()


  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.selectedMeasure !== this.state.selectedMeasure) {
      console.log("New Measure Selected: "+this.state.selectedMeasure)
      this.getTrends()
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
            <Select options={options} onChange={this.handleMeasureChange} />
          </div>
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
