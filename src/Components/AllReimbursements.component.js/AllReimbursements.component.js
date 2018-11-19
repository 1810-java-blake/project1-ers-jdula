import React from 'react';
import { ADComponent } from '../Approve-Deny/Approve-Deny.component';
import '../../Include/bootstrap';

export class AllReimbursementsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reimbursements: [],
      filterAll: true,
      filterPending: false,
      filterApproved: false,
      filterDenied: false
    }

    this.onClickAll = this.onClickAll.bind(this);
    this.onClickPending = this.onClickPending.bind(this);
    this.onClickDenied = this.onClickDenied.bind(this);
    this.onClickApproved = this.onClickApproved.bind(this);
  }

  onClickAll = (e) => {
    e.preventDefault();
    console.log(this.state.filterAll);
    this.setState({
      ...this.state,
      filterAll: true,
      filterPending: false,
      filterApproved: false,
      filterDenied: false
    })
    console.log(this.state.filterAll);
  }

  onClickApproved = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      filterAll: false,
      filterPending: false,
      filterApproved: true,
      filterDenied: false
    })
    console.log(this.state.filterApproved);
  }

  onClickDenied = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      filterAll: false,
      filterPending: false,
      filterApproved: false,
      filterDenied: true
    })
    console.log(this.state.filterDenied);
  }

  onClickPending = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      filterAll: false,
      filterPending: true,
      filterApproved: false,
      filterDenied: false
    })
    console.log(this.state.filterPending);
  }

  handleAClick = (e) => {
    console.log(e.target.attributes.getNamedItem('value').value);
    fetch(`http://localhost:8088/Project1/user/approve/${e.target.attributes.getNamedItem('value').value}`, {
      method: 'PATCH',
      credentials: 'include'
    })
  }

  handleDClick = (e) => {
    console.log(e.target.attributes.getNamedItem('value').value);
    fetch(`http://localhost:8088/Project1/user/deny/${e.target.attributes.getNamedItem('value').value}`, {
      method: 'PATCH',
      credentials: 'include'
    })
  }

  test = () => {
    console.log('test');
  }
  componentDidMount() {
    fetch('http://localhost:8088/Project1/user', {
      credentials: 'include'
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          reimbursements: data,
        });
        console.log(this.state.reimbursements);
      })
  }

  render() {
    const reimbursements = this.state.reimbursements;
    console.log(reimbursements);
    let taaTable;
    if (this.state.filterAll === true) {
      taaTable = reimbursements.map((taa) =>
        <tr>
          <td className="re_id">{taa.re_id}</td>
          <td className="re_amount">{taa.re_amount}</td>
          <td className="re_submitted">{(new Date(taa.re_submitted)).toLocaleDateString()}</td>
          <td className="re_resolved">{(new Date(taa.re_resolved)).toLocaleDateString()}</td>
          <td className="re_description">{taa.re_description}</td>
          <td className="re_author">{taa.reimb_author}</td>
          <td className="re_resolver">{taa.reimb_resolver}</td>
          <td className="re_status">{taa.reimb_status}</td>
          <td className="re_type">{taa.reimb_type}</td>
          <td><ADComponent reimbursements={this.state.reimbursements} re_id={taa.re_id} handleAClick={() => this.handleAClick} handleDClick={() => this.handleDClick} /></td>
        </tr>
      );
    } else if (this.state.filterApproved === true) {
      taaTable = reimbursements.filter(function (el) {
        return el.reimb_status === 'Approved';
      }).map((taa) =>
        <tr>
          <td className="re_id">{taa.re_id}</td>
          <td className="re_amount">{taa.re_amount}</td>
          <td className="re_submitted">{(new Date(taa.re_submitted)).toLocaleDateString()}</td>
          <td className="re_resolved">{(new Date(taa.re_resolved)).toLocaleDateString()}</td>
          <td className="re_description">{taa.re_description}</td>
          <td className="re_author">{taa.reimb_author}</td>
          <td className="re_resolver">{taa.reimb_resolver}</td>
          <td className="re_status">{taa.reimb_status}</td>
          <td className="re_type">{taa.reimb_type}</td>
          <td><ADComponent reimbursements={this.state.reimbursements} re_id={taa.re_id} handleAClick={() => this.handleAClick} handleDClick={() => this.handleDClick} /></td>
        </tr>);
    } else if (this.state.filterDenied === true) {
      taaTable = reimbursements.filter(function (el) {
        return el.reimb_status === 'Denied';
      }).map((taa) =>
        <tr>
          <td className="re_id">{taa.re_id}</td>
          <td className="re_amount">{taa.re_amount}</td>
          <td className="re_submitted">{(new Date(taa.re_submitted)).toLocaleDateString()}</td>
          <td className="re_resolved">{(new Date(taa.re_resolved)).toLocaleDateString()}</td>
          <td className="re_description">{taa.re_description}</td>
          <td className="re_author">{taa.reimb_author}</td>
          <td className="re_resolver">{taa.reimb_resolver}</td>
          <td className="re_status">{taa.reimb_status}</td>
          <td className="re_type">{taa.reimb_type}</td>
          <td><ADComponent reimbursements={this.state.reimbursements} re_id={taa.re_id} handleAClick={() => this.handleAClick} handleDClick={() => this.handleDClick} /></td>
        </tr>);
    } else if (this.state.filterPending === true) {
      taaTable = reimbursements.filter(function (el) {
        return el.reimb_status === 'Pending';
      }).map((taa) =>
        <tr>
          <td className="re_id">{taa.re_id}</td>
          <td className="re_amount">{taa.re_amount}</td>
          <td className="re_submitted">{(new Date(taa.re_submitted)).toLocaleDateString()}</td>
          <td className="re_resolved">{(new Date(taa.re_resolved)).toLocaleDateString()}</td>
          <td className="re_description">{taa.re_description}</td>
          <td className="re_author">{taa.reimb_author}</td>
          <td className="re_resolver">{taa.reimb_resolver}</td>
          <td className="re_status">{taa.reimb_status}</td>
          <td className="re_type">{taa.reimb_type}</td>
          <td><ADComponent reimbursements={this.state.reimbursements} re_id={taa.re_id} handleAClick={() => this.handleAClick} handleDClick={() => this.handleDClick} /></td>
        </tr>);
    }
    return (
      <div>
        <h1>All Reimbursements <button className="btn btn-primary btn-default" id="filter-button" onClick={this.onClickAll}>Filter by Status: All</button>
          <button className="btn btn-primary btn-default" id="filter-button" onClick={this.onClickApproved}>Filter by Status: Approved</button>
          <button className="btn btn-primary btn-default" id="filter-button" onClick={this.onClickDenied}>Filter by Status: Denied</button>
          <button className="btn btn-primary btn-default" id="filter-button" onClick={this.onClickPending}>Filter by Status: Pending</button>
        </h1>
        <table className='table-container'>
          <tbody>
            <tr>
              <th className='table-header'>reimb_id</th>
              <th className='table-header'>amount</th>
              <th className='table-header'>date submitted</th>
              <th className='table-header'>date resolved</th>
              <th className='table-header'>description</th>
              <th className='table-header'>author</th>
              <th className='table-header'>resolver</th>
              <th className='table-header'>status</th>
              <th className='table-header'>type</th>
              <th className='table-header'>Approve/Deny?</th>
            </tr>
            {taaTable}
          </tbody>
        </table>
      </div>
    )
  }
}