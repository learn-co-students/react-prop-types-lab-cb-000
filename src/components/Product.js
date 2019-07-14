// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

let weight_range = [];
for (let i = 80; i <= 300; i++) {
  weight_range.push(i);
}

export default class Product extends React.Component {

  render() {
    return (
      <div className="product">
        <h2>Name: {this.props.name}</h2>
        <h3>Producer: {this.props.producer}</h3>
        <h3>Watermark: {this.props.hasWatermark ? "Yes" : "No"}</h3>
        <h3>Color: {this.props.color}</h3>
        <h3>Weight: {this.props.weight}</h3>
      </div>
    );
  }
};

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(weight_range).isRequired
};
