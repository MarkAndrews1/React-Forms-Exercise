import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("renders without crashing", function() {
    render(<App />);
  });
  
  it("matches snapshot", function() {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
  

  //UPDATE I TRIED BUT I DON'T HOW TO GET JEST TO WORK WITH VITE.