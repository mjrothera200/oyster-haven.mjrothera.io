import React from 'react';
import { Component } from 'react';
import moment from 'moment';

import {
    FlexibleWidthXYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries,
    Hint
} from 'react-vis';

import OysterEvent from './OysterEvent';

class TrendChart extends Component {
    state = {
        data: [{ x: 0, y: 0 }],
        events: [],
        hintValue: null
    };
    constructor(props) {
        super(props);
        // Check everything to see what is needed
        this.state = {
            title: props.title,
            yunits: props.yunits,
            data: props.data,
            events: props.events,
            xtitle: props.xtitle,
            ytitle: props.ytitle,
            error: null,
            hintValue: null
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
        this.setState({ data: newProps.data, events: newProps.events, xtitle: newProps.xtitle, ytitle: newProps.ytitle, yunits: newProps.yunits });
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

    render() {
        return (
            <FlexibleWidthXYPlot
                height={300}
                xType="time"
            >
                <HorizontalGridLines />
                <VerticalGridLines />
                <XAxis title={this.state.xtitle} />
                <YAxis title={this.state.ytitle} />
                <LineSeries
                    onNearestX={this._onNearestX}
                    data={this.state.data}
                />
                {this.state.hintValue ?
                    <Hint value={this.state.hintValue} className="hint">
                        <div>
                            <div>{this.state.hintValue.y} {this.state.fieldunits}</div>
                            <div>{moment(this.state.hintValue.x).format("MM-DD-YYYY h:mm:ss")}</div>
                        </div>
                    </Hint>
                    : null}
                {this.state.events.map((event, index) => (
                        <Hint key={event.x} value={event} align={{horizontal: 'auto', vertical: 'top'}}>
                            <OysterEvent
                                eventType={event.eventType}
                                eventClassification={event.eventClassification}
                                measure_name={event.measure_name}
                                event_value={event.event_value}
                                eventParm1={event.eventParm1}
                                eventParm2={event.eventParm2}
                                timestamp={event.x}
                            />
                        </Hint>
                )
                )
                }

            </FlexibleWidthXYPlot>
        );
    }
}

TrendChart.defaultProps = {
    title: 'Trend Chart',
    xtitle: 'N/A',
    ytitle: 'N/A',
    yunits: 'º',
    data: [{ x: 0, y: 0 }],
    hints: []
};


export default TrendChart;
