import React from 'react';

const BlockHeader = ({message}) => {
    return (
        <section className="block-header">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12">
                    <h2 className="block-header-heading">
                        {message}
                    </h2>
                </div>
            </div>
        </section>
    )
};

BlockHeader.defaultProps = {
    message:'Products at sale'
}

export default BlockHeader;