import React, { Component } from 'react'
import { InfoConsumer } from '../context';
import Info from '../Info';


export class Home extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Stylishly</h1>
                        <p className="lead">The Place Your Inner Styling Comes Alive</p>
                    </div>
                </div>
            
                <div className="container">
                    <div className="row mt-5">
                        <InfoConsumer>
                            {value => {
                                return value.info.map(item => {
                                    return <Info key={item.id} item={item} />
                                })
                            }}
                        </InfoConsumer>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
