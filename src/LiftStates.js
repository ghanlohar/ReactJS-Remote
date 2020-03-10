import React, { useState } from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

 const tryConvert = (temperature, convert) => {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function BoilingVerdict(props) {
    console.log("BoilingVerdict");
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

const TemperatureInput = (props) => {
console.log("TemperatureInput " +props.scale );
    const handleChange = (e) => {
        props.onTemperatureChange(e.target.value);
    }

    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[props.scale]}:</legend>
            <input value={props.temperature}
                onChange={handleChange} />
        </fieldset>
    )
}

const LiftStates = (props) => {
    const [ temperature, setTemperature ] = useState(0);
    const [ scale, setScale ] = useState('c');
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    console.log("LiftStates");
    const handleCelsiusChange = (temp) => {
        setTemperature(temp);
        setScale('c')
    }

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale('f')
    }

    return (
        <fieldset>
           
                <TemperatureInput 
                    temperature={celsius}
                    scale="c" 
                    onTemperatureChange={handleCelsiusChange} />
                <TemperatureInput 
                    temperature={fahrenheit}
                    scale="f" 
                    onTemperatureChange={handleFahrenheitChange} />
            <BoilingVerdict
                celsius={parseFloat(celsius)} />
        </fieldset>
    );

} 


export default LiftStates;