import React from 'react';
import { render, unmountComponentAtNode} from 'react-dom';
import { act } from 'react-dom/test-utils';
import UserForm from './UserForm';

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

it("Renders user data", async () => {

    
    const fakeUser = {
        id: '1',
        name: 'Ghan Lohar',
        avatar_url: "https://avatars1.githubusercontent.com/u/5575651?v=4",
        company: 'Cognizant'
      };
    const xxx = jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(fakeUser)
        })
    );
    
    act(() => {
        render(<UserForm onSubmit={xxx} />, container);
    });
    const button = container.querySelector('button[type=submit]');
    expect(button.innerHTML).toBe("Add Card");
    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(xxx).toHaveBeenCalledTimes(1);
});