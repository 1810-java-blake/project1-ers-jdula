import React from 'react';
import { Link } from 'react-router-dom';
import RevLogo from '../Assets/rev-logo.png';
export class AppNav extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-light bg-light display-front nav-pad">
          <div className="navbar-header c-pointer shift-left">
            <Link to="/home" className="unset-anchor">
              <img className="img-adjust-position rev-logo" src={RevLogo} alt="revature" />
            </Link>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav ml-auto margin-nav">
              <li className="nav-item active">
                <Link to="/sign-in" className="unset-anchor nav-link">Sign In</Link>
              </li>
              <li className="nav-item active">
                <Link to="/user/id" className="unset-anchor nav-link">View Old Reimbursements</Link>
              </li>
              <li className="nav-item active">
                <Link to="/user/add" className="unset-anchor nav-link">Add new Reimbursement</Link>
              </li>
              <li className="nav-item active">
                <Link to="/user" className="unset-anchor nav-link">View all Reimbursements</Link>
              </li>
              <li className="nav-item active">
                <Link to="/user/home" className="unset-anchor nav-link">Home</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div >
    );
  }
}