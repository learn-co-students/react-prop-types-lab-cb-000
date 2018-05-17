// Code Product Component Here
import React from "react";
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    const {name, producer, hasWatermark, color, weight} = this.props;
    return(
      <div>
        <h1>{name}</h1>
        <p>{producer}</p>
        <p>{hasWatermark}</p>
        <p>{color}</p>
        <p>{weight}</p>
      </div>
    )
  }
};

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white','salmon']).isRequired,
  weight: function(props, propName, componentName) {
    if(!(typeof props[propName] === 'number')) {
      return new Error("Must be a number");
    }
    if(!(propName in props)){
      return new Error(`missing ${propName}`);
    }

    if(props[propName] > 300 || props[propName] < 80) {
      return new Error('Validation Failed');
    }
  }
};


export default Product
