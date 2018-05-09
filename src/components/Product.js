import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render(){
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
  weight: function(props, propName){
    if(!props[propName]){
      return new Error(`Value required`);
    }

    if(typeof props[propName] != 'number'){
      return new Error(`Value must be a number`)
    }

    if(props[propName] < 80  || props[propName] > 300){
      return new Error(`Value for ${ weight } outside of valid range.`);
    }
  }
};


export default Product;
