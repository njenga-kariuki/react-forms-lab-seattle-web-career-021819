import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (ev)=>{
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  handleSubmit = (ev)=>{
    ev.preventDefault()
    if (this.state.username && this.state.password){
      this.props.handleLogin()
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={(ev)=>this.handleChange(ev)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={(ev)=>this.handleChange(ev)} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
