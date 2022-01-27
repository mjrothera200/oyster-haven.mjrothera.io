import React from 'react';
import { Component } from 'react';
import moment from 'moment';
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        hints: [],
    };
    constructor(props) {
        super(props);
        // Check everything to see what is needed
        this.state = {
            title: props.title,
            yunits: props.yunits,
            data: props.data,
            hints: props.hints,
            xtitle: props.xtitle,
            ytitle: props.ytitle,
            error: null
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
        this.setState({ data: newProps.data, hints: newProps.hints, xtitle: newProps.xtitle, ytitle: newProps.ytitle, yunits: newProps.yunits });
    }


    /**
     * Event handler for onMouseLeave.
     * @private
     */
    _onMouseLeave = () => {
       
    };

    /**
     * Event handler for onNearestX.
     * @param {Object} value Selected value.
     * @param {index} index Index of the value in the data array.
     * @private
     */
    _onNearestX = (value, { index }) => {
        
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
                        data={this.state.data}
                    />
                    
                    {this.state.hints.map((hint, index) => (
                        <Hint value={hint[hint.type]}>
                            <div className="hint">
                                <div><FontAwesomeIcon icon={faExclamationTriangle} /></div>
                                <div>{hint[hint.type].y} {this.state.fieldunits}</div>
                                <div>{moment(hint[hint.type].x).format("MM-DD-YYYY h:mm:ss")}</div>
                            </div>
                        </Hint>
                    ))
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
