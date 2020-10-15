import React from 'react';

//third-party
import {Alert} from '@material-ui/lab';
import {Link} from 'react-router-dom';

const LoginForm = (props) => {
    return (
        <section className="login-form-content">
            <form onSubmit={props.onSubmit}>
            {
                props.error ? (
                    <Alert severity="error">{props.error}</Alert>
                ) : null
            }
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email"
                className="form-control"
                value={props.email}
                onChange={props.onChange}
                placeholder="Your email address"
                name="email"
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password"
                className="form-control"
                value={props.password}
                onChange={props.onChange}
                placeholder="Your account password"
                name="password"
                />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-block btn-info" >
                    {props.action}
                </button>
            </div>
            <div className="form-group text-center auth-links">
                <h5>
                    Don't have an account? <Link to="/auth/signup">create one</Link>
                </h5>
            </div>
            </form>
        </section>
    )
};

export default LoginForm;