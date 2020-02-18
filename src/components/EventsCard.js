/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import { InfoConsumer } from './context';
import { Link } from 'react-router-dom';

class EventsCard extends Component {
    render() {
        const {
            id,
            eventTitle,
            eventText 
        } = this.props.item;
        return (
            <InfoConsumer>
                {value => (
                    <div className="card container mt-2 mb-3 p-5">
                        <div className="card-body">
                            <h5 key={id} className="card-title">
                                {eventTitle}
                            </h5>
                            <p className="card-text">{eventText}</p>
                            <Link className="card-link">More</Link>
                        </div>
                    </div>
                )}
            </InfoConsumer>
        )
    }
}

export default EventsCard
