import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

describe("Card", () => {
  let wrapper;

  beforeEach(
    () =>
      (wrapper = shallow(
        <Card
          alt="no image"
          image="no image"
          name="tyson"
          text="test text"
          gender="male"
        />
      ))
  );

  it("should render a div with class name card", () => {
    expect(wrapper.find(".card").length).toEqual(1);
  });
});
