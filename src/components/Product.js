import React from 'react' ;
import PropTypes from 'prop-types' ;

 class Product extends React.Component {

  render(){
    return (
      <div>
        <h3>
          {this.props.name}
        </h3>
        <p>
          producer:
          {this.props.producer}
        </p>
        <p>
          hasWaterMark:
          {this.props.hasWaterMark}
        </p>
        <p>
          color:
          {this.props.color}
        </p>
        <p>
          weight:
          {this.props.weight}
        </p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired ,
  producer: PropTypes.string ,
  hasWatermark: PropTypes.bool ,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired ,
  weight: (props, propName) => {
    var exists = !!props[propName] ;
    if (exists !== true) {
      return new Error('weight does not exist')
    }
    var entry = props[propName] ;
    var numeric = parseInt(entry) === entry ;
    if (numeric !== true) {
      return new Error('weight is not a number')
    }
    var range = false ;
    if (numeric === true ) {
      if (entry > 80 && entry < 300) {
         range = true
      }
    }
    if (range === true ) {
        console.log("this seems fine")
    }
    else {
      return new Error('Incorrect weight prop not in range')
    }
  }
}

export default Product ;
