import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Home", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Home />)));

  it("should render a container called home container", () => {
    expect(wrapper.find(".home-container").length).toEqual(1);
  });

  it("should render a div called wrapper", () => {
    expect(wrapper.find(".wrapper").length).toEqual(1);
  });
});
