import React from 'react';
import { ADComponent } from '../Approve-Deny/Approve-Deny.component';
import '../../Include/bootstrap';

export class AllReimbursementsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reimbursements: [],
      filterBool: false
    }
  }

  componentDidMount() {
    fetch('http://localhost:8088/Project1/user', {
      credentials: 'include'
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          reimbursements: data
        });
        console.log(this.state.reimbursements);
      })
  }

  render() {
    const reimbursements = this.state.reimbursements;
    let taaTable = reimbursements.map((taa) => 
    <tr>
        <td className = "re_id">{taa.re_id}</td>
        <td className = "re_amount">{taa.re_amount}</td>
        <td className = "re_submitted">{taa.re_submitted}</td>
        <td className = "re_resolved">{taa.re_resolved}</td>
        <td className = "re_description">{taa.re_description}</td>
        <td className = "re_author">{taa.reimb_author}</td>
        <td className = "re_resolver">{taa.reimb_resolver}</td>
        <td className = "re_status">{taa.reimb_status}</td>
        <td className = "re_type">{taa.reimb_type}</td>
        <td><ADComponent/></td>
    </tr>
    );
    return (
      <div>
        <h1>All Reimbursements <button className="btn btn-primary btn-default" id="filter-button" onClick>Filter by Status</button></h1>       
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