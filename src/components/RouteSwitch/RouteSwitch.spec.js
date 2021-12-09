import React from "react";
import { shallow } from "enzyme";
import RouteSwitch from "./RouteSwitch";
import { Route } from "react-router-dom";
import Home from "../Home/Home";
import AboutUs from "../AboutUs/AboutUs";
import AvailablePuppies from "../AvailablePuppies/AvailablePuppies";
import Contact from "../Contact/Contact";

describe("RouteSwitch", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<RouteSwitch />)));

  it("should route to the home page properly", () => {
    const path = wrapper.find(Route).reduce((map, route) => {
      const props = route.props();
      map[props.path] = props.element;
      return map;
    }, {});
    expect(path["/"]).toEqual(<Home />);
  });

  it("should route to the about us  page properly", () => {
    const path = wrapper.find(Route).reduce((map, route) => {
      const props = route.props();
      map[props.path] = props.element;
      return map;
    }, {});
    expect(path["/about-us"]).toEqual(<AboutUs />);
  });

  it("should route to the available puppies page properly", () => {
    const path = wrapper.find(Route).reduce((map, route) => {
      const props = route.props();
      map[props.path] = props.element;
      return map;
    }, {});
    expect(path["/available-puppies"]).toEqual(<AvailablePuppies />);
  });

  it("should route to the contact page properly", () => {
    const path = wrapper.find(Route).reduce((map, route) => {
      const props = route.props();
      map[props.path] = props.element;
      return map;
    }, {});
    expect(path["/contact"]).toEqual(<Contact />);
  });
});
