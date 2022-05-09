import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import addNewLogSetup from '../components/AddNewLogSetup';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AddNewLogSetup></AddNewLogSetup>,div)

})