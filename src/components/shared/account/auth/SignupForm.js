import React from 'react';

//third-party
import {Alert} from '@material-ui/lab';
import {Link} from 'react-router-dom';

const SignupForm = (props) => {
    return (
        <section className="signup-form-content">
            <form onSubmit={props.onSubmit}>

                {
                    props.error ? (
                        <div className="form-group">
                            <Alert severity="error">{props.error}</Alert>
                        </div>
                    ) : null
                }

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    className="form-control"
                    name="name"
                    value={props.name}
                    onChange={props.onChange}
                    placeholder="your name or name of farm"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                    className="form-control"
                    name="email"
                    value={props.email}
                    onChange={props.onChange}
                    placeholder="your email address"
                    />
                </div>

                <>
                <label htmlFor="phone">Phone number</label>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">+254</span>
                    </div>
                    <input type="number"
                    className="form-control"
                    name="phone"
                    value={props.phone}
                    onChange={props.onChange}
                    placeholder="7xxxxxxxx"
                    />
                </div>
                </>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                    name="password"
                    className="form-control"
                    value={props.password}
                    onChange={props.onChange}
                    placeholder="your account password"
                    />
                </div>

                <div className="form-group">
                    <input type="submit" className="btn btn-block btn-success" value={props.action} />
                </div>

                <div className="form-group auth-links text-center">
                    <h5>
                        Already have an account? <Link to="/auth/signin">Login here</Link>
                    </h5>
                </div>

            </form>
        </section>
    )
};

export default SignupForm;