import React from 'react';
import { withRouter } from 'react-router-dom';
import './session.css'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      zipcode: '',
      password: '',
      password2: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.resetSessionErrors();
  }

  

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      zipcode: this.state.zipcode,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history)
    // if(this.props.user){
    //   this.props.login(user)
    // }
      // .then()
    //
       
     
    // if(this.props.user.length){
    //   this.props.closeModal()
    // }
  }

  // closeRefresh(){
    
  // }

  renderErrors() {
    if(!this.props.errors) return null;
    return(
      <ul>
        {Object.values(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-container">
        <div className='signup-title'>
          <h1>Sign Up</h1>
          <div className='signup-close' onClick={this.props.closeModal}>X</div>
        </div>
        <form className='signup-form' onSubmit={this.handleSubmit}>
          <div className="signup-inputs">
              <input className="signup-input"
                type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  placeholder="Username"
                />
              <input className="signup-input"
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <input className="signup-input"
                type="number"
                value={this.state.zipcode}
                onChange={this.update('zipcode')}
                placeholder="Zip Code"
              />
              <input className="signup-input"
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
              <input className="signup-input"
                type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
 
            <input className="signup-input-button" type="submit" value="Sign Up" />
          </div>
          <div className='login-errors'>{this.renderErrors()}</div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);