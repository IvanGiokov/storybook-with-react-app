import React from 'react';
import PropTypes from 'prop-types';

function Card({ data }) {

    return (
        <div class="column">
            <div className="card">
                <h3>{data.name}</h3>
                <p>{data.subTitle}</p>
                <p>{data.current}</p>
                {/* {data.values.map((value, index) => <div key={index}>{value}</div>)} */}
            </div>
        </div>
    )

}

export default Card;

Card.propTypes = {
    /** Composition of the card */
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        subTitle: PropTypes.string.isRequired,
        current: PropTypes.number.isRequired,
        values: PropTypes.arrayOf(PropTypes.number).isRequired,
    }),
};