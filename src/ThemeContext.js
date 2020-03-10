import React, { Component } from 'react';

const MyContext = React.createContext();

class ThemeContext extends Component {
  render() {
    var style = {name: 'textColor', value: 'Red'}
    return (
      <MyContext.Provider value={style}>
        <Toolbar />
      </MyContext.Provider>
    );
  }
}

const Button = (props) => 
{
    return <button style={{color: props.theme.value}}>Click</button>
}

function Toolbar(props) {
  return (
    <div>
      <InterButton /> 
    </div>
  );
}

function InterButton() {
    return (
        <div>
            <ThemedButton />
        </div>
    )
}

const ThemedText = (props) => {
    const context = React.useContext(MyContext);
    return (
        <span style={{color: context.value, width: '200px'}}>This is themed text</span>
    )
    /* uncomment for use context in consumer way 
    return (
        <span style={{color: props.theme.value}}>This is themed text</span>
    )*/
}


class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = MyContext;
  render() {
      
      /* uncomment for use context in consumer way 
      return (
        <MyContext.Consumer>
            {
                (props) => {
                    return (
                    <div>
                    <Button theme={props} />
                    <ThemedText theme={props} />
                    </div>
                    );
                }
            }
            
        </MyContext.Consumer>
      )*/

      return (
            <div>
                <Button theme={this.context} />
                <ThemedText />
            </div>
      )
  }
}

export default ThemeContext;

