import React from 'react'
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";


test('it renders without crashing', () => {
    render(<Card/>)
})
    


test("test to match the snapshot", function(){
    const { asFragment } = render(<Card/>)
    expect(asFragment()).toMatchSnapshot()
})
