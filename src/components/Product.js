// Code Product Component Here
// Code Product Component Here

import React from 'react'
import PropTypes from 'prop-types';

export default class Product extends React.Component{
  render(){
    return(
      <div>
        <h1> This is {this.props.name} of product </h1> <br/>
        <small> Producer is {this.props.producer} </small> <br/>
        <small> This has watermarks: {this.props.hasWatermark}, yeah? </small> <br/>
        <small> The color is this: {this.props.color} </small>
        <strong> <h1> FAT?! {this.props.weight} </h1> </strong>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: (PropTypes.oneOf(['white', 'eggshell-white', 'salmon'])).isRequired,
  weight: function(props, propName, componentName) {
    let weight = props[propName];

    if (weight === undefined) {
      return new Error("Sorry you must include a number for weight.");
    }

    if (isNaN(weight)) {
      return new Error("Sorry weight must be a number.");
    }

    return weight >= 80 && weight <= 300 ? null : new Error("Must be within range of 80 to 300");
  }
}
