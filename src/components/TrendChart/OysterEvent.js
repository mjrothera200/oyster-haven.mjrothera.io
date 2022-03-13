
import React from 'react';
import { Component } from 'react';
// import moment from 'moment';

import { Windy32 } from '@carbon/icons-react';
import { Rain32 } from '@carbon/icons-react';

class OysterEvent extends Component {
    state = {
        eventType: 'threshold',
        eventClassification: 'high',
        measure_name: 'wind',
        eventvalue: 0,
        eventParm1: 0,
        eventParm2: 0,
        timestamp: 0
    };
    constructor(props) {
        super(props);
        // Check everything to see what is needed
        this.state = {
            eventType: props.eventType,
            eventClassification: props.eventClassification,
            measure_name: props.measure_name,
            eventvalue: props.eventvalue,
            eventParm1: props.eventParm1,
            eventParm2: props.eventParm2,
            timestamp: props.timestamp
        };
    }

    // Lifecycle methods
    componentDidMount() {

    }

    componentWillUnmount() {

    }


    render() {
        if (this.state.measure_name === 'wind') {
            return (
                <div>
                    <Windy32 className="event-icon-fill" />
                </div>
            )
        } else {
            return (
                <div>
                    <Rain32 className="event-icon-fill" />
                </div>
            )
        }
    }
}

OysterEvent.defaultProps = {
    eventType: 'threshold',
    eventClassification: 'high',
    measure_name: 'wind',
    eventvalue: 0,
    eventParm1: 0,
    eventParm2: 0,
    timestampe: 0
};


export default OysterEvent;