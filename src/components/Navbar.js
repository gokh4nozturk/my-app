import React from 'react';
import PropTypes from 'prop-types';

function Navbar(props) {
  const { title } = props;
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: 'Default Title',
};
export default Navbar;
