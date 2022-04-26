import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function ProjectList({projects}) {
    const elements = projects.map(item =>
        <img key={uuidv4()}
             src={item.img}
             alt={item.img}
        />);
    return (
        elements
        );
}

export default ProjectList;

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
        })
    ).isRequired,
};