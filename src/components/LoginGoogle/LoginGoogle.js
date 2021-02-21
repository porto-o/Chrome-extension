import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const GOOGLE_CLIENT_ID = "464736221313-eti6tgml4foq7f338s629g42nsefi3dr.apps.googleusercontent.com";

export default class LoginGoogle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };
  }
 
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
    const nameRes = response.profileObj.name
    const emailRes = response.profileObj.email
    this.setState({
      name: nameRes,
      email: emailRes
    })
  };

  render() {
    return (
      <div>
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin; SameSite=None; Secure"}
        />
      </div>
    );
  }
}
