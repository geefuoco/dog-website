import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";

describe("Home", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Home />)));

  it("should render a container called home container", () => {
    expect(wrapper.find(".home-container").length).toEqual(1);
  });
});
