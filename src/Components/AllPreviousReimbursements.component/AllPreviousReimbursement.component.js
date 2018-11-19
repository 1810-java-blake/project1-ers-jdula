import React from 'react';

export class AllPreviousReimbursementComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reimbursements: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:8088/Project1/user/id`, {
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
        <td className="re">{taa.re_id}</td>
        <td className="re">{taa.re_amount}</td>
        <td className="re">{(new Date(taa.re_submitted)).toLocaleDateString()}</td>
        <td className="re">{(new Date(taa.re_resolved)).toLocaleDateString()}</td>
        <td className="re">{taa.re_description}</td>
        <td className="re">{taa.reimb_author}</td>
        <td className="re">{taa.reimb_resolver}</td>
        <td className="re">{taa.reimb_status}</td>
        <td className="re">{taa.reimb_type}</td>
      </tr>
    );
    return (
      <div>
        <h1>Your Previous Reimbursements</h1>
        <table className='table-container'>
          <tbody>
            <tr>
              <th className='table-header'>reimb_id</th>
              <th className='table-header'>reimbursement amount</th>
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