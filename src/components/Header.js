import React from 'react';
import PropTypes from 'prop-types'
import Button from './../common/Button';


const Header = (props) => {
    return (
      <header className="header">
        <h1>{props?.title}</h1>
        <Button text="Add" color="#272643" onClick={props.onClick} />
      </header>
    );
}

// assigning default props if not sent this would get applied
Header.defaultProps = {
    title:"Loruki"
}

Header.propTypes = {
    title:PropTypes.string.isRequired
}

export default Header
