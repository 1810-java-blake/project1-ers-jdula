import React from 'react';
import '../../Include/bootstrap';

export class ADComponent extends React.Component {

    render() {
        return (
            <div>
                <button className="btn btn-group-sm" id="approve-button" value={this.props.re_id} onClick={this.props.handleAClick()}>A</button>
                <button className="btn btn-group-sm" id="deny-button" value={this.props.re_id} onClick={this.props.handleDClick()}>D</button>
            </div>
        )
    }
}