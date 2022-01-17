import React from 'react';
import { Component } from 'react';

class KPI extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      fieldname: props.fieldname,
      fieldvalue: props.fieldvalue,
      fieldtimestamp: props.fieldtimestamp,
      fieldunits: props.fieldunits,
      data: props.data,
      error: null,
    };
  }

  // Lifecycle methods
  componentDidMount() {
    console.log('KPI mounted');
  }

  componentWillUnmount() {
    console.log('KPI unmounted');
  }
  componentWillReceiveProps(newProps) {
    this.setState({ data: newProps.data });
  }

  timeSince(timeStamp) {
    console.log('Timestamp: ' + timeStamp);
    var now = new Date(),
      secondsPast = now.getTime() / 1000 - timeStamp;
    console.log('Now: ' + now.getTime());
    console.log('Seconds: ' + secondsPast);
    if (secondsPast < 60) {
      return parseInt(secondsPast) + 's';
    }
    if (secondsPast < 3600) {
      return parseInt(secondsPast / 60) + 'm';
    }
    if (secondsPast <= 86400) {
      return parseInt(secondsPast / 3600) + 'h';
    }
    if (secondsPast > 86400) {
      const day = timeStamp.getDate();
      const month = timeStamp
        .toDateString()
        .match(/ [a-zA-Z]*/)[0]
        .replace(' ', '');
      const year =
        timeStamp.getFullYear() === now.getFullYear()
          ? ''
          : ' ' + timeStamp.getFullYear();
      return day + ' ' + month + year;
    }
  }

  update(data) {
    console.log('Refreshing KPI Data');

    // Look for the field name from the properties
    if (data) {
      console.log(this.state.data);
      try {
        const obj = JSON.parse(this.state.data);
        if (obj[this.state.fieldname]) {
          console.log('Updating: ' + this.state.fieldname);
          // Get "ago" relative time difference

          const ago =
            'Last Updated ' +
            this.timeSince(obj[this.state.fieldname].timestamp) +
            ' ago';

          this.setState({
            fieldvalue: obj[this.state.fieldname].value,
            fieldtimestamp: ago,
          });
        } else {
          //console.log("Could not find fieldname of '" + this.state.fieldname + "' in data set")
        }
      } catch {
        console.log('Could not parse data object');
      }
    } else {
      console.log('KPI Data invalid');
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //console.log("KPI updated")
    if (prevState.data !== this.state.data) {
      this.update(this.state.data);
    }
  }

  render() {
    return (
      <div>
        <div className="my-widget-parent">
          <div className="my-widget-top">
            <div className="my-widget-top-left">
              <div className="my-widget-title">
                {this.state.title && <div>{this.state.title}</div>}
              </div>
              <div className="my-widget-value">
                {this.state.fieldvalue && <div>{this.state.fieldvalue}</div>}
                <span className="my-widget-currency">
                  {this.state.fieldunits && <div>{this.state.fieldunits}</div>}
                </span>
              </div>
            </div>
            <div className="my-widget-top-right">
              <i className="fa fa-diamond" />
            </div>
          </div>
          <div className="my-widget-bottom">
            <div className="my-widget-bottom-left">
              {this.state.fieldtimestamp && (
                <div>{this.state.fieldtimestamp}</div>
              )}
            </div>

            <div className="my-widget-bottom-right" />
          </div>
        </div>
      </div>
    );
  }
}

KPI.defaultProps = {
  title: 'KPI',
  fieldname: 'temp',
  fieldvalue: 'N/A',
  fieldtimestamp: 'N/A',
  fieldunits: 'º',
  data: '',
};

export { KPI };
