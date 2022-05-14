import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { MyCard } from "../components/MyCard";


it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MyCard></MyCard>,div)
})