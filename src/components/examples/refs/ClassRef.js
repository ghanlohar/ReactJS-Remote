import React from 'react';
import DomRef from './DomRefs';

class ClassRef extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      <DomRef ref={this.textInput} />
    )
  }
}

export default ClassRef;