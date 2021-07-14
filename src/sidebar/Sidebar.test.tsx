import React from 'react';
import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';

describe("all elements render properly", () =>{
    beforeEach(() =>{
        render(<Sidebar />);
    })

    test('renders learn react link', () => {
        
        const linkElement = screen.getByTestId("sidebar")
        expect(linkElement).toBeInTheDocument();
      });
      test('renders learn react link', () => {
        const linkElement = screen.getByTestId("sidebarWrapper")
        expect(linkElement).toBeInTheDocument();
      });

})

