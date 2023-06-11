import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("App", () => {
  test("renders learn react link", async () => {
    render(<App />);

    // Provide the data object to be returned
    mockedAxios.get.mockResolvedValueOnce({
      data: [
        {
          name: "Adams - Keeling",
          id: "adams_keeling"
        },
        {
          name: "Greenfelder Group",
          id: "greenfelder_group"
        }
      ]
    });

    expect(screen.getByLabelText("Customers:")).toBeInTheDocument();
  });
});
