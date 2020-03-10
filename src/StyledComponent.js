import React from "react";
import styled from 'styled-components';

const BrandedButton = styled.button`
  color: ${props => props.themeColor};
  &:hover {
    color: ${props => props.themeHoverColor};
  }
`



const StyledComponent = (props) => {
    const back = () => {
      console.log(props);
      props.history.push('/game');
    }
    return (
        <BrandedButton themeHoverColor="red" themeColor="green" onClick={back}>
        Click Me!
        </BrandedButton>
    );
}

export default StyledComponent;