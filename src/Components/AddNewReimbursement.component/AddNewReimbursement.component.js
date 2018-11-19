import React from 'react';

export class AddNewReimbursementComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      re_id: 0,
      re_amount: '',
      re_submitted: '',
      re_resolved: '',
      re_description: '',
      re_author: 0,
      re_resolver: 0,
      re_status: 1,
      re_type: ''
    }
  }

  amountChange = (e) => {
    this.setState({
      ...this.state,
      re_amount: e.target.value
    })
  }

  descriptionChange = (e) => {
    this.setState({
      ...this.state,
      re_description: e.target.value
    })
  }

  submittedChange = (e) => {
    this.setState({
      ...this.state,
      re_submitted: e.target.value
    })
  }

  typeChange = (e) => {
    this.setState({
      ...this.state,
      re_type: e.target.value
    })
  }

  submit = (e) => {
    e.preventDefault();
    
    let reimbursement = this.state;
    fetch('http://localhost:8088/Project1/user/add', {
      method: 'POST',
      body: JSON.stringify(reimbursement),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    .then(this.props.history.push('/user/home'))
  }
  render() {
    return (
      <form className="form-signin" onSubmit={this.submit}>
        <h1 className="h3 mb-3 font-weight-normal">Would you like to add a reimbursement</h1>

        <label htmlFor="input" >Amount</label>
        <input type="text"
          id="input-amount"
          className="form-control"
          placeholder="ex. 1000"
          required
          value={this.state.re_amount}
          onChange={this.amountChange}
        />

        <label htmlFor="input">Description</label>
        <input type="text"
          id="input-description"
          className="form-control"
          placeholder="ex. Hotel Fees"
          value={this.state.re_description}
          onChange={this.descriptionChange} />

        {/* <label htmlFor="input">Date</label>
        <input type="text"
          id="input-date"
          className="form-control"
          placeholder="yyyy-mm-dd"
          required
          value={this.state.re_submitted}
          onChange={this.submittedChange} /> */}

        {/* <label htmlFor="input" >Type</label><br />
        <input type="radio" name="type" onChange={this.setState({...this.state, re_type: "1"})} />Lodging <br />
        <input type="radio" name="type" onChange={this.setState({...this.state, re_type: "2"})} />Travel <br />
        <input type="radio" name="type" onChange={this.setState({...this.state, re_type: "3"})} />Food <br />
        <input type="radio" name="type" onChange={this.setState({...this.state, re_type: "4"})} />Other <br /> */}

        
        <label htmlFor="input">Reimbursement Type</label>
        <input type="text"
          id="input-type"
          className="form-control"
          placeholder="1:Lodging, 2:Travel, 3:Food, 4:Other"
          required
          value={this.state.re_type}
          onChange={this.typeChange} />

        <button className="btn btn-lg btn-primary btn-block"
          type="submit"
        >
          Submit
        </button>

      </form>
    )
  }
}