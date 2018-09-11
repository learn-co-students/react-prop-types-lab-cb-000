export default class Product extends React.Component {
  render() {
    const { name, producer, hasWatermark, color, weight } = this.props;
    return (
      <h1>{name}</h1>
      <p>Producer: {producer}</p>
      <p>Has a watermark?: {hasWatermark ? 'yes' : 'no'}</p>
      <p>Color: {color}</p>
      <p>Weight: {weight} lbs.</p>
    )
  }
}

function weightLength(props, propName, componentName) {
  componentName = componentName || 'ANONYMOUS';
  if (props[propName]) {
    let value = props[propName];
    if (typeof value !== 'number') {
      return new Error(propName + ' in ' + componentName + " is not a number.")
    } else if (value < 80 || value > 300) {
      return new Error(propName + ' in ' + componentName + " is not within 80 and 300.");
    }
  }
  return null; // assuming all is ok
};


Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: weightLength
};

Product.defaultProps = {
  hasWatermark: false
};
