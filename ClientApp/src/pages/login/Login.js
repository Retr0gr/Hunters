import React, { Component } from 'react';
import "./login.scss";

export class Login extends Component {
  static displayName = Login.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello Hunter.</h1>
                    <p>Mollit esse irure magna reprehenderit voluptate ut. Do magna proident Lorem tempor incididunt
                        Lorem nulla cupidatat esse aute. Laborum reprehenderit incididunt fugiat ipsum exercitation
                        aute eiusmod sit adipisicing sint labore.
                    </p>
                    <span>Don't have an account?</span>
                        <button>Register</button>

                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
  }
}
