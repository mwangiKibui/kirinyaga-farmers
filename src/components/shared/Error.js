import React from 'react';

const Error = ({message}) => (
    <section className="error-section">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 text-center">

                <img 
                className="error-section-img"
                src="/images/close-icon.png"
                alt=""
                />

                <h5 className="error-section-message">
                    {message}
                </h5>


            </div>
        </div>
    </section>
);

export default Error;