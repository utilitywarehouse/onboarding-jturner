import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders stats titles", () => {
    render(<App />);
    const name = screen.getByText("Name:");
    const height = screen.getByText("Height:");
    const weight = screen.getByText("Weight:");

    expect(name).toBeInTheDocument();
    expect(height).toBeInTheDocument();
    expect(weight).toBeInTheDocument();
});
