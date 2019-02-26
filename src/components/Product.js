// Code Product Component Here
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div className = 'product'>
        <h2>{this.props.name}</h2>
        <p>Producer: {this.props.producer}</p>
        <p>Watermark?: {this.props.hasWatermark}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
      )
  }
};

Product.defaultProps = {
  hasWatermark: false,
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightCheck
};

function weightCheck(props, propName, componentName) {
  componentName = componentName || 'ANONYMOUS';

  const weight = props[propName];

  if (weight === undefined) {
    return new Error('The `weight` prop is required.');
  }

  if (isNaN(weight)) {
    return new Error('The `weight` prop is not a number.');
  }

  const isValidWeight = weight > 80 && weight < 300;

  if (!isValidWeight) {
    return new Error('The `weight` prop should range between 80 and 300.');
  }
}