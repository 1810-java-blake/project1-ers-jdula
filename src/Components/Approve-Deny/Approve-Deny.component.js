import React from 'react';
import '../../Include/bootstrap';

export class ADComponent extends React.Component {
    render() {
        return (
            <div>
                <button className="btn btn-group-sm" id="approve-button">A</button>
                <button className="btn btn-group-sm" id="deny-button">D</button>
            </div>
        )
    }
}