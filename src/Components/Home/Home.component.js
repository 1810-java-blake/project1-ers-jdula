import React from 'react';

export class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8088/Project1/userget', {
      credentials: 'include'
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          user: data,
        });
        console.log(this.state.user);
      })
    }

    onClickAdd = (e) => {
        e.preventDefault();
        this.props.history.push('/user/add');
    }

    onClickView = (e) => {
        e.preventDefault();
        this.props.history.push('/user/id');
    }

    onClickViewAll = (e) => {
      e.preventDefault();
      this.props.history.push('/user');
    }

  render() {

    let homepage;
    if(this.state.user.role_id === 1){
      homepage = (
        <div>
          <h1>Welcome to ERS</h1>
          <p>Hello {this.state.user.firstname} {this.state.user.lastname}</p>
          <p>You are a manager </p>
          <div>
              <button className="btn btn-primary btn-large" id="Add-reimb-button" onClick={this.onClickAdd}>I want to add a reimbursement!</button>
              <button className="btn btn-primary btn-large" id="View-reimb-button" onClick={this.onClickView}>I want to view my personal current reimbursements!</button>
              <button className="btn btn-primary btn-large" id="Viewall-reimb-button" onClick={this.onClickViewAll}>I want to view all of the reimbursements!</button>
          </div>
        </div>
      )
    } else if(this.state.user.role_id === 2){
      homepage = (
        <div>
          <h1>Welcome to ERS</h1>
          <p>Hello {this.state.user.firstname} {this.state.user.lastname}</p>
          <p>You are an employee</p>
          <div>
              <button className="btn btn-primary btn-large" id="Add-reimb-button" onClick={this.onClickAdd}>I want to add a reimbursement!</button>
              <button className="btn btn-primary btn-large" id="View-reimb-button" onClick={this.onClickView}>I want to view my current reimbursements!</button>
          </div>
        </div>
      );
    } else {
      homepage = (
        <div>
          <h1>Checking User role</h1>
        </div>
      )
    }
    return (
      <>
        {homepage}
      </>
    )
  }
}