import React from 'react';
import { Component } from 'react';

import { Breadcrumb, BreadcrumbItem } from 'carbon-components-react';

import { KPI } from '../../components/KPI/KPI';
class LandingPage extends Component {
  state = {
    data: '',
    value: 0,
  };
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      value: 0,
    };
  }

  getLatest() {
    const headers = { 'x-api-key': process.env.REACT_APP_OYSTER_HAVEN_QUERY };
    try {
      fetch(
        'https://ed4b9t53ua.execute-api.us-east-1.amazonaws.com/prod/latest',
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
              data: JSON.stringify(json),
            };
          });
        });
    } catch (error) {
      console.log('Error: ' + error);
    }
  }
  // Lifecycle methods
  componentDidMount() {
    console.log('Landing Page mounted');
    this.getLatest();
    /*
    this.timerID = setInterval(
      () => this.update(),
      1000
    );
    */
  }

  update() {
    //console.log("Updating State")
    const obj = { temp: { value: 24, timestamp: 1642429005 } };
    this.setState(() => {
      return {
        data: JSON.stringify(obj),
        value: 99,
      };
    });
  }

  componentWillUnmount() {
    console.log('Landing Page unmounted');
  }

  render() {
    return (
      <div className="bx--grid bx--grid--full-width landing-page">
        <div className="bx--row landing-page__banner">
          <div className="bx--col-lg-16">
            <Breadcrumb noTrailingSlash>
              <BreadcrumbItem>
                <a href="/">Current Conditions</a>
              </BreadcrumbItem>
            </Breadcrumb>
            <h1 className="landing-page__heading">Oyster Haven</h1>
          </div>
        </div>
        <div className="bx--row landing-page__r3">
          <div className="bx--col-md-4 bx--col-lg-4">
            <KPI
              title="Temperature"
              fieldname="temp"
              fieldunits="º"
              data={this.state.data}
            />
          </div>
          <div className="bx--col-md-4 bx--col-lg-4">
            <KPI
              title="Relative Humidity"
              fieldname="rh"
              fieldunits="%"
              data={this.state.data}
            />
          </div>
          <div className="bx--col-md-4 bx--col-lg-4">
            <KPI
              title="Wind"
              fieldname="wind"
              fieldunits="mph"
              data={this.state.data}
            />
          </div>
          <div className="bx--col-md-4 bx--col-lg-4">
            <KPI
              title="Rain"
              fieldname="rain"
              fieldunits="inches"
              data={this.state.data}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;