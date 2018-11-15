import React from 'react';

export class SignInComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  passwordChange = (e) => {
    this.setState({
      ...this.state,
      password: e.target.value
    })
  }

  usernameChange = (e) => {
    this.setState({
      ...this.state,
      username: e.target.value
    })
  }

  submit = (e) => {
    e.preventDefault();
    let cred = this.state;
    fetch('http://localhost:8088/Project1/user/login', {
      method: 'POST',
      body: JSON.stringify(cred),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then(res => {
        if (res.status === 200) {
          this.props.history.push('/user/add');
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <form className="form-signin" onSubmit={this.submit}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in to Revature</h1>

        <label htmlFor="input-username" className="sr-only">Username</label>
        <input type="text"
          id="input-username"
          className="form-control"
          placeholder="Username"
          required
          value={this.state.username}
          onChange={this.usernameChange}
        />

        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
          value={this.state.password}
          onChange={this.passwordChange} />

        <button className="btn btn-lg btn-primary btn-block"
          type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
      </form>
    )
  }
}