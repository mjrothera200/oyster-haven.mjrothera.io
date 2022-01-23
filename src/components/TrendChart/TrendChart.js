import React from 'react';
import { Component } from 'react';

import {
    FlexibleWidthXYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries,
    Hint
} from 'react-vis';


class TrendChart extends Component {
    state = {
        data: [{ x: 0, y: 0 }],
        value: 0,
        lastDrawLocation: null,
        crosshairValues: [],
        hintValue: -1
    };
    constructor(props) {
        super(props);
        // Check everything to see what is needed
        this.state = {
            title: props.title,
            fieldunits: props.fieldunits,
            data: props.data,
            error: null,
            value: 0,
            lastDrawLocation: null,
            crosshairValues: [],
            hintValue: -1
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
        this.setState({ data: newProps.data });
    }


    /**
     * Event handler for onMouseLeave.
     * @private
     */
    _onMouseLeave = () => {
        this.setState({ crosshairValues: [] });
    };

    /**
     * Event handler for onNearestX.
     * @param {Object} value Selected value.
     * @param {index} index Index of the value in the data array.
     * @private
     */
    _onNearestX = (value, { index }) => {
        console.log("On Nearest X")
        //this.setState({ crosshairValues: this.state.data.map(d => d[index]) });
    };

    render() {
        return (
                <FlexibleWidthXYPlot
                    height={300}
                    xType="time"
                >
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    <XAxis title="Day" />
                    <YAxis title="Temperature" />
                    <LineSeries
                        data={this.state.data}
                    />
                    {this.state.hintValue >= 0 &&
                        <Hint value={this.state.data[this.state.hintValue]}>
                            <div className="hint">
                                <div>{this.state.data[this.state.hintValue].y}</div>
                                <div>{this.state.data[this.state.hintValue].x}</div>
                            </div>
                        </Hint>
                    }
                </FlexibleWidthXYPlot>
        );
    }
}

TrendChart.defaultProps = {
    title: 'KPI',
    fieldname: 'temp',
    fieldunits: 'º',
    data: '',
};


export default TrendChart;
