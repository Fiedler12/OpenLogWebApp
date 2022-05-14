// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
/*import React from 'react';
import '@testing-library/jest-dom/extend-expect;
import { render, screen } from '@testing-library/react';
import { AddNewLogSetup } from '../components/AddNewLogSetup';

test('renders content', () => {
    const addNewLogSetup = {
        content: 'The component is now tested, usingreact-testing-laybary',
        important: true
    }
    render(<AddNewLogSetup addNewLogSetup={addaddNewLogSetup} />)
    
    const element = screen.getByText('The component is now tested, usingreact-testing-laybary')
    expect(element).toBeDefined()

})*/
export interface logs{
    id:number;  
    userID?:number;
    name?:string;
    measure?:string;

}
