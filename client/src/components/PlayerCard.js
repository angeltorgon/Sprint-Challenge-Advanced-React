import React from 'react';
import { Card } from '@material-ui/core'

class PlayerCard extends React.Component {

    render() {
        return (
            <Card>
                <h1><span>Name:</span> {this.props.player.name}</h1>    
                <p><span>Country:</span> {this.props.player.country}</p>
            </Card>
        )
    }
}

export default PlayerCard;