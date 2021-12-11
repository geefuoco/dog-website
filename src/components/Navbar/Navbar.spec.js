import React from "react";
import { shallow } from "enzyme";
import Navbar from "./Navbar";
import { MemoryRouter, Link } from "react-router-dom";

describe("Navbar", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Navbar />)));

  it("should render a div with class name navbar", () => {
    expect(wrapper.find(".navbar").length).toEqual(1);
  });

  it("should have links to /, /about-us, /available-puppies, /contact", () => {
    const links = wrapper.find(Link).reduce((arr, link) => {
      arr.push(link.props().to);
      return arr;
    }, []);

    expect(links).toEqual([
      "/",
      "/",
      "/about-us",
      "/available-puppies",
      "/contact",
    ]);
  });
});
