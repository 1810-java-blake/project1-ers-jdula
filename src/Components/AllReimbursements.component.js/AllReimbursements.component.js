import React from 'react';

export class AllReimbursementsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reimbursements: []
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
    let count = 1;
    let taaTable = reimbursements.map((taa) => 
    <tr>
        <td>{count++}</td>
        <td>{taa.re_amount}</td>
        <td>{taa.re_submitted}</td>
        <td>{taa.re_resolved}</td>
        <td>{taa.re_description}</td>
        <td>{taa.reimb_author}</td>
        <td>{taa.reimb_resolver}</td>
        <td>{taa.reimb_status}</td>
        <td>{taa.reimb_type}</td>
    </tr>
    );
    return (
      <div>
        <h1>All Reimbursements</h1>
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
            </tr>
              {taaTable}
          </tbody>
        </table>
      </div>
    )
  }
}