import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

class Product extends React.Component{
  render(){
    return(
      <div className="Product">
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    );
  }
}

Product.defaultProps={
  hasWatermark : false
};

Product.propTypes = {
  name : PropTypes.string.isRequired,
  producer : PropTypes.string,
  hasWatermark : PropTypes.bool,
  color : PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired
 weight: function(props, propName, componentName){
   if(!(typeof props[propName] === 'number')) {
+      return new Error("Must be a number");
+    }
+    if(!(propName in props)){
+      return new Error(`missing ${propName}`);
+    }
+
+    if(props[propName] > 300 || props[propName] < 80) {
+      return new Error('Validation Failed');
+    }
 }
};

export default Product;
