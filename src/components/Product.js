// Code Product Component Here
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Product extends Component {
  render() {
    return (
      <div>
        Products
      </div>
    )
  }
}

let weight_range = [];
for (let i = 80; i <= 300; i++) {
  weight_range.push(i);
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(weight_range).isRequired
}


export default Product;
