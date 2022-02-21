

import React from 'react';
import { XAxis, YAxis, LineSeries, LineMarkSeries, FlexibleWidthXYPlot, Hint } from 'react-vis';
import Candlestick from './candlestick';
import moment from 'moment';
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Generate random random for candle stick chart
 * @param {number} total - Total number of values.
 * @returns {Array} Array of data.

function buildRandomBinnedData(total) {
  const result = Array(total)
    .fill(0)
    .map((x, i) => {
      const values = [
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random()
      ]
        .sort()
        .map(d => Math.floor(d * 100));
      const y = (values[2] + values[1]) / 2;
      return {
        x: i+1,
        y,
        yHigh: values[3],
        yOpen: values[2],
        yClose: values[1],
        yLow: values[0],
        color: y < 25 ? '#EF5D28' : '#12939A',
        opacity: y > 75 ? 0.7 : 1
      };
    });
  return result;
}
*/

export default class SummaryChart extends React.Component {
  state = {
    hintValue: null,
    selectedIndex: null,
    data: [
      {
        x: 1641042000000,
        y: 32,
        yHigh: 60,
        yOpen: 48,
        yClose: 32,
        yLow: 20,
        color: 26 < 25 ? '#EF5D28' : '#12939A',
        opacity: 24 > 75 ? 0.7 : 1
      },
      {
        x: 1643720400000,
        y: 36,
        yHigh: 52,
        yOpen: 52,
        yClose: 32,
        yLow: 28,
        color: 24 < 25 ? '#EF5D28' : '#12939A',
        opacity: 24 > 75 ? 0.7 : 1
      },
      {
        x: 1646139600000,
        y: 48,
        yHigh: 52,
        yOpen: 52,
        yClose: 32,
        yLow: 28,
        color: 24 < 25 ? '#EF5D28' : '#12939A',
        opacity: 24 > 75 ? 0.7 : 1
      },
      {
        x: 1648818000000,
        y: 52,
        yHigh: 52,
        yOpen: 52,
        yClose: 32,
        yLow: 28,
        color: 24 < 25 ? '#EF5D28' : '#12939A',
        opacity: 24 > 75 ? 0.7 : 1
      },
      {
        x: 1651410000000,
        y: 65,
        yHigh: 52,
        yOpen: 52,
        yClose: 32,
        yLow: 28,
        color: 24 < 25 ? '#EF5D28' : '#12939A',
        opacity: 24 > 75 ? 0.7 : 1
      },
      {
        x: 1654088400000,
        y: 78,
        yHigh: 52,
        yOpen: 52,
        yClose: 32,
        yLow: 28,
        color: 24 < 25 ? '#EF5D28' : '#12939A',
        opacity: 24 > 75 ? 0.7 : 1
      },
      {
        x: 1656680400000,
        y: 85,
        yHigh: 52,
        yOpen: 52,
        yClose: 32,
        yLow: 28,
        color: 24 < 25 ? '#EF5D28' : '#12939A',
        opacity: 24 > 75 ? 0.7 : 1
      },
      {
        x: 1659358800000,
        y: 89,
        yHigh: 52,
        yOpen: 52,
        yClose: 32,
        yLow: 28,
        color: 24 < 25 ? '#EF5D28' : '#12939A',
        opacity: 24 > 75 ? 0.7 : 1
      },
      {
        x: 1662037200000,
        y: 84,
        yHigh: 52,
        yOpen: 52,
        yClose: 32,
        yLow: 28,
        color: 24 < 25 ? '#EF5D28' : '#12939A',
        opacity: 24 > 75 ? 0.7 : 1
      },
      {
        x: 1664629200000,
        y: 78,
        yHigh: 52,
        yOpen: 52,
        yClose: 32,
        yLow: 28,
        color: 24 < 25 ? '#EF5D28' : '#12939A',
        opacity: 24 > 75 ? 0.7 : 1
      },
      {
        x: 1667307600000,
        y: 72,
        yHigh: 52,
        yOpen: 52,
        yClose: 32,
        yLow: 28,
        color: 24 < 25 ? '#EF5D28' : '#12939A',
        opacity: 24 > 75 ? 0.7 : 1
      },


    ]
  };

  constructor(props) {
    super(props);
    // Check everything to see what is needed
    this.state = {
      title: props.title,
      xtitle: props.xtitle,
      ytitle: props.ytitle,
      yunits: props.yunits,
      ydomainlow: props.ydomainlow,
      ydomainhigh: props.ydomainhigh,
      ythresholdlow: props.ythresholdlow,
      ythresholdhigh: props.ythresholdhigh,
      hintValue: null,
      selectedIndex: null
    };
  }
  // Lifecycle methods
  componentDidMount() {
    console.log('Trend Chart mounted');
  }

  componentWillUnmount() {
    console.log('Trend Chart unmounted');
  }


  componentWillReceiveProps(newProps) {
    this.setState({ data: newProps.data, xtitle: newProps.xtitle, ytitle: newProps.ytitle, yunits: newProps.yunits, ydomainlow: newProps.ydomainlow, ydomainhigh: newProps.ydomainhigh, ythresholdlow: newProps.ythresholdlow, ythresholdhigh: newProps.ythresholdhigh });
  }
  /**
      * Event handler for onMouseLeave.
      * @private
      */
  _onMouseLeave = () => {
    this.setState({ hintValue: null });
  };

  /**
   * Event handler for onNearestX.
   * @param {Object} value Selected value.
   * @param {index} index Index of the value in the data array.
   * @private
   */
  _onNearestX = (value, { index }) => {
    //console.log(value)
    this.setState({ hintValue: value })
  };
  /**
     * Event handler for onValueClick
     * @param {Object} value Selected value.
     * @param {index} index Index of the value in the data array.
     * @private
     */
  _onValueClick = (value, { index }) => {
    console.log(value)
  };

  // TODO:  Update time markers below when year shifts to 2023

  render() {
    const { data } = this.state;
    return (
      <div className="candlestick-example">
        <div className="chart">
          <FlexibleWidthXYPlot xType="time" yDomain={[this.state.ydomainlow, this.state.ydomainhigh]} height={300}>
            <XAxis title={this.state.xtitle} />
            <YAxis title={this.state.ytitle} />
            <LineMarkSeries
              color="#12939A"
              onNearestX={this._onNearestX}
              data={data}
              onValueClick={(datapoint, event) => {
                // does something on click
                // you can access the value of the event
                //console.log(datapoint)
                this.props.measureChange(datapoint)
              }}
            />
            {this.state.hintValue ?
              <Hint value={this.state.hintValue}>
                <div className={(this.state.hintValue.y < this.state.ythresholdhigh) && (this.state.hintValue.y > this.state.ythresholdlow) ? "hint-normal" : "hint-abnormal"}>

                  {(this.state.hintValue.y < this.state.ythresholdhigh) && (this.state.hintValue.y > this.state.ythresholdlow) ? null : <div><FontAwesomeIcon icon={faExclamationTriangle} /></div>}
                  <div>{this.state.hintValue.y} {this.state.fieldunits}</div>
                  <div>{moment(this.state.hintValue.x).format("MM-DD-YYYY h:mm:ss")}</div>
                </div>
              </Hint>
              : null}
            <LineSeries
              color="#FF9833"
              className="dashed-example-line"
              data={[{ x: 1638363600000, y: this.state.ythresholdlow }, { x: 1669899600000, y: this.state.ythresholdlow }]}
            />
            <LineSeries
              color="#1A3177"
              className="dashed-example-line"
              opacity={0.3}
              data={[{ x: 1638363600000, y: this.state.ythresholdhigh }, { x: 1669899600000, y: this.state.ythresholdhigh }]}
            />
            <Candlestick
              colorType="literal"
              opacityType="literal"
              stroke="#79C7E3"
              data={data}
            />
          </FlexibleWidthXYPlot>
        </div>
      </div>
    );
  }
}

SummaryChart.defaultProps = {
  title: 'Summary Chart',
  xtitle: 'N/A',
  ytitle: 'N/A',
  yunits: 'º',
  ydomainlow: 0,
  ydomainhigh: 100,
  ythresholdlow: 25,
  ythresholdhigh: 75,
  data: [{ x: 0, y: 0 }]
};
