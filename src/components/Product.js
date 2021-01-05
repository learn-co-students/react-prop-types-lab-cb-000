// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <ul>
        <li>Name: {this.props.name}</li>
        <li>Producer: {this.props.producer}</li>
        <li>Watermark? {this.props.hasWatermark.toString()}</li>
        <li>Color: {this.props.color}</li>
        <li>Weight: {this.props.weight}</li>
      </ul>
    )
  }
}
Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightRange
}

function weightRange(props, propName, componentName) {
  componentName = componentName || 'ANONYMOUS';
  if (props[propName]) {
    let value = props[propName]
    if (typeof value === 'number') {
      return (value >= 80 && value <= 300) ? null : new Error(propName + ' in ' + componentName + " is not within 80 to 300")
    }
    else {
      return (new Error(propName + ' in ' + componentName + " is not a number"))
    }
  }
  else {
    return ( new Error(propName + ' in ' + componentName + " is required"))
  }
  // return null
}

export default Product