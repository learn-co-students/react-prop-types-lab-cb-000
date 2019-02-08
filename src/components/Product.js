import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <h2>Name: {this.props.name}</h2>
        <ul>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightPropShape
}

function weightPropShape(props, propName, componentName) {
  const value = props[propName];
  if (value === undefined) {
    return new Error(propName + 'cannot be undefined.  Validation failed.')
  } else if (isNaN(value)) {
    return new Error(propName + 'is not a number.  Validation failed.');
  } else if (value < 80 || value > 300) {
    return new Error(propName + 'should be between 80 and 300.  Validation failed.')
  }
}
