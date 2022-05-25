import React from 'react'
import PropTypes from 'prop-types'
import './HobbyList.css'
const HobbyList = props => {
    const { hobbyList, activeId, onHobbyClick } = props;

    const handleHobbyClick = (hobby) => {
        if (onHobbyClick) {
            onHobbyClick(hobby)
        }
    }

    return (
        <div>
            {
                hobbyList.map(hobby => (<p key={hobby.id} className={hobby.id === activeId ? 'active' : ''} onClick={e => handleHobbyClick(hobby)}>{hobby.title}</p>))
            }
        </div>
    )
}

HobbyList.propTypes = {
    hobbyList: PropTypes.array,
    activeId: PropTypes.string,
    onHobbyClick: PropTypes.func
}

HobbyList.defaultProps = {
    hobbyList: [],
    activeId: null,
    onHobbyClick: null
}

export default HobbyList