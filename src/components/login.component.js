import React, { Component } from "react";
import { Link,useNavigate } from "react-router-dom";


import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
       ⵄⴰⵎⵎⴰⵔ ⵍⵅⴰⵡⵉ/This field is required!/هذه الخانة مطلوبه
      </div>
    );
  }
};
 class Login extends Component {
   refresh = () => window.location.reload(true);
 
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });

  }
  handleLogin(e) {
  e.preventDefault()
    //this.props.history.push('/profile');
 

     AuthService.login(this.state.username, this.state.password)
    this.setState({
      message: "",
      loading: true
    });
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {

      AuthService.login(this.state.username, this.state.password)
      .then(() => {
          
       // setTimeout(()=>{ window.open('tana/profile',"_self")},500);
        setTimeout(()=> window.location.replace('http://localhost:8081/tana/profile'),500);

           // <div><Link to='tana/profile'  /> Profile</div> 
         
           //  window.open('/profile',"_self").then(setTimeout(()=>{window.close("/login")},500)).bind(()=>this);
              
              
             
             
        
          }
         
        ,
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.setState({
            loading: false,
            message: resMessage
          });
        }
      ).catch()
      //.next();
    } else {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container">
       
          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="username">ⵉⵙⵎ /الإسم/ First Name </label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">ⵜⴰⵙⴰⵔⵓⵜ كلمة السر password </label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            <input type="hidden"
		name="${_csrf.parameterName}"
		value="${_csrf.token}"/>


            </div>
            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>ⴽⵊⴰⵎ /دخول/Enter </span>
              </button>
            </div>
            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
          
        </div>
      </div>
    );
  }
}
export default Login;
