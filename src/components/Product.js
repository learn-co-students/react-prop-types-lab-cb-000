// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component
{
  static defaultProps = {
    hasWatermark: false
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
    weight: function(props,propName,componentName){
        let value = props[propName];
        if ( typeof props[propName] !== "number" && (props[propName] < 80 || props[propName] > 300)) {
          return new Error(
          'Invalid prop `' + propName + '` supplied to' +
          ' `' + componentName + '`. Validation failed.'
          );
        }
      }
  };

  render(){
    return(<div>
      <p>{this.props.name}</p>
      <p>{this.props.producer}</p>
      <p>{this.props.hasWatermark}</p>
      <p>{this.props.color}</p>
      <p>{this.props.weight}</p>
      </div>)
  }
}
