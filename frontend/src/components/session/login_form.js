import React from 'react';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';

import logo from './logo2.PNG'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  componentDidMount(){
    this.props.resetSessionErrors();
  }

  demoUser(e) {
    e.preventDefault();
    this.props.demoUser({email: 'demo@user.com', password: '123456'})
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.login(user)
    .then(action => {
      return this.props.history.push(`/pick_pet`)
  })  
  }

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
      <div className='login-page'>
        <div className='login-content'>
          <div className='logo'><img src={logo}/> </div>
          <div className='login-container'>
            <div className='login-inner'>
              <form onSubmit={this.handleSubmit}>
                <div >
                  <input className='login-text-input'
                    type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    placeholder="Email"
                  />
                  <input className='login-text-input'
                    type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    placeholder="Password"
                  />
                  <input className='login-button' type="submit" value="Log In" />
                  <button className="demo-user-button" onClick={this.demoUser}>Demo User</button>
                </div>
              </form>
              <div className='login-signup-button-container'>
                <button onClick={() => this.props.openModal('signup')}>Create New Account</button>
              </div>
              <div className='login-errors'>{this.renderErrors()}</div>
            </div>
            
          </div>
        </div>
        
        
      </div>
    );
  }
}

export default withRouter(LoginForm);