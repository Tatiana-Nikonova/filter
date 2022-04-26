import React from 'react';
import PropTypes from 'prop-types';

function Toolbar({filters, selected, onSelectFilter}) {

    const elements = filters.map((filter) => (
        <button
            className={
                selected === filter ? 'selected' : ''
            }
            key={filter}
            onClick={() => onSelectFilter(filter)}
        >
            {filter}
        </button>
    ));

    return (
        <div>
            {elements}
        </div>
    );
}

export default Toolbar;

Toolbar.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    selected: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func.isRequired,
};