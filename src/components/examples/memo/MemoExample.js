import React from 'react';


class MemoExample extends React.Component {
    names = ["Peter", "Bruce", "Clark"];
    state = { name: "Anonymous" };
  
    componentDidMount() {
      this.timer = setInterval(() => {
        const name = this.generateName();
        this.setState({ name });
      }, 1000);
    }

    shouldComponentUpdate(nextProp, nextState, nextContext){
        
        console.log(nextProp);
        console.log(nextState);
        console.log(nextContext);
        if(this.state.name === nextState.name){
            return false;
        }
        return true;
    }

    componentWillUnmount(){
      clearInterval(this.timer);
    }
  
    generateName = () =>
      this.names[Math.floor(Math.random() * this.names.length)];
  
    render() {
    console.log('render: MemoExample');
      return <View name={this.state.name} />;
    }
  }

    const View = React.memo(
      ({ name }) => {
          console.log('render: view'); 
          return `Hi, I'm ${name}`
        }
    );


  export default MemoExample;