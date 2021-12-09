import React from "react";
import { shallow } from "enzyme";
import Contact from "./Contact";

describe("Contact", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Contact />)));

  it("should render a div with class name contact-container", () => {
    expect(wrapper.find(".contact-container").length).toEqual(1);
  });
});
