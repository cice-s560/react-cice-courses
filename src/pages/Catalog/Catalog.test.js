import React from "react";
import { shallow } from "enzyme";
import { CatalogComponent } from "./Catalog";
import { CircularProgress } from "@material-ui/core";

describe("Testing Catalog component", () => {
  it("should render correctly", () => {
    expect(shallow(<CatalogComponent />).exists()).toBe(true);
  });

  it("should print as many courses as are given", () => {
    const courses = [{ name: "1" }, { name: "2" }];

    const wrapper = shallow(<CatalogComponent courses={courses} />);

    expect(wrapper.find("li").length).toEqual(courses.length);
  });

  it("should render spinner when is loading", () => {
    const wrapper = shallow(<CatalogComponent isLoading={true} />);

    expect(wrapper.contains(<CircularProgress />)).toBe(true);
  });
});

describe("Testing submit", () => {
  it("should prevent default behaviour", () => {
    const wrapper = shallow(<CatalogComponent createCourse={() => {}} />);
    const fakeEvent = {
      preventDefault: jest.fn()
    };

    wrapper.instance().handleSubmit(fakeEvent);

    expect(fakeEvent.preventDefault).toHaveBeenCalled();
  });

  it("should create a new course", () => {
    const fakeFunc = jest.fn();
    const wrapper = shallow(<CatalogComponent createCourse={fakeFunc} />);
    const fakeEvent = {
      preventDefault: () => {}
    };

    wrapper.instance().handleSubmit(fakeEvent);

    expect(fakeFunc).toHaveBeenCalled();
  });
});
