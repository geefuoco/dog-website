import React from "react";
import { shallow } from "enzyme";
import AboutUs from "./AboutUs";

describe("About Us", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<AboutUs />)));

  it("should render a div with class about-container", () => {
    expect(wrapper.find(".about-container").length).toEqual(1);
  });
});
