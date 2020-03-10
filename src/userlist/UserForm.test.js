import React from 'react';
import ReactDOM from 'react-dom';
import UserForm from "./UserForm";
import { render, screen, fireEvent } from '@testing-library/react';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it('UserForm renders without crashing', () => {
    const div = document.createElement('div');
    const { getByText } = render(<UserForm />, container);
    expect(getByText('Add Card')).toBeInTheDocument();
});

it('User value should be updated', () => {
    const handlerFn = jest.fn();
    const { getByText } = render(<UserForm onSubmit={handlerFn}/>, container);
    const userInput = screen.getByLabelText(/user/i)
    const user = 'Ghanlohar';
    fireEvent.change(userInput, {target: {value: user}});
    expect(userInput.value).toEqual(user);
    
});

it('Submit handler should be called', () => {
  const fakeAxios = {
    get: jest.fn(() => Promise.resolve({data: {greeting: 'hello there'}})),
  }
  const handlerFn = fakeAxios.get;
  const { getByText } = render(<UserForm onSubmit={handlerFn}/>, container);
  expect(getByText('Add Card')).toBeInTheDocument();
  fireEvent.click(screen.getByText(/Add Card/i))
  expect(handlerFn).toHaveBeenCalled()
  //expect(handlerFn).toHaveBeenCalled();
});


/*it("User Form renders", () => {
    
    const onSubmit = jest.fn();
    const { getByText } = render(<UserForm onSubmit={onSubmit} />);
    fireEvent.click(getByText("Add Card"));
    expect(onSubmit).toHaveBeenCalled();
});*/