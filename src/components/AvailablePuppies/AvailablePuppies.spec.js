import React from "react";
import { shallow } from "enzyme";
import AvailablePuppies from "./AvailablePuppies";

describe("Available Puppies", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<AvailablePuppies />)));

  it("should render a div with class available-container", () => {
    expect(wrapper.find(".available-container").length).toEqual(1);
  });

  it("should have many card components", () => {
    expect(wrapper.find(".card").length).toBeGreaterThan(5);
  });
});
