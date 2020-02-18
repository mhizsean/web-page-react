import React, { Component } from 'react'
import EventsCard from '../EventsCard';
import { InfoConsumer } from '../context';

export class Events extends Component {
    render() {
        return (
            <InfoConsumer>
                {value => {
                    return value.events.map(item => {
                        return <EventsCard key={item.id} item={item} />
                    })
                }}
            </InfoConsumer>
        )
    }
}

export default Events
