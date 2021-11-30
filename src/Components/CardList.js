import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

function CardList({ zendesk }) {
    return (
        <div className='cards'>
            {zendesk.map((cardData, index) => <Card key={index} data={cardData} />)}
        </div>
    )
}

export default CardList;

CardList.propTypes = {
    /** The list of tasks */
    zendesk: PropTypes.arrayOf(Card.propTypes.data).isRequired,
    /** Event to change the task to pinned */
};