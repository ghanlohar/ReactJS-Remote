import React from 'react';

function FnRef(props) {
  // textInput must be declared here so the ref can refer to it
  let textInput = React.createRef();
  console.log(props.match.params);
  function handleClick() {
    textInput.current.focus();
  }

  return (
    
    <div>
      <div>This is </div>
      
      <input
        type="text"
        ref={textInput} />

      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
    </div>
  );
}



export default FnRef;