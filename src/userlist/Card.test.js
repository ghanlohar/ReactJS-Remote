import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import { act } from "react-dom/test-utils";

import Card from './Card';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});



it('Renders with or without name', () => {
    act(() => {
        render(<Card key='1' id= '1' name= 'Ghan Lohar' avatar_url= "https://avatars1.githubusercontent.com/u/5575651?v=4" company='Cognizant'/>, container)
    });
    expect(container.getElementsByClassName('Name')[0].textContent).toBe("Ghan Lohar");

    act(() => {
        render(<Card key='2' id= '1' name= 'Ben Alpert' avatar_url= "https://avatars1.githubusercontent.com/u/5575651?v=4" company='facebook'/>, container)
    });
    expect(container.getElementsByClassName('Name')[0].textContent).toBe("Ben Alpert");
});
